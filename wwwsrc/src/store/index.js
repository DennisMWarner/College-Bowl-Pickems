import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "https://localhost:5001/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    teams: [],
    teamsToUpdate: [],
    activeTeamsByGameId: [],
    games: [],
    picks: [],
    userPicks: [],
    userPoints: [],
    activeGames: [],
    activeTeams: [],
    activeEditField: {},
    activeEditFields: [],
    points: [],
    dates: [],
    activeDate: {},
    activeGame: {},
    activeTeam: {},
    activePoint: {},
    formattedGames: [],
    availableTeams: [],
    availableGames: [],
    teamsRawData: [
      ["Buffalo", "#005BBB", "#ffffff", "5-3", "7-5", "W2"],
      ["Charlotte", "#046A38", "#B9975B", "5-3", "7-5", "W5"],
      ["Utah St", "#0F2439", "#ffffff", "6-2", "7-5", "W1"],
      ["Kent St", "#002664", "#EAAB00", "5-3", "6-6", "W3"],
      ["N Caro A&T", "#004684", "#FDB927", "4-4", "6-6", "W2"],
      ["Alcorn St", "#46166a", "#e9a713", "", "", ""],
      ["C Michigan", "#6A0032", "#FFC82E", "6-2", "8-5", "L1"],
      ["San Diego St", "#a6192e", "#000000", "5-3", "9-3", "W1"],
      ["Liberty", "#990000", "#0A254E", "Indep", "7-5", "W1"],
      ["Georgia So", "#011e41", "#87714D", "5-3", "7-5", "W1"],
      ["SMU", "#C8102E", "#0033A0", "6-2", "10-2", "W1"],
      ["Florida Atl", "#003366", "#CC0000", "7-1", "10-3", "W6"],
      ["Florida Int", "#081E3F", "#B6862C", "3-5", "6-6", "L1"],
      ["Ark St", "#cc092f", "#000000", "5-3", "7-5", "L1"],
      ["Boise St", "#0033A0", "#D64309", "8-0", "12-1", "W6"],
      ["Washington", "#4B2E83", "#B7A57A", "4-5", "7-5", "W1"],
      ["App St", "#222222", "#ffcc00", "7-1", "12-1", "W5"],
      ["UAB", "#006341", "#CC8A00", "6-2", "9-4", "L1"],
      ["UCF", "#000000", "#ba9b37", "6-2", "9-3", "W2"],
      ["Marshall", "#00B140", "#A2AAAD", "6-2", "8-4", "W1"],
      ["BYU", "#002E5D", "#ffffff", "Indep", "7-5", "L1"],
      ["Hawaii", "#024731", "#c8c8c8", "5-3", "9-5", "L1"],
      ["LA Tech", "#002F8B", "#E31B23", "7-1", "10-3", "L1"],
      ["Miami", "#F47321", "#005030", "4-4", "6-6", "L2"],
      ["Pitt", "#003594", "#FFB81C", "4-4", "7-5", "L2"],
      ["E Michigan", "#006633", "#000000", "3-5", "6-6", "L1"],
      ["UNC", "#7BAFD4", "#ffffff", "4-4", "6-6", "W2"],
      ["Temple", "#9D2235", "ffffff", "5-3", "8-4", "W1"],
      ["Michigan St ", "#18453B", "#ffffff", "4-5", "6-6", "W2"],
      ["Wake Forest", "#9E7E38", "#000000", "4-4", "8-4", "L1"],
      ["Okla ", "#000000", "#FF7300", "8-1", "12-1", "W5"],
      ["Texas A&M", "#500000", "#ffffff", "4-4", "7-5", "L2"],
      ["USC", "#990000", "#FFC72C", "7-2", "8-4", "W3"],
      ["Iowa", "#FFCD00", "#000000", "6-3", "9-3", "W3"],
      ["Air Force", "#003087", "#8A8D8F", "7-1", "10-2", "W7"],
      ["Washington St", "#981E32", "#5E6A71", "3-6", "6-6", "L1"],
      ["Notre Dame", "#0C2340", "#C99700", "Indep", "10-2", "W5"],
      ["Iowa St", "#C8102E", "#F1BE48", "5-4", "7-5", "L1"],
      ["Memphis", "#003087", "#898D8D", "7-1", "12-1", "W7"],
      ["Penn St", "#041E42", "#ffffff", "7-2", "10-2", "W1"],
      ["Oklahoma", "#841617", "#FDF9D8", "8-1", "12-1", "W5"],
      ["LSU", "#461D7C", "#FDD023", "8-0", "13-0", "W13"],
      ["Clemson", "#F56600", "#522D80", "8-0", "13-0", "W13"],
      ["Ohio St", "#BB0000", "#666666", "9-0", "13-0", "W13"],
      ["W Kentucky", "#C60C30", "#1E1E1E", "6-2", "8-4", "W3"],
      ["W Michigan", "#6C4023", "#B5A167", "5-3", "7-5", "L1"],
      ["Miss St", "#660000", "#ffffff", "3-5", "6-6", "W2"],
      ["Louisville", "#AD0000", "#000000", "5-3", "7-5", "L1"],
      ["Cal", "#003262", "#FDB515", "4-5", "7-5", "W2"],
      ["Illinois", "#13294b", "#E84A27", "4-5", "6-6", "L2"],
      ["Florida", "#0021a5", "#FA4616", "6-2", "10-2", "W3"],
      ["Virginia", "#232D4B", "#F84C1E", "6-2", "9-4", "L1"],
      ["Virginia Tech", "#630031", "#CF4420", "5-3", "8-4", "L1"],
      ["Kentucky", "#0033A0", "#ffffff", "3-5", "7-5", "W3"],
      ["Florida St", "#782F40", "#CEB888", "4-4", "6-6", "L1"],
      ["Arizona St", "#8C1D40", "#FFC627", "4-5", "7-5", "W2"],
      ["Navy", "#000048", "#B4A87E", "7-1", "10-2", "W3"],
      ["Kansas St", "#512888", "#D1D1D1", "5-4", "8-4", "W2"],
      ["Wyoming", "#ffc425", "#492f24", "4-4", "7-5", "L1"],
      ["Georgia St", "#0039A6", "ffffff", "4-4", "7-5", "L1"],
      ["Utah", "#CC0000", "#000000", "8-1", "11-2", "L1"],
      ["Texas", "#BF5700", "#ffffff", "5-4", "7-5", "W1"],
      ["Michigan", "#00274C", "#FFCB05", "6-3", "9-3", "L1"],
      ["Alabama", "#9e1b32", "#ffffff", "6-2", "10-2", "L1"],
      ["Minn", "#7A0019", "#FFCC33", "7-2", "10-2", "L1"],
      ["Auburn", "#0C2340", "#E87722", "5-3", "9-3", "W2"],
      ["Oregon", "#154733", "#FEE123", "8-1", "11-2", "W2"],
      ["Wisconsin", "#C5050C", "#000000", "7-2", "10-3", "L1"],
      ["Georgia", "#ba0c2f", "#000000", "7-1", "11-2", "L1"],
      ["Baylor", "#003015", "#FECB00", "8-1", "11-2", "L1"],
      ["Boston Col", "#98002E", "#BC9B6A", "4-4", "6-6", "W1"],
      ["Cincinnati", "#E00122", "000000", "7-1", "10-3", "L2"],
      ["Indiana", "#990000", "#ffffff", "5-4", "8-4", "W1"],
      ["Tennessee", "#FF8200", "#ffffff", "5-3", "7-5", "W5"],
      ["Ohio", "#00694E", "#CDA077", "5-3", "6-6", "W2"],
      ["Nevada", "#003366", "#807f84", "4-4", "7-5", "L1"],
      ["So Miss", "#000000", "#FFAB00", "5-3", "7-5", "L2"],
      ["Tulane", "#006747", "#ffffff", "3-5", "6-6", "L3"],
      ["Louisiana", "#ce181e", "#0a0203", "7-1", "10-3", "L1"],
      ["Miami (Ohio)", "#B61E2E", "#000000", "6-2", "8-5", "W1"]
    ]
  },
  mutations: {
    setGames(state, games) {
      state.games = games
    },
    updateGames(state, game) {
      state.games.splice(state.games.findIndex(g => g.id == game.id), 1, game)
    },
    setDates(state) {
      state.games.forEach(g => {
        let date = {}
        if (state.dates.findIndex(d => d.date == g.gameDate) < 0) {

          date.date = g.gameDate
          state.dates.push(date)
        }
      })
    },
    setTeams(state, teams) {
      state.teams = teams
    },
    setUserPicks(state, picks) {

      state.userPicks = picks
    },
    setUserPoints(state, points) {

      state.userPoints = points
    },
    updateActiveTeams(state) {
      state.activeTeams.splice(state.activeTeams[0], 1, state.activeTeam)
    },
    removeActiveTeam(state, team) {
      state.activeTeams.splice(state.activeTeams.findIndex(t => t.name == team.name), 1)
    },
    setFormattedGames(state, games) {

      state.formattedGames = games
    },
    addUserPick(state, pick) {
      state.userPicks.push(pick)
    },

    addTeam(state, team) {
      state.teams.push(team)
    },
    setAvailableTeams(state, availableTeams) {
      state.availableTeams = availableTeams
    },


    updateAvailableTeams(state, team) {
      state.availableTeams.splice(state.availableTeams.findIndex(t => t.id == team.id), 1)
    },
    setPoints(state) {
      let pointValue = 1;
      state.games.forEach(g => {
        let points = {};
        points.pointValue = pointValue;
        state.points.push(points);
        pointValue++;
      })
    },
    setActiveDate(state, date) {
      state.activeDate = date;
    },
    setActiveGame(state, game) {
      state.activeGame = game
    },
    setActiveGamesByActiveDate(state, games) {
      state.activeGames = games
    },
    setActivePoint(state, point) {
      state.activePoint = point
    },
    setActiveTeamsByGameId(state, teams) {
      state.activeTeamsByGameId = teams
    },
    setActiveTeam(state, team) {
      if (state.activeTeams.length < 2) {
        state.activeTeams.push(team)
      }
      state.activeTeam = team
    },
    setActiveTeamsWithGameIds(state, teams) {

      state.activeTeams = teams
    },
    setActiveTeams(state, teams) {
      state.activeTeams = teams
    },
    setActiveEditField(state, field) {
      state.activeEditField = field
    },
    setActiveEditFields(state, editFields) {
      state.activeEditFields = editFields
    }

  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getGames({ dispatch, commit }) {
      let res = await api.get("games");
      commit("setGames", res.data);
      dispatch("setPoints")
    },
    formatGames({ commit }) {

      let formattedGames = []
      this.state.games.forEach(g => {
        let teamsfound = this.state.teams.filter(t =>
          t.gameId == g.id)

        g.firstTeam = teamsfound[0] || {}
        g.secondTeam = teamsfound[1] || {}
        g.userData = this.state.userPicks.find(up => up.gameId == g.id) || {};
        formattedGames.push(g)

      })

      commit("setFormattedGames", formattedGames)
    },
    async getUserPicks({ dispatch, commit }, userId) {
      let res = await api.get("picks/myPicks", userId);
      commit("setUserPicks", res.data)
      dispatch("setUserPoints")
    },
    setUserPoints({ dispatch, commit }) {

      let points = []
      this.state.userPicks.forEach(up => {
        let point = {};
        point.pointValue = up.points;
        point.gameId = up.gameId
        points.push(point)
      })
      commit("setUserPoints", points)
    },
    setPoints({ dispatch, commit }) {
      commit("setPoints");
      dispatch("setDates");
    },
    setActivePoint({ dispatch, commit }, point) {
      commit("setActivePoint", point)
    },
    setActiveDate({ dispatch, commit }, date) {

      commit("setActiveDate", date);
      dispatch("setActiveGamesByActiveDate")
    },
    setActiveGame({ dispatch, commit }, game) {
      commit("setActiveGame", game)
      dispatch("setActiveTeamsByGameId", game.id)
    },
    setActiveTeamsByGameId({ dispatch, commit }, gameId) {
      let teams = this.state.teams.filter(t => t.gameId == gameId)
      commit("setActiveTeamsByGameId", teams)
      dispatch("initializeAvailableTeams")

    },
    setActiveTeam({ dispatch, commit }, team) {
      commit("setActiveTeam", team);

      if (team.gameId != 0) {
        dispatch("setActiveGame", this.state.formattedGames.find(g => g.id == team.gameId))
      }
    },
    removeActiveTeam({ commit }, team) {
      commit("removeActiveTeam", team)
    },
    setActiveGamesByActiveDate({ commit }) {
      let activeGames = this.state.formattedGames.filter(fg =>
        fg.gameDate == this.state.activeDate.date
      )
      commit("setActiveGamesByActiveDate", activeGames)

    },
    setDates({ commit }) {
      commit("setDates")
    },
    async addNewGame({ dispatch, commit }, newGame) {
      let res = await api.post("games", newGame);

    },
    async editGame({ dispatch, commit }, editedGame) {

    },
    async deleteGameById({ dispatch }, gameId) {

      await api.delete("games/" + gameId);
      dispatch("getGames")
    },
    async addTeam({ commit }, team) {
      let res = await api.post("teams", team);
      commit("addTeam", res.data)
    },
    async addAllTeams({ dispatch }) {
      await this.state.teamsRawData.forEach(trd => {
        let teamToAdd = {};
        teamToAdd.name = trd[0];
        teamToAdd.priColor = trd[1];
        teamToAdd.secColor = trd[2];
        teamToAdd.confRecord = trd[3];
        teamToAdd.overallRec = trd[4];
        teamToAdd.streak = trd[5];

        api.post("teams", teamToAdd)
      })

      dispatch("getTeams")
    },

    async getTeams({ dispatch, commit }) {

      let res = await api.get("teams");
      commit("setTeams", res.data);
      dispatch("initializeAvailableTeams", res.data)
    },
    initializeAvailableTeams({ commit }) {

      let teams = this.state.teams.filter(t => t.gameId == 0 || t.gameId == this.state.activeGame.id);
      commit("setAvailableTeams", teams)
    },
    async editTeam({ dispatch, commit }, team) {
      let res = await api.put("teams", team)

      commit("updateAvailableTeams", res);
      dispatch("updateFormattedGameTeam", team)
    },
    async editTeams({ dispatch, commit }, teams) {
      await teams.forEach(t => {
        let res = api.put("teams", t)
        commit("updateAvailableTeams", res);
        dispatch("updateFormattedGameTeam", t)
      })
    },
    updateActiveTeams({ commit }) {

      commit("updateActiveTeams")

    },
    setActiveTeamsWithGameIds({ commit }) {
      let activeTeams = [...this.state.activeTeamsByGameId]
      commit("setActiveTeamsWithGameIds", activeTeams)

    },
    async updateGame({ dispatch, commit }, gameToUpdate) {
      let res = await api.put("games/" + gameToUpdate.id, gameToUpdate)
      dispatch("setActiveEditFields", res.data)
      commit("updateGames", res.data)
    },
    setActiveEditField({ commit }, field) {
      commit("setActiveEditField", field)
    },
    setActiveEditFields({ commit }, objectToEdit) {
      let editableObject = [];
      for (let p in objectToEdit) {
        let prop = {}
        prop.key = p;
        prop.value = objectToEdit[p];
        editableObject.push(prop)

      }
      commit("setActiveEditFields", editableObject)
    },
    updateEditedGameField({ dispatch }, field) {
      let gameToUpdate = { ...this.state.activeGame }
      gameToUpdate[field.key] = field.value
      dispatch("updateGame", gameToUpdate)
    },
    updateFormattedGameTeam({ dispatch }, team) {
      dispatch("formatGames")
      dispatch("setActiveTeamsByGameId", this.state.activeGame.id)
    },
    async resetTeamGameIds() {

      await this.state.teams.forEach(t => {
        let resetTeam = { ...t }
        resetTeam.gameId = 0
        api.put("teams", resetTeam)
      })
    },
    async updatePick({ dispatch, commit }, pick) {

      if (this.state.userPicks.find(up => up.id == pick.id)) {
        let res = await api.put("picks", pick)
        console.log("updateUserPicks response: ", res.data)
        dispatch("updateUserPicks", res.data)
      }
      else {
        dispatch("createPick", pick)
      }

    },

    async createPick({ dispatch, commit }, pick) {
      let res = await api.post("picks", pick)
      console.log("createUserPicks response: ", res.data)
      dispatch("updateUserPicks", res.data)
    },
    updateUserPicks({ dispatch, commit }, pick) {
      let picks = [...this.state.userPicks];
      if (picks.find(up => up.id == pick.id)) {
        picks.splice(picks.findIndex(p => p.id == pick.id), 1, pick)
      }
      else { picks.push(pick) }
      console.log("picks updated in actions: ", picks)
      commit("setUserPicks", picks)
      dispatch("updateFormattedGamesUserData", pick)
    },
    updateFormattedGamesUserData({ dispatch, commit }, pick) {
      console.log("pick: ", pick)
      console.log("old game: ", this.state.formattedGames.find(fg => fg.id == pick.gameId))
      let updatedGame = { ...this.state.formattedGames.find(fg => fg.id == pick.gameId) };
      updatedGame.userData = pick
      let formattedGames = [...this.state.formattedGames]
      console.log("updated formatted Game: ", updatedGame)
      formattedGames.splice(formattedGames.findIndex(fg => fg.id == updatedGame.id), 1, updatedGame)
      commit("setFormattedGames", formattedGames);
      dispatch("setActiveGamesByActiveDate")

    }
  }
}
);
