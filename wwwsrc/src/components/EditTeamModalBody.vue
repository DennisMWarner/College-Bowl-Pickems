<template>
  <div class="edit-team-modal-body text-white">
    <form>
      <edit-field-buttons />
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
import editFieldButtons from "../components/EditFieldButtons";
export default {
  name: "edit-team-modal-body",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { editFieldButtons },
};
</script>


<style scoped>
</style>