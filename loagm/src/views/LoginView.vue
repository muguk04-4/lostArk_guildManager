<template>
  <!-- 회원가입 선택 모달창 -->
  <div id="modal" @click="btnClick" class="modal" v-if="signUpBtn == true">
    <router-link to="/signup_master"><button>저는 <span>길드장</span>이에요!</button></router-link>
    <router-link to="/signup_member"><button>저는 <span>길드원</span>이에요!</button></router-link>
  </div>

  <!-- 메인 로그인 페이지html -->
  <div class="container">
    <div class="webname-layout">
      <h1>로스트아크 길드 매니저</h1>
    </div>
    <div class="input-layout">
      <div class="inputs">
        <div>
          <img src="../assets/icon/id.png" alt="">
          <input @keyup.enter="submit" type="text" id="userId">
        </div>
        <div>
          <img src="../assets/icon/pw.png" alt="">
          <input @keyup.enter="submit" type="password" id="userPw">
        </div>
      </div>
        <router-link to="/main"><button id="logInBtn">확인</button></router-link>
    </div>
    <div class="signup-layout">
      <button @click="btnClick" id="signUpBtn">회원가입</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      signUpBtn: false
    }
  },
  methods: {
    btnClick (event) {
      this.signUpBtn = true
      if (event.target.id === 'modal') {
        this.signUpBtn = false
      }
    }
  }
}
</script>

<style scoped>
  /* 모달 스타일 */
  .modal{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    gap: 50px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .modal button{
    font-size: 15pt;
    font-weight: 700;
    width: 300px;
    height: 140px;
    background-color: white;
    color: var(--container-bg-color);
    border: 5px solid var(--container-bg-color);
    border-radius: 15px;
  }
  .modal button span{
    font-size: 20pt;
  }

  /* 본 페이지 스타일 */
  body button{
    transition: background-color 0.15s, color 0.15s;
  }
  body button:hover{
    background-color: var(--container-bg-color);
    color: white;
  }
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 180px;
  }
  .webname-layout {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8pt;
    width: 300px;
    height: 53px;
    background-color: var(--container-bg-color);
    color: white;
    border: none;
    border-radius: 15px;
  }
  .input-layout{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 400px;
    height: 150px;
    background-color: var(--container-bg-color);
    border: none;
    border-radius: 10px;
  }
  .inputs{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
  }
  .inputs div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 40px;
    background-color: white;
    border-radius: 20px;
  }
  .inputs div img{
    width: 50px;
    height: 100%;
    opacity: 55%;
  }
  .inputs div input{
    font-size: 13pt;
    margin-left: 5px;
    width: 190px;
    border: none;
  }
  .inputs div:nth-child(2){
    margin-top: 12px;
  }
  .input-layout button{
    font-weight: 800;
    font-size: 15pt;
    width: 60px;
    height: 90px;
    background-color: white;
    color: var(--container-bg-color);
    border: 3px solid white;
    border-radius: 10px;
  }

  .signup-layout{
    margin-top: 30px;
  }
  .signup-layout button{
    font-weight: 800;
    font-size: 13pt;
    width: 150px;
    height: 50px;
    background-color: white;
    color: var(--container-bg-color);
    border: 3px solid var(--container-bg-color);
    border-radius: 10px;
  }
</style>
