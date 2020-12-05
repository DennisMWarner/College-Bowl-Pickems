<template>
  <div class="leaderboard-row text-white">
    {{ leaderboardRowData.id }} {{ leaderboardRowData.points }}
    {{ leaderboardRowData.percent }}%{{ this.$auth.userInfo.sub }}
  </div>
</template>


<script>
export default {
  name: "leaderboard-row",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
  props: ["leaderboardRowData"],
};
</script>


<style scoped>
</style>