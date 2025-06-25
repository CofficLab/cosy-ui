# 步骤 001：项目基础设置概述

## 目标
建立 Cosy Framework 的基础项目结构和配置文件。

## 子步骤
本章节分为以下几个子步骤：

0. [框架概述](./01.0-framework-overview.md)
   - 框架基本原理
   - 核心组件介绍
   - 请求生命周期
   - 框架分层设计

1. [项目结构](./01.1-project-structure.md)
   - 创建目录结构
   - 配置 package.json
   - 配置 TypeScript

2. [基础文件](./01.2-base-files.md)
   - 创建基础类型定义
   - 创建主入口文件
   - 创建临时模块文件

3. [测试配置](./01.3-testing-setup.md)
   - 配置 Vitest
   - 创建基础测试
   - 验证测试流程

4. [构建验证](./01.4-build-verification.md)
   - 安装依赖
   - 运行构建
   - 检查生成文件

## 依赖
首先需要安装以下依赖：

```bash
pnpm add -D typescript vitest @types/node @vitest/coverage-v8
pnpm add reflect-metadata
```

## 完成标志
- [ ] 所有子步骤完成
- [ ] 所有测试通过
- [ ] 代码组织清晰
- [ ] 文档完整
- [ ] TypeScript 类型检查无错误

## 📚 附件资料
- **[reflect-metadata 详解](./01.5-reflect-metadata.md)** - 深入理解框架核心依赖的工作原理

## 下一步
请按顺序完成每个子步骤，从 [01.0-framework-overview.md](./01.0-framework-overview.md) 开始。 
