<template>
  <div class="leaderboard-rows text-center">
    <button
      class="btn btn-warning text-center text-white border rounded border-white my-3 w-50"
      @click="loadTestLeaderBoard()"
    >
      Test Leaderboard
    </button>
    <leaderboard-row
      v-for="leaderboardRow in leaderboardRows"
      :leaderboardRowData="leaderboardRow"
      :key="leaderboardRow.id"
    />
  </div>
</template>


<script>
import leaderboardRow from "../components/LeaderboardRow";
export default {
  name: "leaderboard-rows",
  data() {
    return {};
  },
  computed: {
    leaderboardRows() {
      return this.$store.state.leaderboardRows;
    },
  },
  methods: {
    async loadTestLeaderBoard() {
      await this.$store.dispatch("getTestLeaderBoardData");
      console.log("users: ", this.$store.state.users);
      console.log("rows: ", this.$store.state.leaderboardRows);
    },
  },
  components: { leaderboardRow },
};
</script>


<style scoped>
</style>