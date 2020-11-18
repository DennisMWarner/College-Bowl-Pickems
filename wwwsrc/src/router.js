import Vue from "vue";
import Router from "vue-router";
// @ts-ignore
import Home from "./views/Home.vue";
// @ts-ignore

import { authGuard } from "@bcwdev/auth0-vue";
// @ts-ignore
import SetupPage from "./views/SetupPage";
// @ts-ignore
import StatsPage from "./views/StatsPage";
// @ts-ignore
import UserStatsPage from "./views/UserStatsPage";
// @ts-ignore
import LeaderboardPage from "./views/LeaderboardPage";

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
      path: "/leaderboard",
      name: "leaderboard-page",
      component: LeaderboardPage
    },
    {
      path: "/stats/:user",
      name: "user-stats-page",
      component: UserStatsPage
    },
    {
      path: "/stats",
      name: "stats-page",
      component: StatsPage
    },


  ]
});
