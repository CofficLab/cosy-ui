# Cosy Framework 文档项目

这是 Cosy Framework 的文档、示例和开发指南项目。

## 📁 项目结构

```
cosy-framework-docs/
├── README.md                    # 本文档
├── package.json                 # 项目配置和脚本
├── tsconfig.json               # TypeScript 配置
├── schedule/                   # 开发步骤文档
│   ├── 00-命名规则.md          # 文档命名规则说明
│   ├── README.md               # 开发计划总览
│   ├── 01-project-setup.md     # 步骤01：项目基础设置
│   ├── 01.1-reflect-metadata详解.md  # 步骤01附件：reflect-metadata详解
│   ├── 02-service-container.md # 步骤02：服务容器
│   ├── 03-http-foundation.md   # 步骤03：HTTP基础设施
│   ├── 04-routing-system.md    # 步骤04：路由系统
│   ├── 05-middleware-system.md # 步骤05：中间件系统
│   ├── 06-configuration-system.md # 步骤06：配置系统
│   ├── 07-application-core.md  # 步骤07：应用程序核心
│   └── 08-basic-example.md     # 步骤08：基础示例项目
└── examples/                   # 示例代码
    ├── README.md               # 示例说明文档
    ├── reflect-metadata-simple.ts     # reflect-metadata 简化演示
    ├── reflect-metadata-demo.ts       # reflect-metadata 基础演示
    └── reflect-metadata-tutorial.ts   # reflect-metadata 完整教程
```

## 🚀 快速开始

### 1. 安装依赖

```bash
cd packages/cosy-framework-docs
pnpm install
```

### 2. 查看开发计划

```bash
# 查看总体开发计划
cat schedule/README.md

# 开始第一步
cat schedule/01-project-setup.md
```

### 3. 运行示例代码

```bash
# 查看所有可用示例
npm run examples

# 运行 reflect-metadata 简化演示
npm run example:reflect-simple

# 运行其他示例
npm run example:reflect-demo
npm run example:reflect-tutorial
```

## 📚 文档导航

### 开发步骤
- **[步骤01：项目基础设置](./schedule/01-project-setup.md)** - 建立项目结构和配置
- **[步骤02：服务容器](./schedule/02-service-container.md)** - 实现依赖注入容器
- **[步骤03：HTTP基础设施](./schedule/03-http-foundation.md)** - HTTP请求和响应处理
- **[步骤04：路由系统](./schedule/04-routing-system.md)** - 路由匹配和参数提取
- **[步骤05：中间件系统](./schedule/05-middleware-system.md)** - 中间件管道
- **[步骤06：配置系统](./schedule/06-configuration-system.md)** - 配置管理
- **[步骤07：应用程序核心](./schedule/07-application-core.md)** - 整合所有模块
- **[步骤08：基础示例项目](./schedule/08-basic-example.md)** - 完整API示例

### 附件文档
- **[reflect-metadata 详解](./schedule/01.1-reflect-metadata详解.md)** - 深入理解依赖注入原理
- **[文档命名规则](./schedule/00-命名规则.md)** - 项目文档命名规范

### 示例代码
- **[示例代码说明](./examples/README.md)** - 所有示例的使用指南

## 🎯 项目特点

### 关注点分离
- **框架代码**：`packages/cosy-framework/` - 纯框架实现
- **文档示例**：`packages/cosy-framework-docs/` - 文档、示例和教程

### 循序渐进的学习路径
- 从基础概念到高级特性
- 每个步骤都有详细文档和示例
- 理论结合实践

### 实用的示例代码
- 可直接运行的演示程序
- 从简单到复杂的渐进式示例
- 详细的注释和说明

## 🔧 开发环境

### 要求
- Node.js 18+
- TypeScript 5.3+
- pnpm（推荐）

### 脚本命令
- `npm run examples` - 查看所有可用示例
- `npm run example:reflect-simple` - 运行 reflect-metadata 简化演示
- `npm run example:reflect-demo` - 运行 reflect-metadata 基础演示
- `npm run example:reflect-tutorial` - 运行 reflect-metadata 完整教程

## 🤝 贡献指南

### 添加新文档
1. 遵循 [命名规则](./schedule/00-命名规则.md)
2. 在对应步骤目录中创建文档
3. 更新相关的引用链接

### 添加新示例
1. 在 `examples/` 目录中创建示例文件
2. 更新 `package.json` 中的脚本
3. 在 `examples/README.md` 中添加说明
4. 确保示例可以独立运行

### 文档更新
1. 保持文档与代码同步
2. 使用清晰的标题和结构
3. 提供完整的使用示例
4. 添加必要的故障排除信息

## 📞 获取帮助

如果在使用过程中遇到问题：

1. 查看对应步骤的文档
2. 运行相关的示例代码
3. 检查环境要求和依赖
4. 查看故障排除部分

## �� 许可证

MIT License 
