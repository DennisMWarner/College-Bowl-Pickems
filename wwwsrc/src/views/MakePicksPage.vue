<template>
  <div class="make-picks-page text-white">
    <pickable-games />
  </div>
</template>


<script>
import pickableGames from "../components/PickableGames";
export default {
  name: "make-picks-page",
  data() {
    return {};
  },
  async beforeCreate() {
    if (this.$store.state.formattedGames.length < 1) {
      await this.$store.dispatch("formatGames");
    }
  },
  computed: {},
  methods: {},
  components: { pickableGames },
};
</script>


<style scoped>
</style>