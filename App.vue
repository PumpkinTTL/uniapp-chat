<script>
	import { initSystemInfo } from '@/store/system.js'

	export default {
		onLaunch: function() {
			console.log('App 启动')
			// 初始化系统信息（状态栏高度等）
			initSystemInfo()
		},
		onShow: function() {
			console.log('App 显示')
		},
		onHide: function() {
			console.log('App 隐藏')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
