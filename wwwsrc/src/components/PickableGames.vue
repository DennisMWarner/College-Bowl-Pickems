<template>
  <div class="pickable-games">
    <pickable-game
      v-for="game in games"
      :pickableGameData="game"
      :key="game.firstTeam.name"
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
      return this.$store.state.formattedGames;
    },
  },
  methods: {},
  components: { pickableGame },
};
</script>


<style scoped>
</style>