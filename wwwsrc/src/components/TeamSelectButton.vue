<template>
  <div
    v-if="
      this.teamData == this.$store.state.activeTeams[0] ||
      this.teamData == this.$store.state.activeTeams[1]
    "
    class="team-select-button bg-warning text-white w-75 border border-white rounded mx-auto my-2"
    @click="removeActiveTeam()"
  >
    {{ teamData.name }}
  </div>
  <div v-else>
    <div
      v-if="this.$store.state.activeTeams.length < 2"
      class="team-select-button bg-secondary text-white w-75 border border-white rounded mx-auto my-2"
      @click="setActiveTeam()"
    >
      {{ teamData.name }}
    </div>

    <div
      v-else
      class="team-select-button bg-secondary text-white w-75 border border-white rounded mx-auto my-2"
      @click="updateActiveTeams()"
    >
      {{ teamData.name }}
    </div>
  </div>
</template>


<script>
export default {
  name: "team-select-button",
  data() {
    return {};
  },
  computed: {},
  methods: {
    setActiveTeam() {
      this.$store.dispatch("setActiveTeam", this.teamData);
    },
    async updateActiveTeams() {
      await this.setActiveTeam();
      this.$store.dispatch("updateActiveTeams");
    },
    removeActiveTeam() {
      this.$store.dispatch("removeActiveTeam", this.teamData);
    },
  },
  components: {},
  props: ["teamData"],
};
</script>


<style scoped>
</style>