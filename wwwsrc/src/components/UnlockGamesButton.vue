<template>
  <div class="unlock-games-button">
    <div class="m-3 text-center">
      <button
        class="btn btn-danger p-2 mx-auto text-white text-center border btn-block border-white rounded"
        data-target="#unlockAllGamesModal"
        data-toggle="modal"
      >
        Unlock All Games
      </button>
    </div>
    <!--Modal------------------------>
    <div class="modal" tabindex="-1" role="dialog" id="unlockAllGamesModal">
      <div class="modal-dialog-centered m-3" role="document">
        <div class="modal-content bg-dark">
          <div class="modal-body p-3 border rounded border-white text-center">
            <h4>Unlock All Games?</h4>
            <button
              class="btn btn-danger test-center text-white border rounded w-50 border-white m-2"
              data-dismiss="modal"
              @click="unlockAllGames()"
            >
              Unlock Games</button
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
  name: "unlock-games-button",
  data() {
    return {};
  },
  computed: {},
  methods: {
    async unlockAllGames() {
      await this.$store.dispatch("unlockAllGames");
      this.$store.dispatch("getInitAndFormat");
    },
  },
  components: {},
};
</script>


<style scoped>
</style>