<template>
  <div class="game-title-bar">
    <div
      v-if="
        this.$route.path == '/setup' &&
        this.$store.state.activeGame != '' &&
        this.$store.state.activeGame.name == gameTitleBarData.name
      "
    >
      <div>
        <div
          class="col-11 mx-auto no-gutters text-center pt-1 border rounded bg-warning text-white text-left my-1 my-4"
          @click="setActiveGame()"
        >
          <h5>
            {{ this.gameTitleBarData.name }}
          </h5>
        </div>
        <team-title-bars />
        <button
          v-if="this.$store.state.activeTeamsByGameId.length < 2"
          class="btn btn-info rounded my-1 mb-3 text-center text-white border"
          data-toggle="modal"
          data-target="#add-team-to-game-modal"
          @click="setActiveTeamsWithGameIds()"
        >
          Add a team to this game
        </button>
        <div>
          <button
            class="btn btn-warning rounded my-1 mx-1 my-3 text-center text-white border"
            data-toggle="modal"
            data-target="#editGameModal"
            @click="setActiveEditFields()"
          >
            Edit this game
          </button>

          <button
            class="btn btn-danger rounded my-1 mr-3 my-3 text-center text-white border"
            data-toggle="modal"
            data-target="#cancelGameModal"
          >
            Cancel Game
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <div
        v-if="
          this.gameTitleBarData.secondTeam != '' &&
          this.gameTitleBarData.firstTeam != ''
        "
        class="col-11 mx-auto no-gutters border rounded bg-secondary text-left my-1 text-light"
        @click="setActiveGame()"
      >
        {{ this.gameTitleBarData.name }}
      </div>
      <div
        v-else
        class="col-11 mx-auto no-gutters border rounded bg-light text-left my-1 text-dark"
        @click="setActiveGame()"
      >
        {{ this.gameTitleBarData.name }}
      </div>
    </div>
    <!--cancel game modal------------------------>
    <div
      class="modal text-center"
      tabindex="-1"
      role="dialog"
      id="cancelGameModal"
    >
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent">
          <div class="modal-body">
            <h4 class="bg-warning p-2 border rounded border-white">
              Cancel {{ this.$store.state.activeGame.name }}?
            </h4>
            <div>
              <button
                class="btn rounded border btn-danger m-2 w-50 text-white text-center border-white"
                data-dismiss="modal"
                @click="cancelGame()"
              >
                Cancel Game</button
              ><button
                class="btn rounded border btn-success m-2 w-50 text-white text-center border-white"
                data-dismiss="modal"
              >
                Keep Game
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
              v-if="this.$store.state.activeTeams.length != 0"
              class="btn btn-warning text-white btn-block rounded border border-white my-4"
              data-dismiss="modal"
              @click="addTeamToGame()"
            >
              <div v-if="this.$store.state.activeTeams.length == 2">
                Add {{ this.$store.state.activeTeams[0].name }} and
                {{ this.$store.state.activeTeams[1].name }}
              </div>
              <div v-if="this.$store.state.activeTeams.length == 1">
                Add {{ this.$store.state.activeTeams[0].name }}
              </div>

              To
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
import teamTitleBars from "../components/TeamTitleBars";
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
      let teamsToUpdate = this.$store.state.activeTeams;
      teamsToUpdate.forEach(
        (t) => (t.gameId = this.$store.state.activeGame.id)
      );
      let oldGames = this.$store.state.availableTeams.filter(
        (t) => t.gameId == this.$store.state.activeGame.id
      );
      oldGames.forEach((og) => {
        if (og.id != teamsToUpdate[0].id && og.id != teamsToUpdate[1].id) {
          og.gameId = 0;
          teamsToUpdate.push(og);
        }
      });

      this.$store.dispatch("editTeams", teamsToUpdate);
    },

    setActiveGame() {
      if (this.gameTitleBarData != this.$store.state.activeGame) {
        this.$store.dispatch("setActiveGame", this.gameTitleBarData);
      } else {
        this.$store.dispatch("setActiveGame", {});
      }
    },
    setActiveEditFields() {
      this.$store.dispatch("setActiveEditFields", this.$store.state.activeGame);
    },
    setActiveTeamsWithGameIds() {
      this.$store.dispatch("setActiveTeamsWithGameIds");
    },
    async cancelGame() {
      await this.$store.dispatch(
        "cancelGameById",
        this.$store.state.activeGame
      );
    },
  },
  components: { addTeamToGameModalBody, editGameModalBody, teamTitleBars },
  props: ["gameTitleBarData"],
};
</script>


<style scoped>
</style>