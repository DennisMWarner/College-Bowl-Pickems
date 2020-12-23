<template>
  <div class="team-title-bar mt-3 border rounded bg-dark p-1 mx-2">
    <div v-if="this.$route.path == '/setup'">
      <div>
        <div
          class="col-9 mx-auto no-gutters text-center pt-1 border rounded bg-light text-dark text-left my-1 mt-1"
        >
          <h5>
            {{ this.teamTitleBarData.name }}
            <span class="text-muted small-font ml-3">
              Id: {{ this.teamTitleBarData.id }}</span
            >
          </h5>
        </div>

        <button
          class="btn-sm btn-secondary rounded my-1 mx-1 mb-2 text-center text-white border"
          @click="removeTeamFromGame()"
        >
          Remove this team from this game
        </button>
        <button
          class="btn-sm btn-warning rounded my-1 mx-1 mb-2 text-center text-white border"
          data-toggle="modal"
          data-target="#editTeamModal"
          @click="setActiveEditFields()"
        >
          Edit this team
        </button>

        <button
          class="btn-sm btn-success rounded my-1 mx-1 mb-2 w-75 text-center text-white border"
          @click="setGameWinner()"
        >
          {{ this.teamTitleBarData.name }} is the winner
        </button>
      </div>
    </div>
    <div v-else>
      <div
        class="col-11 mx-auto no-gutters border rounded bg-light text-left my-1 text-dark"
        @click="setActiveteam()"
      >
        {{ this.teamTitleBarData.name }}
      </div>
    </div>

    <!--edit team modal------------------------>
    <div class="modal" tabindex="-1" role="dialog" id="editTeamModal">
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent">
          <div class="modal-body no-gutters p-0">
            <edit-team-modal-body />
          </div>
        </div>
      </div>
    </div>
    <!--------------modal end-------------->
  </div>
</template>


<script>
import editTeamModalBody from "../components/EditTeamModalBody";
import addGameToTeamModalBody from "../components/AddGameToTeamModalBody";
export default {
  name: "team-title-bar",
  data() {
    return {};
  },
  computed: {},
  methods: {
    addGameToTeam() {
      if (this.$store.state.activeTeam.id) {
        let team = this.$store.state.activeTeam;
        team.teamId = this.$store.state.activeteam.id;
        this.$store.dispatch("updateTeam", team);
      }
    },
    async setGameWinner() {
      let gameWon = { ...this.$store.state.activeGame };
      gameWon.wId = this.teamTitleBarData.id;
      await this.$store.dispatch("updateGame", gameWon);
      this.$store.dispatch("getInitAndFormat");
      this.$store.dispatch("clearActiveGame");
    },

    setActiveTeam() {
      this.$store.dispatch("setActiveTeam", this.teamTitleBarData);
    },

    async setActiveEditFields() {
      await this.setActiveTeam();
      this.$store.dispatch("setActiveEditFields", this.teamTitleBarData);
    },
    removeTeamFromGame() {
      let team = this.teamTitleBarData;
      team.gameId = 0;
      this.$store.dispatch("updateTeam", team);
      this.$store.dispatch(
        "resetUserPicksByGame",
        this.$store.state.activeGame
      );
    },
  },
  components: { addGameToTeamModalBody, editTeamModalBody },
  props: ["teamTitleBarData"],
};
</script>


<style scoped>
.small-font {
  font-size: 12px;
}
</style>