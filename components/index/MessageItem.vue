<template>
	<view class="message-item" @click="handleClick">
		<!-- 头像 -->
		<view class="avatar-wrapper">
			<image class="avatar" :src="avatar" mode="aspectFill" :alt="name" />
			<!-- 在线状态指示器 -->
			<view v-if="isOnline" class="online-indicator"></view>
		</view>

		<!-- 内容区域 -->
		<view class="content">
			<view class="content-header">
				<text class="name">{{ name }}</text>
				<text class="time">{{ formattedTime }}</text>
			</view>
			<view class="content-body">
				<!-- 免打扰图标 -->
				<uni-icons v-if="isMuted" type="eye-slash" size="14" color="#94A3B8" class="muted-icon" />
				<text class="last-message" :class="{ 'muted': isMuted }">{{ lastMessage }}</text>
			</view>
		</view>

		<!-- 右侧信息区域 -->
		<view class="aside">
			<!-- 未读徽章 -->
			<view v-if="unreadCount > 0" class="badge" :class="{ 'badge-large': unreadCount > 99 }">
				<text class="badge-text">{{ unreadCount > 99 ? '99+' : unreadCount }}</text>
			</view>
			<!-- 置顶标识 -->
			<uni-icons v-if="isPinned" type="up" size="12" color="#94A3B8" class="pin-icon" />
		</view>
	</view>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
	// 消息ID
	id: {
		type: [String, Number],
		required: true
	},
	// 头像URL
	avatar: {
		type: String,
		default: '/static/icons/default-avatar.png'
	},
	// 昵称/群组名称
	name: {
		type: String,
		required: true
	},
	// 最后一条消息内容
	lastMessage: {
		type: String,
		default: ''
	},
	// 最后消息时间戳
	timestamp: {
		type: [String, Number],
		default: 0
	},
	// 未读消息数
	unreadCount: {
		type: Number,
		default: 0
	},
	// 是否置顶
	isPinned: {
		type: Boolean,
		default: false
	},
	// 是否免打扰
	isMuted: {
		type: Boolean,
		default: false
	},
	// 是否在线（仅私聊）
	isOnline: {
		type: Boolean,
		default: false
	}
})

const emit = defineEmits(['click'])

// 格式化时间显示
const formattedTime = computed(() => {
	if (!props.timestamp) return ''

	const now = new Date()
	const msgTime = new Date(props.timestamp)
	const diff = now - msgTime

	// 小于1分钟
	if (diff < 60000) {
		return '刚刚'
	}

	// 小于1小时
	if (diff < 3600000) {
		return Math.floor(diff / 60000) + '分钟前'
	}

	// 今天
	if (msgTime.toDateString() === now.toDateString()) {
		return msgTime.getHours().toString().padStart(2, '0') + ':' +
		       msgTime.getMinutes().toString().padStart(2, '0')
	}

	// 昨天
	const yesterday = new Date(now)
	yesterday.setDate(yesterday.getDate() - 1)
	if (msgTime.toDateString() === yesterday.toDateString()) {
		return '昨天'
	}

	// 本周
	const weekAgo = new Date(now)
	weekAgo.setDate(weekAgo.getDate() - 7)
	if (msgTime > weekAgo) {
		const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
		return weeks[msgTime.getDay()]
	}

	// 更早显示日期
	return (msgTime.getMonth() + 1) + '/' + msgTime.getDate()
})

const handleClick = () => {
	emit('click', props.id)
}
</script>

<style lang="scss" scoped>
.message-item {
	display: flex;
	align-items: center;
	padding: 24rpx 32rpx;
	background-color: #FFFFFF;
	border-bottom: 1rpx solid #F1F5F9;
	cursor: pointer;
	transition: background-color 0.2s ease;

	&:active {
		background-color: #F8FAFC;
	}
}

.avatar-wrapper {
	position: relative;
	margin-right: 24rpx;
	flex-shrink: 0;
}

.avatar {
	width: 96rpx;
	height: 96rpx;
	border-radius: 12rpx;
	background-color: #F1F5F9;
}

.online-indicator {
	position: absolute;
	bottom: 4rpx;
	right: 4rpx;
	width: 20rpx;
	height: 20rpx;
	background-color: #22C55E;
	border: 3rpx solid #FFFFFF;
	border-radius: 50%;
}

.content {
	flex: 1;
	min-width: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.content-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 8rpx;
}

.name {
	font-size: 32rpx;
	font-weight: 500;
	color: #1E293B;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	flex: 1;
}

.time {
	font-size: 24rpx;
	color: #94A3B8;
	margin-left: 16rpx;
	flex-shrink: 0;
}

.content-body {
	display: flex;
	align-items: center;
}

.muted-icon {
	margin-right: 8rpx;
	flex-shrink: 0;
}

.last-message {
	font-size: 28rpx;
	color: #64748B;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	flex: 1;

	&.muted {
		color: #94A3B8;
	}
}

.aside {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-left: 16rpx;
	flex-shrink: 0;
}

.badge {
	min-width: 36rpx;
	height: 36rpx;
	background-color: #F43F5E;
	border-radius: 18rpx;
	padding: 0 10rpx;
	display: flex;
	align-items: center;
	justify-content: center;

	&.badge-large {
		min-width: 44rpx;
		height: 36rpx;
		border-radius: 18rpx;
	}
}

.badge-text {
	font-size: 22rpx;
	font-weight: 500;
	color: #FFFFFF;
	line-height: 1;
}

.pin-icon {
	margin-top: 8rpx;
}
</style>
