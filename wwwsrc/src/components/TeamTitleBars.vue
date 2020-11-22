<template>
  <div class="team-title-bars">
    <team-title-bar
      v-for="teamTitleBar in teamTitleBars"
      :teamTitleBarData="teamTitleBar"
      :key="teamTitleBar.name"
    />
  </div>
</template>


<script>
import teamTitleBar from "../components/TeamTitleBar";
export default {
  name: "team-title-bars",
  data() {
    return {};
  },
  computed: {
    teamTitleBars() {
      return this.$store.state.activeTeamsByGameId;
    },
  },
  methods: {},
  components: { teamTitleBar },
};
</script>


<style scoped>
</style>