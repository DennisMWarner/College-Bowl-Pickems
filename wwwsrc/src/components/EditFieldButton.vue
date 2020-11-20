<template>
  <div class="edit-field-button" @click="setActiveEditField()">
    <div
      v-if="
        this.editFieldButtonData.key != 'id' &&
        this.editFieldButtonData.key != 'gameId'
      "
    >
      <button
        v-if="this.editFieldButtonData.value != '' || 0"
        class="btn btn-warning rounded border border-white text-white text-center m-1 w-75 p-2"
      >
        {{ this.editFieldButtonData.value }}
      </button>
      <button
        v-else
        class="btn btn-secondary rounded border border-white text-white text-center m-1 w-75 p-2"
      >
        Add {{ this.editFieldButtonData.key }}
      </button>
      <input
        v-if="this.editFieldButtonData == this.$store.state.activeEditField"
        type="text"
        class="text-center border rounded w-75 mb-4"
        placeholder="Enter new info..."
      />
    </div>
  </div>
</template>


<script>
export default {
  name: "edit-field-button",
  data() {
    return {};
  },
  computed: {},
  methods: {
    setActiveEditField() {
      this.$store.dispatch("setActiveEditField", this.editFieldButtonData);
    },
  },
  components: {},
  props: ["editFieldButtonData"],
};
</script>


<style scoped>
</style>