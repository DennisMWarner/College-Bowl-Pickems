<template>
  <div class="other-game-title-bar">
    <div
      v-if="
        this.$route.path == '/setup' &&
        this.$store.state.activeGame != '' &&
        this.$store.state.activeGame.name == otherGameTitleBarData.name
      "
    >
      <div>
        <div
          class="col-11 mx-auto no-gutters text-center pt-1 border rounded bg-white text-dark text-left mt-4"
          @click="setActiveGame()"
        >
          <h5>
            {{ this.otherGameTitleBarData.name }}
          </h5>
        </div>

        <div>
          <button
            class="btn btn-warning rounded mx-1 mt-2 mb-4 text-center text-white border"
            @click="uncancelGame()"
          >
            Uncancel this game
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
          {{ this.otherGameTitleBarData.name }}
        </h5>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "other-game-title-bar",
  data() {
    return {};
  },
  computed: {},
  methods: {
    setActiveGame() {
      this.$store.dispatch("setActiveGame", this.otherGameTitleBarData);
    },

    uncancelGame() {
      delete this.otherGameTitleBarData.status;
      console.log("uncancelled game: ", this.otherGameTitleBarData);
      this.$store.dispatch("updateGame", this.otherGameTitleBarData);
    },
  },
  components: {},
  props: ["otherGameTitleBarData"],
};
</script>


<style scoped>
</style>