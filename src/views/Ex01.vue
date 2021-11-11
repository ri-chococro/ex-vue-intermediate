<template>
  <div class="ex01">
    <h1>野球チーム一覧</h1>
    <div v-for="team of teams" v-bind:key="team">
      <router-link :to="'/ex01TeamDetail/' + team.id">{{
        team.teamName
      }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Team } from "@/types/team";

@Component
export default class Ex01 extends Vue {
  get teams() {
    return this["$store"].getters.getTeams;
  }
}
</script>

<style></style>
