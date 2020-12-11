<template>
  <div class="leader-board-rows text-center">
    <div class="leader-board-row no-gutters text-white text-left row mx-1 mb-2">
      <div class="w-50 pl-3"></div>
      <div class="w-50 row no-gutters">
        <span
          class="w-25 text-center mx-auto border rounded bg-dark"
          @click="sortByPoints()"
          >Pts Won</span
        >
        <span
          class="w-25 text-center mx-auto border rounded bg-dark"
          @click="sortByPercent()"
          >Win %</span
        >
        <span
          class="w-25 text-center mx-auto border rounded bg-dark"
          @click="sortByPointsLeft()"
          >Pts Left</span
        >
      </div>
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
  methods: {
    async loadTestLeaderBoard() {
      await this.$store.dispatch("getLeaderBoardData");
      // console.log("users: ", this.$store.state.users);
      // console.log("rows: ", this.$store.state.leaderBoardRows);
    },
    sortByPoints() {
      this.$store.dispatch("sortByPoints");
    },
    sortByPercent() {
      this.$store.dispatch("sortByPercent");
    },
    sortByPointsLeft() {
      this.$store.dispatch("sortByPointsLeft");
    },
  },
  created() {
    this.$store.dispatch("getCompletedGames");
  },
  components: { leaderBoardRow },
};
</script>


<style scoped>
</style>