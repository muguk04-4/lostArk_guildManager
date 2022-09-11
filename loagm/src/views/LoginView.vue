<template>
  <!-- 회원가입 선택 모달창 -->
  <div v-if="signInBtn == true">
    <button>저는 <span>길드장</span>이에요!</button>
    <button>저는 <span>길드원</span>이에요!</button>
  </div>

  <!-- 메인 로그인 페이지html -->
  <div>
    <h1>로스트아크 길드 매니저</h1>
  </div>
  <div>
    <div>
      <input type="text" id="userId">
      <input type="text" id="userPw">
    </div>
    <div>
      <button id="logInBtn">확인</button>
    </div>
  </div>
  <div>
    <button id="signInBtn">회원가입</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      signInBtn: false
    }
  }
}
</script>

<style scoped>

</style>
