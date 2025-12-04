<template>
	<view class="app-footer">
		<view class="footer-content">
			<view class="footer-links">
				<text class="link-item" @click="$emit('privacy')">隐私政策</text>
				<text class="separator">·</text>
				<text class="link-item" @click="$emit('terms')">服务条款</text>
				<text class="separator">·</text>
				<text class="link-item" @click="$emit('contact')">联系我们</text>
			</view>
		</view>
	</view>
</template>

<script setup>
defineEmits(['privacy', 'terms', 'contact'])
</script>

<style lang="scss" scoped>
.app-footer {
	background-color: $uni-bg-color-grey;
	padding: $uni-spacing-row-base;
}

.footer-content {
	text-align: center;
}

.footer-links {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: $uni-spacing-row-base;
}

.link-item {
	font-size: $uni-font-size-sm;
	color: $uni-color-primary;
}

.separator {
	color: $uni-text-color-grey;
	margin: 0 10rpx;
}
</style>