<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <router-link class="navbar-brand" :to="{ name: 'home' }">HOME</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{ active: $route.name == 'home' }">
          <router-link :to="{ name: 'home' }" class="nav-link"
            >Home</router-link
          >
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'leaderboard' }">
          <router-link :to="{ name: 'leaderboard-page' }" class="nav-link"
            >Leaderboard</router-link
          >
        </li>
        <li
          v-if="$auth.isAuthenticated && $auth.identity.permissions.length > 0"
          class="nav-item"
          :class="{ active: $route.name == 'setup' }"
        >
          <router-link :to="{ name: 'setup-page' }" class="nav-link"
            >Admin Page</router-link
          >
        </li>
        <li
          v-if="$auth.isAuthenticated"
          class="nav-item"
          :class="{
            active: $route.name == 'stats',
          }"
        >
          <router-link
            :to="{
              name: 'user-stats-page',
              params: { user: this.userInfo.name },
            }"
            class="nav-link"
            >My Stats</router-link
          >
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'stats' }">
          <router-link :to="{ name: 'stats-page' }" class="nav-link"
            >All Stats</router-link
          >
        </li>
        <!-- <li
          class="nav-item"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'dashboard' }"
        >
          <router-link class="nav-link" :to="{ name: 'dashboard' }"
            >Admin-Dashboard</router-link
          >
        </li> -->
      </ul>
      <span class="navbar-text">
        <button
          class="btn btn-success"
          @click="login"
          v-if="!$auth.isAuthenticated"
        >
          Login
        </button>
        <button class="btn btn-danger" @click="logout" v-else>logout</button>
      </span>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

let _api = axios.create({
  baseURL: "https://localhost:5001",
  withCredentials: true,
});
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      // console.log("this.$auth: ");
      // console.log(this.$auth);
      await this.$store.dispatch("getGames");
      await this.$store.dispatch("getTeams");

      await this.$store.dispatch("getUserPicks", this.$auth.userInfo.sub);
      this.$store.dispatch("formatGames");
    },
    async logout() {
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({ returnTo: window.location.origin });
    },
  },
  computed: {
    userInfo() {
      return this.$auth.userInfo;
    },
  },
};
</script>

<style></style>
