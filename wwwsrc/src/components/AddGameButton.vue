<template>
  <div class="add-game-button">
    <div class="m-3 text-center">
      <button
        class="btn btn-info p-2 mx-auto text-white text-center border btn-block border-white rounded"
        data-target="#addGameModal"
        data-toggle="modal"
      >
        Add A New Game
      </button>
    </div>
    <!--Modal------------------------>
    <div class="modal" tabindex="-1" role="dialog" id="addGameModal">
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
import enterGameModalBody from "../components/EnterGameModalBody";
export default {
  name: "add-game-button",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { enterGameModalBody },
};
</script>


<style scoped>
</style>