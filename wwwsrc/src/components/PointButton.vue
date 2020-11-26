<template>
  <div
    v-if="
      this.$store.state.userPicks.findIndex(
        (p) => p.points == this.pointButtonData.pointValue
      ) < 0
    "
    class="point-button w-25 bg-warning col-2 mt-1 py-1 text-white border text-center rounded border-dark"
    @click="createPick()"
  >
    <div>{{ pointButtonData.pointValue }}</div>
  </div>
  <div
    v-else
    class="point-button w-25 bg-secondary col-2 mt-1 py-1 text-white border text-center rounded border-dark"
    @click="createPick()"
  >
    <div>{{ pointButtonData.pointValue }}</div>
  </div>
</template>


<script>
export default {
  name: "point-button",
  data() {
    return {
      pick: {},
    };
  },
  computed: {},
  methods: {
    createPick() {
      this.pick.gameId = this.$store.state.activeGame.id;
      this.pick.pickedTeamId = this.$store.state.activeTeam.id;
      this.pick.userId = this.$auth.userInfo.sub;
      this.pick.points = this.pointButtonData.pointValue;
      this.$store.dispatch("createPick", this.pick);
    },
  },
  components: {},
  props: ["pointButtonData"],
};
</script>


<style scoped>
</style>