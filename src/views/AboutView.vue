<template>
  <div class="about">
    <h1>关于这个项目</h1>

    <div class="content">
      <section class="section">
        <h2>技术栈</h2>
        <ul>
          <li><strong>Vue 3</strong> - 渐进式 JavaScript 框架</li>
          <li><strong>TypeScript</strong> - JavaScript 的超集</li>
          <li><strong>Vite</strong> - 下一代前端构建工具</li>
          <li><strong>Vue Router 4</strong> - 官方路由管理器</li>
          <li><strong>Pinia</strong> - Vue 状态管理库</li>
        </ul>
      </section>

      <section class="section">
        <h2>学习目标</h2>
        <ul>
          <li>掌握 Vue3 组合式 API</li>
          <li>熟悉 TypeScript 在 Vue 中的使用</li>
          <li>理解现代前端开发流程</li>
          <li>学会组件化开发思想</li>
        </ul>
      </section>

      <section class="section">
        <h2>项目结构</h2>
        <pre class="structure">
vue3-ts-project/
├── src/
│   ├── assets/       # 静态资源
│   ├── components/   # 组件
│   ├── views/        # 页面
│   ├── router/       # 路由
│   ├── stores/       # 状态管理
│   ├── types/        # TypeScript 类型
│   └── utils/        # 工具函数
└── package.json      # 项目配置
        </pre>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// 逻辑暂时不需要
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section {
  margin-bottom: 2rem;
}

.section:last-child {
  margin-bottom: 0;
}

.section h2 {
  color: #42b883;
  margin-bottom: 1rem;
  border-bottom: 2px solid #eaeaea;
  padding-bottom: 0.5rem;
}

.section ul {
  padding-left: 1.5rem;
}

.section li {
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
}

.section strong {
  color: #42b883;
}

.structure {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  font-family: 'Consolas', monospace;
  font-size: 14px;
  line-height: 1.5;
}
</style>
