<template><view class="feature-card" @tap="handleClick"><view class="feature-icon"><uni-icons :type="iconType" :size="28" color="#1890ff" /></view><view class="feature-title">{{ title }}</view><view class="feature-description">{{ description }}</view></view></template>

<script setup>
defineProps({
	title: String,
	description: String,
	iconType: {
		type: String,
		default: 'phone'
	}
})

const emit = defineEmits(['click'])

const handleClick = () => {
	emit('click')
}
</script>

<style lang="scss" scoped>
.feature-card {
	border-radius: 10rpx;
	padding: 20rpx 16rpx;
	box-sizing: border-box;
	height: 100%;
	transition: all 0.3s;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	&:active {
		transform: translateY(-2rpx);
	}
}

.feature-icon {
	width: 40rpx;
	height: 40rpx;
	border-radius: 12rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10rpx;
}

.feature-title {
	font-size: 26rpx;
	font-weight: 600;
	color: #262626;
	margin-bottom: 4rpx;
}

.feature-description {
	font-size: 22rpx;
	color: #8c8c8c;
	line-height: 1.3;
	flex: 1;
}
</style>