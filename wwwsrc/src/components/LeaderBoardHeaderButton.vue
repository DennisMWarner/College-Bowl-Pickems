<template>
  <div
    v-if="
      this.leaderBoardHeaderButtonData ==
      this.$store.state.activeLeaderBoardHeaderButton
    "
    class="leader-board-header-button w-25 text-center mx-auto border rounded bg-warning"
    @click="sort()"
  >
    {{ this.leaderBoardHeaderButtonData.name }}
  </div>
  <div
    v-else
    class="leader-board-header-button w-25 text-center mx-auto border rounded bg-dark"
    @click="sort()"
  >
    {{ leaderBoardHeaderButtonData.name }}
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
</style>