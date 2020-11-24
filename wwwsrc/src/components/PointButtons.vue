<template >
  <div class="point-buttons row justify-content-around">
    <point-button
      v-for="pointButton in pointButtons"
      :pointButtonData="pointButton"
      :key="pointButton.pointValue"
      class="bg-warning w-25 text-white border p-2 text-center rounded border-dark"
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