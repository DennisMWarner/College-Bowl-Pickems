<template>
  <div class="lock-all-games-button">
    <div class="m-3 text-center">
      <button
        class="btn btn-danger p-2 mx-auto text-white text-center border btn-block border-white rounded"
        @click="lockAllGames()"
      >
        Lock All Games
      </button>
    </div>
  </div>
</template>


<script>
export default {
  name: "lock-all-games-button",
  data() {
    return {};
  },
  computed: {},
  methods: {
    async lockAllGames() {
      // await this.$store.dispatch("lockAllGames");
      // this.$store.dispatch("getInitAndFormat");

      await this.$store.dispatch("getLockableGames");
      // if (
      //   status == "locked" &&
      //   this.$store.state.lockableGames.findIndex(
      //     (lg) => lg.id == this.gameTitleBarData.id
      //   ) < 0
      // ) {
      //   this.gameTitleBarData.status = status;
      //   await this.$store.dispatch("updateGame", this.gameTitleBarData);
      //   this.$store.dispatch("getInitAndFormat");
      //   this.$store.dispatch("clearActiveGame");
      // }
    },
  },
  components: {},
};
</script>


<style scoped>
</style>