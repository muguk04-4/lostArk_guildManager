<template>
  <!-- 가입 후 뜨는 길드코드 안내 모달창 -->
  <div v-if="signUpSuccess == true">
    <div>
      <p>
        가입을 축하드립니다!<br>
        로그인 페이지로 이동해 다시 로그인해주세요!
      </p>
    </div>
    <button>확인</button>
  </div>

  <!-- 길드장 회원가입 화면 -->
  <div>
    <p>이메일<input type="email" placeholder="someone@gmail.com"></p>
    <p>비밀번호<input type="text" placeholder="password"></p>
    <p>비밀번호 확인<input type="text" placeholder="password"></p>
    <p>원정대 이름<input type="text" placeholder="Nickname"></p>
    <p>길드 코드<input type="text" placeholder="guildcode"></p>
    <button>확인</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      signUpSuccess: false
    }
  }
}
</script>

<style>

</style>
