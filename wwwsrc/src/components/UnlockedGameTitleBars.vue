<template>
  <div class="unlocked-game-title-bars">
    <unlocked-game-title-bar
      v-for="unlockedGameTitleBar in unlockedGameTitleBars"
      :unlockedGameTitleBarData="unlockedGameTitleBar"
      :key="unlockedGameTitleBar.name"
    />
  </div>
</template>


<script>
import unlockedGameTitleBar from "../components/UnlockedGameTitleBar";
export default {
  name: "unlocked-game-title-bars",
  data() {
    return {};
  },
  computed: {
    unlockedGameTitleBars() {
      return this.$store.state.unlockedGames;
    },
  },
  methods: {},
  components: { unlockedGameTitleBar },
};
</script>


<style scoped>
</style>