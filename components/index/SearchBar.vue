<template>
	<view class="search-bar">
		<view class="search-input-wrapper" :class="{ 'focused': isFocused }">
			<uni-icons type="search" size="18" :color="isFocused ? '#1677FF' : '#94A3B8'" />
			<input
				class="search-input"
				type="text"
				:value="modelValue"
				:placeholder="placeholder"
				placeholder-class="placeholder"
				@input="handleInput"
				@focus="isFocused = true"
				@blur="isFocused = false"
				@confirm="handleSearch"
			/>
			<view v-if="modelValue" class="clear-btn" @click="handleClear">
				<uni-icons type="clear" size="16" color="#94A3B8" />
			</view>
		</view>
		<view v-if="showCancel" class="cancel-btn" @click="handleCancel">
			<text class="cancel-text">取消</text>
		</view>
	</view>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
	// v-model 绑定值
	modelValue: {
		type: String,
		default: ''
	},
	// 占位文本
	placeholder: {
		type: String,
		default: '搜索'
	},
	// 是否显示取消按钮
	showCancel: {
		type: Boolean,
		default: true
	},
	// 防抖延迟（毫秒）
	debounce: {
		type: Number,
		default: 300
	}
})

const emit = defineEmits(['update:modelValue', 'search', 'cancel', 'clear', 'focus'])

const isFocused = ref(false)
let debounceTimer = null

const handleInput = (e) => {
	const value = e.detail.value
	emit('update:modelValue', value)

	// 防抖处理搜索
	if (debounceTimer) {
		clearTimeout(debounceTimer)
	}
	debounceTimer = setTimeout(() => {
		emit('search', value)
	}, props.debounce)
}

const handleSearch = (e) => {
	emit('search', e.detail.value)
}

const handleClear = () => {
	emit('update:modelValue', '')
	emit('clear')
	if (debounceTimer) {
		clearTimeout(debounceTimer)
	}
}

const handleCancel = () => {
	handleClear()
	emit('cancel')
	isFocused.value = false
}

// 监听 modelValue 变化，更新输入框
watch(() => props.modelValue, (newVal) => {
	// 可以在这里处理外部值变化的逻辑
})
</script>

<style lang="scss" scoped>
.search-bar {
	display: flex;
	align-items: center;
	padding: 16rpx 32rpx;
	background-color: #FFFFFF;
	gap: 16rpx;
}

.search-input-wrapper {
	flex: 1;
	display: flex;
	align-items: center;
	height: 72rpx;
	background-color: #F1F5F9;
	border-radius: 36rpx;
	padding: 0 24rpx;
	transition: all 0.2s ease;

	&.focused {
		background-color: #FFFFFF;
		border: 2rpx solid #1677FF;
	}
}

.search-input {
	flex: 1;
	margin-left: 12rpx;
	margin-right: 12rpx;
	font-size: 28rpx;
	color: #1E293B;
	line-height: 1;
}

.placeholder {
	color: #94A3B8;
	font-size: 28rpx;
}

.clear-btn {
	width: 32rpx;
	height: 32rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}

.cancel-btn {
	padding: 8rpx 16rpx;
	cursor: pointer;
}

.cancel-text {
	font-size: 28rpx;
	color: #1677FF;
}
</style>
