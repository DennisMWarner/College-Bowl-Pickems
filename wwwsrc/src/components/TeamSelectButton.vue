<template>
  <div
    v-if="this.teamData == this.$store.state.activeTeam"
    class="team-select-button bg-warning text-white w-75 border border-white rounded mx-auto my-2"
    @click="setActiveTeam()"
  >
    {{ teamData.name }}
  </div>
  <div
    v-else
    class="team-select-button bg-secondary text-white w-75 border border-white rounded mx-auto my-2"
    @click="setActiveTeam()"
  >
    {{ teamData.name }}
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
  },
  components: {},
  props: ["teamData"],
};
</script>


<style scoped>
</style>