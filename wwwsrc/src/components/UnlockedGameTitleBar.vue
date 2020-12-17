<template>
  <div class="unlocked-game-title-bar">
    <div
      v-if="
        this.$route.path == '/setup' &&
        this.$store.state.activeGame != '' &&
        this.$store.state.activeGame.id == unlockedGameTitleBarData.id
      "
    >
      <div>
        <div
          class="col-11 mx-auto no-gutters text-center pt-1 border rounded bg-white text-dark text-left mt-4"
          @click="setActiveGame()"
        >
          <h5>
            {{ this.unlockedGameTitleBarData.name }}
          </h5>
        </div>

        <div>
          <button
            class="btn btn-warning rounded mx-1 mt-2 mb-4 text-center text-white border"
            @click="lockGame()"
          >
            Lock this game
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <div
        class="col-11 mx-auto no-gutters pt-1 border rounded bg-secondary text-white text-left my-1 my-2"
        @click="setActiveGame()"
      >
        <h5>
          {{ this.unlockedGameTitleBarData.name }}
        </h5>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "unlocked-game-title-bar",
  data() {
    return {};
  },
  computed: {},
  methods: {
    setActiveGame() {
      this.$store.dispatch("setActiveGame", this.unlockedGameTitleBarData);
    },

    async lockGame() {
      this.unlockedGameTitleBarData.status = "locked";
      // console.log("unlocked game: ", this.unlockedGameTitleBarData);
      await this.$store.dispatch("updateGame", this.unlockedGameTitleBarData);
      this.$store.dispatch("getAllOtherGames");
      this.$store.dispatch("clearActiveGame");
    },
  },
  components: {},
  props: ["unlockedGameTitleBarData"],
};
</script>


<style scoped>
</style>