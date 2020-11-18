<template>
  <div class="date p-0">
    <div
      class="col-12 bg-secondary text-white text-left rounded text-white text-center p-1"
      @click="setActiveDate()"
    >
      {{ dateData.date }}
    </div>

    <games />
  </div>
</template>


<script>
import games from "../components/Games";
export default {
  name: "date",
  data() {
    return {};
  },
  computed: {},
  methods: {
    setActiveDate() {
      this.$store.dispatch("setActiveDate", this.dateData);
    },
  },
  components: { games },
  props: ["dateData"],
};
</script>


<style scoped>
</style>