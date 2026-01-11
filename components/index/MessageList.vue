<template>
	<scroll-view
		class="message-list"
		scroll-y
		:refresher-enabled="true"
		:refresher-triggered="refreshing"
		@refresherrefresh="handleRefresh"
		@scrolltolower="handleLoadMore"
		:lower-threshold="100"
	>
		<!-- 置顶消息区域 -->
		<view v-if="pinnedMessages.length > 0" class="pinned-section">
			<view class="section-header">
				<view class="section-title">
					<uni-icons type="up" size="14" color="#94A3B8" />
					<text class="title-text">置顶聊天</text>
				</view>
			</view>
			<MessageItem
				v-for="msg in pinnedMessages"
				:key="msg.id"
				v-bind="msg"
				:is-pinned="true"
				@click="handleMessageClick"
			/>
		</view>

		<!-- 普通消息列表 -->
		<view class="normal-section">
			<view v-if="showEmptyState" class="empty-state">
				<uni-icons type="chatbubble" size="80" color="#CBD5E1" />
				<text class="empty-text">暂无消息</text>
				<text class="empty-hint">开始与朋友聊天吧</text>
			</view>
			<MessageItem
				v-for="msg in normalMessages"
				:key="msg.id"
				v-bind="msg"
				v-memo="[msg.id, msg.unreadCount, msg.timestamp]"
				@click="handleMessageClick"
			/>
		</view>

		<!-- 加载更多 -->
		<view v-if="showLoadMore" class="load-more">
			<uni-icons v-if="loading" type="spinner-cycle" size="20" color="#94A3B8" class="loading-icon" />
			<text class="load-more-text">{{ loading ? '加载中...' : loadMoreText }}</text>
		</view>

		<!-- 搜索结果为空 -->
		<view v-if="isSearching && filteredMessages.length === 0" class="search-empty">
			<uni-icons type="search" size="80" color="#CBD5E1" />
			<text class="empty-text">未找到相关消息</text>
		</view>
	</scroll-view>
</template>

<script setup>
import { computed } from 'vue'
import MessageItem from './MessageItem.vue'

const props = defineProps({
	// 消息列表数据
	messages: {
		type: Array,
		default: () => []
	},
	// 搜索关键词
	searchKeyword: {
		type: String,
		default: ''
	},
	// 是否正在刷新
	refreshing: {
		type: Boolean,
		default: false
	},
	// 是否正在加载更多
	loading: {
		type: Boolean,
		default: false
	},
	// 是否还有更多数据
	hasMore: {
		type: Boolean,
		default: true
	}
})

const emit = defineEmits(['refresh', 'loadMore', 'click'])

// 是否正在搜索
const isSearching = computed(() => props.searchKeyword.trim().length > 0)

// 过滤后的消息
const filteredMessages = computed(() => {
	if (!isSearching.value) {
		return props.messages
	}
	const keyword = props.searchKeyword.toLowerCase()
	return props.messages.filter(msg =>
		msg.name.toLowerCase().includes(keyword) ||
		msg.lastMessage.toLowerCase().includes(keyword)
	)
})

// 置顶消息
const pinnedMessages = computed(() => {
	return filteredMessages.value.filter(msg => msg.isPinned)
})

// 普通消息
const normalMessages = computed(() => {
	return filteredMessages.value.filter(msg => !msg.isPinned)
})

// 是否显示空状态
const showEmptyState = computed(() => {
	return !isSearching.value && props.messages.length === 0
})

// 是否显示加载更多
const showLoadMore = computed(() => {
	return !isSearching.value && props.messages.length > 0
})

// 加载更多文本
const loadMoreText = computed(() => {
	return props.hasMore ? '上拉加载更多' : '没有更多了'
})

// 下拉刷新
const handleRefresh = () => {
	emit('refresh')
}

// 加载更多
const handleLoadMore = () => {
	if (!props.loading && props.hasMore) {
		emit('loadMore')
	}
}

// 消息点击
const handleMessageClick = (id) => {
	const message = props.messages.find(msg => msg.id === id)
	if (message) {
		emit('click', message)
	}
}
</script>

<style lang="scss" scoped>
.message-list {
	flex: 1;
	background-color: #F8FAFC;
	height: 100%;
}

.pinned-section {
	background-color: #FFFFFF;
	margin-bottom: 16rpx;
}

.section-header {
	padding: 16rpx 32rpx 8rpx;
}

.section-title {
	display: flex;
	align-items: center;
	gap: 8rpx;
}

.title-text {
	font-size: 24rpx;
	color: #94A3B8;
}

.normal-section {
	background-color: #FFFFFF;
}

.empty-state,
.search-empty {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 120rpx 64rpx;
	background-color: #FFFFFF;
}

.empty-text {
	font-size: 28rpx;
	color: #64748B;
	margin-top: 24rpx;
}

.empty-hint {
	font-size: 24rpx;
	color: #94A3B8;
	margin-top: 8rpx;
}

.load-more {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 32rpx;
	gap: 12rpx;
}

.loading-icon {
	animation: spin 1s linear infinite;
}

.load-more-text {
	font-size: 24rpx;
	color: #94A3B8;
}

@keyframes spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>
