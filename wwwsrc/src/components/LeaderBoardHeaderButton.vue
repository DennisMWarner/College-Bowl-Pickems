<template>
  <div
    v-if="
      this.leaderBoardHeaderButtonData ==
      this.$store.state.activeLeaderBoardHeaderButton
    "
    class="leader-board-header-button w-25 bg-warning px-1 text-center mx-auto border border-white text-white rounded bg-info"
    @click="sort()"
  >
    <span class="buttonFont"> {{ this.leaderBoardHeaderButtonData.name }}</span>
  </div>
  <div
    v-else
    class="leader-board-header-button w-25 px-1 text-center mx-auto border rounded text-white"
    @click="sort()"
  >
    <span class="buttonFont">{{ leaderBoardHeaderButtonData.name }}</span>
  </div>
</template>


<script>
export default {
  name: "leader-board-header-button",
  data() {
    return {};
  },
  computed: {},
  methods: {
    async sort() {
      await this.$store.dispatch(
        "setActiveLeaderBoardHeaderButton",
        this.leaderBoardHeaderButtonData
      );
      if (this.leaderBoardHeaderButtonData.name == "Pts Won") {
        this.$store.dispatch("sortByPoints");
      } else if (this.leaderBoardHeaderButtonData.name == "Win %") {
        this.$store.dispatch("sortByPercent");
      } else if (this.leaderBoardHeaderButtonData.name == "Pts Left") {
        this.$store.dispatch("sortByPointsLeft");
      }
    },
  },
  components: {},
  props: ["leaderBoardHeaderButtonData"],
};
</script>


<style scoped>
@media only screen and (min-width: 700px) {
  .buttonFont {
    line-height: 6;
  }
}
</style>