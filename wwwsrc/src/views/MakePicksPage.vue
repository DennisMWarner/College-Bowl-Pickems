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
  computed: {},
  methods: {},
  components: { pickableGames },
};
</script>


<style scoped>
</style>