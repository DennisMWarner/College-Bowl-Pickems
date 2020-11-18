<template>
  <div class="team">
    <div class="col-12">
      <div
        class="button btn bg-danger w-75 rounded border text-white border-white mt-2"
      >
        {{ teamData.name }}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "team",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
  props: ["teamData"],
};
</script>


<style scoped>
</style>