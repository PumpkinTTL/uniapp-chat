<template>
	<view class="hero-section">
		<!-- 品牌标识 -->
		<view class="brand-header">
			<view class="brand-icon">
				<uni-icons type="list" size="22" color="#1677FF"></uni-icons>
			</view>
			<text class="brand-name">表格工具</text>
		</view>

		<!-- 主标题区 -->
		<view class="hero-main">
			<text class="hero-title">{{ title }}</text>
			<text class="hero-desc">{{ subtitle }}</text>
		</view>

		<!-- 核心功能标签 -->
		<view class="feature-tags">
			<view class="tag-item">
				<text class="tag-text">智能解析</text>
			</view>
			<view class="tag-item">
				<text class="tag-text">格式转换</text>
			</view>
			<view class="tag-item">
				<text class="tag-text">数据可视化</text>
			</view>
		</view>

		<!-- 操作区 -->
		<view class="action-section">
			<button class="action-btn primary" @click="$emit('primaryAction')">
				{{ primaryText }}
			</button>
			<button class="action-btn secondary" @click="$emit('secondaryAction')">
				{{ secondaryText }}
			</button>
		</view>
	</view>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		default: '表格处理工具'
	},
	subtitle: {
		type: String,
		default: '高效、简洁的表格数据管理平台'
	},
	primaryText: {
		type: String,
		default: '开始使用'
	},
	secondaryText: {
		type: String,
		default: '了解更多'
	}
})

defineEmits(['primaryAction', 'secondaryAction'])
</script>

<style lang="scss" scoped>
.hero-section {
	background-color: $uni-bg-color;
	padding: 40rpx 24rpx 32rpx;
}

// 品牌标识区
.brand-header {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 24rpx;
	gap: 12rpx;
}

.brand-icon {
	width: 44rpx;
	height: 44rpx;
	background-color: rgba(22, 119, 255, 0.08);
	border-radius: 8rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.brand-name {
	font-size: 28rpx;
	font-weight: 500;
	color: $uni-text-color;
}

// 主标题区
.hero-main {
	text-align: center;
	margin-bottom: 32rpx;
}

.hero-title {
	font-size: 32rpx;
	font-weight: 500;
	color: $uni-text-color;
	display: block;
	margin-bottom: 12rpx;
	line-height: 1.4;
}

.hero-desc {
	font-size: 24rpx;
	color: $uni-text-color-grey;
	display: block;
	line-height: 1.5;
}

// 功能标签
.feature-tags {
	display: flex;
	justify-content: center;
	gap: 12rpx;
	margin-bottom: 32rpx;
	flex-wrap: wrap;
}

.tag-item {
	background-color: #f5f5f5;
	padding: 8rpx 16rpx;
	border-radius: 16rpx;
	border: 1rpx solid #e8e8e8;
}

.tag-text {
	font-size: 22rpx;
	color: #666;
	font-weight: 400;
}

// 操作区
.action-section {
	display: flex;
	flex-direction: column;
	gap: 16rpx;
	align-items: center;
}

.action-btn {
	width: 100%;
	max-width: 480rpx;
	height: 80rpx;
	border-radius: 8rpx;
	font-size: 28rpx;
	font-weight: 400;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	transition: all 0.3s;
}

.primary {
	background-color: $uni-color-primary;
	color: white;
	box-shadow: 0 2rpx 8rpx rgba(22, 119, 255, 0.15);
}

.secondary {
	background-color: #fff;
	color: $uni-text-color;
	border: 1rpx solid #d9d9d9;
	box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.06);
}
</style>