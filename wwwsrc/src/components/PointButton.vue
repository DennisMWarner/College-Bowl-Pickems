<template>
  <div
    v-if="
      this.$store.state.userPicks.findIndex(
        (p) => p.points == this.pointButtonData.pointValue
      ) < 0
    "
    class="point-button w-25 bg-warning col-2 mt-1 py-1 text-white border text-center rounded border-dark"
    @click="makePick()"
  >
    <div>{{ pointButtonData.pointValue }}</div>
  </div>
  <div
    v-else
    class="point-button w-25 bg-secondary col-2 mt-1 py-1 text-white border text-center rounded border-dark"
    @click="makePick()"
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
    async makePick() {
      let oldPick = {
        ...this.$store.state.userPicks.find(
          (up) => up.points == this.pointButtonData.pointValue
        ),
      };
      let existingPick = {
        ...this.$store.state.userPicks.find(
          (up) => up.gameId == this.$store.state.activeGame.id
        ),
      };

      if (oldPick.hasOwnProperty("points")) {
        oldPick.points = 0;

        await this.$store.dispatch("updatePick", oldPick);
      }

      if (existingPick.hasOwnProperty("id")) {
        existingPick.points = this.pointButtonData.pointValue;
        // if (existingPick.hasOwnProperty("teamId")) {
        //   existingPick.teamId = this.$store.state.activeTeam.id;
        // }
        await this.$store.dispatch("updatePick", existingPick);
      } else {
        this.pick.userId = this.$auth.userInfo.sub;
        this.pick.gameId = this.$store.state.activeGame.id;
        this.pick.teamId = this.$store.state.activeTeam.id;
        this.pick.points = this.pointButtonData.pointValue;
        await this.$store.dispatch("updatePick", this.pick);
      }
    },
  },
  components: {},
  props: ["pointButtonData"],
};
</script>


<style scoped>
</style>