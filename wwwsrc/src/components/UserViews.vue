<template>
  <div class="user-views">
    <div class="text-white">{{ this.$store.state.activeGame.name }}</div>
    <user-view
      v-for="userView in userViews"
      :userViewData="userView"
      :key="userView.name"
    />
  </div>
</template>


<script>
import userView from "../components/UserView";
export default {
  name: "user-views",
  data() {
    return {};
  },
  computed: {
    userViews() {
      return this.$store.state.userViews;
    },
  },
  methods: {},
  components: { userView },
};
</script> 


<style scoped>
</style>