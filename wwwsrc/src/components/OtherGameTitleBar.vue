<template>
  <div class="other-game-title-bar">
    <div v-if="this.$store.state.activeGame == this.otherGameTitleBarData">
      <button
        class="btn btn-light border border-dark m-1 text-dark text-center w-75"
        @click="setActiveGame()"
      >
        {{ this.otherGameTitleBarData.name }}
      </button>
      <button
        v-if="this.$store.state.activeGame == this.otherGameTitleBarData"
        class="btn btn-info border border-white m-1 text-white text-center w-50"
        data-toggle="modal"
        data-target="#unCancelGameModal"
      >
        <h6>Uncancel</h6>
        {{ this.otherGameTitleBarData.name }}
      </button>
      <!--uncancel game modal------------------------>
      <div
        class="modal text-center"
        tabindex="-1"
        role="dialog"
        id="unCancelGameModal"
      >
        <div class="modal-dialog-centered" role="document">
          <div class="modal-content bg-transparent">
            <div class="modal-body bg-warning m-2 border rounded border-white">
              <h4 class="text-danger">
                Caution! This will modify points for all users.
              </h4>
              <h5 class="text-dark text-center mt-4">
                Type
                <span class="text-white font-italic">{{
                  this.$store.state.activeGame.name
                }}</span>
                to confirm game uncancel.
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
                  v-if="
                    cancelConfirm.string == this.$store.state.activeGame.name
                  "
                  type="reset"
                  class="btn rounded border btn-danger m-2 w-50 text-white text-center border-white"
                  data-dismiss="modal"
                  @click="unCancelGame()"
                >
                  Uncancel Game</button
                ><button
                  class="btn rounded border btn-success m-2 w-50 text-white text-center border-white"
                  data-dismiss="modal"
                  type="reset"
                >
                  Leave Game Cancelled
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--------------modal end-------------->
    </div>
    <div v-else>
      <button
        class="btn btn-secondary border border-white m-1 text-white text-center w-75"
        @click="setActiveGame()"
      >
        {{ this.otherGameTitleBarData.name }}
      </button>
    </div>
  </div>
</template>


<script>
import teamTitleBars from "../components/TeamTitleBars";
import editGameModalBody from "../components/EditGameModalBody";
import addTeamToGameModalBody from "../components/AddTeamToGameModalBody";
export default {
  name: "other-game-title-bar",
  data() {
    return {
      cancelConfirm: { string: "" },
    };
  },
  computed: {},

  methods: {
    setActiveGame() {
      if (this.otherGameTitleBarData != this.$store.state.activeGame) {
        this.$store.dispatch("setActiveGame", this.otherGameTitleBarData);
      } else {
        this.$store.dispatch("setActiveGame", {});
      }
    },

    async unCancelGame() {
      await this.$store.dispatch(
        "unCancelGameById",
        this.otherGameTitleBarData
      );
    },
  },
  components: { addTeamToGameModalBody, editGameModalBody, teamTitleBars },
  props: ["otherGameTitleBarData"],
};
</script>


<style scoped>
.winImg {
  max-width: 15px;
  max-height: 15px;
}
</style>