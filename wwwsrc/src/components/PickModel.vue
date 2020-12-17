<template>
  <div class="pick-model">
    {{ this.pickModelData.game }}{{ this.pickModelData.team
    }}{{ this.pickModelData.points }}
  </div>
</template>


<script>
export default {
  name: "pick-model",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
  props: ["pickModelData"],
};
</script>


<style scoped>
</style>