<template>
	<view class="chat-header">
		<!-- 左侧菜单按钮 -->
		<view class="header-left" @click="handleMenuClick">
			<uni-icons type="bars" size="24" color="#1E293B" />
		</view>

		<!-- 标题区域（左对齐） -->
		<view class="header-title-wrapper">
			<text class="header-title">{{ title }}</text>
			<text v-if="totalUnread > 0" class="unread-count">({{ totalUnread > 99 ? '99+' : totalUnread }})</text>
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

.header-title-wrapper {
	flex: 1;
	display: flex;
	align-items: center;
	margin-left: 24rpx;
}

.header-title {
	font-size: 36rpx;
	font-weight: 600;
	color: #1E293B;
}

.unread-count {
	font-size: 28rpx;
	font-weight: 400;
	color: #94A3B8;
	margin-left: 8rpx;
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
