# 个人博客

基于 Astro 构建的现代化个人博客，支持多语言、自动部署到 GitHub Pages。

## ✨ 特性

- 🚀 **快速加载** - 基于 Astro 的静态站点生成
- 🌙 **深色模式** - 支持明暗主题切换
- 🌍 **多语言** - 支持中文和英文版本
- 📱 **响应式设计** - 完美适配各种设备
- 📝 **Markdown 支持** - 使用 MDX 编写内容
- 🏷️ **标签系统** - 文章分类和标签管理
- 🔍 **SEO 优化** - 完整的 meta 标签和 sitemap
- 📡 **RSS 订阅** - 自动生成 RSS feed
- 🚀 **自动部署** - GitHub Actions 自动部署到 GitHub Pages

## 🛠️ 技术栈

- **框架**: [Astro](https://astro.build/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **内容**: [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- **部署**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📁 项目结构

```
/
├── public/                 # 静态资源
├── src/
│   ├── components/        # 可复用组件
│   ├── content/          # 内容集合
│   │   ├── blog/         # 博客文章
│   │   ├── projects/     # 项目介绍
│   │   ├── interviews/   # 访谈内容
│   │   └── experiments/  # 实验项目
│   ├── layouts/          # 页面布局
│   ├── pages/            # 页面路由
│   └── styles/           # 样式文件
├── .github/workflows/    # GitHub Actions
└── package.json
```

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/yourusername/blog.git
cd blog
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:4321` 查看网站。

### 4. 构建生产版本

```bash
npm run build
```

## 📝 内容管理

### 添加博客文章

在 `src/content/blog/` 目录下创建新的 `.md` 文件：

```markdown
---
title: '文章标题'
description: '文章描述'
pubDate: 2024-01-15
heroImage: '/blog-image.jpg'
tags: ['标签1', '标签2']
category: '分类'
lang: 'zh'
---

# 文章内容

这里是文章的正文内容...
```

### 添加项目

在 `src/content/projects/` 目录下创建新的 `.md` 文件：

```markdown
---
title: '项目名称'
description: '项目描述'
image: '/project-image.jpg'
url: 'https://project-url.com'
github: 'https://github.com/username/project'
tech: ['技术1', '技术2']
featured: true
lang: 'zh'
---

# 项目详情

项目的详细介绍...
```

## 🌍 多语言支持

博客支持中英文双语：

- 中文内容：`lang: 'zh'`
- 英文内容：`lang: 'en'`
- 英文页面路径：`/en/...`

## 🚀 部署到 GitHub Pages

### 1. 配置仓库

1. 在 GitHub 上创建新仓库
2. 推送代码到仓库
3. 在仓库设置中启用 GitHub Pages
4. 选择 "GitHub Actions" 作为部署源

### 2. 更新配置

在 `astro.config.mjs` 中更新站点 URL：

```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  // ...
});
```

### 3. 自动部署

推送到 `main` 分支时会自动触发部署。

## 🎨 自定义

### 个人信息

编辑 `src/components/PersonalInfo.astro` 更新：

- 姓名和简介
- 社交媒体链接
- 头像图片

### 主题颜色

在 `tailwind.config.js` 中自定义颜色主题。

### 导航菜单

在 `src/components/Navigation.astro` 中修改导航项目。

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系

- 邮箱: your@email.com
- Twitter: [@yourusername](https://twitter.com/yourusername)
- GitHub: [@yourusername](https://github.com/yourusername)

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
