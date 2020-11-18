<template>
  <div class="points-selector">
    <point-button
      v-for="pointButton in pointButtons"
      :pointButtonData="pointButton"
      :key="pointButton.pointValue"
      class="row justify-content-around"
    />
  </div>
</template>


<script>
import pointButton from "../components/PointButton";
export default {
  name: "points-selector",
  data() {
    return {};
  },
  computed: {
    pointButtons() {
      return this.$store.state.points;
    },
  },
  methods: {},
  components: { pointButton },
};
</script>


<style scoped>
</style>