<template>
  <div class="leader-board-rows mt-3 text-center">
    <div class="leader-board-row no-gutters text-white text-left row mt-2 mb-2">
      <div class="w-50 pl-3 pr-1">
        <img
          src="../assets/leaderboard-logo.png"
          alt=""
          class="img img-fluid rounded"
        />
      </div>
      <leader-board-header-buttons class="w-50 row no-gutters" />
    </div>
    <leader-board-row
      v-for="leaderBoardRow in leaderBoardRows"
      :leaderBoardRowData="leaderBoardRow"
      :key="leaderBoardRow.id"
    />
  </div>
</template>


<script>
import leaderBoardRow from "../components/LeaderBoardRow";
import leaderBoardHeaderButtons from "./LeaderBoardHeaderButtons.vue";
export default {
  name: "leader-board-rows",
  data() {
    return {};
  },
  computed: {
    leaderBoardRows() {
      return this.$store.state.leaderBoardRows;
    },
  },
  methods: {},
  created() {
    this.$store.dispatch("getCompletedGames");
    this.$store.dispatch("getTotalPointsPoss");
  },
  components: { leaderBoardRow, leaderBoardHeaderButtons },
};
</script>


<style scoped>
</style>