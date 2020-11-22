<template>
  <div class="team-select-buttons bg-transparent">
    <team-select-button v-for="team in teams" :teamData="team" :key="team.id" />
  </div>
</template>


<script>
import teamSelectButton from "../components/TeamSelectButton";

export default {
  name: "team-select-buttons",
  data() {
    return {};
  },
  computed: {
    teams() {
      return this.$store.state.availableTeams;
    },
  },
  methods: {},
  components: { teamSelectButton },
};
</script>


<style scoped>
</style>