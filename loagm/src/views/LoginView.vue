<template>
  <!-- 회원가입 선택 모달창 -->
  <div class="modal" v-if="signInBtn == true">
    <button>저는 <span>길드장</span>이에요!</button>
    <button>저는 <span>길드원</span>이에요!</button>
  </div>

  <!-- 메인 로그인 페이지html -->
  <div class="container">
    <div class="webname-layout">
      <h1>로스트아크 길드 매니저</h1>
    </div>
    <div class="input-layout">
      <div class="inputs">
        <input type="text" id="userId">
        <input type="text" id="userPw">
      </div>
        <button id="logInBtn">확인</button>
    </div>
    <div class="signup-layout">
      <button id="signUpBtn">회원가입</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      signUpBtn: false
    }
  }
}
</script>

<style scoped>
  /* 모달 스타일 */
  .modal{
  background-color: rgb(139, 138, 138);
  text-align: center;
  }
  .modal button{
    border: 1px solid black;
    width: 100px;
    height: 100px;
  }

  /* 본 페이지 스타일 */
  .container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 180px;
  }
  .webname-layout {
    background-color: var(--cotainer-bg-color);
    color: white;
    border: 1px solid black;
    border-radius: 15px;
    height: 55px;
    width: 300px;
    font-size: 8pt;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .input-layout{
    background-color: var(--cotainer-bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 150px;
    margin-top: 40px;
    border: 1px solid black;
    border-radius: 10px;
  }
  .inputs{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .inputs input{
    border-radius: 10px;
    width: 300px;
    height: 20px;
  }
  .inputs input:nth-child(2){
    margin-top: 20px;
  }
  .input-layout button{
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    color: var(--cotainer-bg-color);
    font-weight: 800;
    font-size: 13pt;
    width: 50px;
    height: 70px;
  }
  .signup-layout{
    margin-top: 30px;
  }
  .signup-layout button{
    font-weight: 800;
    font-size: 13pt;
    background-color: var(--cotainer-bg-color);
    color: white;
    border-radius: 10px;
    width: 150px;
    height: 50px;
  }
</style>
