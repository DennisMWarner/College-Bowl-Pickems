<template>
  <div class="setup-page text-white">
    <add-game-button />
    <add-team-button />
    <div
      v-if="this.$auth.isAuthenticated && this.$store.state.teams.length < 1"
      class="w-75 text-center"
    >
      <button
        class="btn btn-danger p-2 mx-auto text-white text-center border btn-block border-white rounded"
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
        Cancelled or postponed games
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
export default {
  name: "setup-page",
  data() {
    return {};
  },
  computed: {},
  async beforeCreate() {
    if (this.$store.state.formattedGames.length < 1) {
      await this.$store.dispatch("formatGames");
    }
  },
  created() {
    this.$store.dispatch("getAllOtherGames");
  },
  methods: {
    formatGames() {
      // console.log("games: ");
      this.$store.state.teams.forEach((t) => {
        if (
          this.$store.state.teams.indexOf(t) == 0 ||
          this.$store.state.teams.indexOf(t) % 2 == 0
        ) {
          let game = {};
          game.firstTeam = t;
          game.secondTeam = this.$store.state.teams[
            this.$store.state.teams.indexOf(t) + 1
          ];

          this.$store.dispatch("formatGame", game);
          // console.log("game pushed: ", game);
        }
      });
    },
    formatTeams() {
      // console.log("Format Teams called.");
      this.$store.state.teamsRawData.forEach((t) => {
        let team = {};
        team.name = t[0];
        team.priColor = t[1];
        team.secColor = t[2];
        this.$store.dispatch("addTeam", team);
        // console.log("team added: ", team);
      });
    },
    addAllTeams() {
      this.$store.dispatch("addAllTeams");
    },
    resetTeams() {
      this.$store.dispatch("resetTeamGameIds");
    },
  },
  components: {
    games,
    addGameButton,
    gameTitleBars,
    otherGameTitleBars,
    dates,
    addTeamButton,
  },
};
</script>


<style scoped>
</style>