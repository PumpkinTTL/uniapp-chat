<template>
	<view class="chat-input-wrapper">
		<view class="input-row">
			<!-- 左侧：语音切换 -->
			<view class="icon-box" @click="toggleInputMode">
				<uni-icons :type="inputMode === 'voice' ? 'keyboard' : 'mic'" :size="22" color="#64748B" />
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
				<view v-if="!inputValue.trim()" class="icon-box" @click="handleEmoji">
					<uni-icons type="emotion" :size="24" color="#64748B" />
				</view>
				<view v-if="!inputValue.trim()" class="icon-box" @click="handleMore">
					<uni-icons type="plus" :size="24" color="#64748B" />
				</view>
				<view v-else class="send-box" @click="handleSend">
					<text class="send-label">发送</text>
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

const toggleInputMode = () => {
	inputMode.value = inputMode.value === 'text' ? 'voice' : 'text'
}

const handleFocus = (e) => emit('focus', e)
const handleBlur = (e) => emit('blur', e)

const handleSend = () => {
	const text = inputValue.value.trim()
	if (!text) return
	emit('send', { type: 'text', content: text })
	inputValue.value = ''
}

const handleEmoji = () => emit('emoji')
const handleMore = () => emit('more')

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
.chat-input-wrapper {
	background-color: #FFFFFF;
	border-top: 1rpx solid #F1F5F9;
	flex-shrink: 0;
}

.input-row {
	display: flex;
	align-items: center;
	padding: 12rpx 20rpx;
	padding-bottom: calc(12rpx + env(safe-area-inset-bottom));
	gap: 12rpx;
}

.input-middle {
	flex: 1;
}

.icon-box {
	width: 44rpx;
	height: 44rpx;
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
	gap: 8rpx;
	flex-shrink: 0;
}

.msg-input {
	width: 100%;
	min-height: 44rpx;
	max-height: 160rpx;
	padding: 10rpx 16rpx;
	background-color: #F1F5F9;
	border-radius: 8rpx;
	font-size: 30rpx;
	line-height: 42rpx;
	color: #1E293B;
	box-sizing: border-box;
}

.placeholder-text {
	color: #94A3B8;
	font-size: 30rpx;
	line-height: 42rpx;
}

.voice-btn {
	width: 100%;
	height: 44rpx;
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

.send-box {
	height: 44rpx;
	padding: 0 20rpx;
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
</style>
