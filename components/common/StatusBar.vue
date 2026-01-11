<template>
	<view
		class="status-bar"
		:style="{
			height: statusBarHeight + 'px',
			backgroundColor: bgColor
		}"
	/>
</template>

<script setup>
import { computed } from 'vue'
import { useSystem } from '@/store/system.js'

const props = defineProps({
	// 背景色
	bgColor: {
		type: String,
		default: '#FFFFFF'
	}
})

const systemState = useSystem()

// 状态栏高度
const statusBarHeight = computed(() => systemState.statusBarHeight)
</script>

<style lang="scss" scoped>
.status-bar {
	width: 100%;
	flex-shrink: 0;
}
</style>
