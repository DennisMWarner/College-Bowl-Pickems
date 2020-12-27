<template>
  <div
    v-if="this.gameButtonData.allPicksMade == 'true'"
    class="game-button w-75 mx-auto border bg-secondary rounded m-2 text-center"
    @click="getGamePickStatus()"
  >
    {{ gameButtonData.name }}
  </div>
  <div
    v-else
    class="game-button w-75 mx-auto border bg-warning rounded m-2 text-center"
    @click="getGamePickStatus()"
  >
    {{ gameButtonData.name }}
  </div>
</template>


<script>
export default {
  name: "game-button",
  data() {
    return {};
  },
  computed: {},
  methods: {
    async getGamePickStatus() {
      await this.$store.dispatch(
        "setActiveGame",
        this.$store.state.games.find((g) => g.id == this.gameButtonData.id)
      );
      this.$store.dispatch("getUserViews", this.gameButtonData.id);
    },
  },
  components: {},
  props: ["gameButtonData"],
};
</script>


<style scoped>
</style>