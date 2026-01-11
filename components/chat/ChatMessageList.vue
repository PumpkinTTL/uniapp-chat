<template>
	<scroll-view
		class="msg-scroll-area"
		scroll-y
		:scroll-into-view="scrollTarget"
		:scroll-with-animation="true"
		:upper-threshold="50"
		@scrolltoupper="handleLoadMore"
	>
		<!-- 加载更多 -->
		<view v-if="loadingMore" class="load-more-row">
			<uni-icons type="spinner-cycle" :size="16" color="#94A3B8" class="loading-spin" />
			<text class="load-more-text">加载中...</text>
		</view>

		<!-- 时间戳 -->
		<view v-for="(time, idx) in timeList" :key="'time-' + idx" class="time-row">
			<view class="time-badge">
				<text class="time-label">{{ time }}</text>
			</view>
		</view>

		<!-- 消息列表 -->
		<MessageBubble
			v-for="msg in displayMessages"
			:key="msg.id"
			:id="msg.id"
			:type="msg.type"
			:content="msg.content"
			:avatar="msg.avatar"
			:sender-name="msg.senderName"
			:is-self="msg.isSelf"
			:show-name="msg.showName"
			:duration="msg.duration"
			:status="msg.status"
			:show-status="msg.showStatus"
			@image-preview="handleImagePreview"
			@voice-play="handleVoicePlay"
			@resend="handleResend"
		/>

		<!-- 空状态 -->
		<view v-if="displayMessages.length === 0" class="empty-placeholder">
			<uni-icons type="chat" :size="64" color="#DBEAFE" />
			<text class="empty-main">暂无消息</text>
			<text class="empty-sub">开始聊天吧</text>
		</view>
	</scroll-view>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import MessageBubble from './MessageBubble.vue'

const props = defineProps({
	messages: { type: Array, default: () => [] },
	loadingMore: { type: Boolean, default: false },
	hasMore: { type: Boolean, default: true }
})

const emit = defineEmits(['loadMore', 'imagePreview', 'voicePlay', 'resend'])

const scrollTarget = ref('')

const displayMessages = computed(() => props.messages || [])

const timeList = computed(() => {
	const result = []
	let lastTime = 0

	displayMessages.value.forEach((msg) => {
		if (msg.timestamp && msg.timestamp - lastTime > 5 * 60 * 1000) {
			result.push(formatTimestamp(msg.timestamp))
			lastTime = msg.timestamp
		}
	})

	return result
})

const formatTimestamp = (timestamp) => {
	if (!timestamp) return ''

	const date = new Date(timestamp)
	const now = new Date()

	if (date.toDateString() === now.toDateString()) {
		const h = date.getHours().toString().padStart(2, '0')
		const m = date.getMinutes().toString().padStart(2, '0')
		return `${h}:${m}`
	}

	const yesterday = new Date(now)
	yesterday.setDate(yesterday.getDate() - 1)
	if (date.toDateString() === yesterday.toDateString()) {
		const h = date.getHours().toString().padStart(2, '0')
		const m = date.getMinutes().toString().padStart(2, '0')
		return `昨天 ${h}:${m}`
	}

	return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
}

const scrollToBottom = () => {
	if (displayMessages.value.length === 0) return
	nextTick(() => {
		const lastMsg = displayMessages.value[displayMessages.value.length - 1]
		scrollTarget.value = ''
		nextTick(() => {
			scrollTarget.value = 'msg-' + lastMsg.id
		})
	})
}

watch(() => props.messages.length, () => {
	scrollToBottom()
})

const handleLoadMore = () => {
	if (!props.loadingMore && props.hasMore) {
		emit('loadMore')
	}
}

const handleImagePreview = (url) => emit('imagePreview', url)
const handleVoicePlay = (id) => emit('voicePlay', id)
const handleResend = (id) => emit('resend', id)

defineExpose({ scrollToBottom })
</script>

<style lang="scss" scoped>
.msg-scroll-area {
	flex: 1;
	width: 100%;
	height: 100%;
	background-color: #EDEFF2;
}

.load-more-row {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 24rpx 0;
	gap: 12rpx;
}

.loading-spin {
	animation: spin 1s linear infinite;
}

.load-more-text {
	font-size: 24rpx;
	color: #94A3B8;
}

.time-row {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 24rpx 0 16rpx;
}

.time-badge {
	background-color: rgba(0, 0, 0, 0.04);
	padding: 8rpx 20rpx;
	border-radius: 24rpx;
}

.time-label {
	font-size: 24rpx;
	color: #94A3B8;
}

.empty-placeholder {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 160rpx 0;
}

.empty-main {
	font-size: 28rpx;
	color: #64748B;
	margin-top: 24rpx;
	margin-bottom: 8rpx;
}

.empty-sub {
	font-size: 24rpx;
	color: #94A3B8;
}

@keyframes spin {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
</style>
