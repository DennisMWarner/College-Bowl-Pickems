<template>
  <div
    v-if="this.gameData == this.$store.state.activeGame"
    class="game-select-button bg-warning text-white w-75 border border-white rounded mx-auto my-2"
    @click="setActiveGame()"
  >
    {{ gameData.name }}
  </div>
  <div
    v-else
    class="Game-select-button bg-secondary text-white w-75 border border-white rounded mx-auto my-2"
    @click="setActiveGame()"
  >
    {{ gameData.name }}
  </div>
</template>


<script>
export default {
  name: "game-select-button",
  data() {
    return {};
  },
  computed: {},
  methods: {
    setActiveGame() {
      this.$store.dispatch("setActiveGame", this.gameData);
    },
  },
  components: {},
  props: ["gameData"],
};
</script>


<style scoped>
</style>