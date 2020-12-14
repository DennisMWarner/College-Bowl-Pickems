<template>
  <div class="my-picks-page text-white">
    My Picks
    <games />
  </div>
</template>


<script>
import games from "../components/Games";
export default {
  name: "my-picks-page",
  data() {
    return {};
  },
  async beforeCreate() {
    this.$store.dispatch("getInitAndFormat");
  },
  computed: {},
  methods: {},
  components: { games },
};
</script>


<style scoped>
</style>