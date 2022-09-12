<template>
  <!-- 가입 후 뜨는 길드코드 안내 모달창 -->
  <div v-if="signUpSuccess == true">
    <div>
      <p>
        {{ guildName }} 길드의 길드 코드는 <br>
        {{ guildCode }}입니다.<br>
        길드원들에게 알려주세요! <br>
        &#40; 관리자는 설정에서 길드 코드를 다시 확인할 수 있습니다. &#41;
      </p>
    </div>
    <button>확인 및 코드 복사</button>
  </div>

  <!-- 길드장 회원가입 화면 -->
  <div>
    <p>이메일<input type="email" placeholder="someone@gmail.com"></p>
    <p>비밀번호<input type="text" placeholder="password"></p>
    <p>비밀번호 확인<input type="text" placeholder="password"></p>
    <p>원정대 이름<input type="text" placeholder="Nickname"></p>
    <p>길드 이름<input type="text" placeholder="guildname"></p>
    <button>확인</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      guildName: '임시길넴',
      guildCode: 'WEFH*#HINOVS(8',
      signUpSuccess: false
    }
  }
}
</script>

<style>

</style>
