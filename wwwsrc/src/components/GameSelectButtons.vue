<template>
  <div class="game-select-buttons bg-transparent">
    <game-select-button v-for="game in games" :gameData="game" :key="game.id" />
    <add-game-button class="mt-4" />
  </div>
</template>


<script>
import gameSelectButton from "../components/GameSelectButton";
import addGameButton from "../components/AddGameButton";
export default {
  name: "game-select-buttons",
  data() {
    return {};
  },
  computed: {
    games() {
      return this.$store.state.availableGames;
    },
  },
  methods: {},
  components: { gameSelectButton, addGameButton },
};
</script>


<style scoped>
</style>