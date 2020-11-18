<template>
  <div class="home">
    <h2 class="text-white text-center py-5">
      Welcome To Sandy's Bowl Pick'ems 2020
    </h2>
    <view-model />
  </div>
</template>

<script>
import viewModel from "../components/ViewModel";
export default {
  name: "home",
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  components: { viewModel },
};
</script>
