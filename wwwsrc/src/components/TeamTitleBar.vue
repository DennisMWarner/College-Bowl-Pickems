<template>
  <div class="team-title-bar">
    <div v-if="this.$route.path == '/setup'">
      <div>
        <div
          class="col-9 mx-auto no-gutters text-center pt-1 border rounded bg-light text-dark text-left my-1 mt-1"
          @click="setActiveteam()"
        >
          <h5>
            {{ this.teamTitleBarData.name }}
          </h5>
        </div>
        <button
          class="btn-sm btn-secondary rounded my-1 mx-1 mb-2 text-center text-white border"
          data-toggle="modal"
          data-target="#editteamModal"
          @click="removeTeamFromGame()"
        >
          Remove this team from this game
        </button>
        <button
          class="btn-sm btn-warning rounded my-1 mx-1 mb-2 text-center text-white border"
          data-toggle="modal"
          data-target="#editteamModal"
          @click="setActiveEditFields()"
        >
          Edit this team
        </button>
      </div>
    </div>
    <div v-else>
      <div
        class="col-11 mx-auto no-gutters border rounded bg-light text-left my-1 text-dark"
        @click="setActiveteam()"
      >
        {{ this.teamTitleBarData.name }}
      </div>
    </div>

    <!--edit team modal------------------------>
    <div class="modal" tabindex="-1" role="dialog" id="editTeamModal">
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent">
          <div class="modal-body no-gutters p-0">
            <edit-team-modal-body />
          </div>
        </div>
      </div>
    </div>
    <!--------------modal end-------------->
  </div>
</template>


<script>
import editTeamModalBody from "../components/EditTeamModalBody";
import addGameToTeamModalBody from "../components/AddGameToTeamModalBody";
export default {
  name: "team-title-bar",
  data() {
    return {};
  },
  computed: {},
  methods: {
    addGameToTeam() {
      if (this.$store.state.activeTeam.id) {
        let team = this.$store.state.activeTeam;
        team.teamId = this.$store.state.activeteam.id;
        this.$store.dispatch("editTeam", team);
      }
    },

    setActiveTeam() {
      this.$store.dispatch("setTeamteam", this.TeamTitleBarData);
    },
    setActiveEditFields() {
      this.$store.dispatch("setActiveEditFields", this.$store.state.activeTeam);
    },
    removeTeamFromGame() {
      let team = this.teamTitleBarData;
      team.gameId = 0;
      this.$store.dispatch("editTeam", team);
    },
  },
  components: { addGameToTeamModalBody, editTeamModalBody },
  props: ["teamTitleBarData"],
};
</script>


<style scoped>
</style>