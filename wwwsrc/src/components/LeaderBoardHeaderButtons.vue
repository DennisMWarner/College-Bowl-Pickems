<template>
  <div class="leader-board-header-buttons">
    <leader-board-header-button
      v-for="leaderBoardHeaderButton in leaderBoardHeaderButtons"
      :leaderBoardHeaderButtonData="leaderBoardHeaderButton"
      :key="leaderBoardHeaderButton.name"
    />
  </div>
</template>


<script>
import leaderBoardHeaderButton from "../components/LeaderBoardHeaderButton";
export default {
  name: "leader-board-header-buttons",
  data() {
    return {};
  },
  computed: {
    leaderBoardHeaderButtons() {
      return this.$store.state.leaderBoardHeaderButtons;
    },
  },
  methods: {},
  components: { leaderBoardHeaderButton },
};
</script>


<style scoped>
</style>