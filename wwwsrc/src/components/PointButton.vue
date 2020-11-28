<template>
  <div
    v-if="
      this.$store.state.userPicks.findIndex(
        (p) => p.points == this.pointButtonData.pointValue
      ) < 0
    "
    class="point-button w-25 bg-warning col-2 mt-1 py-1 text-white border text-center rounded border-dark"
    @click="makePick()"
    data-dismiss="modal"
  >
    <div>{{ pointButtonData.pointValue }}</div>
  </div>
  <div
    v-else
    class="point-button w-25 bg-secondary col-2 mt-1 py-1 text-white border text-center rounded border-dark"
    @click="makePick()"
    data-dismiss="modal"
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
    makePick() {
      let picksToUpdate = [];
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
        picksToUpdate.push(oldPick);
        console.log("old pick: ", oldPick);
      }
      console.log("existing pick: ", existingPick);
      if (existingPick.hasOwnProperty("id")) {
        existingPick.points = this.pointButtonData.pointValue;
        // console.log("edited existing pick: ", existingPick);
        picksToUpdate.push(existingPick);
      } else {
        this.pick.userId = this.$auth.userInfo.sub;
        this.pick.gameId = this.$store.state.activeGame.id;
        this.pick.teamId = this.$store.state.activeTeam.id;
        this.pick.points = this.pointButtonData.pointValue;
        picksToUpdate.push(this.pick);
        // console.log("new pick: ", this.pick);
      }
      this.$store.dispatch("updatePicks", picksToUpdate);
      console.log("picksToUpdate: ", picksToUpdate);
    },
  },
  components: {},
  props: ["pointButtonData"],
};
</script>


<style scoped>
</style>