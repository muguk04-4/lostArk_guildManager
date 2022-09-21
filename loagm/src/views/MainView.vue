<template>
  <!-- 도움말 모달창 -->
  <div v-if="helpBtn == true">
    <div>
      <h3>도움말</h3>
      <p>쏼라 쏼라 블라ㅜㄷ라불다ㅜ받ㄹ 나는 도움말이다 끼요요용ㄹ곡ㄺ롤</p>
    </div>
  </div>

  <!-- 길드장 메뉴 모달창 -->
  <div v-if="isGuildMaster == true && menuBtn == true">
    <div>
      <button>X</button>
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
      <button>폭파</button>
    </div>
  </div>

  <!-- 길드원 메뉴 모달창 -->
  <div v-if="isGuildMember == true && menuBtn == true">
    <div>
      <button>X</button>
      <div>
        <table></table>
        <button>+</button>
      </div>
      <button>탈퇴</button>
    </div>
  </div>

  <!-- 메인 현황판 html -->
  <div>
    <!-- navBar -->
    <div>
      <!-- 길드명 캐릭검색 -->
      <div>
        <div>
          <h1>{{ guildName }}</h1>
        </div>
        <div>
          <input type="text">
          <button>검색</button>
        </div>
      </div>

      <!-- 정렬버튼 -->
      <div>
        <div>
          <button>발탄</button>
          <button>비아</button>
          <button>쿠크</button>
          <button>아브</button>
          <button>일리</button>
        </div>
        <div>
          <button>딜러</button>
          <button>서폿</button>
        </div>
      </div>

      <!-- 메뉴 및 도움말 -->
      <div>
        <div>
          <button>?</button>
        </div>
        <div>
          <button>메뉴</button>
        </div>
      </div>
    </div>

    <!-- 현황판이 들어갈 곳 -->
    <div>
      <table>
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

    <button>Top</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      guildName: '임시길넴',
      accountName: '임시길넴',
      helpBtn: false,
      menuBtn: false,
      isGuildMaster: false,
      isGuildMember: true,
      isEmpty: false
    }
  }
}
</script>

<style scoped>
  div{
    color: var(--cotainer-bg-color);
    font-size: 10pt;
  }
</style>
