<template>
  <div class="user-view text-white row">
    <div class="col-4">{{ this.userViewData.name }}</div>
    <div class="col-2">{{ this.userViewData.team }}</div>
    <div class="col-2">{{ this.userViewData.points }}</div>
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