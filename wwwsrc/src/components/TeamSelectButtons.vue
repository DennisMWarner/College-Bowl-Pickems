<template>
  <div class="team-select-buttons bg-transparent">
    <team-select-button v-for="team in teams" :teamData="team" :key="team.id" />
    <add-team-button class="mt-4" />
  </div>
</template>


<script>
import teamSelectButton from "../components/TeamSelectButton";
import addTeamButton from "../components/AddTeamButton";
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
  components: { teamSelectButton, addTeamButton },
};
</script>


<style scoped>
</style>