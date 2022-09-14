<template>
  <!-- 테스트용 라우터 링크. 완성시 제거 -->
  <nav>
    <router-link to="/">login</router-link> |
    <router-link to="/main">main</router-link> |
    <router-link to="/signup_master">signup_master</router-link> |
    <router-link to="/signup_member">signup_member</router-link>
  </nav>
  <router-view/>
</template>

<style>
body {
  background-color: rgb(252, 245, 255);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

:root {
  --main-bg-color: brown;
  --cotainer-bg-color: rgb(83, 61, 96);
}
</style>
