<template>
  <div class="pick-models">
    <h4>{{ this.$store.state.activePickModelUser.name }}</h4>
    <pick-model
      v-for="pickModel in pickModels"
      :pickModelData="pickModel"
      :key="pickModel.id"
    />
  </div>
</template>


<script>
import pickModel from "../components/PickModel";
export default {
  name: "pick-models",
  data() {
    return {};
  },
  computed: {
    pickModels() {
      return this.$store.state.pickModels;
    },
  },
  methods: {},
  components: { pickModel },
};
</script>


<style scoped>
</style>