<template><view class="feature-section"><view class="section-header"><view class="section-title">{{ title }}</view><view class="section-subtitle">构建高质量应用的最佳选择</view></view><view class="grid-container"><FeatureCard v-for="(feature, index) in features" :key="index" :title="feature.title" :description="feature.description" :iconType="feature.iconType" @click="handleFeatureClick(feature)" /></view></view></template>

<script setup>
import FeatureCard from './FeatureCard.vue'

const props = defineProps({
	title: {
		type: String,
		default: '核心功能'
	},
	features: {
		type: Array,
		required: true
	}
})

const emit = defineEmits(['feature-click'])

const handleFeatureClick = (feature) => {
	emit('feature-click', feature)
}
</script>

<style lang="scss" scoped>
.feature-section {
	padding: 20rpx 16rpx;
}

.section-header {
	text-align: center;
	margin-bottom: 16rpx;
}

.section-title {
	font-size: 36rpx;
	font-weight: 700;
	color: #262626;
	margin-bottom: 8rpx;
	position: relative;
	display: inline-block;

	&::after {
		content: '';
		position: absolute;
		bottom: -6rpx;
		left: 50%;
		transform: translateX(-50%);
		width: 40rpx;
		height: 3rpx;
		background: linear-gradient(90deg, #1890ff, #36cfc9);
		border-radius: 2rpx;
	}
}

.section-subtitle {
	font-size: 24rpx;
	color: #8c8c8c;
	margin-top: 12rpx;
	line-height: 1.3;
}

.grid-container {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 12rpx;
	padding: 0;
}

@media screen and (max-width: 480px) {
	.grid-container {
		grid-template-columns: repeat(2, 1fr);
		gap: 12rpx;
	}
}

@media screen and (max-width: 320px) {
	.grid-container {
		grid-template-columns: 1fr;
		gap: 12rpx;
	}
}
</style>