<template>
  <div
    class="game col-md-5 game pb-2 mt-0 mb-3 mx-2 border border-white rounded bg-dark"
  >
    <div class="m-0 row no-gutters">
      <div class="col-12">
        <div v-if="this.gameData.wId != 0 && this.gameData.userData.points > 0">
          <div v-if="this.gameData.wId == this.gameData.userData.teamId">
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
          {{ this.gameData.sponsor }}
          {{ this.gameData.name }}
        </h6>
        <p
          class="text-white pl-2 pb-1 mb-1 font-italic font-weight-lighter locs"
        >
          {{ this.gameData.loc }} {{ this.gameData.time }}
          {{ this.gameData.network }}
        </p>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-9">
        <div class="row">
          <div
            v-if="!this.gameData.userData.teamId"
            class="col-12 offset-1 text-left teams bg-white text-secondary team1"
          >
            {{ this.gameData.firstTeam.name }}
            <div class="row no-gutters">
              <div class="col-7 recsTop text-right">
                {{ this.gameData.conference }}&nbsp;&nbsp;{{
                  this.gameData.confRecord
                }}
              </div>
              <div class="col-7 recsBot text-right">
                {{ this.gameData.overallRec }}
              </div>
              <div class="col-4 streak text-right">
                {{ this.gameData.streak }}
              </div>
            </div>
          </div>
          <div
            v-else-if="
              this.gameData.firstTeam.id == this.gameData.userData.teamId
            "
            class="col-12 offset-1 text-left teams team1"
            v-bind:style="{
              'background-color': this.gameData.firstTeam.priColor,
              color: this.gameData.firstTeam.secColor,
            }"
          >
            {{ this.gameData.firstTeam.name }}
            <div class="row no-gutters">
              <div class="col-7 recsTop text-right">
                {{ this.gameData.conference }}&nbsp;&nbsp;{{
                  this.gameData.confRecord
                }}
              </div>
              <div class="col-7 recsBot text-right">
                {{ this.gameData.overallRec }}
              </div>
              <div class="col-4 streak text-right">
                {{ this.gameData.streak }}
              </div>
            </div>
          </div>
          <div
            v-else
            class="col-12 offset-1 text-left teams bg-dark text-secondary team1"
          >
            {{ this.gameData.firstTeam.name }}
            <div class="row no-gutters">
              <div class="col-7 recsTop text-right">
                {{ this.gameData.conference }}&nbsp;&nbsp;{{
                  this.gameData.confRecord
                }}
              </div>
              <div class="col-7 recsBot text-right">
                {{ this.gameData.overallRec }}
              </div>
              <div class="col-4 streak text-right">
                {{ this.gameData.streak }}
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div
            v-if="!this.gameData.userData.teamId"
            class="col-12 offset-1 text-left teams bg-white text-secondary team2"
          >
            {{ this.gameData.secondTeam.name }}
            <div class="row no-gutters">
              <div class="col-7 recsTop text-right">
                {{ this.gameData.conference }}&nbsp;&nbsp;{{
                  this.gameData.confRecord
                }}
              </div>
              <div class="col-7 recsBot text-right">
                {{ this.gameData.overallRec }}
              </div>
              <div class="col-4 streak text-right">
                {{ this.gameData.streak }}
              </div>
            </div>
          </div>
          <div
            v-else-if="
              this.gameData.secondTeam.id == this.gameData.userData.teamId
            "
            class="col-12 offset-1 text-left teams mt-1 team2"
            v-bind:style="{
              'background-color': this.gameData.secondTeam.priColor,
              color: this.gameData.secondTeam.secColor,
            }"
          >
            {{ this.gameData.secondTeam.name }}
            <div class="row no-gutters">
              <div class="col-7 recsTop text-right">
                {{ this.gameData.conference }}&nbsp;&nbsp;{{
                  this.gameData.confRecord
                }}
              </div>
              <div class="col-7 recsBot text-right">
                {{ this.gameData.overallRec }}
              </div>
              <div class="col-4 streak text-right">
                {{ this.gameData.streak }}
              </div>
            </div>
          </div>
          <div
            v-else
            class="col-12 offset-1 text-left teams mt-1 text-secondary team2"
          >
            {{ this.gameData.secondTeam.name }}
            <div class="row no-gutters">
              <div class="col-7 recsTop text-right">
                {{ this.gameData.conference }}&nbsp;&nbsp;{{
                  this.gameData.confRecord
                }}
              </div>
              <div class="col-7 recsBot text-right">
                {{ this.gameData.overallRec }}
              </div>
              <div class="col-4 streak text-right">
                {{ this.gameData.streak }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="this.gameData.userData.points"
        class="col-2 text-center px-2 pt-2 ml-4 text-dark points"
      >
        {{ this.gameData.userData.points }}
      </div>
      <div v-else class="col-2 text-center px-2 pt-3 ml-4 text-dark points">
        --
      </div>
    </div>
  </div>
</template>


<script>
import team from "../components/Team";
export default {
  name: "game",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { team },
  props: ["gameData"],
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
  margin-top: 0px;
}
.recsBot {
  font-size: 10px;
  margin-top: -4px;
}
.streak {
  font-size: 12px;
  margin-top: -12px;
  padding-left: 3px;
}
</style>