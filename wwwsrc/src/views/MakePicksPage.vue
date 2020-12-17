<template>
  <div class="make-picks-page text-white">
    <pickable-games />
    <div class="text-center">
      <h5 class="w-75 mx-auto">
        National Championship Total Points Tiebreaker:
        {{ this.$store.state.activeUser.tieBreaker }}
      </h5>

      <div class="input-group mb-3 w-50 mx-auto">
        <input
          type="number"
          class="form-control"
          placeholder="Enter new pts"
          v-model="tb"
        />
        <div class="input-group-append">
          <div class="btn btn-outline-warning" @click="setTieBreaker()">OK</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import pickableGames from "../components/PickableGames";
export default {
  name: "make-picks-page",
  data() {
    return {
      tb: 0,
    };
  },
  async beforeCreate() {
    this.$store.dispatch("getInitAndFormat");
  },
  computed: {},
  methods: {
    async setTieBreaker() {
      let tieBrNum = parseInt(this.tb);
      console.log("tb: ", this.tb);
      await this.$store.dispatch("setTieBreaker", tieBrNum);
      this.$forceUpdate();
    },
  },
  components: { pickableGames },
};
</script>


<style scoped>
</style>