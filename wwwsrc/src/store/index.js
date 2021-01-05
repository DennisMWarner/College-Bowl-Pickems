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
  timeout: 10000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    adminOptions: {},
    teams: [],
    teamsToUpdate: [],
    activeTeamsByGameId: [],
    games: [],
    completedGames: [],
    otherGames: [],
    unlockedGames: [],
    numOfValidGames: {},
    leaderBoardHeaderButtons: [{ name: "Pts Won" }, { name: "Win %" }, { name: "Pts Left" }],
    activeLeaderBoardHeaderButton: {},
    allPicks: [],
    userPicks: [],
    incompletePicks: [],
    lockableGames: [],
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
    totalPossPoints: {},
    dates: [],
    activeDate: {},
    activeGame: {},
    activeTeam: {},
    activePoint: {},
    lockedFormattedGames: [],
    unlockedFormattedGames: [],
    availableTeams: [],
    availableGames: [],
    userViews: [],
    teamsRawData: [

      ["Buffalo", "#005BBB", "#ffffff", "", "", "", ""],
      ["Charlotte", "#046A38", "#B9975B", "", "", "", ""],
      ["Utah St", "#0F2439", "#ffffff", "", "", "", ""],
      ["Kent St", "#002664", "#EAAB00", "", "", "", ""],
      ["N Caro A&T", "#004684", "#FDB927", "", "", "", ""],
      ["Alcorn St", "#46166a", "#e9a713", "", "", "", ""],
      ["C Michigan", "#6A0032", "#FFC82E", "", "", "", ""],
      ["San Diego St", "#a6192e", "#000000", "", "", "", ""],
      ["Liberty", "#990000", "#0A254E", "Indep", "0-0", "", ""],
      ["Georgia So", "#011e41", "#87714D", "SunBelt", "4-4", "7-5", "L-1"],
      ["SMU", "#C8102E", "#0033A0", "", "", "", ""],
      ["Florida Atl", "#003366", "#CC0000", "C-USA", "4-2", "5-3", "L-2"],
      ["Florida Int", "#081E3F", "#B6862C", "", "", "", ""],
      ["Ark St", "#cc092f", "#000000", "", "", "", ""],
      ["Boise St", "#0033A0", "#FA4616", "", "", "", ""],
      ["Washington", "#4B2E83", "#B7A57A", "", "", "", ""],
      ["App St", "#222222", "#ffcc00", "SunBelt", "6-2", "8-3", "W-1"],
      ["UAB", "#006341", "#CC8A00", "", "", "", ""],
      ["UCF", "#000000", "#ba9b37", "AAC", "5-3", "6-3", "W-1"],
      ["Marshall", "#00B140", "#A2AAAD", "", "", "", ""],
      ["BYU", "#002E5D", "#ffffff", "Indep", "0-0", "10-1", "W-1", "Cougars"],
      ["Hawaii", "#024731", "#c8c8c8", "MWC", "4-4", "4-4", "W-1"],
      ["LA Tech", "#003087", "#cb333b", "C-USA", "4-2", "5-4", "L-1"],
      ["Miami", "#F47321", "#005030", "", "", "", ""],
      ["Pitt", "#003594", "#FFB81C", "", "", "", ""],
      ["E Michigan", "#006633", "#000000", "", "", "", ""],
      ["UNC", "#7BAFD4", "#ffffff", "", "", "", ""],
      ["Temple", "#9D2235", "ffffff", "", "", "", ""],
      ["Michigan St ", "#18453B", "#ffffff", "", "", "", ""],
      ["Wake Forest", "#9E7E38", "#000000", "", "", "", ""],
      ["Oklahoma State ", "#000000", "#FF7300", "", "", "", ""],
      ["Texas A&M", "#500000", "#ffffff", "", "", "", ""],
      ["USC", "#990000", "#FFC72C", "", "", "", ""],
      ["Iowa", "#FFCD00", "#000000", "", "", "", ""],
      ["Air Force", "#003087", "#8A8D8F", "", "", "", ""],
      ["Washington St", "#981E32", "#5E6A71", "", "", "", ""],
      ["Notre Dame", "#0C2340", "#C99700", "", "", "", ""],
      ["Iowa St", "#C8102E", "#F1BE48", "", "", "", ""],
      ["Memphis", "#003087", "#898D8D", "AAC", "5-3", "7-3", "W-1"],
      ["Penn St", "#041E42", "#ffffff", "", "", "", ""],
      ["Oklahoma", "#841617", "#FDF9D8", "", "", "", ""],
      ["LSU", "#461D7C", "#FDD023", "", "", "", ""],
      ["Clemson", "#F56600", "#522D80", "", "", "", ""],
      ["Ohio St", "#BB0000", "#666666", "", "", "", ""],
      ["W Kentucky", "#C60C30", "#1E1E1E", "", "", "", ""],
      ["W Michigan", "#6C4023", "#B5A167", "", "", "", ""],
      ["Miss St", "#660000", "#ffffff", "", "", "", ""],
      ["Louisville", "#AD0000", "#000000", "", "", "", ""],
      ["Cal", "#003262", "#FDB515", "", "", "", ""],
      ["Illinois", "#13294b", "#E84A27", "", "", "", ""],
      ["Florida", "#0021a5", "#FA4616", "", "", "", ""],
      ["Virginia", "#232D4B", "#F84C1E", "", "", "", ""],
      ["Virginia Tech", "#630031", "#CF4420", "", "", "", ""],
      ["Kentucky", "#0033A0", "#ffffff", "", "", "", ""],
      ["Florida St", "#782F40", "#CEB888", "", "", "", ""],
      ["Arizona St", "#8C1D40", "#FFC627", "", "", "", ""],
      ["Navy", "#000048", "#B4A87E", "", "", "", ""],
      ["Kansas St", "#512888", "#D1D1D1", "", "", "", ""],
      ["Wyoming", "#ffc425", "#492f24", "", "", "", ""],
      ["Georgia St", "#0039A6", "ffffff", "", "", "", ""],
      ["Utah", "#CC0000", "#000000", "", "", "", ""],
      ["Texas", "#BF5700", "#ffffff", "", "", "", ""],
      ["Michigan", "#00274C", "#FFCB05", "", "", "", ""],
      ["Alabama", "#9d2235", "#ffffff", "", "", "", "", "Crimson Tide"],
      ["Minnesota", "#7A0019", "#FFCC33", "", "", "", ""],
      ["Auburn", "#0C2340", "#E87722", "", "", "", ""],
      ["Oregon", "#154733", "#FEE123", "", "", "", ""],
      ["Wisconsin", "#C5050C", "#000000", "", "", "", ""],
      ["Georgia", "#ba0c2f", "#000000", "", "", "", ""],
      ["Baylor", "#003015", "#FECB00", "", "", "", ""],
      ["Boston Col", "#98002E", "#BC9B6A", "", "", "", ""],
      ["Cincinnati", "#E00122", "000000", "", "", "", ""],
      ["Indiana", "#990000", "#ffffff", "", "", "", ""],
      ["Tennessee", "#FF8200", "#ffffff", "", "", "", ""],
      ["Ohio", "#00694E", "#CDA077", "", "", "", ""],
      ["Nevada", "#003366", "#807f84", "MWC", "6-2", "6-2", "L-1", "Wolf Pack"],
      ["So Miss", "#000000", "#FFAB00", "", "", "", ""],
      ["Tulane", "#006747", "#ffffff", "AAC", "3-5", "6-5", "W-1"],
      ["Louisiana", "#ce181e", "#0a0203", "", "", "", ""],
      ["Miami (Ohio)", "#B61E2E", "#000000", "", "", "", ""],
      ["UTSA", "#002244", "#DD4814", "", "", "", "", "Roadrunners"],
      ["Houston", "#c92a39", "#ffffff", "AAC", "3-3", "3-4", "L-1", "Cougars"],
      ["North Texas", "#00853E", "#ffffff", "C-USA", "3-4", "4-5", "W-1", "Eagles"],
      ["Ball State", "#BA0C2F", "#FFFFFF", "", "", "", "", "Cardinals"],
      ["Coastal Caro", "#006f71", "#a27752", "", "", "", "", "Chanticleers"],
      ["Texas Tech", "#CC0000", "#000000", "", "", "", "", ""],
      ["Army", "#2C2A29", "#d3bc8d", "", "", "", "", "Black Knights"],
      ["Tulsa", "#003dcc", "#d4c581", "", "", "", "", "Golden Hurricanes"],
      ["Colorado", "#000000", "#CFB87C", "", "", "", "", "Buffaloes"],
      ["NC State", "#CC0000", "#000000", "", "", "", "", "Wolfpack"],
      ["Maryland", "#E21833", "#ffd200", "", "", "", "", "Terrapins"],
      ["Mississippi", "#5D1725", "#c1c6c8", "", "", "", "", "Bulldogs"],
      ["W Virginia", "#002855", "#EAAA00", "", "", "", "", "Mountaineers"],
      ["TCU", "#4d1979", "#a3a9ac", "", "", "", "", "Horned Frogs"],
      ["Arkansas", "#9D2235", "#ffffff", "", "", "", "", "Razorbacks"],
      ["San Jose St", "#0055A2", "#E5A823", "", "", "", "", "Spartans"],
      ["South Caro", "#73000a", "#000000", "", "", "", "", "Gamecocks"],
      ["Northwestern", "#4E2A84", "#D8D6D6", "", "", "", "", "Wildcats"],
      ["Missouri", "#f1b82d", "#000000", "", "", "", "", "Tigers"],
      ["LA Lafayette", "#ce181e", "#0a0203", "", "", "", "", "Ragin' Cajuns"],
      ["Sugar Bowl Winner", "#730f08", "#ffffff", "", "", "", ""],
      ["Rose Bowl Winner", "#1b2269", "#ffffff", "", "", "", ""]

    ]
  },
  mutations: {
    setGames(state, games) {
      state.games = games
    },

    setTotalPossPoints(state, points) {
      state.totalPossPoints = points
    },
    setActiveUser(state, user) {
      state.activeUser = user
    },

    setOtherGames(state, games) {
      state.otherGames = games
    },

    setAdminOptions(state, options) {
      state.adminOptions = options
    },

    setUserViews(state, userViews) {
      state.userViews = userViews
    },

    setIncompletePicks(state, picks) {
      state.incompletePicks = picks
    },

    setLockableGames(state, games) {
      state.lockableGames = games
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
        await dispatch("getGames")
      }
      if (this.state.teams.length < 1) {
        await dispatch("getTeams")
      }
      let lockedFormattedGames = [];
      let unlockedFormattedGames = []
      let formattedGames = []
      let firstLockedGameDates = []
      let firstUnlockedGameDates = []

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
          if (firstLockedGameDates.findIndex(flgd => flgd.gameDate == tf.gameDate) == -1) {
            tf.isFirstGameDate = "true"
            firstLockedGameDates.push(tf)
            lockedFormattedGames.push(tf)
          }
          else {
            tf.isFirstGameDate = "false"
            lockedFormattedGames.push(tf)
          }
        }
        else if (tf.status == "unlocked" || tf.status == null) {
          if (firstUnlockedGameDates.findIndex(flgd => flgd.gameDate == tf.gameDate) == -1) {
            tf.isFirstGameDate = "true"
            firstUnlockedGameDates.push(tf)
            unlockedFormattedGames.push(tf)
          }
          else {
            tf.isFirstGameDate = "false"
            unlockedFormattedGames.push(tf)
          }
        }
        else { }
      })
      commit("setLockedFormattedGames", lockedFormattedGames)
      commit("setUnlockedFormattedGames", unlockedFormattedGames)
    },

    lockAllGames({ dispatch }) {
      this.state.games.forEach(ug => {
        let gameToEdit = { ...ug }
        gameToEdit.status = "locked"
        dispatch("updateGame", gameToEdit)
      })

    },

    unlockAllGames({ dispatch }) {
      this.state.games.forEach(ug => {
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
      if (team.gameId != 0 && this.state.unlockedFormattedGames.findIndex(g => g.id == team.gameId) != -1) {
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
      if (newGame.rank == null) {
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
      let res = await api.put("users/" + user.id, user)
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
      // dispatch("updateUnCancelledPicks")
    },

    async updateCancelledPicks({ dispatch, commit }) {
      if (this.state.users.length < 1) {
        await dispatch("getUsers")
      }
      if (this.state.allPicks.length < 1) {
        await dispatch("getAllPicks")
      }
      let userCancelledPicks = []
      this.state.users.forEach(u => {
        let userCancelledPick = {}
        userCancelledPick.name = u.name
        userCancelledPick.picks = []


        let userPicks = this.state.allPicks.filter(ap => ap.userId == u.userId);
        let cutoff = userPicks.find(up => up.gameId == this.state.cancelledGameId) || 0;
        userCancelledPick.cutoff = cutoff.points
        if (cutoff) {
          userPicks.forEach(up => {

            let pickToUpdate = { ...up }
            if (pickToUpdate.points > cutoff.points) {
              let p = {}
              p.oldPick = {}
              let game = { ...this.state.games.find(g => g.id == up.gameId) }
              p.name = game.name
              p.oldPick = pickToUpdate.points
              pickToUpdate.points--
              p.newPoints = pickToUpdate.points
              userCancelledPick.picks.push(p)
              dispatch("updatePick", pickToUpdate)
            }
            //keep cancelled game pick to know what user points were...
            // else if (pickToUpdate.points == cutoff.points) {
            //   pickToUpdate.points = 0;
            //   dispatch("updatePick", pickToUpdate)
            // }
          })
        }
        userCancelledPicks.push(userCancelledPick)
      }
      )

      console.log(userCancelledPicks)
      dispatch("getInitAndFormat")
      dispatch("clearActiveGame")

    },

    // updateUnCancelledPicks({ dispatch, commit }) {
    //   this.state.users.forEach(u => {
    //     let userPicks = this.state.allPicks.filter(ap => ap.userId == u.userId);
    //     let cutoff = userPicks.find(up => up.gameId == this.state.unCancelledGameId) || 0;
    //     if (cutoff) {
    //       userPicks.forEach(up => {
    //         let pickToUpdate = { ...up }
    //         if (pickToUpdate.points >= cutoff.points) {
    //           pickToUpdate.points++
    //           dispatch("updatePick", pickToUpdate)
    //         }
    //         //keep cancelled game pick to know what user points were...
    //         // else if (pickToUpdate.points == cutoff.points) {
    //         //   pickToUpdate.points = 0;
    //         //   dispatch("updatePick", pickToUpdate)
    //         // }
    //       })
    //     }
    //   }
    //   )
    //   dispatch("getInitAndFormat")
    //   dispatch("clearActiveGame")
    // },

    async getUsers({ dispatch, commit }) {
      let res = await api.get("users")
      commit("setUsers", res.data)
    },

    async getActiveUser({ dispatch, commit }, activeUser) {
      if (this.state.users.length < 1) {
        // console.log("calling getusers from getactiveuser")
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
        teamToAdd.conference = trd[3]
        teamToAdd.confRecord = trd[4];
        teamToAdd.overallRec = trd[5];
        teamToAdd.streak = trd[6];
        teamToAdd.mascot = trd[7] || ""
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
      teams.sort(function (a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
      commit("setAvailableTeams", teams)
    },

    editTeams({ dispatch, commit }, teams) {
      // console.log("editTeams called...: ", teams)
      teams.forEach(t => {
        let res = api.put("teams/" + t.id, t)
        // console.log("res from editteams: ", res)
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
      // console.log("updateTeam called...")
      let res = await api.put("teams/" + teamToUpdate.id, teamToUpdate)
      dispatch("getInitAndFormat")
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
        // console.log("resetTeamGameIds called...")
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


    // async updatePick({ dispatch, commit }, pick) {
    //   if (this.state.userPicks.find(up => up.gameId == pick.gameId)) {
    //     let res = await api.put("picks", pick)
    //     dispatch("updateUserPicks", res.data)
    //   }
    //   else {
    //     dispatch("createPick", pick)
    //   }
    // },

    async updatePick({ dispatch, commit }, pick) {

      let res = await api.put("picks", pick)
      dispatch("updateUserPicks", res.data)
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

    getTotalPointsPoss({ commit }) {
      let totalPossPoints = {}
      let pointTotal = 0;
      let valGamesNum = this.state.games.filter(g => g.status == 'unlocked' || 'locked').length
      for (let i = valGamesNum; i > 0; i--) {
        pointTotal += i
      }
      totalPossPoints.points = pointTotal
      commit("setTotalPossPoints", totalPossPoints)
      console.log("total possible points: ", totalPossPoints, valGamesNum)
    },

    toggleAdminOptions({ commit }) {
      let adminOptions = {}
      if (this.state.adminOptions.showAdminOptions == true) {
        adminOptions.showOptions = false;
      }
      else {
        adminOptions.showOptions = true;
      }
      commit("setAdminOptions", adminOptions)
    },

    async getUserViews({ commit, dispatch }, game) {
      let thisGame = { ...game }

      if (this.state.allPicks.length < 1) {
        await dispatch("getAllPicks")
      }
      dispatch("setActiveGame", game)

      let winningTeam = {}
      winningTeam.name = "TBD"
      if (thisGame.wId != 0) {
        winningTeam = { ...this.state.teams.find(wt => wt.id == thisGame.wId) }
      }

      let userViews = []
      this.state.users.forEach(uv => {
        let gId = game.id
        let userView = {}
        let gamePick = {
          ...this.state.allPicks.find(up => up.gameId == gId && up.userId == uv.userId)
        }

        userView.name = uv.name
        userView.game = gamePick.gameId
        userView.teamId = gamePick.teamId
        let team = this.state.teams.find(t => t.id == gamePick.teamId)



        userView.teamName = team.name
        userView.gameName = this.state.activeGame.name
        userView.winTeam = winningTeam.name
        userView.points = gamePick.points
        userView.numPicks = this.state.allPicks.filter(ap => ap.userId == uv.userId).length
        userViews.push(userView)
      })

      commit("setUserViews", userViews)
    },


    async getLeaderBoardData({ dispatch, commit }) {
      await dispatch("getAllPicks");
      let lbRows = [];
      this.state.users.forEach(u => {

        let user = {};
        let pointsWon = 0;
        let pointsLeft = 0;
        let possiblePoints = 0;
        let totalPossPoints = this.state.totalPossPoints.points
        let userPicks = this.state.allPicks.filter(p => p.userId == u.userId);
        let completedGameUserPicks = []
        let gameWonUserPicks = []
        userPicks.forEach(up => {
          let compGameIndex = this.state.completedGames.findIndex(cg => cg.id == up.gameId)
          if (compGameIndex != -1) {
            completedGameUserPicks.push(up)
            if (this.state.completedGames[compGameIndex].wId == up.teamId) {
              gameWonUserPicks.push(up)
            }
          }
        })
        // console.log(" user picks: ", u.name, userPicks)
        gameWonUserPicks.forEach(wg => { pointsWon += wg.points })
        completedGameUserPicks.forEach(cgup => { possiblePoints += cgup.points })

        pointsLeft = totalPossPoints - possiblePoints
        if (pointsWon != 0) {
          user.percent = ((pointsWon / possiblePoints) * 100).toFixed(1)
        }
        else {
          user.percent = 0
        }
        user.points = pointsWon
        user.pointsLeft = pointsLeft
        user.name = u.name
        // console.log(u.name, "won: ", totalPossPoints, )
        lbRows.push(user)
      })
      commit("setLeaderBoardRows", lbRows)

      dispatch("sortByPoints")
    },

    getCompletedGames({ dispatch, commit }) {

      let completedGames = this.state.lockedFormattedGames.filter(fg => fg.wId > 0)


      commit("setCompletedGames", completedGames)
      dispatch("getLeaderBoardData")
    },

    async createUser({ dispatch, commit }, user) {
      await dispatch("getUsers");
      if (this.state.users.findIndex(u => u.userId == user.userId) == -1) {
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
      }
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
        let varA = a.percent
        let varB = b.percent
        return parseFloat(varB) - parseFloat(varA)
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

    async getLockableGames({ dispatch, commit }, gameToCheck) {
      if (this.state.allPicks.length < 1) {
        await dispatch("getAllPicks")
      }
      let gamesToCheck = []
      if (gameToCheck != {}) {
        gamesToCheck.push(gameToCheck)
      }
      else { gamesToCheck = [...this.state.unlockedFormattedGames] }

      let incompletePicks = []
      let completePicks = 0;
      let lockableGames = []
      gamesToCheck.forEach(ug => {
        let incompleteGamePicks = []

        let incompletePicksData = this.state.allPicks.filter(p => p.gameId == ug.id && (p.teamId == 0 || p.points == 0))

        completePicks += this.state.allPicks.filter(p => p.gameId == ug.id && (p.teamId != 0 && p.points != 0)).length
        incompletePicksData.forEach(ipd => {
          let incompletePick = { ...ipd }
          incompletePick.gameName = ug.name
          incompletePick.userName = this.state.users.find(u => u.userId == ipd.userId).name
          if (ipd.points == 0 && ipd.teamId == 0) {
            incompletePick.missingPoints = true
            incompletePick.missingTeam = true
            incompleteGamePicks.push(incompletePick)
          }
          else if (ipd.points == 0) {
            incompletePick.missingPoints = true
            incompletePick.missingTeam = false
            incompleteGamePicks.push(incompletePick)
          }
          else if (ipd.teamId == 0) {
            incompletePick.missingTeam = true
            incompletePick.missingPoints = false
            incompleteGamePicks.push(incompletePick)
          }
        })
        if (incompleteGamePicks.length < 1) {
          let lockableGame = { ...ug }
          lockableGames.push(lockableGame)
        }
        incompleteGamePicks.forEach(icp => incompletePicks.push(icp)
        )
      })

      // console.log("lockableGames: ", lockableGames)
      // console.log("incomplete picks: ", incompletePicks)
      // console.log("number of complete picks: ", completePicks)
      commit("setLockableGames", lockableGames)
      commit("setIncompletePicks", incompletePicks)

    },

    async resetUserPicksByGame({ dispatch, commit }, game) {
      if (this.state.allPicks.length < 1) {
        await dispatch("getAllPicks")
      }
      let resetUserPicks = []
      let userGamePicks = this.state.allPicks.filter(ap => ap.gameId == game.id)
      userGamePicks.forEach(ugp => {
        let resetUserPick = { ...ugp }
        resetUserPick.teamId = 0;
        resetUserPick.points = 0;
        resetUserPicks.push(resetUserPick)
      })
      resetUserPicks.forEach(rup => {
        dispatch("updatePick", rup)
      })
    },

    async checkTotPossPts({ dispatch }) {
      await dispatch("getAllPicks")
      this.state.users.forEach(u => {
        let points = 0
        let userPicks = this.state.allPicks.filter(ap => ap.userId == u.userId && this.state.games.find(g => g.id == ap.gameId))
        userPicks.forEach(up => points += up.points)
        console.log(u.name, ": ", points)
        console.log("num of games: ", this.state.games.length)
      })
    }

    // async adjustPts({ dispatch }) {

    //   await dispatch("getAllPicks")
    //   this.state.allPicks.forEach(ap2 => {
    //     if (ap2.points > 29) {
    //       let editedPick = { ...ap2 }
    //       editedPick.points = 29
    //       let userPick = {}
    //       userPick.name = this.state.users.find(u => ap2.userId == u.userId).name
    //       userPick.game = this.state.games.find(g => ap2.gameId == g.id).name
    //       userPick.points = ap2.points
    //       console.log("out of range pick: ", userPick)
    //       dispatch("updatePick", editedPick)
    //     }
    //   })
    //   this.state.users.forEach(u => {
    //     let name = u.name
    //     let allUserPicks = [...this.state.allPicks.filter(ap => ap.userId == u.userId)]
    //     let dupPicks = [];
    //     let picksToChange = []
    //     allUserPicks.forEach(aup => {
    //       let game = { ...this.state.games.find(g => g.id == aup.gameId) }
    //       if (dupPicks.findIndex(dp => dp.points == aup.points) == -1 && game.status == "locked") {
    //         dupPicks.push(aup.points)
    //       }
    //       else if (dupPicks.findIndex((dp) => dp == aup.points) != -1 && aup.points != 0) {
    //         let pickToEdit = { ...aup }
    //         pickToEdit.points = 0
    //         let userPick = {}
    //         userPick.name = name
    //         userPick.game = game.name
    //         userPick.gameId = game.id
    //         userPick.points = aup.points
    //         dispatch("updatePick", pickToEdit)
    //         console.log("new editeed game: ", userPick, aup, pickToEdit)
    //       }
    //     })
    //     console.log("user: ", name)
    //     console.log("locked games: ", dupPicks)
    //     picksToChange.forEach(ptc => {
    //       console.log("dup: ", ptc)
    //     })

    //   })
    // }
  }
}
);
