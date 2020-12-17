<template>
  <div class="my-picks-page text-white">
    <games />
    <div class="text-center">
      <h5 class="w-75 mx-auto">
        National Championship Total Points Tiebreaker:
        {{ this.$store.state.activeUser.tieBreaker }}
      </h5>
    </div>
  </div>
</template>


<script>
import games from "../components/Games";
export default {
  name: "my-picks-page",
  data() {
    return {};
  },
  async beforeCreate() {
    this.$store.dispatch("getInitAndFormat");
  },
  computed: {},
  methods: {},
  components: { games },
};
</script>


<style scoped>
</style>