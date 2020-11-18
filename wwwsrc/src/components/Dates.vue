<template>
  <div class="dates">
    <date v-for="date in dates" :dateData="date" :key="date.date" />
  </div>
</template>


<script>
import date from "../components/Date";
export default {
  name: "dates",
  data() {
    return {};
  },
  computed: {
    dates() {
      return this.$store.state.dates;
    },
  },
  methods: {},
  components: { date },
};
</script>


<style scoped>
</style>