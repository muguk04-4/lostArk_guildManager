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
    <!-- nav 역할 할 맨윗줄 -->
    <div>
      <div>
        <div>
          <h1>{{ guildName }}</h1>
        </div>
        <div>
          <input type="text">
          <button>검색</button>
        </div>
      </div>

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
      <table></table>
    </div>

    <button>Top</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      guildName: '임시길넴',
      helpBtn: false,
      menuBtn: false,
      isGuildMaster: false,
      isGuildMember: true
    }
  }
}
</script>

<style scoped>

</style>
