<template>
  <div class="stats-page text-white">
    <user-views />
  </div>
</template>


<script>
import userViews from "../components/UserViews";
export default {
  name: "stats-page",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  async beforeCreate() {
    await this.$store.dispatch("getAllPicks");
  },
  components: { userViews },
};
</script>


<style scoped>
</style>