<template>
  <div id="app">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="container">
        <h1 class="logo">Vue3 + TS 项目</h1>
        <div class="nav-links">
          <router-link to="/">首页</router-link>
          <router-link to="/about">关于</router-link>
        </div>
      </div>
    </nav>

    <!-- 主要内容 -->
    <main class="main-content">
      <div class="container">
        <router-view />
      </div>
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <p>© 2024 Vue3 + TypeScript 项目</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// 这里暂时不需要逻辑，先空着
</script>

<style>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f5f5f5;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 导航栏样式 */
.navbar {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  color: #42b883;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #42b883;
}

.nav-links a.router-link-active {
  color: #42b883;
  border-bottom: 2px solid #42b883;
}

/* 主要内容 */
.main-content {
  flex: 1;
  padding: 2rem 0;
}

/* 页脚 */
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
  margin-top: auto;
}
</style>
