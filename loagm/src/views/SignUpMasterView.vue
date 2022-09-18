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
  <div class="container">
    <div class="input-layout">
      <div class="input-name">
        <p>이메일</p>
        <p>비밀번호</p>
        <p>비밀번호 확인</p>
        <p>원정대 이름</p>
        <p>길드 이름</p>
      </div>
      <div class="input-input">
        <input type="email" placeholder="Someone@gmail.com">
        <input type="text" placeholder="Password">
        <input type="text" placeholder="Password">
        <input type="text" placeholder="Nickname">
        <input type="text" placeholder="Guildname">
      </div>
    </div>
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

<style scoped>
  /* 모달창 스타일 */
  /* 본 페이지 스타일 */
  .container{
    margin-top: 180px;
    background-color: var(--container-bg-color);
  }
  .input-layout{
    width: 540px;
    height: 430px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 15px;
  }
  .input-name{
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: right;
    flex: 1;
  }
  .input-name p{
    display: flex;
    height: 40px;
    margin: 0;
    margin-left: auto;
  }
  .input-input{
    border: 1px solid white;
    border-radius: 10px;
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14pt;
    flex: 3.2;
  }
  .input-input input{
    width: 300px;
    height: 40px;
    display: flex;
    margin-right: 60px;
  }
  .container button{
    margin-top: 30px;
    border-radius: 10px;
    width: 120px;
    height: 50px;
    font-size: 15pt;
  }
</style>
