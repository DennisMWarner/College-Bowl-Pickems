<template>
  <div
    class="pickable-game col-md-5 game pb-2 mt-0 mb-3 mx-2 border border-white rounded bg-dark"
  >
    <div class="m-0 row no-gutters">
      <div class="col-12">
        <div
          v-if="
            this.pickableGameData.wId != 0 &&
            this.pickableGameData.userData.points > 0
          "
        >
          <div
            v-if="
              this.pickableGameData.wId == this.pickableGameData.userData.teamId
            "
          >
            <img
              src="../assets/check-100px.png"
              alt=""
              class="img-fluid float-right float-top mt-1 winImg"
            />
          </div>
          <div v-else>
            <img
              src="../assets/times-circle-100px.png"
              alt=""
              class="img-fluid float-right float-top mt-1 winImg"
            />
          </div>
        </div>
        <h6 class="text-white mb-0 pt-1 pl-2 font-italic">
          {{ this.pickableGameData.sponsor }}
          {{ this.pickableGameData.name }}
        </h6>
        <p
          class="text-white pl-2 pb-1 mb-1 font-italic font-weight-lighter locs"
        >
          {{ this.pickableGameData.loc }} {{ this.pickableGameData.time }}
          {{ this.pickableGameData.network }}
        </p>
      </div>
    </div>
    <div class="row no-gutters pr-1">
      <div class="col-9">
        <div class="row">
          <div
            v-if="!this.pickableGameData.userData.teamId"
            class="col-12 offset-1 text-left teams bg-white text-secondary team1 pr-1"
            @click="setActiveFirstTeam()"
          >
            <span
              >{{ this.pickableGameData.firstTeam.name }}
              <span class="rank text-left">{{
                this.pickableGameData.firstTeam.rank
              }}</span></span
            >
            <div class="row no-gutters">
              <div class="col-7 recsTop text-right">
                {{ this.pickableGameData.firstTeam.conference }}
                <span class="confRec">
                  {{ this.pickableGameData.firstTeam.confRecord }}</span
                >
              </div>
              <div class="col-7 recsBot text-right">
                {{ this.pickableGameData.firstTeam.overallRec }}
              </div>
              <div class="col-4 streak text-center">
                {{ this.pickableGameData.firstTeam.streak }}
              </div>
            </div>
          </div>
          <div
            v-else-if="
              this.pickableGameData.firstTeam.id ==
              this.pickableGameData.userData.teamId
            "
            class="col-12 offset-1 text-left teams team1 pr-1"
            v-bind:style="{
              'background-color': this.pickableGameData.firstTeam.priColor,
              color: this.pickableGameData.firstTeam.secColor,
            }"
            @click="setActiveFirstTeam()"
          >
            <span
              >{{ this.pickableGameData.firstTeam.name }}
              <span class="rank text-left">{{
                this.pickableGameData.firstTeam.rank
              }}</span></span
            >
            <div class="row no-gutters">
              <div class="col-7 recsTop text-right">
                {{ this.pickableGameData.firstTeam.conference }}
                <span class="confRec">{{
                  this.pickableGameData.firstTeam.confRecord
                }}</span>
              </div>
              <div class="col-7 recsBot text-right">
                {{ this.pickableGameData.firstTeam.overallRec }}
              </div>
              <div class="col-4 streak text-center">
                {{ this.pickableGameData.firstTeam.streak }}
              </div>
            </div>
          </div>
          <div
            v-else
            class="col-12 offset-1 text-left teams bg-dark text-secondary team1 pr-1"
            @click="setActiveFirstTeam()"
          >
            <span
              >{{ this.pickableGameData.firstTeam.name }}
              <span class="rank text-left">{{
                this.pickableGameData.firstTeam.rank
              }}</span></span
            >
            <div class="row no-gutters">
              <div class="col-7 recsTop text-right">
                {{ this.pickableGameData.firstTeam.conference }}
                <span class="confRec">{{
                  this.pickableGameData.firstTeam.confRecord
                }}</span>
              </div>
              <div class="col-7 recsBot text-right">
                {{ this.pickableGameData.firstTeam.overallRec }}
              </div>
              <div class="col-4 streak text-center">
                {{ this.pickableGameData.firstTeam.streak }}
              </div>
            </div>
          </div>
        </div>
        <!--------------------------------------- Point selector modal -->
        <div
          class="modal no-gutters"
          tabindex="-1"
          role="dialog"
          id="pointsSelectorModal"
        >
          <div class="modal-dialog-centered pr-2 pl-2" role="document">
            <div
              class="modal-content bg-info rounded border border-white mx-aut0"
            >
              <div class="modal-body">
                <points-selector />
              </div>

              <button
                type="button"
                class="btn btn-dark w-25 mx-auto shadow text-white mb-4 mt-3"
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
            v-if="!this.pickableGameData.userData.teamId"
            class="col-12 offset-1 text-left teams bg-white text-secondary team2 pr-1"
            @click="setActiveSecondTeam()"
          >
            <span
              >{{ this.pickableGameData.secondTeam.name }}
              <span class="rank text-left">{{
                this.pickableGameData.secondTeam.rank
              }}</span></span
            >
            <div class="row no-gutters">
              <div class="col-7 recsTop text-right">
                {{ this.pickableGameData.secondTeam.conference }}
                <span class="confRec">{{
                  this.pickableGameData.secondTeam.confRecord
                }}</span>
              </div>
              <div class="col-7 recsBot text-right">
                {{ this.pickableGameData.secondTeam.overallRec }}
              </div>
              <div class="col-4 streak text-center">
                {{ this.pickableGameData.secondTeam.streak }}
              </div>
            </div>
          </div>
          <div
            v-else-if="
              this.pickableGameData.secondTeam.id ==
              this.pickableGameData.userData.teamId
            "
            class="col-12 offset-1 text-left teams mt-1 team2 pr-1"
            v-bind:style="{
              'background-color': this.pickableGameData.secondTeam.priColor,
              color: this.pickableGameData.secondTeam.secColor,
            }"
            @click="setActiveSecondTeam()"
          >
            <span
              >{{ this.pickableGameData.secondTeam.name }}
              <span class="rank text-left">{{
                this.pickableGameData.secondTrank
              }}</span></span
            >
            <div class="row no-gutters">
              <div class="col-7 recsTop text-right">
                {{ this.pickableGameData.secondTeam.conference }}
                <span class="confRec">
                  {{ this.pickableGameData.secondTeam.confRecord }}</span
                >
              </div>
              <div class="col-7 recsBot text-right">
                {{ this.pickableGameData.secondTeam.overallRec }}
              </div>
              <div class="col-4 streak text-center">
                {{ this.pickableGameData.secondTeam.streak }}
              </div>
            </div>
          </div>
          <div
            v-else
            class="col-12 offset-1 text-left teams mt-1 text-secondary team2 pr-1"
            @click="setActiveSecondTeam()"
          >
            <span
              >{{ this.pickableGameData.secondTeam.name }}
              <span class="rank text-left">{{
                this.pickableGameData.rank
              }}</span></span
            >
            <div class="row no-gutters">
              <div class="col-7 recsTop text-right">
                {{ this.pickableGameData.secondTeam.conference }}
                <span class="confRec">
                  {{ this.pickableGameData.secondTeam.confRecord }}</span
                >
              </div>
              <div class="col-7 recsBot text-right">
                {{ this.pickableGameData.secondTeam.overallRec }}
              </div>
              <div class="col-4 streak text-center">
                {{ this.pickableGameData.secondTeam.streak }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="this.pickableGameData.userData.points"
        class="col-2 text-center px-2 pt-3 ml-4 text-dark points"
        data-toggle="modal"
        data-target="#pointsSelectorModal"
        type="button"
        @click="setActiveGame()"
      >
        {{ this.pickableGameData.userData.points }}
      </div>
      <div
        v-else
        class="col-2 text-center px-2 pt-3 ml-4 text-dark points"
        data-toggle="modal"
        data-target="#pointsSelectorModal"
        type="button"
        @click="setActiveGame()"
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
    return {
      newPick: {},
    };
  },
  computed: {},
  methods: {
    async setActiveFirstTeam() {
      await this.$store.dispatch(
        "setActiveTeam",
        this.pickableGameData.firstTeam
      );
      await this.$store.dispatch("setActiveGame", this.pickableGameData);
      this.updatePick();
    },
    async setActiveSecondTeam() {
      await this.$store.dispatch(
        "setActiveTeam",
        this.pickableGameData.secondTeam
      );
      await this.$store.dispatch("setActiveGame", this.pickableGameData);
      this.updatePick();
    },
    updatePick() {
      let pickIndex = this.$store.state.userPicks.findIndex(
        (up) =>
          up.gameId == this.$store.state.activeGame.id &&
          up.userId == this.$auth.userInfo.sub
      );
      if (pickIndex >= 0) {
        let existingPick = {
          ...this.$store.state.userPicks[pickIndex],
        };
        console.log("existing pick: ", existingPick);
        existingPick.teamId = this.$store.state.activeTeam.id;
        // this.$store.dispatch("updatePick", existingPick);
        console.log("existing pick: ", existingPick);
        this.$store.dispatch("updatePick", existingPick);
      } else {
        this.newPick.userId = this.$auth.userInfo.sub;
        this.newPick.gameId = this.$store.state.activeGame.id;
        this.newPick.teamId = this.$store.state.activeTeam.id;
        console.log("new pick: ", this.newPick);
        this.$store.dispatch("updatePick", this.newPick);
      }
    },
    setActiveGame() {
      this.$store.dispatch("setActiveGame", this.pickableGameData);
    },
  },
  components: { pointsSelector, team },
  props: ["pickableGameData"],
};
</script>


