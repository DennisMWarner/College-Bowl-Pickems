<template>
  <div class="stats-page text-white">All stats here</div>
</template>


<script>
export default {
  name: "stats-page",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  beforeCreate() {
    this.$store.dispatch("getAllPicks");
    // console.log("all picks: ", this.$store.state.allPicks);
  },
  components: {},
};
</script>


<style scoped>
</style>