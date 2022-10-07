<template>
  <!-- 가입 후 뜨는 길드코드 안내 모달창 -->
  <div class="modal" v-if="isSignUpSuccess == true">
    <div>
      <p>
        가입을 축하드립니다!<br>
        로그인 페이지로 이동해 다시 로그인해주세요!
      </p>
    </div>
    <router-link to="/"><button id="check2">확인</button></router-link>
  </div>

  <!-- 길드원 회원가입 화면 -->
  <div class="container">
    <div class="input-layout">
      <div>
        <span>이메일</span><input type="email" placeholder="Someone@gmail.com">
        <button id="emailCheck" @click="btnClick">중복확인</button>
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
    <button @click="btnClick" id="check1" class="check1">확인</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSignUpSuccess: false,
      isEmailNew: false
    }
  },
  methods: {
    btnClick (event) {
      if (event.target.id === 'check1') {
        if (this.isEmailNew === false) {
          alert('이메일 중복 확인해주세요.')
        } else {
          this.isSignUpSuccess = true
        }
      }
      if (event.target.id === 'emailCheck') {
        this.isEmailNew = true
        alert('확인되었습니다.')
      }
    }
  }
}
</script>

<style scoped>
/* 모달창 스타일 */
  .modal{
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .modal p{
    border-radius: 15px;
    background-color: var(--container-bg-color);
    color: white;
    border: none;
    width: 500px;
    height: 200px;
    font-size: 15pt;
    line-height: 140%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal button{
    background-color: white;
    border: 2px solid var(--container-bg-color);
    color: var(--container-bg-color);
    margin-top: 20px;
    border-radius: 10px;
    width: 230px;
    height: 65px;
    font-size: 16pt;
    font-weight: 700;
    transition: background-color 0.15s, color 0.15s;
  }
  .modal button:hover{
    background-color: var(--container-bg-color);
    color: white;
  }

  /* 본 페이지 스타일 */
  .container{
    margin-top: 160px;
  }
  .container button:hover{
    background-color: var(--container-bg-color);
    color: white;
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
  .input-layout div:nth-child(1) {
    position: relative;
  }
  .input-layout button{
    background-color: white;
    border: 2px solid var(--container-bg-color);
    border-radius: 0px 20px 20px 0px;
    width: 80px;
    height: 40px;
    position: absolute;
    right: 40px;
    transition: background-color 0.15s, color 0.15s;
  }
  .check1{
    background-color: white;
    border: 2px solid var(--container-bg-color);
    color: var(--container-bg-color);
    margin-top: 30px;
    border-radius: 10px;
    width: 150px;
    height: 60px;
    font-size: 16pt;
    font-weight: 700;
    transition: background-color 0.15s, color 0.15s;
  }
</style>
