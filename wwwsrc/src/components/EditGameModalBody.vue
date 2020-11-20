<template>
  <div class="edit-game-modal-body text-white">
    <form>
      <edit-field-buttons />
    </form>
    <div class="text-center">
      <button
        class="btn btn-success w-50 m-2 rounded border border-white"
        @click="editGame()"
        data-dismiss="modal"
      >
        SAVE EDIT
      </button>
      <button
        class="btn btn-secondary w-25 m-2 rounded border border-white"
        data-dismiss="modal"
      >
        CANCEL
      </button>
    </div>
  </div>
</template>


<script>
import editFieldButtons from "../components/EditFieldButtons";
export default {
  name: "edit-game-modal-body",
  data() {
    return {};
  },
  computed: {},
  methods: {
    editedGame() {
      this.$store.dispatch("editGame", this.editedGame);
    },
  },
  components: { editFieldButtons },
};
</script>


<style scoped>
</style>