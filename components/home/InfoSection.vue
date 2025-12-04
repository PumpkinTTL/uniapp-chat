<template>
	<view class="info-section">
		<view class="info-content">
			<text class="info-title">{{ title }}</text>
			<text class="info-subtitle">{{ subtitle }}</text>
			<text class="info-description">{{ description }}</text>
			<button class="info-btn" @click="$emit('action')">{{ buttonText }}</button>
		</view>
	</view>
</template>

<script setup>
defineProps({
	title: String,
	subtitle: String,
	description: String,
	buttonText: {
		type: String,
		default: '了解更多'
	}
})

defineEmits(['action'])
</script>

<style lang="scss" scoped>
.info-section {
	padding: $uni-spacing-row-lg $uni-spacing-row-base;
	background-color: $uni-bg-color;
}

.info-content {
	max-width: 600rpx;
	margin: 0 auto;
	text-align: center;
}

.info-title {
	font-size: 40rpx;
	font-weight: bold;
	color: $uni-text-color;
	display: block;
	margin-bottom: $uni-spacing-row-sm;
}

.info-subtitle {
	font-size: $uni-font-size-sm;
	color: $uni-color-primary;
	display: block;
	margin-bottom: $uni-spacing-row-sm;
}

.info-description {
	font-size: $uni-font-size-sm;
	color: $uni-text-color-grey;
	line-height: 1.5;
	display: block;
	margin-bottom: $uni-spacing-row-base;
}

.info-btn {
	background-color: $uni-color-primary;
	color: white;
	border: none;
	padding: $uni-spacing-row-sm 40rpx;
	border-radius: $uni-border-radius-sm;
	font-size: $uni-font-size-sm;
}
</style>