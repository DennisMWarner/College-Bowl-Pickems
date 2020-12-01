<template>
  <div class="pickable game mt-3">
    <div
      class="text-white pb-1 pl-2 my-2 rounded bg-secondary border border-white"
    >
      {{ this.pickableGameData.name }} (game ID: {{ this.pickableGameData.id }})
    </div>
    <div class="row">
      <div class="col-9">
        <div class="row">
          <div
            v-if="
              this.pickableGameData.firstTeam.id ==
              this.pickableGameData.userData.teamId
            "
            class="col-12 offset-1 text-left teams border team1"
            v-bind:style="{
              'background-color': this.pickableGameData.firstTeam.priColor,
              color: this.pickableGameData.firstTeam.secColor,
            }"
            data-toggle="modal"
            data-target="#pointsSelectorModal"
            type="button"
            @click="setActiveFirstTeam()"
          >
            {{ this.pickableGameData.firstTeam.name }}
            <span>
              <h6 class="mr-3 mt-2">
                team ID:
                {{ this.pickableGameData.firstTeam.id }}
              </h6></span
            >
          </div>
          <div
            v-else
            class="col-12 offset-1 text-left teams border bg-white text-dark team1"
            data-toggle="modal"
            data-target="#pointsSelectorModal"
            type="button"
            @click="setActiveFirstTeam()"
          >
            {{ this.pickableGameData.firstTeam.name
            }}<span>
              <h6 class="mr-3 mt-2">
                team ID:
                {{ this.pickableGameData.firstTeam.id }}
              </h6></span
            >
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
            v-if="
              this.pickableGameData.secondTeam.id ==
              this.pickableGameData.userData.teamId
            "
            class="col-12 offset-1 text-left teams mt-1 border team2"
            v-bind:style="{
              'background-color': this.pickableGameData.secondTeam.priColor,
              color: this.pickableGameData.secondTeam.secColor,
            }"
            data-toggle="modal"
            data-target="#pointsSelectorModal"
            type="button"
            @click="setActiveSecondTeam()"
          >
            {{ this.pickableGameData.secondTeam.name }}
            <span>
              <h6 class="mr-3 mt-2">
                team ID:
                {{ this.pickableGameData.secondTeam.id }}
              </h6></span
            >
          </div>
          <div
            v-else
            class="col-12 offset-1 text-left teams mt-1 border-secondary bg-white text-dark team2"
            data-toggle="modal"
            data-target="#pointsSelectorModal"
            type="button"
            @click="setActiveSecondTeam()"
          >
            {{ this.pickableGameData.secondTeam.name }}
            <span>
              <h6 class="mr-3 mt-2">
                team ID:
                {{ this.pickableGameData.secondTeam.id }}
              </h6></span
            >
          </div>
        </div>
      </div>
      <div
        v-if="this.pickableGameData.userData.points"
        class="col-2 text-center px-2 pt-3 text-dark points border-secondary bg-white"
      >
        {{ this.pickableGameData.userData.points }}
      </div>
      <div
        v-else
        class="col-2 text-center px-2 pt-3 text-dark points border border-secondary bg-white"
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
  name: "pickable-game",
  data() {
    return {};
  },
  computed: {},
  methods: {
    setActiveFirstTeam() {
      this.$store.dispatch("setActiveTeam", this.pickableGameData.firstTeam);
    },
    setActiveSecondTeam() {
      this.$store.dispatch("setActiveTeam", this.pickableGameData.secondTeam);
    },
  },
  components: { pointsSelector, team },
  props: ["pickableGameData"],
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