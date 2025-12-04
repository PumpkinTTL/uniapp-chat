<template>
	<view class="me-page">
		<!-- 用户信息卡片 -->
		<view class="user-card" @click="handleLogin">
			<!-- 头像区域 -->
			<view class="avatar-center">
				<view class="avatar" @click.stop="handleLogin">
					<uni-icons type="person-filled" size="36" color="#1677FF"></uni-icons>
				</view>
				<view class="user-info">
					<text class="username">点击登录</text>
					<text class="user-desc">登录后同步数据，体验更多功能</text>
				</view>
			</view>

			<!-- 统计数据 -->
			<view class="stats-section">
				<view class="stat-item">
					<view class="stat-icon">
						<uni-icons type="paperplane" size="20" color="#1677FF"></uni-icons>
					</view>
					<text class="stat-number">128</text>
					<text class="stat-label">文件处理</text>
				</view>
				<view class="stat-divider"></view>
				<view class="stat-item">
					<view class="stat-icon">
						<uni-icons type="heart-filled" size="20" color="#ff4d4f"></uni-icons>
					</view>
					<text class="stat-number">3</text>
					<text class="stat-label">收藏夹</text>
				</view>
				<view class="stat-divider"></view>
				<view class="stat-item">
					<view class="stat-icon">
						<uni-icons type="calendar" size="20" color="#52c41a"></uni-icons>
					</view>
					<text class="stat-number">7</text>
					<text class="stat-label">使用天数</text>
				</view>
			</view>
		</view>

		<!-- 功能列表 -->
		<view class="function-list">
			<!-- 我的服务 -->
			<view class="list-section">
				<view class="section-title">我的服务</view>
				<view class="menu-item" @click="handleHistory">
					<view class="menu-left">
						<view class="menu-icon">
							<uni-icons type="list" size="20" color="#1677FF"></uni-icons>
						</view>
						<text class="menu-text">历史记录</text>
					</view>
					<uni-icons type="right" size="16" color="#bfbfbf"></uni-icons>
				</view>
				<view class="menu-item" @click="handleFavorites">
					<view class="menu-left">
						<view class="menu-icon">
							<uni-icons type="heart" size="20" color="#ff4d4f"></uni-icons>
						</view>
						<text class="menu-text">我的收藏</text>
					</view>
					<uni-icons type="right" size="16" color="#bfbfbf"></uni-icons>
				</view>
				<view class="menu-item" @click="handleCloud">
					<view class="menu-left">
						<view class="menu-icon">
							<uni-icons type="cloud-upload" size="20" color="#52c41a"></uni-icons>
						</view>
						<text class="menu-text">云端备份</text>
					</view>
					<uni-icons type="right" size="16" color="#bfbfbf"></uni-icons>
				</view>
			</view>

			<!-- 常用功能 -->
			<view class="list-section">
				<view class="section-title">常用功能</view>
				<view class="menu-item" @click="handleSettings">
					<view class="menu-left">
						<view class="menu-icon">
							<uni-icons type="gear" size="20" color="#722ed1"></uni-icons>
						</view>
						<text class="menu-text">设置</text>
					</view>
					<uni-icons type="right" size="16" color="#bfbfbf"></uni-icons>
				</view>
				<view class="menu-item" @click="handleTheme">
					<view class="menu-left">
						<view class="menu-icon">
							<uni-icons type="color" size="20" color="#fa8c16"></uni-icons>
						</view>
						<text class="menu-text">主题设置</text>
					</view>
					<uni-icons type="right" size="16" color="#bfbfbf"></uni-icons>
				</view>
				<view class="menu-item" @click="handleFeedback">
					<view class="menu-left">
						<view class="menu-icon">
							<uni-icons type="email" size="20" color="#13c2c2"></uni-icons>
						</view>
						<text class="menu-text">意见反馈</text>
					</view>
					<uni-icons type="right" size="16" color="#bfbfbf"></uni-icons>
				</view>
			</view>

			<!-- 其他 -->
			<view class="list-section">
				<view class="section-title">其他</view>
				<view class="menu-item" @click="handleHelp">
					<view class="menu-left">
						<view class="menu-icon">
							<uni-icons type="help" size="20" color="#1890ff"></uni-icons>
						</view>
						<text class="menu-text">帮助中心</text>
					</view>
					<uni-icons type="right" size="16" color="#bfbfbf"></uni-icons>
				</view>
				<view class="menu-item" @click="handleAbout">
					<view class="menu-left">
						<view class="menu-icon">
							<uni-icons type="info" size="20" color="#faad14"></uni-icons>
						</view>
						<text class="menu-text">关于我们</text>
					</view>
					<uni-icons type="right" size="16" color="#bfbfbf"></uni-icons>
				</view>
			</view>
		</view>

		<!-- 版本信息 -->
		<view class="version-info">
			<text class="version-text">表格工具 v1.0.0</text>
		</view>
	</view>
</template>

<script setup>
// 事件处理
const handleLogin = () => {
	uni.showToast({
		title: '跳转登录页面',
		icon: 'none'
	})
}

