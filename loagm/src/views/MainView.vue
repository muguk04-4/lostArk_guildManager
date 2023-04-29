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
      <!-- 테이블 넣을 곳 -->
      <router-link to="/"><button class="logout">로그아웃</button></router-link>
      <router-link to="/"><button class="secession">탈퇴</button></router-link>
    </div>
  </div>

  <!-- 길드원 메뉴 모달창 -->
  <div id="modal" @click="btnClick" class="modal" v-if="isGuildMember == true && menuBtn == true">
    <div class="menu-box">
      <button id="close" @click="btnClick" class="close">X</button>
      <div class="guildMember-div">
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
        <thead></thead>
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
      guildName: '임시길넴',
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
    },
    characterResearch (event) {
      console.log('클릭함')
    }
  }
}
</script>

<style scoped>
  /* 길드멤버 메뉴 스타일 */
  /* 이미지로 대체 */
  .guildMember-div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  /* 길드마스터 메뉴 스타일 */
  /* 모달창 기본 스타일 */
  .modal{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .help-box{
    position: relative;
    width: 600px;
    height: 600px;
    background-color: var(--container-bg-color);
    color: white;
    border-radius: 10px;
  }
  .menu-box{
    position: relative;
    padding-bottom: 80px;
    width: 800px;
    min-height: 500px;
    background-color: var(--container-bg-color);
    color: white;
    border-radius: 10px;
  }
  .close{
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    height: 30px;
    color: var(--container-bg-color);
    border: 2px solid var(--container-bg-color);
    border-radius: 0px 10px 0px 10px;
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
    /* ------------ 완성 후 height 제거 */
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
    padding-right: 25px;
    padding-left: 25px;
    min-width: 150px;
    height: 55px;
    background-color: var(--container-bg-color);
    color: white;
    border-radius: 25px;
  }
  .first input{
    font-size: 13pt;
    padding: 5px;
    border: 1px solid var(--container-bg-color);
    border-radius: 10px 0px 0px 10px;
  }
  .first button{
    font-size: 12pt;
    background-color: var(--container-bg-color);
    color: white;
    border: none;
    border-radius: 0px 10px 10px 0px;
  }
  .second{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    gap: 10px;
    width: 350px;
    background-color: var(--container-bg-color);
    border: 3px solid var(--container-bg-color);
    border-radius: 15px;
  }
  .second div{
    display: flex;
    gap: 10px;
  }
  .second div button{
    font-size: 14pt;
    width: 55px;
    height: 40px;
    background-color: white;
    color: black;
    border: 2px solid var(--container-bg-color);
    border-radius: 10px;
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
    font-size: 14pt;
    font-weight: 700;
    width: 55px;
    height: 40px;
    background-color: white;
    color: var(--container-bg-color);
    border: 2px solid var(--container-bg-color);
    border-radius: 10px;
    transition: all 0.15s;
  }
  .third div button:hover{
    background-color: var(--container-bg-color);
    color: white;
  }

  /* 아랫부분 */
  .account-table{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  .account-table thead{
    display: flex;
  }
  .to-top{
    position: fixed;
    right: 10px;
    bottom: 10px;
    z-index: 1;
    font-size: 12pt;
    font-weight: 700;
    width: 50px;
    height: 70px;
    background-color: white;
    color: var(--container-bg-color);
    border: 2px solid var(--container-bg-color);
    border-radius: 10px;
    transition: background 0.15s, color 0.15s;
  }
  .to-top:hover{
    background-color: var(--container-bg-color);
    color: white;
  }
</style>
