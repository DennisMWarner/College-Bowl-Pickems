<template>
  <div class="games">
    <game v-for="game in games" :gameData="game" :key="game.firstTeam.name" />
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
      return this.$store.state.gamesDetailed;
    },
  },
  methods: {},
  components: { game },
};
</script>


<style scoped>
</style>