<template >
  <div class="point-buttons row no-gutters justify-content-around">
    <point-button
      v-for="pointButton in pointButtons"
      :pointButtonData="pointButton"
      :key="pointButton.pointValue"
    />
  </div>
</template>


<script>
import pointButton from "../components/PointButton";
export default {
  name: "point-buttons",
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