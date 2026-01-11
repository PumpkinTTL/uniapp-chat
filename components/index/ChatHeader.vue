<template>
	<view class="chat-header">
		<!-- 左侧菜单按钮 -->
		<view class="header-left" @click="handleMenuClick">
			<uni-icons type="bars" size="24" color="#1E293B" />
		</view>

		<!-- 中间标题区域 -->
		<view class="header-center">
			<text class="header-title">{{ title }}</text>
			<view v-if="totalUnread > 0" class="unread-badge">
				<text class="unread-text">{{ totalUnread > 99 ? '99+' : totalUnread }}</text>
			</view>
		</view>

		<!-- 右侧操作按钮 -->
		<view class="header-right">
			<view class="action-btn" @click="handleAddClick">
				<uni-icons type="plus" size="24" color="#1E293B" />
			</view>
		</view>
	</view>
</template>

<script setup>
const props = defineProps({
	// 标题
	title: {
		type: String,
		default: '消息'
	},
	// 总未读数
	totalUnread: {
		type: Number,
		default: 0
	}
})

const emit = defineEmits(['menu', 'add'])

const handleMenuClick = () => {
	emit('menu')
}

const handleAddClick = () => {
	emit('add')
}
</script>

<style lang="scss" scoped>
.chat-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 88rpx;
	padding: 0 32rpx;
	background-color: #FFFFFF;
	border-bottom: 1rpx solid #F1F5F9;
}

.header-left,
.header-right {
	display: flex;
	align-items: center;
	gap: 24rpx;
	flex-shrink: 0;
}

.header-center {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 12rpx;
}

.header-title {
	font-size: 36rpx;
	font-weight: 600;
	color: #1E293B;
}

.unread-badge {
	min-width: 36rpx;
	height: 36rpx;
	background-color: #F43F5E;
	border-radius: 18rpx;
	padding: 0 10rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.unread-text {
	font-size: 22rpx;
	font-weight: 500;
	color: #FFFFFF;
	line-height: 1;
}

.action-btn {
	width: 64rpx;
	height: 64rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border-radius: 50%;
	transition: background-color 0.2s ease;

	&:active {
		background-color: #F1F5F9;
	}
}
</style>
