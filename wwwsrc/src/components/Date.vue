<template>
  <div class="date p-2 no-gutters">
    <div
      class="col-12 bg-white my-0 text-dark text-left rounded p-1 w-50"
      @click="setActiveDate()"
    >
      {{ dateData.date }}
    </div>

    <games
      v-if="
        this.$store.state.activeDate &&
        this.$store.state.activeDate == this.dateData
      "
    />
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