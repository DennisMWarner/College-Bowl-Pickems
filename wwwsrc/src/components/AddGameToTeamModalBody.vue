<template>
  <div class="add-game-to-team-modal-body">
    <team-select-buttons />
  </div>
</template>


<script>
import gameSelectButtons from "./GameSelectButtons.vue";
export default {
  name: "add-game-to-team-modal-body",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { gameSelectButtons },
};
</script>


<style scoped>
</style>