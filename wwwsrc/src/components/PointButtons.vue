<template >
  <div class="point-buttons row text-center mx-auto">
    <point-button
      v-for="pointButton in pointButtons"
      :pointButtonData="pointButton"
      :key="pointButton.pointValue"
    />
    <div
      v-if="
        this.$store.state.unlockedFormattedGames.findIndex(
          (fg) => fg.userData.points == 0
        ) !== -1
      "
    >
      <div
        v-if="
          this.$store.state.unlockedFormattedGames.find(
            (fg) => fg.userData.points > 0
          )
        "
      >
        <button
          class="btn btn-info border border-secondary rounded w-100 text-center-text-white shadow mt-4"
          @click="sortAscending()"
          data-dismiss="modal"
        >
          Sort Remaining Points Ascending</button
        ><button
          class="btn btn-danger border rounded w-100 text-center-text-white border-warning shadow mt-4"
          @click="sortDescending()"
          data-dismiss="modal"
        >
          Sort Remaining Points Descending
        </button>
      </div>
      <div v-else>
        <button
          class="btn btn-info border rounded w-75 text-center-text-white border-secondary mt-4"
          @click="sortAscending()"
          data-dismiss="modal"
        >
          Sort All Points Ascending</button
        ><button
          class="btn btn-danger border rounded w-75 text-center-text-white border-warning mt-4"
          @click="sortDescending()"
          data-dismiss="modal"
        >
          Sort All Points Descending
        </button>
      </div>
    </div>
    <button
      class="btn btn-warning mx-auto border rounded w-75 text-center text-white shadow border-dark mt-4"
      data-toggle="modal"
      data-target="#reset-points-modal"
    >
      Reset All Points
    </button>
    <!------------------reset points modal------------------------------------>
    <div class="modal" tabindex="-1" role="dialog" id="reset-points-modal">
      <div class="modal-dialog-centered pr-4 pl-3" role="document">
        <div class="modal-content">
          <div class="modal-body bg-dark rounded border text-white">
            <h4>CAUTION:</h4>
            <p>This will reset all points for all games.</p>

            <button
              class="btn bg-info w-75 border rounded text-white text-center shadow pt-2"
              @click="resetAllPoints()"
              data-dismiss="modal"
            >
              <h2>Reset Points</h2></button
            ><button
              class="btn bg-secondary w-75 my-3 border rounded text-white text-center"
              data-dismiss="modal"
            >
              Do Not Reset
            </button>
          </div>
        </div>
      </div>
    </div>
    <!------------------------------------------------------------------------>
  </div>
</template>


<script>
import pointButton from "../components/PointButton";
export default {
  name: "point-buttons",
  data() {
    return {};
  },
  computed: {
    pointButtons() {
      return this.$store.state.points;
    },
  },
  methods: {
    async sortAscending() {
      let availablePoints = [];
      let picksToUpdate = [];
      this.$store.state.points.forEach((p) => {
        if (
          this.$store.state.unlockedFormattedGames.findIndex(
            (fg) => fg.userData.points == p.pointValue
          ) < 0 &&
          this.$store.state.lockedFormattedGames.findIndex(
            (fg) => fg.userData.points == p.pointValue
          ) < 0
        ) {
          availablePoints.push(p.pointValue);
        }
      });
      console.log("availabel points: ", availablePoints);

      // console.log("available points: ", availablePoints);

      this.$store.state.unlockedFormattedGames.forEach((fg) => {
        // console.log("fg points: ", fg.userData);
        if (!fg.userData.hasOwnProperty("points") || fg.userData.points == 0) {
          let pick = {};
          pick.points = availablePoints.shift();
          pick.gameId = fg.id;
          pick.userId = this.$auth.userInfo.sub;
          pick.teamId = fg.userData.teamId || 0;
          pick.id = fg.userData.id || 0;
          picksToUpdate.push(pick);
        }
      });

      await picksToUpdate.forEach((ptu) =>
        this.$store.dispatch("updatePick", ptu)
      );
    },
    async sortDescending() {
      let availablePoints = [];
      let picksToUpdate = [];
      this.$store.state.points.forEach((p) => {
        if (
          this.$store.state.unlockedFormattedGames.findIndex(
            (fg) => fg.userData.points == p.pointValue
          ) < 0 &&
          this.$store.state.lockedFormattedGames.findIndex(
            (fg) => fg.userData.points == p.pointValue
          ) < 0
        ) {
          availablePoints.push(p.pointValue);
        }
      });

      this.$store.state.unlockedFormattedGames.forEach((fg) => {
        if (!fg.userData.hasOwnProperty("points") || fg.userData.points == 0) {
          let pick = {};
          pick.points = availablePoints.pop();
          pick.gameId = fg.id;
          pick.userId = this.$auth.userInfo.sub;
          pick.teamId = fg.userData.teamId || 0;
          pick.id = fg.userData.id || 0;
          picksToUpdate.push(pick);
        }
      });
      // console.log("picksToUpdate:", picksToUpdate);
      await picksToUpdate.forEach((ptu) =>
        this.$store.dispatch("updatePick", ptu)
      );
    },
    async resetAllPoints() {
      let picksToUpdate = [];
      this.$store.state.unlockedFormattedGames.forEach((fg) => {
        let pick = { ...fg.userData };
        pick.points = 0;
        picksToUpdate.push(pick);
      });
      await picksToUpdate.forEach((ptu) =>
        this.$store.dispatch("updatePick", ptu)
      );
    },
  },
  components: { pointButton },
};
</script>


<style scoped>
</style>