<template>
  <nav class="navbar sticky-top navbar-expand-md navbar-dark bg-info">
    <router-link class="w-50" :to="{ name: 'home' }">
      <img
        src="../assets/cobopi-logo-comp.png"
        class="img-fluid p-1 bg-light rounded"
      />
    </router-link>
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

        <li
          class="nav-item"
          :class="{ active: $route.name == 'leaderboard' }"
          v-if="$auth.isAuthenticated"
        >
          <router-link :to="{ name: 'leader-board-page' }" class="nav-link"
            >Leaderboard</router-link
          >
        </li>
        <li
          class="nav-item"
          :class="{ active: $route.name == 'myPicks' }"
          v-if="
            $auth.isAuthenticated &&
            this.$store.state.lockedFormattedGames.length > 0
          "
        >
          <router-link :to="{ name: 'my-picks-page' }" class="nav-link"
            >View My Picks</router-link
          >
        </li>
        <li
          v-if="
            $auth.isAuthenticated &&
            $auth.identity.hasOwnProperty('permissions') &&
            $auth.identity.permissions.length > 0
          "
          class="nav-item"
          :class="{ active: $route.name == 'setup' }"
        >
          <router-link :to="{ name: 'setup-page' }" class="nav-link"
            >Admin Page</router-link
          >
        </li>

        <!-- <li
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
        <li
          class="nav-item"
          :class="{ active: $route.name == 'stats' }"
          v-if="$auth.isAuthenticated"
        >
          <router-link :to="{ name: 'stats-page' }" class="nav-link"
            >All Stats</router-link
          >
        </li> -->
        <li
          class="nav-item"
          :class="{ active: $route.name == 'makePicks' }"
          v-if="
            $auth.isAuthenticated &&
            (this.$store.state.activeUser.tieBreaker < 1 ||
              this.$store.state.unlockedFormattedGames.length > 0)
          "
        >
          <router-link :to="{ name: 'make-picks-page' }" class="nav-link"
            >Make Picks
            <span>
              <img
                src="../assets/exclamation.png"
                alt=""
                class="img-fluid winImg mb-1" /></span
          ></router-link>
        </li>
      </ul>
      <div v-if="$auth.isAuthenticated" class="mr-2 text-warning">
        {{
          this.$store.state.users.find(
            (u) => u.userId == this.$auth.userInfo.sub
          ).name
        }}
      </div>
      <span class="navbar-text">
        <button
          class="btn btn-dark border border-white"
          @click="login"
          v-if="!$auth.isAuthenticated"
        >
          Login
        </button>
        <button
          class="btn btn-danger border border-white"
          @click="logout"
          v-else
        >
          logout
        </button>
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
      await this.$store.dispatch("setBearer", this.$auth.bearer);

      // console.log("this.$auth: ");
      // console.log(this.$auth);
      this.$store.dispatch("getInitAndFormat");
      this.$store.dispatch("getActiveUser", this.$auth.userInfo.sub);
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

<style scoped>
.winImg {
  max-width: 25px !important;
  max-height: 25px;
}
</style>
