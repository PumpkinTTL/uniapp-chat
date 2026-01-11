import { reactive } from 'vue'

// 系统状态管理
const systemState = reactive({
	statusBarHeight: 0,
	navigationBarHeight: 44,
	windowWidth: 375,
	windowHeight: 667
})

/**
 * 初始化系统信息（在App.vue中调用）
 */
export function initSystemInfo() {
	const systemInfo = uni.getSystemInfoSync()

	systemState.statusBarHeight = systemInfo.statusBarHeight || 0
	systemState.windowWidth = systemInfo.windowWidth || 375
	systemState.windowHeight = systemInfo.windowHeight || 667

	// 计算导航栏高度（不同平台可能不同）
	// #ifdef MP-WEIXIN
	const menuButton = uni.getMenuButtonBoundingClientRect()
	systemState.navigationBarHeight = menuButton.top + menuButton.height + (menuButton.top - systemState.statusBarHeight) * 2
	// #endif
}

/**
 * 获取系统状态
 */
export function useSystem() {
	return systemState
}

export default systemState
