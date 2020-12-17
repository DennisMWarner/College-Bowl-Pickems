<template>
  <div class="cancelled-game-title-bars">
    <cancelled-game-title-bar
      v-for="cancelledGameTitleBar in cancelledGameTitleBars"
      :cancelledGameTitleBarData="cancelledGameTitleBar"
      :key="cancelledGameTitleBar.id"
    />
  </div>
</template>


<script>
import cancelledGameTitleBar from "../components/CancelledGameTitleBar";
export default {
  name: "cancelled-game-title-bars",
  data() {
    return {};
  },
  computed: {
    cancelledGameTitleBars() {
      return this.$store.state.cancelledGames;
    },
  },
  methods: {},
  components: { cancelledGameTitleBar },
};
</script>


<style scoped>
</style>