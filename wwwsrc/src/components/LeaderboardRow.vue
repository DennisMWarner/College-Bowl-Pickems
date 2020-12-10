<template>
  <div
    class="leader-board-row no-gutters text-white text-left row border rounded shadow border-light mx-2 mb-1"
  >
    <div class="w-50 pl-3">
      {{ leaderBoardRowData.name }}
    </div>
    <div class="w-50 row no-gutters">
      <span class="w-25 text-center mx-auto">{{
        leaderBoardRowData.points
      }}</span>
      <span class="w-25 text-center mx-auto">
        {{ leaderBoardRowData.percent }}%</span
      >
      <span class="w-25 text-center mx-auto">
        {{ leaderBoardRowData.pointsLeft }}</span
      >
    </div>
  </div>
</template>


<script>
export default {
  name: "leader-board-row",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
  props: ["leaderBoardRowData"],
};
</script>


<style scoped>
</style>