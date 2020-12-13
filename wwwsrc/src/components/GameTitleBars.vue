<template>
  <div class="game-title-bars">
    <game-title-bar
      v-for="gameTitleBar in gameTitleBars"
      :gameTitleBarData="gameTitleBar"
      :key="gameTitleBar.name"
    />
  </div>
</template>


<script>
import gameTitleBar from "../components/GameTitleBar";
export default {
  name: "game-title-bars",
  data() {
    return {};
  },
  beforeCreate() {
    this.$store.dispatch("setActiveGame", { name: "not selected" });
    if (this.$store.state.games.length < 1) {
      this.$store.dispatch("getGames");
    }
  },
  computed: {
    gameTitleBars() {
      return this.$store.state.games;
    },
  },
  methods: {},
  components: { gameTitleBar },
};
</script>


<style scoped>
</style>