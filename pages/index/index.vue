<template>
	<view class="home-page">
		<!-- 英雄区域 -->
		<HeroSection @primary-action="handleStart" @secondary-action="handleLearnMore" />

		<!-- 功能特性 -->
		<FeatureGrid :title="featureTitle" :features="features" />

		<!-- 产品介绍 -->
		<InfoSection v-for="info in infoSections" :key="info.id" :title="info.title" :subtitle="info.subtitle"
			:description="info.description" :image-url="info.imageUrl" L :button-text="info.buttonText"
			:reverse="info.reverse" @action="info.action" />

		<!-- 应用底部 -->
		<AppFooter @privacy="handlePrivacy" @terms="handleTerms" @contact="handleContact" />

	</view>
</template>

<script setup>
import {
	ref
} from 'vue'
import HeroSection from '../../components/home/HeroSection.vue'
import FeatureGrid from '../../components/home/FeatureGrid.vue'
import InfoSection from '../../components/home/InfoSection.vue'
import AppFooter from '../../components/home/AppFooter.vue'

// 功能特性标题
const featureTitle = '核心功能'

// 功能特性数据
const features = ref([{
	title: '高效编辑',
	description: '支持批量操作、快速查找替换，让数据处理更加高效',
	icon: '/static/icons/edit.svg'
},
{
	title: '多格式支持',
	description: '支持Excel、CSV等多种格式的导入导出',
	icon: '/static/icons/format.svg'
},
{
	title: '数据可视化',
	description: '内置图表功能，让数据一目了然',
	icon: '/static/icons/chart.svg'
},
{
	title: '云端同步',
	description: '实时保存，多设备同步，随时随地访问数据',
	icon: '/static/icons/sync.svg'
}
])

// 产品介绍数据
const infoSections = ref([{
	id: 1,
	title: '专业的表格处理能力',
	subtitle: '强大而灵活',
	description: '提供媲美桌面级应用的表格处理能力，支持复杂的公式计算、数据筛选、排序等功能。无论是简单的数据记录还是复杂的业务分析，都能轻松应对。',
	imageUrl: '/static/images/table-feature.jpg',
	buttonText: '了解详情',
	reverse: false,
	action: () => {
		uni.showToast({
			title: '功能介绍',
			icon: 'none'
		})
	}
},
{
	id: 2,
	title: '跨平台无缝使用',
	subtitle: '随时随地处理数据',
	description: '支持Web、iOS、Android等多个平台，数据实时同步。无论您使用什么设备，都能获得一致的使用体验，真正实现移动办公。',
	imageUrl: '/static/images/cross-platform.jpg',
	buttonText: '了解更多',
	reverse: true,
	action: () => {
		uni.showToast({
			title: '跨平台功能',
			icon: 'none'
		})
	}
}
])

// 事件处理
const handleStart = () => {
	navigateToTable()
}

const handleLearnMore = () => {
	uni.showToast({
		title: '了解更多',
		icon: 'none'
	})
}

const navigateToTable = () => {
	uni.showToast({
		title: '即将跳转到表格功能',
		icon: 'success'
	})
	// 实际项目中使用 uni.navigateTo 跳转到表格页面
	// uni.navigateTo({
	//   url: '/pages/table/index'
	// })
}

// 底部链接处理
const handlePrivacy = () => {
	uni.showToast({
		title: '隐私政策',
		icon: 'none'
	})
}

const handleTerms = () => {
	uni.showToast({
		title: '服务条款',
		icon: 'none'
	})
}

const handleContact = () => {
	uni.showToast({
		title: '联系我们',
		icon: 'none'
	})
}
</script>

<style lang="scss">
.home-page {
	background-color: #f5f5f5;
	padding-bottom: 100rpx;
}

/* 底部导航 */
.bottom-nav {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: $uni-bg-color;
	padding: $uni-spacing-row-sm $uni-spacing-row-base;
	z-index: 1000;
}

.nav-btn {
	width: 100%;
	background-color: $uni-color-primary;
	color: white;
	border: none;
	padding: 18rpx;
	border-radius: $uni-border-radius-sm;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10rpx;
	font-size: $uni-font-size-base;
	font-weight: 500;
}

.nav-text {
	font-size: $uni-font-size-base;
}
</style>