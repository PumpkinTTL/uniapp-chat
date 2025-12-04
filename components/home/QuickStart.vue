<template><view class="quick-start-section"><view class="section-header"><view class="section-badge">快速上手</view><view class="section-title">快速开始</view><view class="section-subtitle">简单三步，快速搭建高质量应用</view></view><view class="steps-container"><view class="steps-timeline"><view class="step-item" v-for="(step, index) in steps" :key="index"><view class="step-indicator"><view class="step-number">{{ index + 1 }}</view><view class="step-connector" v-if="index < steps.length - 1"></view></view><view class="step-card"><view class="step-title">{{ step.title }}</view><view class="step-description">{{ step.description }}</view><view class="step-command" v-if="step.command"><view class="command-tag">{{ step.command }}</view></view></view></view></view></view><view class="action-container"><button class="primary-action" @click="handleStart"><uni-icons type="flag" size="20" color="#1890ff" /><text class="action-text">立即开始</text></button><button class="secondary-action" @click="handleViewDocs"><uni-icons type="book" size="20" color="white" /><text class="action-text">查看文档</text></button></view></view></template>

<script setup>
const steps = [
	{
		title: '克隆项目',
		description: '从 GitHub 仓库克隆项目模板到本地开发环境',
		command: 'git clone https://github.com/your-repo/uniapp-template.git'
	},
	{
		title: '安装依赖',
		description: '进入项目目录，安装所需的 npm 依赖包',
		command: 'npm install'
	},
	{
		title: '启动开发',
		description: '运行开发服务器，开始你的应用开发之旅',
		command: 'npm run dev'
	}
]

const emit = defineEmits(['start', 'docs'])

const handleStart = () => {
	emit('start')
}

const handleViewDocs = () => {
	emit('docs')
}
</script>

<style lang="scss" scoped>
.quick-start-section {
	padding: 40rpx 32rpx;
	color: #1890ff;
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		top: -150rpx;
		right: -150rpx;
		width: 300rpx;
		height: 300rpx;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 50%;
	}

	&::after {
		content: '';
		position: absolute;
		bottom: -100rpx;
		left: -100rpx;
		width: 200rpx;
		height: 200rpx;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 50%;
	}
}

.section-header {
	text-align: center;
	margin-bottom: 40rpx;
	position: relative;
	z-index: 10;
}

.section-badge {
	display: inline-block;
	padding: 4rpx 12rpx;
	border: 1px solid #1890ff;
	border-radius: 16rpx;
	font-size: 22rpx;
	font-weight: 500;
	margin-bottom: 16rpx;
	color: #1890ff;
}

.section-title {
	font-size: 40rpx;
	font-weight: 700;
	margin-bottom: 12rpx;
}

.section-subtitle {
	font-size: 26rpx;
	opacity: 0.9;
	line-height: 1.5;
}

.steps-container {
	margin-bottom: 36rpx;
	position: relative;
	z-index: 10;
}

.steps-timeline {
	display: flex;
	flex-direction: column;
	gap: 32rpx;
}

.step-item {
	display: flex;
	align-items: flex-start;
}

.step-indicator {
	position: relative;
	margin-right: 32rpx;
}

.step-number {
	width: 64rpx;
	height: 64rpx;
	border: 2rpx solid #1890ff;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 32rpx;
	font-weight: 600;
	color: #1890ff;
}

.step-connector {
	position: absolute;
	top: 64rpx;
	left: 50%;
	transform: translateX(-50%);
	width: 2rpx;
	height: 48rpx;
	background: #1890ff;
}

.step-card {
	flex: 1;
	border-radius: 12rpx;
	padding: 24rpx;
}

.step-title {
	font-size: 32rpx;
	font-weight: 600;
	margin-bottom: 12rpx;
}

.step-description {
	font-size: 26rpx;
	opacity: 0.9;
	line-height: 1.5;
	margin-bottom: 20rpx;
}

.step-command {
	margin-top: 16rpx;
}

.command-tag {
	display: inline-block;
	padding: 8rpx 16rpx;
	background: rgba(24, 144, 255, 0.1);
	border-radius: 8rpx;
	font-size: 22rpx;
	font-family: 'Monaco', 'Menlo', monospace;
	color: #1890ff;
}

.action-container {
	display: flex;
	gap: 20rpx;
}

.primary-action, .secondary-action {
	flex: 1;
	height: 80rpx;
	border: 1px solid #1890ff;
	border-radius: 40rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8rpx;
	font-size: 28rpx;
	font-weight: 600;
	transition: all 0.3s;
}

.primary-action {
	background: white;
	color: #1890ff;

	&:active {
		transform: translateY(-1rpx);
	}
}

.secondary-action {
	background: white;
	color: #1890ff;
}


.action-text {
	font-size: 30rpx;
}
</style>