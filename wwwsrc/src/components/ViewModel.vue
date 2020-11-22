<template>
  <div class="view-model">
    <dates />
    <games />
  </div>
</template>


<script>
import games from "../components/Games";
import dates from "../components/Dates";
export default {
  name: "view-model",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { dates, games },
};
</script>


<style scoped>
</style>