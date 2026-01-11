<template>
	<view class="chat-page">
		<!-- 自定义导航栏 -->
		<view class="custom-navbar">
			<ChatHeader
				:title="headerTitle"
				:total-unread="totalUnread"
				@menu="handleMenuClick"
				@add="handleAddClick"
			/>
			<!-- 搜索栏 -->
			<SearchBar
				v-model="searchKeyword"
				placeholder="搜索联系人或聊天记录"
				:show-cancel="true"
				@search="handleSearch"
			/>
		</view>

		<!-- 消息列表 -->
		<MessageList
			:messages="messageList"
			:search-keyword="searchKeyword"
			:refreshing="refreshing"
			:loading="loading"
			:has-more="hasMore"
			@refresh="handleRefresh"
			@loadMore="handleLoadMore"
			@click="handleMessageClick"
		/>
	</view>
</template>

<script setup>
import { ref, computed } from 'vue'
import ChatHeader from '@/components/index/ChatHeader.vue'
import SearchBar from '@/components/index/SearchBar.vue'
import MessageList from '@/components/index/MessageList.vue'

// 搜索关键词
const searchKeyword = ref('')

// 刷新状态
const refreshing = ref(false)
const loading = ref(false)
const hasMore = ref(true)

// 模拟消息列表数据
const messageList = ref([
	{
		id: 1,
		avatar: 'https://picsum.photos/100/100?random=1',
		name: '张三',
		lastMessage: '好的，明天见！',
		timestamp: Date.now() - 300000,
		unreadCount: 2,
		isPinned: true,
		isMuted: false,
		isOnline: true
	},
	{
		id: 2,
		avatar: 'https://picsum.photos/100/100?random=2',
		name: '产品交流群',
		lastMessage: '[图片]',
		timestamp: Date.now() - 3600000,
		unreadCount: 99,
		isPinned: true,
		isMuted: false,
		isOnline: false
	},
	{
		id: 3,
		avatar: 'https://picsum.photos/100/100?random=3',
		name: '李四',
		lastMessage: '项目进度怎么样了？',
		timestamp: Date.now() - 7200000,
		unreadCount: 0,
		isPinned: false,
		isMuted: true,
		isOnline: false
	},
	{
		id: 4,
		avatar: 'https://picsum.photos/100/100?random=4',
		name: '王五',
		lastMessage: '收到',
		timestamp: Date.now() - 86400000,
		unreadCount: 0,
		isPinned: false,
		isMuted: false,
		isOnline: true
	},
	{
		id: 5,
		avatar: 'https://picsum.photos/100/100?random=5',
		name: '技术讨论组',
		lastMessage: '这个bug已经修复了',
		timestamp: Date.now() - 172800000,
		unreadCount: 5,
		isPinned: false,
		isMuted: false,
		isOnline: false
	}
])

// 计算总未读数
const totalUnread = computed(() => {
	return messageList.value.reduce((sum, msg) => sum + msg.unreadCount, 0)
})

// 计算标题
const headerTitle = computed(() => {
	return searchKeyword.value ? '搜索结果' : '消息'
})

// 菜单点击
const handleMenuClick = () => {
	uni.showToast({
		title: '菜单',
		icon: 'none'
	})
}

// 添加点击
const handleAddClick = () => {
	uni.showToast({
		title: '添加好友/发起群聊',
		icon: 'none'
	})
}

// 搜索
const handleSearch = (keyword) => {
	console.log('搜索:', keyword)
}

// 下拉刷新
const handleRefresh = () => {
	refreshing.value = true
	// 模拟网络请求
	setTimeout(() => {
		refreshing.value = false
		uni.showToast({
			title: '刷新成功',
			icon: 'success',
			duration: 1000
		})
	}, 1500)
}

// 加载更多
const handleLoadMore = () => {
	if (loading.value || !hasMore.value) return

	loading.value = true
	// 模拟网络请求
	setTimeout(() => {
		loading.value = false
		// 模拟没有更多数据
		hasMore.value = false
	}, 1500)
}

// 消息点击
const handleMessageClick = (message) => {
	uni.showToast({
		title: `点击: ${message.name}`,
		icon: 'none'
	})
	// TODO: 跳转到聊天详情页
	// uni.navigateTo({
	// 	url: `/pages/chat/detail?id=${message.id}`
	// })
}
</script>

<style lang="scss" scoped>
.chat-page {
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-color: #F8FAFC;
}

.custom-navbar {
	background-color: #FFFFFF;
	border-bottom: 1rpx solid #F1F5F9;
	flex-shrink: 0;
}
</style>