const handleHistory = () => {
	uni.showToast({
		title: '历史记录',
		icon: 'none'
	})
}

const handleFavorites = () => {
	uni.showToast({
		title: '我的收藏',
		icon: 'none'
	})
}

const handleCloud = () => {
	uni.showToast({
		title: '云端备份',
		icon: 'none'
	})
}

const handleSettings = () => {
	uni.showToast({
		title: '设置',
		icon: 'none'
	})
}

const handleTheme = () => {
	uni.showToast({
		title: '主题设置',
		icon: 'none'
	})
}

const handleFeedback = () => {
	uni.showToast({
		title: '意见反馈',
		icon: 'none'
	})
}

const handleHelp = () => {
	uni.showToast({
		title: '帮助中心',
		icon: 'none'
	})
}

const handleAbout = () => {
	uni.showToast({
		title: '关于我们',
		icon: 'none'
	})
}
</script>

<style lang="scss" scoped>
.me-page {
	background-color: #f5f5f5;
	min-height: 100vh;
}

// 用户信息卡片
.user-card {
	background-color: #fff;
	padding: 16rpx;
	margin: 16rpx;
	border-radius: 12rpx;
	box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.04);
}



// 居中的头像区域
.avatar-center {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20rpx 0 8rpx;
}

.avatar {
	width: 88rpx;
	height: 88rpx;
	background: linear-gradient(135deg, rgba(22, 119, 255, 0.1), rgba(22, 119, 255, 0.05));
	border-radius: 44rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 12rpx;
	position: relative;
	transition: all 0.3s ease;
	cursor: pointer;

	&:active {
		transform: scale(0.95);
	}

	&::after {
		content: '';
		position: absolute;
		top: -6rpx;
		left: -6rpx;
		right: -6rpx;
		bottom: -6rpx;
		background: linear-gradient(45deg, rgba(22, 119, 255, 0.08), transparent);
		border-radius: 46rpx;
		z-index: -1;
		animation: rotate 4s linear infinite;
	}

	&::before {
		content: '';
		position: absolute;
		top: -3rpx;
		left: -3rpx;
		right: -3rpx;
		bottom: -3rpx;
		border: 1rpx solid rgba(22, 119, 255, 0.15);
		border-radius: 46rpx;
	}
}

@keyframes rotate {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

.user-info {
	text-align: center;
	padding: 0 20rpx;
}

.username {
	font-size: 30rpx;
	font-weight: 600;
	color: #262626;
	display: block;
	margin-bottom: 6rpx;
	letter-spacing: 0.5rpx;
}

.user-desc {
	font-size: 22rpx;
	color: #999999;
	line-height: 1.4;
}

// 统计数据部分
.stats-section {
	display: flex;
	justify-content: space-around;
	padding: 16rpx 0;
	position: relative;
	margin: 12rpx 16rpx;
	background: linear-gradient(135deg, rgba(248, 250, 252, 0.4), rgba(241, 245, 249, 0.25));
	border-radius: 10rpx;
	backdrop-filter: blur(8rpx);
	box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0.02);

	&::before {
		content: '';
		position: absolute;
		top: -8rpx;
		left: 50%;
		transform: translateX(-50%);
		width: 30rpx;
		height: 2rpx;
		background: linear-gradient(to right, transparent, rgba(22, 119, 255, 0.25), transparent);
		border-radius: 1rpx;
	}
}

.stat-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	position: relative;
	z-index: 2;
}

.stat-icon {
	width: 36rpx;
	height: 36rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 6rpx;
	transition: transform 0.2s ease;

	&:active {
		transform: scale(0.95);
	}
}

.stat-number {
	font-size: 26rpx;
	font-weight: 600;
	color: #262626;
	line-height: 1;
	margin-bottom: 3rpx;
}

.stat-label {
	font-size: 20rpx;
	color: #999999;
	white-space: nowrap;
}

.stat-divider {
	width: 1rpx;
	height: 50rpx;
	background: linear-gradient(to bottom, transparent, #f0f0f0 40%, #f0f0f0 60%, transparent);
	align-self: center;
}

// 功能列表
.function-list {
	padding: 16rpx 0;
}

.list-section {
	background-color: white;
	margin-bottom: 16rpx;
}

.section-title {
	font-size: 24rpx;
	color: #8c8c8c;
	padding: 24rpx 24rpx 16rpx;
}

.menu-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 24rpx 24rpx;
	background-color: white;
	transition: background-color 0.3s;

	&:active {
		background-color: #f5f5f5;
	}
}

.menu-left {
	display: flex;
	align-items: center;
	gap: 16rpx;
}

.menu-icon {
	width: 48rpx;
	height: 48rpx;
	background-color: rgba(22, 119, 255, 0.1);
	border-radius: 8rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.menu-text {
	font-size: 28rpx;
	color: $uni-text-color;
}

// 版本信息
.version-info {
	padding: 40rpx 0;
	text-align: center;
}

.version-text {
	font-size: 24rpx;
	color: #bfbfbf;
}
</style>