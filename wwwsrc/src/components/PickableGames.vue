<template>
  <div class="no-gutters row justify-content-around">
    <pickable-game
      v-for="game in games"
      :pickableGameData="game"
      :key="game.id"
    />
  </div>
</template>


<script>
import pickableGame from "../components/PickableGame";
export default {
  name: "pickable-games",
  data() {
    return {};
  },
  computed: {
    games() {
      return this.$store.state.unlockedFormattedGames;
    },
  },
  methods: {},
  components: { pickableGame },
};
</script>


<style scoped>
</style>