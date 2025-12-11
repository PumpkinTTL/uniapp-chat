# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **UniApp** cross-platform application template built with Vue 3, supporting multi-platform deployment (H5, WeChat Mini Program, App, etc.). The project demonstrates a modern component-based architecture with a focus on showcasing UniApp template capabilities.

## Development Commands

### Running the Application

```bash
# H5 Development
npm run dev:h5

# WeChat Mini Program
npm run dev:mp-weixin

# App Development
npm run dev:app

# Alibaba Mini Program
npm run dev:mp-alipay

# Baidu Mini Program
npm run dev:mp-baidu

# ByteDance Mini Program
npm run dev:mp-toutiao
```

### Building for Production

```bash
# H5 Build
npm run build:h5

# WeChat Mini Program Build
npm run build:mp-weixin

# App Build
npm run build:app

# Other platforms
npm run build:mp-alipay
npm run build:mp-baidu
npm run build:mp-toutiao
```

### Prerequisites

- Node.js >= 14
- HBuilderX or CLI tools
- Platform-specific IDEs for mini-program development (e.g., WeChat Developer Tools)

## Architecture

### Directory Structure

```
uniapp-template/
├── components/              # Reusable components
│   └── home/               # Home page specific components
│       ├── BannerSwiper.vue    # Banner carousel component
│       ├── FeatureCard.vue     # Feature card component
│       ├── FeatureGrid.vue     # Feature grid layout
│       ├── QuickStart.vue      # Quick start guide
│       ├── TechStack.vue       # Technology stack display
│       └── AppFooter.vue       # Application footer
├── pages/                   # Application pages
│   ├── index/               # Home page
│   └── me/                  # Profile page
├── static/                  # Static assets (images, icons)
├── styles/                  # Global styles
├── uni_modules/            # UniApp plugins and extensions
├── App.vue                 # Root application component
├── main.js                 # Application entry point
├── manifest.json           # Application configuration
├── pages.json              # Page routing and configuration
└── uni.scss                # Global SCSS variables
```

### Key Configuration Files

- **pages.json**: Defines page routes, navigation bar styles, tabBar configuration
- **manifest.json**: Application metadata, platform-specific settings, permissions
- **uni.scss**: Global SCSS variables and theme customization
- **main.js**: Application bootstrap with Vue 2/3 compatibility

### Component Architecture

The home page (`pages/index/index.vue`) is composed of modular components:

1. **BannerSwiper**:轮播图展示核心特性
2. **FeatureGrid**:3列网格展示功能特性(6个特性)
3. **QuickStart**:3步快速开始指南
4. **TechStack**:技术栈展示
5. **AppFooter**:包含产品、资源、支持三个分组的水平布局

All components use:
- Vue 3 Composition API with `<script setup>` syntax
- SCSS for styling with responsive design
- Uni-icons for consistent iconography
- Flex/Grid layouts for responsive behavior

### Styling Approach

- **No background colors**: Clean, minimalist design without solid backgrounds
- **Compact layout**: Reduced padding/margins for tighter spacing
- **Responsive grid**: 3 columns on desktop, 2 on tablet, 1 on mobile
- **Uni-icons**: Consistent icon library integration
- **SCSS variables**: Centralized theme management in `uni.scss`

### Multi-Platform Support

The project uses conditional compilation for platform-specific features:

```javascript
// #ifdef VUE3
import { createSSRApp } from 'vue'
// #endif

// #ifndef VUE3
import Vue from 'vue'
// #endif
```

## Development Guidelines

### Component Development

- Use Vue 3 Composition API with `<script setup>` syntax
- Name components using PascalCase (e.g., `FeatureCard.vue`)
- Keep components focused and single-purpose
- Use SCSS for styling with the variables from `uni.scss`
- Leverage uni-ui components for consistent UI

### Styling Standards

- Primary color: `#1890ff` (blue theme)
- Text colors: `#262626` (primary), `#8c8c8c` (secondary)
- Border radius: `10rpx` for cards, `8rpx` for buttons
- Font sizes: `36rpx` (title), `28rpx` (subtitle), `24rpx` (body)
- Spacing: Use `8rpx`, `12rpx`, `16rpx`, `20rpx` multiples

### Page Configuration

All pages are configured in `pages.json` with:
- Navigation bar title text
- Background colors
- Text styles
- Tab bar items (for main navigation)

### State Management

The project includes a `store/` directory for Vuex/Pinia state management. Current implementation doesn't require complex state, but can be extended as needed.

## Platform-Specific Notes

### H5 Development
- Use `npm run dev:h5` for development
- Supports modern browsers
- Hot reload enabled

### WeChat Mini Program
- Use `npm run dev:mp-weixin`
- Requires WeChat Developer Tools for testing
- Limited API support compared to H5

### App Development
- Use `npm run dev:app` for development
- Requires HBuilderX or custom build setup
- Full native API access

## Recent Changes

The homepage was recently refactored (commit 535a0ad) from a table processing tool to a UniApp template showcase, featuring:
- Complete UI redesign with component-based architecture
- Removal of all background colors for cleaner appearance
- Implementation of compact, responsive layouts
- Integration of uni-icons throughout
- 3-column feature grid layout for better space utilization

## Common Tasks

### Adding a New Page

1. Create page directory in `pages/`
2. Add page configuration to `pages.json`
3. Implement page component with Vue 3 Composition API

### Adding a New Component

1. Create component file in appropriate directory under `components/`
2. Use PascalCase naming
3. Follow existing component patterns for props and emits

### Modifying Theme

1. Update color variables in `uni.scss`
2. Modify global styles in `styles/app.css`
3. Component-specific styles should use consistent variables

### Building for Specific Platform

1. Run appropriate build command (see Development Commands)
2. Use platform-specific IDE to preview/test
3. For mini-programs, upload to platform developer console

## References

- [UniApp Documentation](https://uniapp.dcloud.net.cn/)
- [uni-ui Components](https://ext.dcloud.net.cn/plugin?id=55)
- [Vue 3 Documentation](https://vuejs.org/)