<style scoped>
.winImg {
  max-width: 40px;
  max-height: 40px;
}
.teams {
  font-family: cursive;
  display: flex;
  justify-content: space-between;
  border: solid 3px;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
  font-weight: bold;
  padding-right: 8px;
}

.team1 {
  border-top-left-radius: 15px;
}
.team2 {
  border-bottom-left-radius: 15px;
}
.points {
  font-family: monospace;
  border: solid 3px rgba(0, 0, 0, 0.849);
  background-color: rgb(240, 235, 235);

  /* border-radius: 15px; */
  font-size: xx-large;
  font-weight: bolder;
  padding-top: 12px !important;
  padding-left: 14px;
  border-radius: 15px;
  border-bottom-right-radius: 15px;
  color: rgba(0, 0, 0, 0.794) !important;
}
.locs {
  font-size: 12px;
}
.recsTop {
  font-size: 10px;
  margin-top: 1px;
  width: 60px;
}
.rank {
  font-size: 12px;
  padding-bottom: 20px !important;
  position: relative;
  top: -2px;
}
.recsBot {
  font-size: 10px;
  margin-top: -5px;
}

.confRec {
  padding-left: 3px;
}
.streak {
  width: 35px;
  font-size: 12px;
  margin-top: -12px;
  padding-left: 2px;
}
</style>