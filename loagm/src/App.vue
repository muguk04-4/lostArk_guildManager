<template>
  <router-view/>
</template>

<style>
/* 영문판이 필요할 때 쓸 inter 폰트
@font-face {
  font-family: "Inter";
  src: url(./fonts/Inter-VariableFont_slnt,wght.ttf) format("truetype");
} */
@font-face {
  font-family: "NanumGothic";
  src: url(./fonts/NanumGothic-Regular.ttf) format("truetype");
}
body {
  background-color: #E9D5DA;
  font-family: "NanumGothic";
}
input:focus{
  outline: none;
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
  --menu-bg-color: #7E7CAF;
  --container-bg-color: #4D4C7D;
}
</style>
