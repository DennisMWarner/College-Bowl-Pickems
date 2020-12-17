<template>
  <div class="other-game-title-bars">
    <other-game-title-bar
      v-for="otherGameTitleBar in otherGameTitleBars"
      :otherGameTitleBarData="otherGameTitleBar"
      :key="otherGameTitleBar.name"
    />
  </div>
</template>


<script>
import otherGameTitleBar from "../components/OtherGameTitleBar";
export default {
  name: "other-game-title-bars",
  data() {
    return {};
  },
  // beforeCreate() {
  //   this.$store.dispatch("setActiveGame", { name: "not selected" });
  //   if (this.$store.state.games.length < 1) {
  //     this.$store.dispatch("getGames");
  //   }
  // },
  computed: {
    otherGameTitleBars() {
      return this.$store.state.otherGames;
    },
  },
  methods: {},
  components: { otherGameTitleBar },
};
</script>


<style scoped>
</style>