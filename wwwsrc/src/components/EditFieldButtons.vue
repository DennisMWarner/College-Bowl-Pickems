<template>
  <div class="edit-field-buttons">
    <edit-field-button
      v-for="editFieldButton in editFieldButtons"
      :editFieldButtonData="editFieldButton"
      :key="editFieldButton.id"
    />
  </div>
</template>


<script>
import editFieldButton from "../components/EditFieldButton";
export default {
  name: "edit-field-buttons",
  data() {
    return {};
  },
  computed: {
    editFieldButtons() {
      return this.$store.state.activeEditFields;
    },
  },
  methods: {},
  components: { editFieldButton },
};
</script>


<style scoped>
</style>