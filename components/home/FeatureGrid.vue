<template>
	<view class="feature-grid">
		<text class="section-title">{{ title }}</text>
		<view class="grid-container">
			<FeatureCard
				v-for="(feature, index) in features"
				:key="index"
				:title="feature.title"
				:description="feature.description"
			/>
		</view>
	</view>
</template>

<script setup>
import FeatureCard from './FeatureCard.vue'

defineProps({
	title: {
		type: String,
		default: '核心功能'
	},
	features: {
		type: Array,
		required: true
	}
})
</script>

<style lang="scss" scoped>
.feature-grid {
	padding: 32rpx 24rpx;
	background-color: $uni-bg-color;
}

.section-title {
	font-size: 28rpx;
	font-weight: 500;
	color: $uni-text-color;
	text-align: center;
	display: block;
	margin-bottom: 24rpx;
}

.grid-container {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 16rpx;
	padding: 0 8rpx;
}
</style>