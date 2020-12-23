<template>
  <div class="setup-page text-white text-center">
    <!--  -->
    <!-- <button
      class="btn bg-warning rounded border text-white mb-2 border-white w-50"
      @click="toggleAdminOptions()"
    >
      Show Options
    </button> -->
    <router-link class="w-50 mr-3 mb-3" :to="{ name: 'stats-page' }">
      <button
        class="btn bg-warning rounded border text-white mb-2 border-white w-50 mx-auto"
        @click="getUserViews()"
      >
        User View
      </button></router-link
    >
    <button class="btn text-white border" @click="adjustPts()">
      Adjust points
    </button>
    <!-- <add-game-button />
    <add-team-button />
    <lock-all-games-button />
    <unlock-games-button />
    <button
      class="btn btn-danger border border-white text-center text-white w-75 mb-3"
      data-target="#resetWinnersModal"
      data-toggle="modal"
    >
      Reset all winners
    </button> -->
    <!--Reset winners modal------------------------>
    <!-- <div class="modal" tabindex="-1" role="dialog" id="resetWinnersModal">
      <div class="modal-dialog-centered m-3" role="document">
        <div class="modal-content bg-danger">
          <div class="modal-body p-3 border rounded border-white text-center">
            <h4>
              CAUTION: FOR TESTING ONLY! DO NOT USE ONCE SEASON HAS STARTED! ALL
              WINNERS WOULD HAVE TO BE PICKED FOR GAMES INDIVDUALLY!
            </h4>
            <button
              class="btn btn-danger test-center text-white border rounded w-50 border-white m-2"
              data-dismiss="modal"
              @click="resetWinners()"
            >
              Reset All Winners</button
            ><button
              class="btn btn-info test-center text-white border rounded w-50 border-white m-2"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div> -->
    <!--------------modal end-------------->
    <!-- <button
      class="btn btn-danger border border-white text-center text-white w-75 mb-3"
      data-target="#resetTeamsModal"
      data-toggle="modal"
    >
      Reset all teams
    </button>-->
    <!--Reset teams modal------------------------>
    <!-- <div class="modal" tabindex="-1" role="dialog" id="resetTeamsModal">
      <div class="modal-dialog-centered m-3" role="document">
        <div class="modal-content bg-danger">
          <div class="modal-body p-3 border rounded border-white text-center">
            <h4>
              CAUTION: FOR TESTING ONLY! DO NOT USE ONCE SEASON HAS STARTED! ALL
              TEAMS WOULD HAVE TO BE ADDED BACK TO GAMES INDIVDUALLY!
            </h4>
            <button
              class="btn btn-danger test-center text-white border rounded w-50 border-white m-2"
              data-dismiss="modal"
              @click="resetTeams()"
            >
              Reset All Teams</button
            ><button
              class="btn btn-info test-center text-white border rounded w-50 border-white m-2"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div> -->
    <!--------------modal end-------------->
    <!-- <button
      class="btn btn-success border border-white text-center text-white w-75 mb-3"
      @click="genUserSims()"
    >
      Generate User Sim Pick Sheets
    </button>
     -->
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
    <div v-if="this.$store.state.otherGames.length > 0">
      <div
        class="col-12 text-center p-0 border w-75 my-3 rounded border-white bg-warning text-white mx-auto text-center"
      >
        Games with status other than "locked" or "unlocked"
      </div>
      <div class="col-12 text-center p-0">
        <other-game-title-bars />
      </div>
    </div>
  </div>
</template>


<script>
import dates from "../components/Dates";
import addGameButton from "../components/AddGameButton";
import games from "../components/Games";
import gameTitleBars from "../components/GameTitleBars";
import otherGameTitleBars from "../components/OtherGameTitleBars";
import addTeamButton from "../components/AddTeamButton";
import lockAllGamesButton from "../components/LockAllGamesButton";
import unlockGamesButton from "../components/UnlockGamesButton";
export default {
  name: "setup-page",
  data() {
    return {};
  },
  computed: {},
  async beforeCreate() {
    this.$store.dispatch("getInitAndFormat");
    this.$store.dispatch("getAllOtherGames");
  },
  created() {},
  methods: {
    addAllTeams() {
      this.$store.dispatch("addAllTeams");
    },
    resetTeams() {
      this.$store.dispatch("resetTeamGameIds");
    },
    resetWinners() {
      this.$store.dispatch("resetWinners");
    },
    genUserSims() {},
    adjustPts() {
      this.$store.dispatch("adjustPts");
    },

    toggleAdminOptions() {
      this.$store.dispatch("toggleAdminOptions");
    },
    async getUserViews() {
      await this.$store.dispatch("getAllPicks");
      this.$store.dispatch("getUserViews");
    },
  },
  components: {
    games,
    addGameButton,
    gameTitleBars,
    otherGameTitleBars,
    dates,
    addTeamButton,
    lockAllGamesButton,
    unlockGamesButton,
  },
};
</script>


<style scoped>
</style>