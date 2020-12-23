<template>
  <div class="no-gutters row justify-content-around mt-4">
    <div
      class="text-center col-7 text-white bg-warning border border-white rounded m-5 p-2"
      v-if="
        this.$store.state.userPicks.filter(
          (up) => up.teamId > 0 || up.points > 0
        ).length < 10
      "
    >
      <h6>
        Click anywhere on a team title bar to select team; Click on the point
        area to its right to select a point value.
      </h6>
      <h6 class="mt-4">
        Points and team selection can be changed at any time, before a game is
        locked, by simply clicking another.
      </h6>
    </div>
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