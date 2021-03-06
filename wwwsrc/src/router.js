import Vue from "vue";
import Router from "vue-router";
// @ts-ignore
import Home from "./views/Home.vue";
// @ts-ignore

import { authGuard } from "@bcwdev/auth0-vue";
// @ts-ignore
import SetupPage from "./views/SetupPage";
// @ts-ignore
import GamePicksPage from "./views/GamePicksPage";
// // @ts-ignore
import LeaderBoardPage from "./views/LeaderBoardPage";
// @ts-ignore
import MakePicksPage from "./views/MakePicksPage"
import MyPicksPage from "./views/MyPicksPage"


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/setup",
      name: "setup-page",
      component: SetupPage
    },
    {
      path: "/leaderBoard",
      name: "leader-board-page",
      component: LeaderBoardPage
    },
    // {
    //   path: "/stats/:user",
    //   name: "user-stats-page",
    //   component: UserStatsPage
    // },
    {
      path: "/gamePicks",
      name: "game-picks-page",
      component: GamePicksPage
    },
    {
      path: "/makePicks",
      name: "make-picks-page",
      component: MakePicksPage
    },
    {
      path: "/myPicks",
      name: "my-picks-page",
      component: MyPicksPage
    }

  ]
});
