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
  background-color: rgb(252, 245, 255);
  font-family: "NanumGothic";
}
input:focus{
  outline: none;
}
/* 이거 왜 작동안하지? */
/* button{
  transition: background-color 0.15s, color 0.15s;
}
button:hover{
  background-color: var(--container-bg-color);
  color: white;
} */

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
  --container-bg-color: rgb(83, 61, 96);
}
</style>
