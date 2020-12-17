<template>
  <div class="team-edit-field-buttons">
    <team-edit-field-button
      v-for="teamEditFieldButton in teamEditFieldButtons"
      :teamEditFieldButtonData="teamEditFieldButton"
      :key="teamEditFieldButton.id"
    />
  </div>
</template>


<script>
import teamEditFieldButton from "../components/TeamEditFieldButton";
export default {
  name: "team-edit-field-buttons",
  data() {
    return {};
  },
  computed: {
    teamEditFieldButtons() {
      return this.$store.state.activeEditFields;
    },
  },
  methods: {},
  components: { teamEditFieldButton },
};
</script>


<style scoped>
</style>