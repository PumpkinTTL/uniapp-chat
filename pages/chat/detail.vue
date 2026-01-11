<template>
	<view class="chat-detail-page">
		<!-- 状态栏占位 -->
		<StatusBar bg-color="#FFFFFF" />

		<!-- 顶部导航栏 - 固定 -->
		<ChatNavbar
			:title="chatTitle"
			:subtitle="chatSubtitle"
			@back="handleBack"
			@userInfo="handleUserInfo"
			@more="handleMore"
		/>

		<!-- 消息列表区域 - 可滚动 -->
		<view class="message-list-area">
			<ChatMessageList
				ref="messageListRef"
				:messages="messageList"
				:loading-more="isLoadingMore"
				:has-more="hasMoreMessages"
				@load-more="handleLoadMore"
				@image-preview="handleImagePreview"
				@voice-play="handleVoicePlay"
				@resend="handleResend"
			/>
		</view>

		<!-- 输入区域 - 固定在底部 -->
		<ChatInput
			ref="chatInputRef"
			placeholder="发消息..."
			:maxlength="500"
			@send="handleSend"
			@focus="handleInputFocus"
			@blur="handleInputBlur"
			@emoji="handleEmoji"
			@more="handleMorePanel"
			@voice-start="handleVoiceStart"
			@voice-end="handleVoiceEnd"
			@voice-cancel="handleVoiceCancel"
		/>
	</view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import StatusBar from '@/components/common/StatusBar.vue'
import ChatNavbar from '@/components/chat/ChatNavbar.vue'
import ChatMessageList from '@/components/chat/ChatMessageList.vue'
import ChatInput from '@/components/chat/ChatInput.vue'

const messageListRef = ref(null)
const chatInputRef = ref(null)

const chatTitle = ref('')
const chatSubtitle = ref('')

const messageList = ref([])
const isLoadingMore = ref(false)
const hasMoreMessages = ref(true)

onMounted(() => {
	const pages = getCurrentPages()
	const currentPage = pages[pages.length - 1]
	const options = currentPage.options || {}

	chatTitle.value = options.name || '聊天'
	chatSubtitle.value = options.online === 'true' ? '在线' : ''

	loadMessageList()
})

const loadMessageList = (isLoadMore = false) => {
	if (isLoadMore) {
		isLoadingMore.value = true
	}

	const mockData = [
		{
			id: 'msg_001',
			type: 'system',
			content: '你们已成为好友，开始聊天吧',
			timestamp: Date.now() - 3600000,
			isSelf: false
		},
		{
			id: 'msg_002',
			type: 'text',
			content: '你好，在吗？',
			avatar: 'https://picsum.photos/100/100?random=1',
			senderName: '张三',
			timestamp: Date.now() - 1800000,
			isSelf: false,
			showName: true,
			status: 'sent',
			showStatus: false
		},
		{
			id: 'msg_003',
			type: 'text',
			content: '在的，有什么事吗？',
			avatar: 'https://picsum.photos/100/100?random=me',
			senderName: '我',
			timestamp: Date.now() - 1200000,
			isSelf: true,
			status: 'sent',
			showStatus: true
		},
		{
			id: 'msg_004',
			type: 'text',
			content: '想问你一下那个项目的进度怎么样了',
			avatar: 'https://picsum.photos/100/100?random=1',
			senderName: '张三',
			timestamp: Date.now() - 600000,
			isSelf: false,
			showName: true,
			status: 'sent',
			showStatus: false
		},
		{
			id: 'msg_005',
			type: 'text',
			content: '项目已经完成了80%，预计本周可以交付',
			avatar: 'https://picsum.photos/100/100?random=me',
			senderName: '我',
			timestamp: Date.now() - 300000,
			isSelf: true,
			status: 'sent',
			showStatus: true
		},
		{
			id: 'msg_006',
			type: 'image',
			content: 'https://picsum.photos/400/300?random=100',
			avatar: 'https://picsum.photos/100/100?random=1',
			senderName: '张三',
			timestamp: Date.now() - 60000,
			isSelf: false,
			showName: true,
			status: 'sent',
			showStatus: false
		}
	]

	if (isLoadMore) {
		messageList.value = [...mockData.reverse(), ...messageList.value]
		isLoadingMore.value = false
		hasMoreMessages.value = false
	} else {
		messageList.value = mockData
		setTimeout(() => {
			messageListRef.value?.scrollToBottom()
		}, 100)
	}
}

