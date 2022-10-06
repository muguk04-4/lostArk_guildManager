<template>
  <!-- 도움말 모달창 -->
  <div id="modal" @click="btnClick" class="modal" v-if="helpBtn == true">
    <div class="help-box">
      <button id="close" @click="btnClick" class="close">X</button>
      <h3>도움말</h3>
      <p>쏼라 쏼라 블라ㅜㄷ라불다ㅜ받ㄹ 나는 도움말이다 끼요요용ㄹ곡ㄺ롤</p>
    </div>
  </div>

  <!-- 길드장 메뉴 모달창 -->
  <div id="modal" @click="btnClick" class="modal" v-if="isGuildMaster == true && menuBtn == true">
    <div class="menu-box">
      <button id="close" @click="btnClick" class="close">X</button>
      <div>
        <input type="text">
        <button>복사</button>
      </div>
      <div>
        <table></table>
        <button>+</button>
      </div>
      <div>
        <table></table>
      </div>
      <router-link to="/"><button class="logout">로그아웃</button></router-link>
      <router-link to="/"><button class="secession">탈퇴</button></router-link>
    </div>
  </div>

  <!-- 길드원 메뉴 모달창 -->
  <div id="modal" @click="btnClick" class="modal" v-if="isGuildMember == true && menuBtn == true">
    <div class="menu-box">
      <button id="close" @click="btnClick" class="close">X</button>
      <div>
        <table></table>
        <button>+</button>
      </div>
      <router-link to="/"><button class="logout">로그아웃</button></router-link>
      <router-link to="/"><button class="secession">탈퇴</button></router-link>
    </div>
  </div>

  <!-- 메인 현황판 html -->
  <div class="container">
    <!-- navBar -->
    <div class="navbar">
      <!-- 길드명 캐릭검색 -->
      <div class="first">
        <div>
          <h2>{{ guildName }}</h2>
        </div>
        <div>
          <input @keyup.enter="submit" type="text" placeholder="원정대, 캐릭터 이름">
          <button>검색</button>
        </div>
      </div>

      <!-- 정렬버튼 -->
      <div class="second">
        <div>
          <button class="bal">발탄</button>
          <button class="via">비아</button>
          <button class="kuk">쿠크</button>
          <button class="abr">아브</button>
          <button class="ili">일리</button>
        </div>
        <div>
          <button class="deal">딜러</button>
          <button class="sup">서폿</button>
        </div>
      </div>

      <!-- 메뉴 및 도움말 -->
      <div class="third">
        <div>
          <button id="help" @click="btnClick">?</button>
        </div>
        <div>
          <button id="menu" @click="btnClick">메뉴</button>
        </div>
      </div>
    </div>

    <!-- 현황판이 들어갈 곳 -->
    <div class="container">
      <table class="account-table">
        <!-- 원정대 들어갈 곳 -->
        <thead>
          <tr>{{ accountName }}</tr>
          <tr>직업</tr>
          <tr>템렙</tr>
          <tr>발탄</tr>
          <tr>비아</tr>
          <tr>쿠크</tr>
          <tr>아브</tr>
          <tr>일리</tr>
        </thead>
        <!-- 캐릭터 정보 들어갈 곳 -->
        <tbody></tbody>
      </table>
    </div>

    <button id="top" class="to-top" @click="btnClick">TOP</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      guildName: 'opentheGate',
      accountName: '임시원넴',
      helpBtn: false,
      menuBtn: false,
      // 회원 데이터
      isGuildMaster: false,
      isGuildMember: true
    }
  },
  methods: {
    btnClick (event) {
      if (event.target.id === 'help') {
        this.helpBtn = true
      }
      if (event.target.id === 'menu') {
        this.menuBtn = true
      }
      if (event.target.id === 'close' || event.target.id === 'modal') {
        this.helpBtn = false
        this.menuBtn = false
      }
      if (event.target.id === 'top') {
        document.documentElement.scrollTop = 0
      }
    }
  }
}
</script>

<style scoped>
  /* 모달창 기본 스타일 */
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
    z-index: 2;
  }
  .help-box{
    background-color: var(--container-bg-color);
    border-radius: 10px;
    color: white;
    width: 600px;
    height: 600px;
    position: relative;
  }
  .menu-box{
    background-color: var(--container-bg-color);
    border-radius: 10px;
    color: white;
    width: 800px;
    min-height: 500px;
    padding-bottom: 80px;
    position: relative;
  }
  .close{
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    height: 30px;
    border: 2px solid var(--container-bg-color);
    border-radius: 0px 10px 0px 10px;
    color: var(--container-bg-color);
  }
  .logout{
    position: absolute;
    bottom: 8px;
    right: 58px;
  }
  .secession{
    position: absolute;
    bottom: 8px;
    right: 10px;
    color: red;
  }

  /* 본 페이지 스타일 */
  .container{
    display: flex;
    flex-direction: column;
    height: 2000px;
  }
  /* 윗부분 */
  .navbar{
    display: flex;
    gap: 10px;
  }
  .first{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
  }
  .first div{
    display: flex;
  }
  .first div:nth-child(1){
    margin-bottom: -12px;
  }
  .first h2{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background-color: var(--container-bg-color);
    color: white;
    min-width: 150px;
    padding-right: 25px;
    padding-left: 25px;
    height: 55px;
  }
  .first input{
    font-size: 13pt;
    border-radius: 10px 0px 0px 10px;
    border: 1px solid var(--container-bg-color);
    padding: 5px;
  }
  .first button{
    background-color: var(--container-bg-color);
    color: white;
    border-radius: 0px 10px 10px 0px;
    border: none;
    font-size: 12pt;
  }
  .second{
    border-radius: 15px;
    border: 3px solid var(--container-bg-color);
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    margin-top: 10px;
    gap: 10px;
  }
  .second div{
    display: flex;
    gap: 10px;
  }
  .second div button{
    width: 55px;
    height: 40px;
    font-size: 14pt;
    border: 2px solid var(--container-bg-color);
    border-radius: 10px;
    background-color: white;
    color: black;
    transition: background-color 0.2s, color 0.2s;
  }
  .second div:nth-child(2) button{
    width: 150px;
  }
  .bal:hover{
    background-color: #66525e;
    color: #82cdde;
  }
  .via:hover{
    background-color: #660033;
    color: #ea2c8b;
  }
  .kuk:hover{
    background-color: #000000;
    color: #ff0000;
  }
  .abr:hover{
    background-color: #844fce;
    color: #aea8d2;
  }
  .ili:hover{
    background-color: #c73720;
    color: #42ad25;
  }
  .deal:hover{
    background-color: red;
    color: white;
  }
  .sup:hover{
    background-color: green;
    color: white;
  }
  .third{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .third div{
    display: flex;
  }
  .third div button{
    width: 55px;
    height: 40px;
    font-size: 14pt;
    font-weight: 700;
    border: 2px solid var(--container-bg-color);
    border-radius: 10px;
    background-color: white;
    color: var(--container-bg-color);
    transition: background 0.15s, color 0.15s;
  }
  .third div button:hover{
    background-color: var(--container-bg-color);
    color: white;
  }

  /* 아랫부분 */
  .account-table{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
  .account-table thead{
    display: flex;
  }
  .to-top{
    position: fixed;
    right: 10px;
    bottom: 10px;
    z-index: 1;
    height: 70px;
    width: 50px;
    border-radius: 10px;
    border: 2px solid var(--container-bg-color);
    color: var(--container-bg-color);
    background-color: white;
    font-size: 12pt;
    font-weight: 700;
  }
</style>
