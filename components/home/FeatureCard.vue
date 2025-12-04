<template>
	<view class="feature-card">
		<view class="feature-icon">
			<uni-icons type="gear" size="24" color="#1677FF"></uni-icons>
		</view>
		<text class="feature-title">{{ title }}</text>
		<text class="feature-description">{{ description }}</text>
	</view>
</template>

<script setup>
defineProps({
	title: String,
	description: String
})
</script>

<style lang="scss" scoped>
.feature-card {
	background-color: #fafafa;
	border: 1rpx solid #f0f0f0;
	border-radius: 8rpx;
	padding: 32rpx 24rpx;
	text-align: center;
	box-sizing: border-box;
	min-height: 200rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	transition: all 0.3s;
}

.feature-icon {
	margin-bottom: 16rpx;
}

.feature-title {
	font-size: 26rpx;
	font-weight: 500;
	color: $uni-text-color;
	display: block;
	margin-bottom: 8rpx;
}

.feature-description {
	font-size: 22rpx;
	color: #8c8c8c;
	line-height: 1.5;
}
</style>