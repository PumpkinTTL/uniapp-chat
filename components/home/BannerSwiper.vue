<template><view class="banner-container"><swiper class="banner-swiper" :indicator-dots="true" :autoplay="true" :interval="4000" :duration="300" indicator-color="rgba(255, 255, 255, 0.4)" indicator-active-color="#ffffff"><swiper-item v-for="(item, index) in bannerList" :key="index"><view class="banner-slide" :class="`banner-${index + 1}`"><view class="banner-content"><view class="banner-tag">{{ item.subtitle }}</view><view class="banner-title">{{ item.title }}</view><view class="banner-description">{{ item.description }}</view></view><view class="banner-graphic"><view class="graphic-circle"></view><view class="graphic-circle delay-1"></view><view class="graphic-circle delay-2"></view></view></view></swiper-item></swiper></view></template>

<script setup>
defineProps({
	bannerList: {
		type: Array,
		default: () => []
	}
})
</script>

<style lang="scss" scoped>
.banner-container {
	width: 100%;
	height: 260rpx;
	margin-bottom: 8rpx;
}

.banner-swiper {
	width: 100%;
	height: 100%;
	border-radius: 0 0 16rpx 16rpx;
	overflow: hidden;
}

.banner-slide {
	width: 100%;
	height: 100%;
	padding: 24rpx 20rpx;
	color: #333;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	}

.banner-content {
	flex: 1;
	max-width: 70%;
	z-index: 10;
}

.banner-tag {
	display: inline-block;
	padding: 3rpx 10rpx;
	border: 1px solid #1890ff;
	border-radius: 10rpx;
	font-size: 20rpx;
	margin-bottom: 12rpx;
	color: #1890ff;
}

.banner-title {
	font-size: 32rpx;
	font-weight: 600;
	line-height: 1.3;
	margin-bottom: 6rpx;
}

.banner-description {
	font-size: 22rpx;
	line-height: 1.3;
}

.banner-graphic {
	width: 100rpx;
	height: 100rpx;
	position: relative;
}

.graphic-circle {
	position: absolute;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.1);
	animation: float 6s ease-in-out infinite;

	&:nth-child(1) {
		width: 100rpx;
		height: 100rpx;
		right: 0;
		top: 0;
	}

	&:nth-child(2) {
		width: 60rpx;
		height: 60rpx;
		right: 40rpx;
		top: 40rpx;
	}

	&:nth-child(3) {
		width: 30rpx;
		height: 30rpx;
		right: 20rpx;
		top: 80rpx;
	}

	&.delay-1 {
		animation-delay: 2s;
	}

	&.delay-2 {
		animation-delay: 4s;
	}
}

@keyframes float {
	0%, 100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-20rpx);
	}
}
</style>