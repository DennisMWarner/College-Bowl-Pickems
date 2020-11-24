<template>
  <div class="game mt-3 mx-auto">
    <date />
    <game-title-bar />
    <div class="row ml-1">
      <div class="col-9">
        <div class="row">
          <div
            class="col-12 offset-1 text-left teams border team1"
            v-bind:style="{
              'background-color': this.gameData.firstTeam.priColor,
              color: this.gameData.firstTeam.secColor,
            }"
            data-toggle="modal"
            data-target="#pointsSelectorModal"
            type="button"
          >
            {{ this.gameData.firstTeam.name }}
          </div>
        </div>
        <!-- Point selector modal -->
        <div class="modal" tabindex="-1" role="dialog" id="pointsSelectorModal">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <points-selector />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-12 offset-1 text-left teams mt-1 border team2"
            v-bind:style="{
              'background-color': this.gameData.secondTeam.priColor,
              color: this.gameData.secondTeam.secColor,
            }"
            data-toggle="modal"
            data-target="#pointsSelectorModal"
            type="button"
          >
            {{ this.gameData.secondTeam.name }}
          </div>
        </div>
      </div>
      <div
        class="col-2 text-center px-2 pt-3 text-dark points border border-white bg-white"
      >
        --
      </div>
    </div>
  </div>
</template>


<script>
import gameTitleBar from "../components/GameTitleBar";
import date from "../components/Date";
import team from "../components/Team";
import pointsSelector from "../components/PointsSelector";
export default {
  name: "game",
  data() {
    return {};
  },
  computed: {},
  methods: {
    pointSelect() {
      console.log("points selector clicked for: ");
    },
  },
  components: { pointsSelector, team, gameTitleBar, date },
  props: ["gameData"],
};
</script>


<style scoped>
.teams {
  font-family: cursive;
  display: flex;
  justify-content: space-between;
  border: solid 3px;

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