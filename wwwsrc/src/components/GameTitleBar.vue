<template>
  <div class="game-title-bar">
    <div
      class="col-11 mx-auto no-gutters border rounded bg-light text-left my-1 text-dark"
      @click="setActiveGame()"
    >
      {{ this.gameTitleBarData.name }}
    </div>
    <div
      v-if="
        this.$route.path == '/setup' &&
        this.$store.state.activeGame.name == gameTitleBarData.name
      "
    >
      <button
        class="btn btn-primary rounded m-1 text-center text-white border"
        data-toggle="modal"
        data-target="#add-team-to-game-modal"
      >
        Add a team
      </button>
    </div>
    <!--add-team-to-game-modal-------------------------------------->
    <div class="modal" tabindex="-1" role="dialog" id="add-team-to-game-modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content bg-transparent">
          <div class="modal-body">
            <add-team-to-game-modal-body />
            <button
              class="btn btn-warning text-white rounded border border-white w-25 mx-2"
              data-dismiss="modal"
              @click="addTeamToGame()"
            >
              Add Team</button
            ><button
              class="btn btn-success rounded border border-white mx-2"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-------------------------------------------------------------->
  </div>
</template>


<script>
import addTeamToGameModalBody from "../components/AddTeamToGameModalBody";
export default {
  name: "game-title-bar",
  data() {
    return {};
  },
  computed: {},
  methods: {
    addTeamToGame() {
      if (this.$store.state.activeTeam.id) {
        let team = this.$store.state.activeTeam;
        team.gameId = this.$store.state.activeGame.id;
        this.$store.dispatch("editTeam", team);
        console.log("team w/ game id added: ", team);
      }
    },

    setActiveGame() {
      this.$store.dispatch("setActiveGame", this.gameTitleBarData);
      console.log("setActiveGame called...");
    },
  },
  components: { addTeamToGameModalBody },
  props: ["gameTitleBarData"],
};
</script>


<style scoped>
</style>