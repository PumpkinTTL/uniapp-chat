<template>
	<view class="chat-navbar">
		<!-- 左侧返回按钮 -->
		<view class="navbar-left" @click="handleBack">
			<uni-icons type="left" :size="24" color="#1E293B" />
		</view>

		<!-- 中间标题区域 -->
		<view class="navbar-center" @click="handleUserInfo">
			<text class="navbar-title">{{ title }}</text>
			<text v-if="subtitle" class="navbar-subtitle">{{ subtitle }}</text>
		</view>

		<!-- 右侧操作按钮 -->
		<view class="navbar-right">
			<view class="action-btn" @click="handleMore">
				<uni-icons type="more-filled" :size="24" color="#1E293B" />
			</view>
		</view>
	</view>
</template>

<script setup>
const props = defineProps({
	title: { type: String, default: '' },
	subtitle: { type: String, default: '' }
})

const emit = defineEmits(['back', 'userInfo', 'more'])

const handleBack = () => {
	uni.navigateBack()
	emit('back')
}

const handleUserInfo = () => emit('userInfo')
const handleMore = () => emit('more')
</script>

<style lang="scss" scoped>
.chat-navbar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 88rpx;
	padding: 0 24rpx;
	background-color: #FFFFFF;
	border-bottom: 1rpx solid #F1F5F9;
	flex-shrink: 0;
}

.navbar-left,
.navbar-right {
	display: flex;
	align-items: center;
	gap: 16rpx;
	flex-shrink: 0;
}

.navbar-center {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 24rpx;
}

.navbar-title {
	font-size: 32rpx;
	font-weight: 600;
	color: #1E293B;
}

.navbar-subtitle {
	font-size: 22rpx;
	color: #94A3B8;
	margin-top: 4rpx;
}

.action-btn {
	width: 64rpx;
	height: 64rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 12rpx;
	transition: background-color 0.2s;

	&:active {
		background-color: #F1F5F9;
	}
}
</style>
