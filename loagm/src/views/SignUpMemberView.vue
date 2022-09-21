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

  <!-- 길드원 회원가입 화면 -->
  <div class="container">
    <div class="input-layout">
      <div>
        <span>이메일</span><input type="email" placeholder="Someone@gmail.com">
      </div>
      <div>
        <span>비밀번호</span><input type="text" placeholder="Password">
      </div>
      <div>
        <span>비밀번호 확인</span><input type="text" placeholder="Password">
      </div>
      <div>
        <span>원정대 이름</span><input type="text" placeholder="Nickname">
      </div>
      <div>
        <span>길드 코드</span><input type="text" placeholder="Code">
      </div>
    </div>
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

<style scoped>
  .container{
    margin-top: 160px;
  }
  .input-layout{
    width: 580px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 3px dashed var(--container-bg-color);
    background-color: white;
    border-radius: 15px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .input-layout div{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin: 6px;
    background-color: var(--container-bg-color);
    border-radius: 30px;
  }
  .input-layout div span{
    width: 140px;
    text-align: right;
    font-size: 13pt;
    color: white;
  }
  .input-layout div input{
    width: 280px;
    height: 35px;
    padding-left: 12px;
    margin-right: 40px;
    font-size: 13pt;
    border-radius: 20px;
    border: none;
  }
  .container button{
    background-color: white;
    border: 2px solid var(--container-bg-color);
    color: var(--container-bg-color);
    margin-top: 30px;
    border-radius: 10px;
    width: 150px;
    height: 60px;
    font-size: 16pt;
    font-weight: 700;
  }
</style>
