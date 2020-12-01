<template>
  <div class="game mt-3">
    <div
      class="text-white pb-1 pl-2 my-2 rounded bg-secondary border border-white"
    >
      {{ this.gameData.name }}
    </div>
    <div class="row ml-1">
      <div class="col-9">
        <div class="row">
          <div
            v-if="this.gameData.firstTeam.id == this.gameData.userData.teamId"
            class="col-12 offset-1 text-left teams border team1"
            v-bind:style="{
              'background-color': this.gameData.firstTeam.priColor,
              color: this.gameData.firstTeam.secColor,
            }"
          >
            {{ this.gameData.firstTeam.name }}
          </div>
          <div
            v-else
            class="col-12 offset-1 text-left teams border bg-secondary text-white team1"
          >
            {{ this.gameData.firstTeam.name }}
          </div>
        </div>
        <!--------------------------------------- Point selector modal -->
        <div
          class="modal no-gutters"
          tabindex="-1"
          role="dialog"
          id="pointsSelectorModal"
        >
          <div class="modal-dialog-centered pr-3 pl-2" role="document">
            <div
              class="modal-content bg-dark rounded border border-white mx-aut0"
            >
              <div class="modal-body">
                <points-selector />
              </div>

              <button
                type="button"
                class="btn btn-secondary w-25 mx-auto mb-4"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <!-----------------------------------------end points selector modal------------>
        <div class="row">
          <div
            v-if="this.gameData.secondTeam.id == this.gameData.userData.teamId"
            class="col-12 offset-1 text-left teams mt-1 border team2"
            v-bind:style="{
              'background-color': this.gameData.secondTeam.priColor,
              color: this.gameData.secondTeam.secColor,
            }"
          >
            {{ this.gameData.secondTeam.name }}
          </div>
          <div
            v-else
            class="col-12 offset-1 text-left teams mt-1 border bg-secondary text-white team2"
          >
            {{ this.gameData.secondTeam.name }}
          </div>
        </div>
      </div>
      <div
        v-if="this.gameData.userData.points"
        class="col-2 text-center px-2 pt-3 text-dark points border border-white bg-white"
      >
        {{ this.gameData.userData.points }}
      </div>
      <div
        v-else
        class="col-2 text-center px-2 pt-3 text-dark points border border-white bg-white"
      >
        --
      </div>
    </div>
  </div>
</template>


<script>
import team from "../components/Team";
import pointsSelector from "../components/PointsSelector";
export default {
  name: "game",
  data() {
    return {};
  },
  computed: {},
  methods: {
    setActiveFirstTeam() {
      this.$store.dispatch("setActiveTeam", this.gameData.firstTeam);
    },
    setActiveSecondTeam() {
      this.$store.dispatch("setActiveTeam", this.gameData.secondTeam);
    },
  },
  components: { pointsSelector, team },
  props: ["gameData"],
};
</script>


<style scoped>
.teams {
  font-family: cursive;
  display: flex;
  justify-content: space-between;
  border: solid 5px;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 22px;
  font-weight: bold;
}

.team1 {
  border-top-left-radius: 15px;
}
.team2 {
  border-bottom-left-radius: 15px;
}
.points {
  font-family: monospace;
  border: solid 3px black;
  background-color: white;
  /* border-radius: 15px; */
  font-size: xx-large;
  font-weight: bolder;
  padding-top: 18px;
  padding-left: 14px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
</style>