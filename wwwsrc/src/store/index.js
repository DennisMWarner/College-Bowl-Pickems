import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";
import { $auth } from "@bcwdev/auth0-vue";

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
    completedGames: [],
    otherGames: [],
    unlockedGames: [],
    leaderBoardHeaderButtons: [{ name: "Pts Won" }, { name: "Win %" }, { name: "Pts Left" }],
    activeLeaderBoardHeaderButton: {},
    allPicks: [],
    userPicks: [],
    leaderBoardRows: [],
    picksByPointTotal: [],
    picksByPointsLeft: [],
    picksByPercent: [],
    userPoints: [],
    activeGames: [],
    cancelledGameId: {},
    unCancelledGameId: {},
    users: [],
    activeTeams: [],
    activeEditField: {},
    activeEditFields: [],
    points: [],
    possiblePoints: {},
    dates: [],
    activeDate: {},
    activeGame: {},
    activeTeam: {},
    activePoint: {},
    lockedFormattedGames: [],
    unlockedFormattedGames: [],
    availableTeams: [],
    availableGames: [],
    teamsRawData: [
      ["Buffalo", "#005BBB", "#ffffff", "", "", ""],
      ["Charlotte", "#046A38", "#B9975B", "", "", ""],
      ["Utah St", "#0F2439", "#ffffff", "", "", ""],
      ["Kent St", "#002664", "#EAAB00", "", "", ""],
      ["N Caro A&T", "#004684", "#FDB927", "", "", ""],
      ["Alcorn St", "#46166a", "#e9a713", "", "", ""],
      ["C Michigan", "#6A0032", "#FFC82E", "", "", ""],
      ["San Diego St", "#a6192e", "#000000", "", "", ""],
      ["Liberty", "#990000", "#0A254E", "Indep", "", ""],
      ["Georgia So", "#011e41", "#87714D", "", "", ""],
      ["SMU", "#C8102E", "#0033A0", "", "", ""],
      ["Florida Atl", "#003366", "#CC0000", "", "", ""],
      ["Florida Int", "#081E3F", "#B6862C", "", "", ""],
      ["Ark St", "#cc092f", "#000000", "", "", ""],
      ["Boise St", "#0033A0", "#FA4616", "", "", ""],
      ["Washington", "#4B2E83", "#B7A57A", "", "", ""],
      ["App St", "#222222", "#ffcc00", "", "", ""],
      ["UAB", "#006341", "#CC8A00", "", "", ""],
      ["UCF", "#000000", "#ba9b37", "", "", ""],
      ["Marshall", "#00B140", "#A2AAAD", "", "", ""],
      ["BYU", "#002E5D", "#ffffff", "Indep", "", ""],
      ["Hawaii", "#024731", "#c8c8c8", "", "", ""],
      ["LA Tech", "#003087", "##CB333B", "", "", ""],
      ["Miami", "#F47321", "#005030", "", "", ""],
      ["Pitt", "#003594", "#FFB81C", "", "", ""],
      ["E Michigan", "#006633", "#000000", "", "", ""],
      ["UNC", "#7BAFD4", "#ffffff", "", "", ""],
      ["Temple", "#9D2235", "ffffff", "", "", ""],
      ["Michigan St ", "#18453B", "#ffffff", "", "", ""],
      ["Wake Forest", "#9E7E38", "#000000", "", "", ""],
      ["Oklahoma State ", "#000000", "#FF7300", "", "", ""],
      ["Texas A&M", "#500000", "#ffffff", "", "", ""],
      ["USC", "#990000", "#FFC72C", "", "", ""],
      ["Iowa", "#FFCD00", "#000000", "", "", ""],
      ["Air Force", "#003087", "#8A8D8F", "", "", ""],
      ["Washington St", "#981E32", "#5E6A71", "", "", ""],
      ["Notre Dame", "#0C2340", "#C99700", "", "", ""],
      ["Iowa St", "#C8102E", "#F1BE48", "", "", ""],
      ["Memphis", "#003087", "#898D8D", "", "", ""],
      ["Penn St", "#041E42", "#ffffff", "", "", ""],
      ["Oklahoma", "#841617", "#FDF9D8", "", "", ""],
      ["LSU", "#461D7C", "#FDD023", "", "", ""],
      ["Clemson", "#F56600", "#522D80", "", "", ""],
      ["Ohio St", "#BB0000", "#666666", "", "", ""],
      ["W Kentucky", "#C60C30", "#1E1E1E", "", "", ""],
      ["W Michigan", "#6C4023", "#B5A167", "", "", ""],
      ["Miss St", "#660000", "#ffffff", "", "", ""],
      ["Louisville", "#AD0000", "#000000", "", "", ""],
      ["Cal", "#003262", "#FDB515", "", "", ""],
      ["Illinois", "#13294b", "#E84A27", "", "", ""],
      ["Florida", "#0021a5", "#FA4616", "", "", ""],
      ["Virginia", "#232D4B", "#F84C1E", "", "", ""],
      ["Virginia Tech", "#630031", "#CF4420", "", "", ""],
      ["Kentucky", "#0033A0", "#ffffff", "", "", ""],
      ["Florida St", "#782F40", "#CEB888", "", "", ""],
      ["Arizona St", "#8C1D40", "#FFC627", "", "", ""],
      ["Navy", "#000048", "#B4A87E", "", "", ""],
      ["Kansas St", "#512888", "#D1D1D1", "", "", ""],
      ["Wyoming", "#ffc425", "#492f24", "", "", ""],
      ["Georgia St", "#0039A6", "ffffff", "", "", ""],
      ["Utah", "#CC0000", "#000000", "", "", ""],
      ["Texas", "#BF5700", "#ffffff", "", "", ""],
      ["Michigan", "#00274C", "#FFCB05", "", "", ""],
      ["Alabama", "#9d2235", "#ffffff", "", "", "", "Crimson Tide"],
      ["Minnesota", "#7A0019", "#FFCC33", "", "", ""],
      ["Auburn", "#0C2340", "#E87722", "", "", ""],
      ["Oregon", "#154733", "#FEE123", "", "", ""],
      ["Wisconsin", "#C5050C", "#000000", "", "", ""],
      ["Georgia", "#ba0c2f", "#000000", "", "", ""],
      ["Baylor", "#003015", "#FECB00", "", "", ""],
      ["Boston Col", "#98002E", "#BC9B6A", "", "", ""],
      ["Cincinnati", "#E00122", "000000", "", "", ""],
      ["Indiana", "#990000", "#ffffff", "", "", ""],
      ["Tennessee", "#FF8200", "#ffffff", "", "", ""],
      ["Ohio", "#00694E", "#CDA077", "", "", ""],
      ["Nevada", "#003366", "#807f84", "", "", ""],
      ["So Miss", "#000000", "#FFAB00", "", "", ""],
      ["Tulane", "#006747", "#ffffff", "", "", ""],
      ["Louisiana", "#ce181e", "#0a0203", "", "", ""],
      ["Miami (Ohio)", "#B61E2E", "#000000", "", "", ""],
      ["UTSA", "#002244", "#DD4814", "", "", "", "Roadrunners"],
      ["Houston", "#c92a39", "#ffffff", "", "", "", "Cougars"],
      ["North Texas", "#00853E", "#ffffff", "", "", "", "Eagles"],
      ["Ball State", "#BA0C2F", "#FFFFFF", "", "", "", "Cardinals"],
      ["Coastal Caro", "#006f71", "#a27752", "", "", "", "Chanticleers"],
      ["Texas Tech", "#CC0000", "#000000", "", "", "", ""],
      ["Army", "#2C2A29", "#d3bc8d", "", "", "", "Black Knights"],
      ["Tulsa", "#003dcc", "#d4c581", "", "", "", "Golden Hurricanes"],
      ["Colorado", "#000000", "#CFB87C", "", "", "", "Buffaloes"],
      ["NC State", "#CC0000", "#000000", "", "", "", "Wolfpack"],
      ["Maryland", "#E21833", "#ffd200", "", "", "", "Terrapins"],
      ["Mississippi", "#5D1725", "#c1c6c8", "", "", "", "Bulldogs"],
      ["W Virginia", "#002855", "#EAAA00", "", "", "", "Mountaineers"],
      ["TCU", "#4d1979", "#a3a9ac", "", "", "", "Horned Frogs"],
      ["Arkansas", "#9D2235", "#ffffff", "", "", "", "Razorbacks"],
      ["San Jose St", "#0055A2", "#E5A823", "", "", "", "Spartans"],
      ["South Caro", "#73000a", "#000000", "", "", "", "Gamecocks"],
      ["Northwestern", "#4E2A84", "#D8D6D6", "", "", "", "Wildcats"],
      ["Missouri", "#f1b82d", "#000000", "", "", "", "Tigers"],
      ["LA Lafayette", "#ce181e", "#0a0203", "", "", "", "Ragin' Cajuns"]
    ]
  },
  mutations: {
    setGames(state, games) {
      state.games = games
    },

    setActiveUser(state, user) {
      state.activeUser = user
    },

    setOtherGames(state, games) {
      state.otherGames = games
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

    setUsers(state, users) {
      state.users = users
    },

    setCancelledGameId(state, gameId) {
      state.cancelledGameId = gameId
    },

    setUnCancelledGameId(state, gameId) {
      state.unCancelledGameId = gameId
    },

    setAllPicks(state, picks) {
      state.allPicks = picks
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

    setUnlockedFormattedGames(state, games) {
      state.unlockedFormattedGames = games
    },

    setLockedFormattedGames(state, games) {
      state.lockedFormattedGames = games
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

    setPoints(state, points) {
      state.points = points
    },

    setPossiblePoints(state, points) {
      state.possiblePoints = points
    },

    setCompletedGames(state, games) {
      state.completedGames = games
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

    setActiveLeaderBoardHeaderButton(state, button) {
      state.activeLeaderBoardHeaderButton = button
    },

    setLeaderBoardRows(state, lbRows) {
      state.leaderBoardRows = lbRows
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
    setBearer({ dispatch }, bearer) {
      api.defaults.headers.authorization = bearer;
    },

    resetBearer() {
      api.defaults.headers.authorization = "";
    },

    async getGames({ dispatch, commit }) {
      console.log("getgames called...")
      let res = await api.get("games");
      let validGames = []
      res.data.forEach(g => {
        if (g.status != 'cancelled') {
          validGames.push(g)
        }
      })
      commit("setGames", validGames);
      dispatch("setPoints")
    },

    async getAllOtherGames({ commit }) {
      let otherGames = []

      let res = await api.get("games/other");
      res.data.forEach(g => {
        if (g.status != ("locked" || "unlocked")) {
          otherGames.push(g)
        }
      })
      commit("setOtherGames", otherGames)
    },

    async getInitAndFormat({ dispatch, commit }) {
      if (this.state.userPicks.length < 1) {
        await dispatch("getUserPicks")
      }
      if (this.state.games.length < 1) {
        console.log("calling getgames from getInitAndFormat")
        await dispatch("getGames")
      }
      if (this.state.teams.length < 1) {
        await dispatch("getTeams")
      }
      let lockedFormattedGames = [];
      let unlockedFormattedGames = []
      let formattedGames = []

      this.state.games.forEach(g => {
        let teamsfound = this.state.teams.filter(t =>
          t.gameId == g.id)
        g.firstTeam = teamsfound[0] || { name: "TBD" }
        g.secondTeam = teamsfound[1] || { name: "TBD" }
        g.userData = this.state.userPicks.find(up => up.gameId == g.id) || {};
        formattedGames.push(g)
      })

      formattedGames.forEach(tf => {
        if (tf.status == 'locked') {
          lockedFormattedGames.push(tf)
        }
        else if (tf.status == "unlocked" || tf.status == null) {
          unlockedFormattedGames.push(tf)
        }
        else { }
      })
      commit("setLockedFormattedGames", lockedFormattedGames)
      commit("setUnlockedFormattedGames", unlockedFormattedGames)
    },

    lockAllGames({ dispatch }) {
      this.state.unlockedFormattedGames.forEach(ug => {
        let gameToEdit = { ...ug }
        gameToEdit.status = "locked"
        dispatch("updateGame", gameToEdit)
      })

    },

    unlockAllGames({ dispatch }) {
      this.state.lockedFormattedGames.forEach(ug => {
        let gameToEdit = { ...ug }
        gameToEdit.status = "unlocked"
        dispatch("updateGame", gameToEdit)
      })
    },

    async getUserPicks({ dispatch, commit }, userId) {
      let res = await api.get("picks/myPicks", userId);
      commit("setUserPicks", res.data)
      dispatch("setUserPoints")
    },

    async getAllPicks({ dispatch, commit }) {
      let res = await api.get("picks");
      commit("setAllPicks", res.data)
      if (this.state.users.length < 1) {
        dispatch("getUsers");
      }
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

    async setPoints({ dispatch, commit }) {
      let points = [];
      this.state.games.forEach((g, index) => {
        if (g.status != 'cancelled') {
          let point = {}
          point.pointValue = index + 1
          points.push(point)
        }
      })
      await commit("setPoints", points);
      dispatch("setDates");
      dispatch("setPossiblePoints")
    },

    setPossiblePoints({ dispatch, commit }) {
      let possPts = {}
      possPts.points = 0;
      this.state.points.forEach(p => possPts.points += p.pointValue);
      commit("setPossiblePoints", possPts)
    },

    setActivePoint({ dispatch, commit }, point) {
      commit("setActivePoint", point)
    },

    setActiveDate({ dispatch, commit }, date) {
      commit("setActiveDate", date);
      dispatch("setActiveGamesByActiveDate")
    },

    setActiveLeaderBoardHeaderButton({ commit }, button) {
      commit("setActiveLeaderBoardHeaderButton", button)
    },

    clearActiveGame({ commit }) {
      let clearedGame = {}
      commit("setActiveGame", clearedGame)
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
        dispatch("setActiveGame", this.state.unlockedFormattedGames.find(g => g.id == team.gameId))
      }
    },

    removeActiveTeam({ commit }, team) {
      commit("removeActiveTeam", team)
    },

    setActiveGamesByActiveDate({ commit }) {
      let activeGames = this.state.unlockedFormattedGames.filter(fg =>
        fg.gameDate == this.state.activeDate.date
      )
      commit("setActiveGamesByActiveDate", activeGames)
    },

    setDates({ commit }) {
      commit("setDates")
    },

    async addNewGame({ dispatch, commit }, newGame) {
      if (newGame.sponsor == null) {
        newGame.sponsor = ''
      }
      newGame.status = 'unlocked'
      newGame.wId = 0
      let res = await api.post("games", newGame);
      dispatch("getInitAndFormat")
    },

    async editGame({ dispatch, commit }, editedGame) {
      let res = await api.put("games/" + editedGame.id, editedGame)
    },

    async editUser({ dispatch, commit }, user) {
      let res = await api.put("users", user)
      commit("setActiveUser", res.data)
    },

    async cancelGameById({ dispatch, commit }, game) {
      let cancelledGame = { ...game }
      await dispatch("getAllPicks");
      cancelledGame.status = "cancelled"
      await api.put("games/" + game.id, cancelledGame);
      commit("setCancelledGameId", game.id)
      dispatch("updateCancelledPicks")
    },

    async unCancelGameById({ dispatch, commit }, game) {
      let unCancelledGame = { ...game }
      await dispatch("getAllPicks");
      unCancelledGame.status = "unlocked"
      await api.put("games/" + game.id, unCancelledGame);
      commit("setUnCancelledGameId", game.id)
      dispatch("updateUnCancelledPicks")
    },

    updateCancelledPicks({ dispatch, commit }) {
      this.state.users.forEach(u => {
        let userPicks = this.state.allPicks.filter(ap => ap.userId == u.userId);
        let cutoff = userPicks.find(up => up.gameId == this.state.cancelledGameId) || 0;
        if (cutoff) {
          userPicks.forEach(up => {
            let pickToUpdate = { ...up }
            if (pickToUpdate.points > cutoff.points) {
              pickToUpdate.points--
              dispatch("updatePick", pickToUpdate)
            }
            //keep cancelled game pick to know what user points were...
            // else if (pickToUpdate.points == cutoff.points) {
            //   pickToUpdate.points = 0;
            //   dispatch("updatePick", pickToUpdate)
            // }
          })
        }
      }
      )
      dispatch("getInitAndFormat")
      dispatch("clearActiveGame")

    },

    updateUnCancelledPicks({ dispatch, commit }) {
      this.state.users.forEach(u => {
        let userPicks = this.state.allPicks.filter(ap => ap.userId == u.userId);
        let cutoff = userPicks.find(up => up.gameId == this.state.unCancelledGameId) || 0;
        if (cutoff) {
          userPicks.forEach(up => {
            let pickToUpdate = { ...up }
            if (pickToUpdate.points > cutoff.points) {
              pickToUpdate.points++
              dispatch("updatePick", pickToUpdate)
            }
            //keep cancelled game pick to know what user points were...
            // else if (pickToUpdate.points == cutoff.points) {
            //   pickToUpdate.points = 0;
            //   dispatch("updatePick", pickToUpdate)
            // }
          })
        }
      }
      )
      dispatch("getInitAndFormat")
      dispatch("clearActiveGame")
    },

    async getUsers({ dispatch, commit }) {
      let res = await api.get("users")
      commit("setUsers", res.data)
    },

    async getActiveUser({ dispatch, commit }, activeUser) {
      if (this.state.users.length < 1) {
        console.log("calling getusers from getactiveuser")
        await dispatch("getUsers");
      }
      let user = this.state.users.find(u => u.userId == activeUser);
      commit("setActiveUser", user)
    },

    setTieBreaker({ dispatch }, tb) {
      let user = this.state.activeUser
      user.tieBreaker = tb
      dispatch("editUser", user)
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
        teamToAdd.mascot = trd[6] || ""
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

    // async editTeam({ dispatch, commit }, team) {
    //   let res = await api.put("teams", team)
    //   commit("updateAvailableTeams", res);
    //   dispatch("updateFormattedGameTeam", team)
    // },

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
      dispatch("getInitAndFormat")
    },

    async updateTeam({ dispatch, commit }, teamToUpdate) {
      let res = await api.put("teams/" + teamToUpdate.id, teamToUpdate)
      dispatch("getInitAndFormat")
    },

    setActiveEditField({ commit }, field) {
      console.log("activeEditfield passed: ", field)
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

    async updateEditedGameField({ dispatch }, field) {
      let gameToUpdate = { ...this.state.activeGame }
      gameToUpdate[field.key] = field.value
      await dispatch("updateGame", gameToUpdate)
      await dispatch("setActiveGame", gameToUpdate);
      dispatch("setActiveEditFields", this.state.activeGame)
    },

    async updateEditedTeamField({ dispatch }, field) {
      let teamToUpdate = { ...this.state.activeTeam }
      teamToUpdate[field.key] = field.value
      await dispatch("updateTeam", teamToUpdate)
      await dispatch("setActiveTeam", teamToUpdate);
      dispatch("setActiveEditFields", this.state.activeTeam)
    },

    updateFormattedGameTeam({ dispatch }, team) {
      dispatch("getInitAndFormat")
      dispatch("setActiveTeamsByGameId", this.state.activeGame.id)
    },

    async resetTeamGameIds({ dispatch }) {
      await this.state.teams.forEach(t => {
        t.gameId = 0
        api.put("teams", t)
      })
      dispatch("getInitAndFormat")
    },

    async resetWinners({ dispatch, commit }) {
      await this.state.games.forEach(g => {
        g.wId = 0;
        dispatch("updateGame", g)
      })
      dispatch("getInitAndFormat")
    },


    async updatePick({ dispatch, commit }, pick) {
      if (this.state.userPicks.find(up => up.gameId == pick.gameId)) {
        let res = await api.put("picks", pick)
        dispatch("updateUserPicks", res.data)
      }
      else {
        dispatch("createPick", pick)
      }
    },

    async createPick({ dispatch, commit }, pick) {
      let res = await api.post("picks", pick)
      dispatch("updateUserPicks", res.data)
    },

    updateUserPicks({ dispatch, commit }, pick) {
      let picks = [...this.state.userPicks];
      if (picks.find(up => up.gameId == pick.gameId)) {
        picks.splice(picks.findIndex(p => p.gameId == pick.gameId), 1, pick)
      }
      else { picks.push(pick) }
      commit("setUserPicks", picks)
      dispatch("updateFormattedGamesUserData", pick)
    },

    updateFormattedGamesUserData({ dispatch, commit }, pick) {
      let updatedGame = { ...this.state.unlockedFormattedGames.find(fg => fg.id == pick.gameId) };
      updatedGame.userData = pick
      let unlockedFormattedGames = [...this.state.unlockedFormattedGames]
      unlockedFormattedGames.splice(unlockedFormattedGames.findIndex(fg => fg.id == updatedGame.id), 1, updatedGame)
      commit("setUnlockedFormattedGames", unlockedFormattedGames);
      dispatch("setActiveGamesByActiveDate")
    },

    async getLeaderBoardData({ dispatch, commit }) {
      await dispatch("getAllPicks");
      let lbRows = [];
      this.state.users.forEach(u => {
        let user = {};
        let points = 0;
        let perc = 0;
        let possPoints = 0;
        let pointsLeft = 0;
        user.userId = u.userId;
        user.name = u.name;
        this.state.allPicks.forEach(p => {
          if (p.teamId != 0) {
            let winningTeamId = 0;
            if (this.state.lockedFormattedGames.findIndex(fg => fg.wId == p.teamId) > 0) {
              winningTeamId = this.state.lockedFormattedGames.find(fg => fg.wId == p.teamId).wId;
            }
            if (p.userId == user.userId && p.teamId == winningTeamId) {
              points += p.points
            }
            if (p.userId == user.userId && this.state.completedGames.findIndex(cg => cg.id == p.gameId) != -1) {
              possPoints += p.points
            }
            pointsLeft = this.state.possiblePoints.points - possPoints
          }
        });
        user.pointsLeft = pointsLeft
        user.points = points
        user.possPoints = possPoints
        if (points != 0) {
          perc = points / possPoints * 100;
        }
        user.percent = perc.toFixed(2)
        user.pointsLeft = pointsLeft;
        lbRows.push(user)
      })
      commit("setLeaderBoardRows", lbRows)
    },

    getCompletedGames({ dispatch, commit }) {
      let completedGames = this.state.lockedFormattedGames.filter(fg => fg.wId > 0)
      commit("setCompletedGames", completedGames)
      dispatch("getLeaderBoardData")
    },

    async createUser({ dispatch, commit }, user) {
      let res = await api.post("users", user);
      let points = []
      let pointValue = 1;
      if (this.state.unlockedFormattedGames.length < 1) {
        await dispatch("getInitAndFormat")
      }
      this.state.unlockedFormattedGames.forEach(g => {
        let initPick = {}
        initPick.userId = user.userId
        initPick.name = user.name
        initPick.points = 0
        initPick.teamId = 0
        initPick.gameId = g.id
        let pickRes = api.post("picks", initPick)
        let point = {};
        point.pointValue = pointValue;
        points.push(point);
        pointValue++;
      })
      commit("setPoints", points)
      dispatch("getAllPicks")
    },

    sortByPointsLeft({ dispatch, commit }) {
      let sortedRows = this.state.leaderBoardRows.sort(function (a, b) {
        let varA = a.pointsLeft;
        let varB = b.pointsLeft;
        if (varA > varB) {
          return -1;
        }
        if (varA < varB) {
          return 1;
        }
        return 0;
      })
      commit("setLeaderBoardRows", sortedRows)
    },

    sortByPercent({ dispatch, commit }) {
      let sortedRows = this.state.leaderBoardRows.sort(function (a, b) {
        let varA = a.percent;
        let varB = b.percent;
        if (varA > varB) {
          return -1;
        }
        if (varA < varB) {
          return 1;
        }
        return 0;
      })
      commit("setLeaderBoardRows", sortedRows)
    },

    sortByPoints({ dispatch, commit }) {
      let sortedRows = this.state.leaderBoardRows.sort(function (a, b) {
        let varA = a.points;
        let varB = b.points;
        if (varA > varB) {
          return -1;
        }
        if (varA < varB) {
          return 1;
        }
        return 0;
      })
      commit("setLeaderBoardRows", sortedRows)
    },
  }
}
);
