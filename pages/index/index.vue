<template><view class="home-page"><BannerSwiper :banner-list="bannerList" /><FeatureGrid :title="featureTitle" :features="features" /><QuickStart @start="handleStart" @docs="handleDocs" /><TechStack /><AppFooter @privacy="handlePrivacy" @terms="handleTerms" @contact="handleContact" /></view></template>

<script setup>
import { ref } from 'vue'
import BannerSwiper from '../../components/home/BannerSwiper.vue'
import FeatureGrid from '../../components/home/FeatureGrid.vue'
import QuickStart from '../../components/home/QuickStart.vue'
import TechStack from '../../components/home/TechStack.vue'
import AppFooter from '../../components/home/AppFooter.vue'

// 轮播图数据
const bannerList = ref([
	{
		title: 'Uniapp 模板',
		subtitle: '快速开发，多端发布',
		description: '基于 Vue 3 的现代化开发模板，一套代码多端运行',
		bgColor: '#007AFF',
		icon: '🚀'
	},
	{
		title: '组件化开发',
		subtitle: '丰富的组件库',
		description: '提供常用组件，加速开发流程',
		bgColor: '#34C759',
		icon: '📦'
	},
	{
		title: 'TypeScript 支持',
		subtitle: '类型安全',
		description: '完整的 TypeScript 支持，提升代码质量',
		bgColor: '#FF9500',
		icon: '📘'
	}
])

// 功能特性标题
const featureTitle = '核心特性'

// 功能特性数据
const features = ref([
	{
		title: '跨端兼容',
		description: '支持发布到iOS、Android、Web以及各种小程序平台',
		iconType: 'phone'
	},
	{
		title: 'Vue 3 生态',
		description: '基于 Vue 3 Composition API，享受现代前端开发体验',
		iconType: 'loop'
	},
	{
		title: '组件丰富',
		description: '内置丰富的UI组件，满足各种业务场景需求',
		iconType: 'list'
	},
	{
		title: '开发高效',
		description: '热更新、TypeScript、ESLint，提升开发效率',
		iconType: 'flag'
	},
	{
		title: '性能优异',
		description: '优化的渲染机制，保证流畅的用户体验',
		iconType: 'star'
	},
	{
		title: '易于扩展',
		description: '模块化设计，方便二次开发和功能扩展',
		iconType: 'gear'
	}
])

// 事件处理
const handleStart = () => {
	uni.showToast({
		title: '开始使用模板',
		icon: 'success'
	})
}

const handleDocs = () => {
	uni.showToast({
		title: '查看文档',
		icon: 'none'
	})
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
	min-height: 100vh;
	padding-bottom: env(safe-area-inset-bottom);
}

/* 优化页面间距 */
.home-page > *:not(:last-child) {
	margin-bottom: 0;
}

/* 滚动优化 */
.home-page {
	scroll-behavior: smooth;
	-webkit-overflow-scrolling: touch;
}
</style>