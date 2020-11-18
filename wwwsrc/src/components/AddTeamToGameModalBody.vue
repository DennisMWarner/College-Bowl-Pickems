<template>
  <div class="add-team-to-game-modal-body">
    <team-select-buttons />
  </div>
</template>


<script>
import TeamSelectButtons from "./TeamSelectButtons.vue";
export default {
  name: "add-team-to-game-modal-body",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { TeamSelectButtons },
};
</script>


<style scoped>
</style>