<template>
  <div class="enter-game-modal-body text-white">
    <form>
      <div class="form-group">
        <label
          for="formGroupExampleInput"
          class="w-75 mt-2 bg-success border border-white text-white rounded ml-2 ml-2"
        >
          <h5 class="text-left pl-2">Sponsor:</h5>
        </label>
        <input
          type="text"
          class="form-control w-75 mx-auto text-center border border-success"
          placeholder="Enter sponsor name here..."
          v-model="newGame.sponsor"
          required
        />
      </div>
      <div class="form-group">
        <label
          for="formGroupExampleInput"
          class="w-75 bg-success border border-white text-white rounded ml-2 ml-2"
        >
          <h5 class="pt-1 text-left pl-2">Bowl Name:</h5>
        </label>
        <input
          type="text"
          class="form-control w-75 mx-auto text-center border border-success"
          placeholder="Enter bowl name here..."
          v-model="newGame.name"
          required
        />
      </div>
      <div class="form-group">
        <label
          for="formGroupExampleInput"
          class="w-75 bg-success border border-white text-white rounded ml-2"
        >
          <h5 class="pt-1 text-left pl-2">Location:</h5>
        </label>
        <input
          type="text"
          class="form-control w-75 mx-auto text-center"
          placeholder="Enter location here..."
          v-model="newGame.loc"
          required
        />
      </div>
      <div class="form-group">
        <label
          for="formGroupExampleInput"
          class="w-75 bg-success border border-white text-white rounded ml-2"
        >
          <h5 class="pt-1 text-left pl-2">Date:</h5>
        </label>
        <input
          type="text"
          class="form-control w-75 mx-auto text-center"
          placeholder="Enter date of game here..."
          v-model="newGame.gameDate"
          required
        />
      </div>
      <div class="form-group">
        <label
          for="formGroupExampleInput"
          class="w-75 bg-success border border-white text-white rounded ml-2"
        >
          <h5 class="pt-1 text-left pl-2">Time:</h5>
        </label>
        <input
          type="text"
          class="form-control w-75 mx-auto text-center"
          placeholder="Enter time of game here..."
          v-model="newGame.time"
          required
        />
      </div>
      <div class="form-group">
        <label
          for="formGroupExampleInput"
          class="w-75 bg-success border border-white text-white rounded ml-2"
        >
          <h5 class="pt-1 text-left pl-2">Network(s):</h5>
        </label>
        <input
          type="text"
          class="form-control w-75 mx-auto text-center"
          placeholder="Enter networks aired on here..."
          v-model="newGame.network"
          required
        />
      </div>
      <div class="form-group">
        <label
          for="formGroupExampleInput"
          class="w-75 bg-success border border-white text-white rounded ml-2"
        >
          <h5 class="pt-1 text-left pl-2">Bowl URL:</h5>
        </label>
        <input
          type="text"
          class="form-control w-75 mx-auto text-center"
          placeholder="Enter networks aired on here..."
          v-model="newGame.bowlUrl"
          required
        />
      </div>
    </form>
    <div class="text-center">
      <button
        class="btn btn-success w-25 m-2 rounded border border-white"
        @click="addNewGame()"
        data-dismiss="modal"
      >
        SAVE
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
export default {
  name: "enter-game-modal-body",
  data() {
    return {
      newGame: {},
    };
  },
  computed: {},
  methods: {
    addNewGame() {
      this.$store.dispatch("addNewGame", this.newGame);
    },
  },
  components: {},
};
</script>


<style scoped>
</style>