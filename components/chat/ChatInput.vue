<template>
	<view class="chat-input-container">
		<view class="input-bar">
			<!-- 左侧：语音切换 -->
			<view class="icon-btn" @click="toggleInputMode">
				<uni-icons :type="inputMode === 'voice' ? 'keyboard' : 'mic'" :size="24" color="#64748B" />
			</view>

			<!-- 中间：输入区域 -->
			<view class="input-middle">
				<textarea
					v-if="inputMode === 'text'"
					class="msg-input"
					v-model="inputValue"
					:placeholder="placeholder"
					placeholder-class="placeholder-text"
					:auto-height="true"
					:maxlength="maxLength"
					@focus="handleFocus"
					@blur="handleBlur"
					@confirm="handleSend"
				/>
				<view
					v-else
					class="voice-btn"
					:class="{ 'recording': isRecording }"
					@touchstart="startRecord"
					@touchend="stopRecord"
					@touchcancel="cancelRecord"
				>
					<text class="voice-label">{{ isRecording ? '松开 发送' : '按住 说话' }}</text>
				</view>
			</view>

			<!-- 右侧：功能按钮 -->
			<view class="input-right">
				<view v-if="!inputValue.trim()" class="icon-btn" @click="handleEmoji">
					<uni-icons type="emotion" :size="24" color="#64748B" />
				</view>
				<view v-if="!inputValue.trim()" class="icon-btn" @click="toggleMorePanel">
					<uni-icons type="plus" :size="24" color="#64748B" />
				</view>
				<view v-else class="send-btn" @click="handleSend">
					<text class="send-label">发送</text>
				</view>
			</view>
		</view>

		<!-- 底部功能面板 -->
		<view class="more-panel" :class="{ 'show': showMorePanel }">
			<view class="panel-grid">
				<view class="panel-item" @click="handlePanelAction('image')">
					<view class="item-icon">
						<uni-icons type="image" :size="28" color="#64748B" />
					</view>
					<text class="item-label">图片</text>
				</view>
				<view class="panel-item" @click="handlePanelAction('camera')">
					<view class="item-icon">
						<uni-icons type="camera" :size="28" color="#64748B" />
					</view>
					<text class="item-label">拍照</text>
				</view>
				<view class="panel-item" @click="handlePanelAction('video')">
					<view class="item-icon">
						<uni-icons type="videocam" :size="28" color="#64748B" />
					</view>
					<text class="item-label">视频</text>
				</view>
				<view class="panel-item" @click="handlePanelAction('location')">
					<view class="item-icon">
						<uni-icons type="location" :size="28" color="#64748B" />
					</view>
					<text class="item-label">位置</text>
				</view>
				<view class="panel-item" @click="handlePanelAction('file')">
					<view class="item-icon">
						<uni-icons type="paperplane" :size="28" color="#64748B" />
					</view>
					<text class="item-label">文件</text>
				</view>
				<view class="panel-item" @click="handlePanelAction('card')">
					<view class="item-icon">
						<uni-icons type="contact" :size="28" color="#64748B" />
					</view>
					<text class="item-label">名片</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
	placeholder: { type: String, default: '发消息...' },
	maxLength: { type: Number, default: 500 }
})

const emit = defineEmits(['send', 'focus', 'blur', 'emoji', 'more', 'voiceStart', 'voiceEnd', 'voiceCancel'])

const inputMode = ref('text')
const inputValue = ref('')
const isRecording = ref(false)
const showMorePanel = ref(false)

const toggleInputMode = () => {
	inputMode.value = inputMode.value === 'text' ? 'voice' : 'text'
	closeMorePanel()
}

const handleFocus = (e) => emit('focus', e)
const handleBlur = (e) => emit('blur', e)

const handleSend = () => {
	const text = inputValue.value.trim()
	if (!text) return
	emit('send', { type: 'text', content: text })
	inputValue.value = ''
}

const handleEmoji = () => {
	closeMorePanel()
	emit('emoji')
}

const toggleMorePanel = () => {
	showMorePanel.value = !showMorePanel.value
}

const closeMorePanel = () => {
	showMorePanel.value = false
}

const handlePanelAction = (type) => {
	closeMorePanel()
	emit('more', type)
}

const startRecord = () => {
	isRecording.value = true
	emit('voiceStart')
}

const stopRecord = () => {
	if (!isRecording.value) return
	isRecording.value = false
	emit('voiceEnd')
}

const cancelRecord = () => {
	if (!isRecording.value) return
	isRecording.value = false
	emit('voiceCancel')
}

const clearInput = () => {
	inputValue.value = ''
}

defineExpose({ clearInput })
</script>

<style lang="scss" scoped>
.chat-input-container {
	background-color: #FFFFFF;
	border-top: 1rpx solid #F1F5F9;
	flex-shrink: 0;
	position: relative;
}

.input-bar {
	display: flex;
	align-items: center;
	padding: 20rpx 20rpx;
	gap: 20rpx;
}

.input-middle {
	flex: 1;
	display: flex;
	align-items: center;
}

.icon-btn {
	width: 72rpx;
	height: 72rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;

	&:active {
		opacity: 0.6;
	}
}

.input-right {
	display: flex;
	align-items: center;
	gap: 20rpx;
	flex-shrink: 0;
}

.msg-input {
	width: 100%;
	height: 72rpx;
	padding: 0 16rpx;
	background-color: #F1F5F9;
	border-radius: 8rpx;
	font-size: 30rpx;
	line-height: 72rpx;
	color: #1E293B;
	box-sizing: border-box;
}

.placeholder-text {
	color: #94A3B8;
	font-size: 30rpx;
	line-height: 72rpx;
}

.voice-btn {
	width: 100%;
	height: 72rpx;
	background-color: #F1F5F9;
	border-radius: 8rpx;
	display: flex;
	align-items: center;
	justify-content: center;

	&.recording {
		background-color: #FEF2F2;
	}
}

.voice-label {
	font-size: 28rpx;
	color: #64748B;

	.recording & {
		color: #EF4444;
	}
}

.send-btn {
	height: 72rpx;
	padding: 0 24rpx;
	background-color: #2563EB;
	border-radius: 8rpx;
	display: flex;
	align-items: center;
	justify-content: center;

	&:active {
		opacity: 0.8;
	}
}

.send-label {
	font-size: 26rpx;
	color: #FFFFFF;
}

.more-panel {
	background-color: #F8FAFC;
	border-top: 1rpx solid #F1F5F9;
	max-height: 0;
	overflow: hidden;
	transition: max-height 0.3s ease;
	padding-bottom: env(safe-area-inset-bottom);

	&.show {
		max-height: 500rpx;
	}
}

.panel-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 32rpx 24rpx;
	padding: 40rpx 32rpx;
}

.panel-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12rpx;
}

.item-icon {
	width: 96rpx;
	height: 96rpx;
	background-color: #FFFFFF;
	border-radius: 16rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.item-label {
	font-size: 24rpx;
	color: #64748B;
}
</style>
