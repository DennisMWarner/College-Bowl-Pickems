<template>
  <div class="games no-gutters row justify-content-around">
    <game v-for="game in games" :gameData="game" :key="game.firstTeam.id" />
  </div>
</template>


<script>
import game from "../components/Game";
export default {
  name: "games",
  data() {
    return {};
  },
  computed: {
    games() {
      return this.$store.state.lockedFormattedGames;
    },
  },
  methods: {},
  components: { game },
};
</script>


<style scoped>
</style>