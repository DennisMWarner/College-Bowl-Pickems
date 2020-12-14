<template>
  <div class="cancelled-game-title-bar">
    <div
      v-if="
        this.$route.path == '/setup' &&
        this.$store.state.activeGame != '' &&
        this.$store.state.activeGame.name == cancelledGameTitleBarData.name
      "
    >
      <div>
        <div
          class="col-11 mx-auto no-gutters text-center pt-1 border rounded bg-white text-dark text-left mt-4"
          @click="setActiveGame()"
        >
          <h5>
            {{ this.cancelledGameTitleBarData.name }}
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
          {{ this.cancelledGameTitleBarData.name }}
        </h5>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "cancelled-game-title-bar",
  data() {
    return {};
  },
  computed: {},
  methods: {
    setActiveGame() {
      this.$store.dispatch("setActiveGame", this.cancelledGameTitleBarData);
    },

    uncancelGame() {
      delete this.cancelledGameTitleBarData.status;
      // console.log("uncancelled game: ", this.cancelledGameTitleBarData);
      this.$store.dispatch("updateGame", this.cancelledGameTitleBarData);
    },
  },
  components: {},
  props: ["cancelledGameTitleBarData"],
};
</script>


<style scoped>
</style>