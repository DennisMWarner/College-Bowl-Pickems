<template>
  <div class="game-edit-field-buttons">
    <game-edit-field-button
      v-for="gameEditFieldButton in gameEditFieldButtons"
      :gameEditFieldButtonData="gameEditFieldButton"
      :key="gameEditFieldButton.id"
    />
  </div>
</template>


<script>
import gameEditFieldButton from "../components/GameEditFieldButton";
export default {
  name: "game-edit-field-buttons",
  data() {
    return {};
  },
  computed: {
    gameEditFieldButtons() {
      return this.$store.state.activeEditFields;
    },
  },
  methods: {},
  components: { gameEditFieldButton },
};
</script>


<style scoped>
</style>