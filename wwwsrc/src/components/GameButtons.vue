<template>
  <div class="game-buttons">
    <game-button
      v-for="gameButton in gameButtons"
      :gameButtonData="gameButton"
      :key="gameButton.id"
    />
  </div>
</template>


<script>
import gameButton from "../components/GameButton";
export default {
  name: "game-buttons",
  data() {
    return {};
  },
  computed: {
    gameButtons() {
      return this.$store.state.gameButtons;
    },
  },
  methods: {},
  components: { gameButton },
};
</script>


<style scoped>
</style>