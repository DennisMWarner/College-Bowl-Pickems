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
        class="btn btn-danger border border-white m-1 text-white text-center w-50"
        @click="unCancelGame()"
      >
        <h4>Un-Cancel</h4>
        {{ this.otherGameTitleBarData.name }}
      </button>
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
        this.$store.state.activeGame
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