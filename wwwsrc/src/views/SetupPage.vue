<template>
  <div class="setup-page text-white">
    <add-game-button />
    <add-team-button />
    <div
      v-if="this.$auth.isAuthenticated && this.$store.state.teams.length < 1"
      class="w-100 m-4 text-center"
    >
      <button
        class="btn btn-danger p-2 mx-auto text-white text-center border btn-block border-white rounded"
        @click="addAllTeams()"
      >
        Add All Teams
      </button>
    </div>
    <!-- <div class="col-10 offset-1 mt-3 text-center">
      <button
        class="btn btn-warning p-2 mx-auto text-white text-center border btn-block border-white rounded"
        @click="formatGames()"
      >
        Format Games
      </button>
    </div>
    <button
      class="btn btn-success rounded border col-10 offset-1 border-white mt-4 text-center text-white"
      @click="formatTeams()"
    >
      Format Teams
    </button> -->

    <div class="col-12 text-center p-0">
      <game-title-bars />
    </div>
  </div>
</template>


<script>
import dates from "../components/Dates";
import addGameButton from "../components/AddGameButton";
import games from "../components/Games";
import gameTitleBars from "../components/GameTitleBars";
import addTeamButton from "../components/AddTeamButton";
export default {
  name: "setup-page",
  data() {
    return {};
  },
  computed: {},
  methods: {
    formatGames() {
      console.log("games: ");
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
          console.log("game pushed: ", game);
        }
      });
    },
    formatTeams() {
      console.log("Format Teams called.");
      this.$store.state.teamsRawData.forEach((t) => {
        let team = {};
        team.name = t[0];
        team.priColor = t[1];
        team.secColor = t[2];
        this.$store.dispatch("addTeam", team);
        console.log("team added: ", team);
      });
    },
    addAllTeams() {
      this.$store.dispatch("addAllTeams");
    },
  },
  components: { games, addGameButton, gameTitleBars, dates, addTeamButton },
};
</script>


<style scoped>
</style>