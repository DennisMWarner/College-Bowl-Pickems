<template>
  <div class="teams text-center">
    <team v-for="team in teams" :teamData="team" :key="team.name"></team>
  </div>
</template>


<script>
import team from "../components/Team";
export default {
  name: "teams",
  data() {
    return {};
  },
  computed: {
    teams() {
      return this.$store.state.teams;
    },
  },
  methods: {},
  components: { team },
};
</script>


<style scoped>
</style>