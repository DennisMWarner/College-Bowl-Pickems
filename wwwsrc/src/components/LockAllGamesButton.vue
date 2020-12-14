<template>
  <div class="lock-all-games-button">
    <div class="m-3 text-center">
      <button
        class="btn btn-danger p-2 mx-auto text-white text-center border btn-block border-white rounded"
        data-target="#lockAllGamesModal"
        data-toggle="modal"
      >
        Lock All Games
      </button>
    </div>
    <!--Modal------------------------>
    <div class="modal" tabindex="-1" role="dialog" id="lockAllGamesModal">
      <div class="modal-dialog-centered m-3" role="document">
        <div class="modal-content bg-dark">
          <div class="modal-body p-3 border rounded border-white text-center">
            <h4>Lock All Games?</h4>
            <button
              class="btn btn-danger test-center text-white border rounded w-50 border-white m-2"
              data-dismiss="modal"
              @click="lockAllGames()"
            >
              Lock Games</button
            ><button
              class="btn btn-info test-center text-white border rounded w-50 border-white m-2"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--------------modal end-------------->
  </div>
</template>


<script>
export default {
  name: "lock-all-games-button",
  data() {
    return {};
  },
  computed: {},
  methods: {
    lockAllGames() {
      this.$store.dispatch("lockAllGames");
    },
  },
  components: {},
};
</script>


<style scoped>
</style>