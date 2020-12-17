<template>
  <div class="edit-game-modal-body text-white">
    <form>
      <game-edit-field-buttons />
    </form>
    <div class="text-center">
      <button
        class="btn btn-secondary w-50 mt-4 m-2 rounded border border-white"
        data-dismiss="modal"
      >
        CANCEL
      </button>
    </div>
  </div>
</template>


<script>
import gameEditFieldButtons from "../components/GameEditFieldButtons";
export default {
  name: "edit-game-modal-body",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { gameEditFieldButtons },
};
</script>


<style scoped>
</style>