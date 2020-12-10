<template>
  <div class="leader-board-page text-white">
    <leader-board-rows />
  </div>
</template>


<script>
import leaderBoardRows from "../components/LeaderBoardRows";

export default {
  name: "leader-board-page",
  data() {
    return {};
  },
  computed: {},
  methods: {
    testButton() {
      console.log("button works...");
    },
  },
  components: { leaderBoardRows },
};
</script>


<style scoped>
</style>