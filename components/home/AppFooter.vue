<template><view class="app-footer"><view class="footer-container"><view class="footer-brand"><view class="brand-logo"><uni-icons type="flag" size="36" color="#1890ff" /><text class="logo-text">Uniapp 模板</text></view><view class="brand-description">高质量的 uniapp 开发模板，助力快速构建现代化应用</view></view><view class="footer-divider"></view><view class="footer-links-section"><view class="link-group"><view class="group-title">产品</view><view class="link-item" @click="$emit('features')">功能特性</view><view class="link-item" @click="$emit('updates')">更新日志</view><view class="link-item" @click="$emit('roadmap')">开发路线</view></view><view class="link-group"><view class="group-title">资源</view><view class="link-item" @click="$emit('docs')">文档中心</view><view class="link-item" @click="$emit('examples')">示例代码</view><view class="link-item" @click="$emit('faq')">常见问题</view></view><view class="link-group"><view class="group-title">支持</view><view class="link-item" @click="$emit('contact')">联系我们</view><view class="link-item" @click="$emit('feedback')">意见反馈</view><view class="link-item" @click="$emit('community')">社区讨论</view></view></view><view class="footer-divider"></view><view class="footer-bottom"><view class="copyright"><text class="copyright-text">© 2024 Uniapp Template. All rights reserved.</text></view><view class="legal-links"><text class="legal-link" @click="$emit('privacy')">隐私政策</text><text class="separator">·</text><text class="legal-link" @click="$emit('terms')">服务条款</text><text class="separator">·</text><text class="legal-link" @click="$emit('license')">开源许可</text></view></view></view></view></template>

<script setup>
const emit = defineEmits([
	'privacy',
	'terms',
	'contact',
	'features',
	'updates',
	'roadmap',
	'docs',
	'examples',
	'faq',
	'feedback',
	'community',
	'license'
])
</script>

<style lang="scss" scoped>
.app-footer {
	padding: 24rpx;
}

.footer-container {
	max-width: 1200rpx;
	margin: 0 auto;
}

.footer-brand {
	text-align: center;
	margin-bottom: 24rpx;
}

.brand-logo {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8rpx;
	margin-bottom: 8rpx;
}


.logo-text {
	font-size: 28rpx;
	font-weight: 700;
	color: #262626;
}

.brand-description {
	font-size: 22rpx;
	color: #8c8c8c;
	line-height: 1.3;
	max-width: 600rpx;
	margin: 0 auto;
}

.footer-divider {
	height: 1px;
	background: linear-gradient(90deg, transparent, #e8e8e8, transparent);
	margin: 20rpx 0;
}

.footer-links-section {
	display: flex;
	justify-content: space-between;
	margin-bottom: 20rpx;
	gap: 8rpx;
}

.link-group {
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 0 8rpx;
}

.group-title {
	font-size: 28rpx;
	font-weight: 600;
	color: #262626;
	margin-bottom: 8rpx;
	white-space: nowrap;
}

.link-item {
	font-size: 24rpx;
	color: #8c8c8c;
	margin-bottom: 6rpx;
	transition: color 0.3s;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	&:active {
		color: #1890ff;
	}
}

.footer-bottom {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12rpx;
}

.copyright-text {
	font-size: 22rpx;
	color: #8c8c8c;
}

.legal-links {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 12rpx;
	flex-wrap: wrap;
}

.legal-link {
	font-size: 22rpx;
	color: #8c8c8c;
	transition: color 0.3s;

	&:active {
		color: #1890ff;
	}
}

.separator {
	color: #d9d9d9;
	font-size: 20rpx;
}

@media screen and (max-width: 768px) {
	.footer-links-section {
		flex-direction: column;
		gap: 16rpx;
	}

	.link-group {
		flex-direction: row;
		justify-content: space-around;
		padding: 0;
	}
}
</style>