<template>
  <div class="teamDetail">
    <div class="heading">球団名</div>
    <div>{{ currentTeam.teamName }}</div>
    <div class="heading">本拠地</div>
    <div>{{ currentTeam.home }}</div>
    <div class="heading">発足日</div>
    <div>{{ currentTeam.formatDate }}</div>
    <div class="heading">歴史</div>
    <pre><div>{{ currentTeam.history }}</div></pre>
    <button type="button" v-on:click="onClick">戻る</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Team } from "@/types/team";

@Component
export default class Ex01TeamDetail extends Vue {
  //対象の野球チームオブジェクト
  private currentTeam!: Team;

  /**
   * VuexストアのGetter経由で受け取ったリクエストパラメータのIDから１件の野球チーム情報を取得する.
   *
   */
  created() {
    const teamID = parseInt(this["$route"].params.id);
    this.currentTeam = this["$store"].getters.getTeamById(teamID);
    console.log(this.currentTeam);
  }

  /**
   * 戻るボタンが押されたら野球チーム一覧ページに遷移.
   */
  onClick() {
    this["$router"].push("/ex01");
  }
}
</script>

<style scoped>
.teamDetail {
  text-align: left;
}
.heading {
  font-weight: bold;
}
</style>
