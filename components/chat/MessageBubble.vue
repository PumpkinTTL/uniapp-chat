<template>
	<view class="msg-bubble-row" :class="{ 'is-self': isSelf }">
		<!-- 头像 -->
		<image class="msg-avatar" :src="avatar" mode="aspectFill" />

		<!-- 消息主体 -->
		<view class="msg-body">
			<!-- 昵称（对方消息） -->
			<text v-if="showName && !isSelf" class="msg-nickname">{{ senderName }}</text>

			<!-- 气泡容器 -->
			<view class="bubble-wrapper">
				<!-- 文字消息 -->
				<view v-if="type === 'text'" class="bubble bubble-text" :class="{ 'is-self': isSelf }">
					<text class="bubble-content">{{ content }}</text>
				</view>

				<!-- 图片消息 -->
				<image
					v-else-if="type === 'image'"
					class="bubble bubble-image"
					:class="{ 'is-self': isSelf }"
					:src="content"
					mode="widthFix"
					@click.stop="handleImagePreview"
				/>

				<!-- 语音消息 -->
				<view v-else-if="type === 'voice'" class="bubble bubble-voice" :class="{ 'is-self': isSelf }" @click.stop="handleVoiceClick">
					<uni-icons :type="isSelf ? 'sound-filled' : 'sound'" :size="16" :color="isSelf ? '#FFFFFF' : '#64748B'" />
					<text class="voice-duration">{{ duration }}s</text>
				</view>

				<!-- 表情消息 -->
				<image v-else-if="type === 'emoji'" class="bubble-emoji" :src="content" mode="aspectFit" />

				<!-- 系统消息 -->
				<view v-else-if="type === 'system'" class="bubble-system">
					<text class="system-text">{{ content }}</text>
				</view>
			</view>

			<!-- 发送状态（自己消息） -->
			<view v-if="isSelf && showStatus" class="msg-status-row">
				<uni-icons v-if="status === 'sending'" type="spinner-cycle" :size="12" color="#94A3B8" class="status-icon-spin" />
				<text v-else-if="status === 'failed'" class="status-failed" @click.stop="handleResend">! 重试</text>
			</view>
		</view>
	</view>
</template>

<script setup>
const props = defineProps({
	id: { type: [String, Number], required: true },
	type: { type: String, default: 'text' },
	content: { type: String, default: '' },
	avatar: { type: String, default: '/static/images/default-avatar.png' },
	senderName: { type: String, default: '' },
	isSelf: { type: Boolean, default: false },
	showName: { type: Boolean, default: false },
	duration: { type: Number, default: 0 },
	status: { type: String, default: 'sent' },
	showStatus: { type: Boolean, default: true }
})

const emit = defineEmits(['imagePreview', 'voicePlay', 'resend'])

const handleImagePreview = () => emit('imagePreview', props.content)
const handleVoiceClick = () => emit('voicePlay', props.id)
const handleResend = () => emit('resend', props.id)
</script>

<style lang="scss" scoped>
.msg-bubble-row {
	display: flex;
	margin-bottom: 32rpx;
	padding: 0 32rpx;

	&.is-self {
		flex-direction: row-reverse;
	}
}

.msg-avatar {
	width: 80rpx;
	height: 80rpx;
	border-radius: 12rpx;
	flex-shrink: 0;
	background-color: #F1F5F9;
}

:not(.is-self) .msg-avatar {
	margin-right: 16rpx;
}

.is-self .msg-avatar {
	margin-left: 16rpx;
}

.msg-body {
	display: flex;
	flex-direction: column;
	max-width: 520rpx;
}

:not(.is-self) .msg-body {
	align-items: flex-start;
}

.is-self .msg-body {
	align-items: flex-end;
}

.msg-nickname {
	font-size: 24rpx;
	color: #94A3B8;
	margin-bottom: 8rpx;
	margin-left: 4rpx;
}

.bubble-wrapper {
	display: flex;
	flex-direction: column;
}

.bubble {
	padding: 20rpx 24rpx;
	background-color: #FFFFFF;
	border-radius: 16rpx;
	box-shadow: 0 1rpx 4rpx rgba(0, 0, 0, 0.04);

	&.is-self {
		background-color: #2563EB;
	}
}

.bubble-text {
	max-width: 480rpx;
}

.bubble-content {
	font-size: 30rpx;
	line-height: 44rpx;
	color: #1E293B;
	word-break: break-all;
}

.is-self .bubble-content {
	color: #FFFFFF;
}

.bubble-image {
	max-width: 420rpx;
	border-radius: 12rpx;
	background: transparent;
	box-shadow: none;
	padding: 0;
}

.bubble-voice {
	min-width: 160rpx;
	padding: 20rpx 24rpx;
	display: flex;
	align-items: center;
	gap: 12rpx;
}

.voice-duration {
	font-size: 26rpx;
	color: #64748B;
}

.is-self .voice-duration {
	color: #FFFFFF;
}

.bubble-emoji {
	width: 96rpx;
	height: 96rpx;
	display: block;
}

.bubble-system {
	align-self: center;
	background-color: rgba(0, 0, 0, 0.04);
	padding: 12rpx 24rpx;
	border-radius: 24rpx;
	box-shadow: none;
}

.system-text {
	font-size: 24rpx;
	color: #94A3B8;
}

.msg-status-row {
	display: flex;
	align-items: center;
	margin-top: 8rpx;
	height: 20rpx;
}

.status-icon-spin {
	animation: spin 1s linear infinite;
}

.status-failed {
	font-size: 22rpx;
	color: #F43F5E;
	text-decoration: underline;
}

@keyframes spin {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
</style>
