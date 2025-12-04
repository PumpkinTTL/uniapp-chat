<template><view class="tech-stack-section"><view class="section-header"><view class="section-badge">技术架构</view><view class="section-title">技术栈</view><view class="section-subtitle">基于前沿技术，打造现代化开发体验</view></view><view class="tech-container"><view class="tech-grid"><view class="tech-item" v-for="(tech, index) in techList" :key="tech.name" :style="{ 'animation-delay': `${index * 100}ms` }" @tap="handleTechClick(tech)"><view class="tech-icon-wrapper"><view class="tech-icon"><uni-icons :type="tech.iconType" :size="28" color="#1890ff" /></view><view class="tech-badge" v-if="tech.badge">{{ tech.badge }}</view></view><view class="tech-content"><view class="tech-name">{{ tech.name }}</view><view class="tech-desc">{{ tech.description }}</view></view><view class="tech-arrow"><uni-icons type="arrowright" size="16" color="#8c8c8c" /></view></view></view></view><view class="tech-features"><view class="feature-item" v-for="feature in features" :key="feature.title"><uni-icons :type="feature.iconType" size="18" color="#595959" /><view class="feature-text">{{ feature.title }}</view></view></view></view></template>

<script setup>
const emit = defineEmits(['tech-click'])

const techList = [
	{
		name: 'Vue 3',
		iconType: 'loop',
		description: '采用 Composition API，提供更好的逻辑复用',
		badge: '3.x'
	},
	{
		name: 'Uniapp',
		iconType: 'flag',
		description: '一套代码，多端发布，覆盖主流平台',
		badge: '跨平台'
	},
	{
		name: 'TypeScript',
		iconType: 'book',
		description: '类型安全，提高代码质量和开发效率',
		badge: 'TS'
	},
	{
		name: 'Vite',
		iconType: 'fire',
		description: '极速的开发服务器，热更新毫秒级响应',
		badge: '快速'
	},
	{
		name: 'SCSS',
		iconType: 'color',
		description: '强大的 CSS 预处理器，样式开发更高效',
		badge: '样式'
	},
	{
		name: 'ESLint',
		iconType: 'checkmarkempty',
		description: '代码规范检查，保证代码质量',
		badge: '规范'
	}
]

const features = [
	{ title: '现代化开发', iconType: 'star' },
	{ title: '高性能', iconType: 'flag' },
	{ title: '类型安全', iconType: 'locked' },
	{ title: '工程化', iconType: 'gear' }
]

const handleTechClick = (tech) => {
	emit('tech-click', tech)
}
</script>

<style lang="scss" scoped>
.tech-stack-section {
	padding: 40rpx 32rpx;
	position: relative;
	overflow: hidden;
}

.section-header {
	text-align: center;
	margin-bottom: 36rpx;
}

.section-badge {
	display: inline-block;
	padding: 8rpx 20rpx;
	background: #e6f7ff;
	color: #1890ff;
	border-radius: 16rpx;
	font-size: 22rpx;
	font-weight: 500;
	margin-bottom: 16rpx;
}

.section-title {
	font-size: 40rpx;
	font-weight: 700;
	color: #262626;
	margin-bottom: 12rpx;
	position: relative;
	display: inline-block;

	&::after {
		content: '';
		position: absolute;
		bottom: -8rpx;
		left: 50%;
		transform: translateX(-50%);
		width: 48rpx;
		height: 4rpx;
		background: linear-gradient(90deg, #1890ff, #36cfc9);
		border-radius: 2rpx;
	}
}

.section-subtitle {
	font-size: 26rpx;
	color: #8c8c8c;
	margin-top: 16rpx;
	line-height: 1.5;
}

.tech-container {
	margin-bottom: 32rpx;
}

.tech-grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 16rpx;
}

.tech-item {
	border-radius: 12rpx;
	padding: 16rpx;
	display: flex;
	align-items: center;
	gap: 12rpx;
	transition: all 0.3s;
	animation: fadeInUp 0.6s ease-out forwards;
	opacity: 0;

	&:active {
		transform: translateY(-2rpx);
	}
}

@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(20rpx);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.tech-icon-wrapper {
	position: relative;
	flex-shrink: 0;
}

.tech-icon {
	width: 40rpx;
	height: 40rpx;
	border-radius: 12rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.tech-badge {
	position: absolute;
	top: -6rpx;
	right: -6rpx;
	background: #1890ff;
	color: white;
	font-size: 18rpx;
	padding: 2rpx 6rpx;
	border-radius: 6rpx;
	font-weight: 500;
}

.tech-content {
	flex: 1;
}

.tech-name {
	font-size: 28rpx;
	font-weight: 600;
	color: #262626;
	margin-bottom: 4rpx;
}

.tech-desc {
	font-size: 24rpx;
	color: #8c8c8c;
	line-height: 1.4;
}

.tech-arrow {
	flex-shrink: 0;
	width: 32rpx;
	height: 32rpx;
	background: rgba(0, 0, 0, 0.05);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;

	.tech-item:active & {
		background: #1890ff;
	}
}

.tech-features {
	display: flex;
	justify-content: center;
	gap: 40rpx;
	flex-wrap: wrap;
}

.feature-item {
	display: flex;
	align-items: center;
	gap: 4rpx;
	padding: 8rpx 16rpx;
	border-radius: 30rpx;
	font-size: 24rpx;
	color: #595959;
	transition: all 0.3s;

	&:active {
		color: #1890ff;
	}
}


.feature-text {
	font-weight: 500;
}

@media screen and (max-width: 480px) {
	.tech-grid {
		grid-template-columns: 1fr;
	}

	.tech-features {
		gap: 20rpx;
	}
}
</style>