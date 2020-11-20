<template>
  <div class="add-team-button">
    <div class="m-3 text-center">
      <button
        class="btn btn-info p-2 mx-auto text-white text-center border btn-block border-white rounded"
        data-target="#addTeamModal"
        data-toggle="modal"
      >
        Add A New Team
      </button>
    </div>
    <!--Modal------------------------>
    <div class="modal" tabindex="-1" role="dialog" id="addTeamModal">
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent">
          <div class="modal-body no-gutters p-0">
            <enter-game-modal-body />
          </div>
        </div>
      </div>
    </div>
    <!--------------modal end-------------->
  </div>
</template>


<script>
import enterTeamModalBody from "../components/EnterTeamModalBody";
export default {
  name: "add-team-button",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { enterTeamModalBody },
};
</script>


<style scoped>
</style>