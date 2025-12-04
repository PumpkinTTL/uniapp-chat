# UniApp Template

一个基于 UniApp 框架的跨平台应用开发模板，集成了常用的 uni-ui 组件库和基础页面结构。

## 🚀 项目特性

- 基于 [UniApp](https://uniapp.dcloud.net.cn/) 框架，支持多端发布
- 集成 [uni-ui](https://ext.dcloud.net.cn/plugin?id=55) 组件库
- 包含常用页面模板和组件
- 响应式设计，适配各种屏幕尺寸
- 支持 H5、小程序、App 等多端运行

## 📦 技术栈

- **框架**: UniApp (Vue 3)
- **UI组件**: uni-ui
- **构建工具**: Vite
- **开发语言**: JavaScript

## 📁 项目结构

```
uniapp-template/
├── components/          # 公共组件
│   └── home/           # 首页组件
├── pages/              # 页面文件
│   ├── index/          # 首页
│   └── me/             # 个人中心
├── static/             # 静态资源
│   ├── icons/          # 图标文件
│   └── logo.png        # 项目Logo
├── styles/             # 全局样式
├── uni_modules/        # uni-app插件
├── App.vue             # 应用配置
├── main.js             # 入口文件
├── manifest.json       # 应用配置
└── pages.json          # 页面配置
```

## 🛠 快速开始

### 环境要求

- Node.js >= 14
- HBuilderX 或 CLI 工具

### 安装依赖

```bash
npm install
```

### 开发运行

在 HBuilderX 中运行，或使用 CLI：

```bash
# H5
npm run dev:h5

# 小程序
npm run dev:mp-weixin

# App
npm run dev:app
```

### 生产构建

```bash
# H5
npm run build:h5

# 小程序
npm run build:mp-weixin

# App
npm run build:app
```

## 📖 使用说明

1. 克隆项目到本地
2. 使用 HBuilderX 打开项目
3. 根据需要修改 `manifest.json` 中的应用配置
4. 开始开发你的应用

## 📝 开发规范

- 组件命名使用 PascalCase
- 页面路由在 `pages.json` 中配置
- 全局样式写在 `styles/` 目录下
- 静态资源放在 `static/` 目录下

## 🤝 贡献

欢迎提交 Issue 或 Pull Request 来完善这个模板。

## 📄 许可证

MIT License

## 🔗 相关链接

- [UniApp 官方文档](https://uniapp.dcloud.net.cn/)
- [uni-ui 组件库](https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge)