const handleBack = () => {
	uni.navigateBack()
}

const handleUserInfo = () => {
	uni.showToast({ title: '查看用户信息', icon: 'none' })
}

const handleMore = () => {
	uni.showActionSheet({
		itemList: ['查找聊天记录', '清空聊天记录', '投诉'],
		success: (res) => {
			console.log('选中：', res.tapIndex)
		}
	})
}

const handleLoadMore = () => {
	loadMessageList(true)
}

const handleSend = (data) => {
	const newMsg = {
		id: 'msg_' + Date.now(),
		type: data.type,
		content: data.content,
		avatar: 'https://picsum.photos/100/100?random=me',
		senderName: '我',
		timestamp: Date.now(),
		isSelf: true,
		status: 'sending',
		showStatus: true
	}
	messageList.value.push(newMsg)

	setTimeout(() => {
		newMsg.status = 'sent'
	}, 1000)
}

const handleInputFocus = () => {
	setTimeout(() => {
		messageListRef.value?.scrollToBottom()
	}, 300)
}

const handleInputBlur = () => {
	console.log('输入框失焦')
}

const handleEmoji = () => {
	uni.showToast({ title: '表情功能', icon: 'none' })
}

const handleMorePanel = (type) => {
	switch (type) {
		case 'image':
			uni.chooseImage({
				count: 9,
				success: (res) => {
					res.tempFilePaths.forEach((path) => {
						handleSend({
							type: 'image',
							content: path
						})
					})
				}
			})
			break
		case 'camera':
			uni.chooseImage({
				count: 1,
				camera: 'back',
				success: (res) => {
					handleSend({
						type: 'image',
						content: res.tempFilePaths[0]
					})
				}
			})
			break
		case 'video':
			uni.chooseVideo({
				success: (res) => {
					handleSend({
						type: 'video',
						content: res.tempFilePath
					})
				}
			})
			break
		case 'location':
			uni.chooseLocation({
				success: (res) => {
					handleSend({
						type: 'location',
						content: `${res.name} - ${res.address}`
					})
				}
			})
			break
		case 'file':
			uni.showToast({ title: '文件功能开发中', icon: 'none' })
			break
		case 'card':
			uni.showToast({ title: '名片功能开发中', icon: 'none' })
			break
	}
}

const handleVoiceStart = () => {
	console.log('开始录音')
}

const handleVoiceEnd = () => {
	console.log('结束录音')
	uni.showToast({ title: '发送语音', icon: 'none' })
}

const handleVoiceCancel = () => {
	console.log('取消录音')
	uni.showToast({ title: '已取消', icon: 'none' })
}

const handleImagePreview = (url) => {
	uni.previewImage({
		urls: [url],
		current: url
	})
}

const handleVoicePlay = (id) => {
	console.log('播放语音：', id)
	uni.showToast({ title: '播放语音', icon: 'none' })
}

const handleResend = (id) => {
	const msg = messageList.value.find(m => m.id === id)
	if (msg) {
		msg.status = 'sending'
		setTimeout(() => {
			msg.status = 'sent'
		}, 1000)
	}
}
</script>

<style lang="scss" scoped>
.chat-detail-page {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	background-color: #EDEFF2;
	overflow: hidden;
}

.message-list-area {
	flex: 1;
	width: 100%;
	overflow: hidden;
	position: relative;
}
</style>
