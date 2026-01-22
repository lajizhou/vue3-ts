<template>
  <div class="home">
    <h1>欢迎使用 Vue3 + TypeScript</h1>

    <div class="intro">
      <p>这是一个从零开始搭建的 Vue3 项目，使用 TypeScript 增强类型安全。</p>
    </div>

    <div class="features">
      <h2>项目特性</h2>
      <div class="feature-list">
        <div class="feature-card">
          <h3>🚀 Vue 3</h3>
          <p>使用最新的 Composition API</p>
        </div>
        <div class="feature-card">
          <h3>📘 TypeScript</h3>
          <p>完整的类型支持</p>
        </div>
        <div class="feature-card">
          <h3>⚡ Vite</h3>
          <p>极速的开发体验</p>
        </div>
        <div class="feature-card">
          <h3>🗺️ Vue Router 4</h3>
          <p>现代化的路由管理</p>
        </div>
      </div>
    </div>

    <div class="counter-demo">
      <h2>计数器示例</h2>
      <p>当前计数: {{ count }}</p>
      <div class="buttons">
        <button @click="increment">增加</button>
        <button @click="decrement">减少</button>
        <button @click="reset">重置</button>
      </div>
    </div>

    <div class="next-steps">
      <h2>下一步</h2>
      <ol>
        <li>学习更多 Vue3 特性</li>
        <li>添加更多页面组件</li>
        <li>使用 Pinia 进行状态管理</li>
        <li>集成 Element Plus 组件库</li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 响应式数据
const count = ref(0)

// 方法
const increment = () => {
  count.value++
}

const decrement = () => {
  if (count.value > 0) {
    count.value--
  }
}

const reset = () => {
  count.value = 0
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.intro {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.features {
  margin-bottom: 2rem;
}

.features h2 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.feature-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  color: #42b883;
  margin-bottom: 0.5rem;
}

.counter-demo {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  text-align: center;
}

.counter-demo h2 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.counter-demo p {
  font-size: 2rem;
  margin: 1rem 0;
  font-weight: bold;
  color: #42b883;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1.5rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #33a06f;
}

.next-steps {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.next-steps h2 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.next-steps ol {
  padding-left: 1.5rem;
}

.next-steps li {
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
}
</style>
