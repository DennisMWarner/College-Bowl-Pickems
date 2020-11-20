<template>
  <div class="game-title-bar">
    <div
      v-if="
        this.$route.path == '/setup' &&
        this.$store.state.activeGame.name == gameTitleBarData.name
      "
    >
      <div>
        <div
          class="col-11 mx-auto no-gutters text-center pt-1 border rounded bg-warning text-white text-left my-1 mt-4"
          @click="setActiveGame()"
        >
          <h5>
            {{ this.gameTitleBarData.name }}
          </h5>
        </div>
        <button
          class="btn btn-info rounded my-1 mb-3 text-center text-white border"
          data-toggle="modal"
          data-target="#add-team-to-game-modal"
        >
          Add a team to this game
        </button>
        <button
          class="btn btn-warning rounded my-1 mx-1 mb-3 text-center text-white border"
          data-toggle="modal"
          data-target="#editGameModal"
          @click="setActiveEditFields()"
        >
          Edit this game
        </button>
        <div class="text-right">
          <button
            class="btn btn-danger rounded my-1 mr-3 mb-3 text-center text-white border"
            data-toggle="modal"
            data-target="#deleteGameModal"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <div
        class="col-11 mx-auto no-gutters border rounded bg-light text-left my-1 text-dark"
        @click="setActiveGame()"
      >
        {{ this.gameTitleBarData.name }}
      </div>
    </div>
    <!--delete game modal------------------------>
    <div
      class="modal text-center"
      tabindex="-1"
      role="dialog"
      id="deleteGameModal"
    >
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent">
          <div class="modal-body">
            <h4 class="bg-warning p-2 border rounded border-white">
              Delete {{ this.$store.state.activeGame.name }}?
            </h4>
            <div>
              <button
                class="btn rounded border btn-danger m-2 w-25 text-white text-center border-white"
                data-dismiss="modal"
                @click="deleteGame()"
              >
                Delete</button
              ><button
                class="btn rounded border btn-secondary m-2 w-25 text-white text-center border-white"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--------------modal end-------------->
    <!--add-team-to-game-modal-------------------------------------->
    <div class="modal" tabindex="-1" role="dialog" id="add-team-to-game-modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content bg-transparent">
          <div class="modal-body">
            <add-team-to-game-modal-body />
            <button
              class="btn btn-warning text-white btn-block rounded border border-white my-4"
              data-dismiss="modal"
              @click="addTeamToGame()"
            >
              Add Highlighted Team To
              <h5 class="text-dark">
                {{ this.$store.state.activeGame.name }}
              </h5></button
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
    <!--edit game modal------------------------>
    <div class="modal" tabindex="-1" role="dialog" id="editGameModal">
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent">
          <div class="modal-body no-gutters p-0">
            <edit-game-modal-body />
          </div>
        </div>
      </div>
    </div>
    <!--------------modal end-------------->
  </div>
</template>


<script>
import editGameModalBody from "../components/EditGameModalBody";
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
    setActiveEditFields() {
      this.$store.dispatch("setActiveEditFields", this.$store.state.activeGame);
    },
    async deleteGame() {
      console.log("delete game called...");
      await this.$store.dispatch(
        "deleteGameById",
        this.$store.state.activeGame.id
      );
    },
  },
  components: { addTeamToGameModalBody, editGameModalBody },
  props: ["gameTitleBarData"],
};
</script>


<style scoped>
</style>