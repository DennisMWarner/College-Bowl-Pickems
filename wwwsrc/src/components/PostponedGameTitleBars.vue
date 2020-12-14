<template>
  <div class="postponed-game-title-bars">
    <postponed-game-title-bar
      v-for="postponedGameTitleBar in postponedGameTitleBars"
      :postponedGameTitleBarData="postponedGameTitleBar"
      :key="postponedGameTitleBar.name"
    />
  </div>
</template>


<script>
import postponedGameTitleBar from "../components/PostponedGameTitleBar";
export default {
  name: "postponed-game-title-bars",
  data() {
    return {};
  },
  computed: {
    postponedGameTitleBars() {
      return this.$store.state.postponedGames;
    },
  },
  methods: {},
  components: { postponedGameTitleBar },
};
</script>


<style scoped>
</style>