<template>
  <div class="game-title-bar">
    <div
      v-if="
        this.$route.path == '/setup' &&
        this.$store.state.activeGame.id == this.gameTitleBarData.id
      "
      class="border m-2 rounded bg-light"
    >
      <div>
        <div
          class="col-11 mx-auto no-gutters text-center pt-1 px-0 border border-dark mt-2 bg-success rounded text-white text-left my-1"
          @click="setActiveGame()"
        >
          <h3>
            {{ this.gameTitleBarData.name }}
          </h3>
        </div>
        <team-title-bars />
        <button
          v-if="this.$store.state.activeTeamsByGameId.length < 2"
          class="btn btn-dark rounded my-1 mb-3 mt-5 text-center text-white border border-white"
          data-toggle="modal"
          data-target="#add-team-to-game-modal"
          @click="setActiveTeamsWithGameIds()"
        >
          Add a team to this game
        </button>
        <div>
          <button
            class="btn btn-success rounded my-1 mx-1 my-3 text-center text-white border"
            data-toggle="modal"
            data-target="#editGameModal"
            @click="setActiveEditFields()"
          >
            Edit Game
          </button>
          <button
            v-if="this.gameTitleBarData.status == 'cancelled'"
            class="btn btn-danger rounded mx-1 my-1 my-3 text-center text-white border"
          >
            Uncancel
          </button>
          <button
            v-else
            class="btn btn-success rounded mx-1 my-3 text-center text-white border"
            data-toggle="modal"
            data-target="#cancelGameModal"
          >
            Cancel Game
          </button>
          <button
            v-if="this.gameTitleBarData.status == 'locked'"
            class="btn btn-success rounded mx-1 my-3 text-center text-white border"
            @click="lockOrUnlockGame('unlocked')"
          >
            Unlock
          </button>
          <button
            v-else
            class="btn btn-success rounded mx-1 my-3 text-center text-white border"
            @click="lockOrUnlockGame('locked')"
          >
            Lock
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <div
        v-if="
          this.gameTitleBarData.secondTeam.name !== 'TBD' &&
          this.gameTitleBarData.firstTeam.name !== 'TBD'
        "
        class="col-11 mx-auto no-gutters border rounded bg-secondary pl-3 pr-1 text-left my-1 text-light"
        @click="setActiveGame()"
      >
        {{ this.gameTitleBarData.name }}

        <img
          v-if="this.gameTitleBarData.status == 'locked'"
          src="../assets/lock-closed-solid.png"
          alt=""
          class="img-fluid float-right float-top mt-1 ml-3 winImg"
        />
        <img
          v-if="this.gameTitleBarData.status == 'unlocked'"
          src="../assets/lock-open-solid.png"
          alt=""
          class="img-fluid float-right float-top mt-1 ml-3 winImg"
        />
        <img
          v-if="this.gameTitleBarData.wId != 0"
          src="../assets/check-solid-circle.png"
          alt=""
          class="img-fluid float-right float-top mt-1 winImg"
        />
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
          <div class="modal-body bg-warning m-2 border rounded border-white">
            <h4 class="text-danger">
              Caution! This cannot be undone. Previous user point selections
              will be modified, and unrecoverable.
            </h4>
            <h5 class="text-dark text-center mt-4">
              Type
              <span class="text-white font-italic">{{
                this.$store.state.activeGame.name
              }}</span>
              to confirm game cancel.
            </h5>
            <input
              type="text"
              class="form-control"
              placeholder="Enter game name to confirm"
              aria-label=""
              v-model="cancelConfirm.string"
              aria-describedby="button-addon2"
              required
            />
            <div>
              <button
                v-if="cancelConfirm.string == this.$store.state.activeGame.name"
                type="reset"
                class="btn rounded border btn-danger m-2 w-50 text-white text-center border-white"
                data-dismiss="modal"
                @click="cancelGame()"
              >
                Cancel Game</button
              ><button
                class="btn rounded border btn-success m-2 w-50 text-white text-center border-white"
                data-dismiss="modal"
                type="reset"
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
    return {
      cancelConfirm: { string: "" },
    };
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
      // if (this.gameTitleBarData != this.$store.state.activeGame) {
      //   this.$store.dispatch("setActiveGame", this.gameTitleBarData);
      // } else {
      //   this.$store.dispatch("setActiveGame", {});
      // }
      this.$store.dispatch("setActiveGame", this.gameTitleBarData);
    },
    setActiveEditFields() {
      this.$store.dispatch("setActiveEditFields", this.gameTitleBarData);
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

    async lockOrUnlockGame(status) {
      this.gameTitleBarData.status = status;
      await this.$store.dispatch("updateGame", this.gameTitleBarData);
      this.$store.dispatch("getInitAndFormat");
      this.$store.dispatch("clearActiveGame");
    },
  },
  components: { addTeamToGameModalBody, editGameModalBody, teamTitleBars },
  props: ["gameTitleBarData"],
};
</script>


<style scoped>
.winImg {
  max-width: 15px;
  max-height: 15px;
}
</style>