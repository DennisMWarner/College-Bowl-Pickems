<template>
  <div class="stats-page text-white">
    <game-buttons />
    <user-views />
  </div>
</template>


<script>
import gameButtons from "../components/GameButtons";
import userViews from "../components/UserViews";
export default {
  name: "stats-page",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  async beforeCreate() {
    this.$store.dispatch("getGameButtons");
  },
  components: { userViews, gameButtons },
};
</script>


<style scoped>
</style>