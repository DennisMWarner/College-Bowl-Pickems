<template>
  <div
    class="user-view text-white row justify-content-around mb-1 pb-1 border-bottom mx-2"
  >
    <div class="col-5">{{ this.userViewData.name }}</div>
    <div class="col-5">{{ this.userViewData.teamName }}</div>
    <div class="col-2 text-right">{{ this.userViewData.points }}</div>
  </div>
</template>


<script>
export default {
  name: "user-view",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
  props: ["userViewData"],
};
</script>


<style scoped>
</style>