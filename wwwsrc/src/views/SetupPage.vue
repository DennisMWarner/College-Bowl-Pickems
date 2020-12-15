<template>
  <div class="setup-page text-white text-center">
    <add-game-button />
    <add-team-button />
    <lock-all-games-button />
    <button
      class="btn btn-warning border border-white text-center text-white w-75 mb-3"
      @click="resetWinners()"
    >
      Reset all winners
    </button>
    <div
      v-if="this.$auth.isAuthenticated && this.$store.state.teams.length < 1"
      class="text-center"
    >
      <button
        class="btn btn-danger p-2 w-75 text-white text-center border border-white rounded"
        @click="addAllTeams()"
      >
        Add All Teams
      </button>
    </div>

    <div class="col-12 text-center p-0">
      <game-title-bars />
    </div>
    <!-- <div v-if="this.$store.state.cancelledGames.length > 0">
      <div
        class="col-12 text-center p-0 border w-75 my-3 rounded border-white bg-warning text-white mx-auto text-center"
      >
        Cancelled Games
      </div>
      <div class="col-12 text-center p-0">
        <other-game-title-bars />
      </div>
    </div> -->
    <!-- <div v-if="this.$store.state.postponedGames.length > 0">
      <div
        class="col-12 text-center p-0 border w-75 my-3 rounded border-white bg-warning text-white mx-auto text-center"
      >
        Postponed Games
      </div>
      <div class="col-12 text-center p-0">
        <postponed-game-title-bars />
      </div>
    </div> -->
    <!-- <div v-if="this.$store.state.unlockedGames.length > 0">
      <div
        class="col-12 text-center p-0 border w-75 my-3 rounded border-white bg-warning text-white mx-auto text-center"
      >
        Unlocked Games
      </div>
      <div class="col-12 text-center p-0">
        <unlocked-game-title-bars />
      </div>
    </div> -->
  </div>
</template>


<script>
import dates from "../components/Dates";
import addGameButton from "../components/AddGameButton";
import games from "../components/Games";
import gameTitleBars from "../components/GameTitleBars";
// import cancelledGameTitleBars from "../components/CancelledGameTitleBars";
// import postponedGameTitleBars from "../components/PostponedGameTitleBars";
// import unlockedGameTitleBars from "../components/UnlockedGameTitleBars";
import addTeamButton from "../components/AddTeamButton";
import lockAllGamesButton from "../components/LockAllGamesButton";
export default {
  name: "setup-page",
  data() {
    return {};
  },
  computed: {},
  async beforeCreate() {
    this.$store.dispatch("getInitAndFormat");
  },
  // created() {
  //   this.$store.dispatch("getAllOtherGames");
  // },
  methods: {
    addAllTeams() {
      // this.$store.dispatch("addAllTeams");
    },
    resetTeams() {
      this.$store.dispatch("resetTeamGameIds");
    },
    resetWinners() {
      this.$store.dispatch("resetWinners");
    },
  },
  components: {
    games,
    addGameButton,
    gameTitleBars,
    // cancelledGameTitleBars,
    // postponedGameTitleBars,
    // unlockedGameTitleBars,
    dates,
    addTeamButton,
    lockAllGamesButton,
  },
};
</script>


<style scoped>
</style>