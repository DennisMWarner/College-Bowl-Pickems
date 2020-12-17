<template>
  <div class="game-edit-field-button" @click="setActiveEditField()">
    <div
      v-if="
        this.gameEditFieldButtonData.key != 'id' &&
        this.gameEditFieldButtonData.key != 'gameId' &&
        this.gameEditFieldButtonData.key != 'firstTeam' &&
        this.gameEditFieldButtonData.key != 'secondTeam' &&
        this.gameEditFieldButtonData.key != 'userData'
      "
    >
      <div
        v-if="this.gameEditFieldButtonData == this.$store.state.activeEditField"
      >
        <button
          v-if="this.gameEditFieldButtonData.value"
          class="btn btn-warning mb-2 rounded border mt-4 border-white text-white text-center w-75 p-2"
        >
          <h3>
            {{ this.gameEditFieldButtonData.value }}
          </h3>
        </button>
        <button
          v-else
          class="btn btn-secondary rounded border border-white text-white text-center m-1 w-75 p-2"
        >
          Add {{ this.gameEditFieldButtonData.key }}
        </button>

        <input
          type="text"
          class="text-center border rounded w-75 mb-2"
          placeholder="Enter new info..."
          v-model="editData.value"
        />
        <button
          class="btn btn-info btn-block border w-75 mb-4 rounded text-white mx-auto text-center"
          @click="updateEditedGameField()"
        >
          Save
        </button>
      </div>
      <div v-else>
        <button
          v-if="this.gameEditFieldButtonData.value"
          class="btn btn-warning rounded border border-white text-white text-center m-1 w-75 p-2"
        >
          {{ this.gameEditFieldButtonData.value }}
        </button>
        <button
          v-else
          class="btn btn-secondary rounded border border-white text-white text-center m-1 w-75 p-2"
        >
          Add {{ this.gameEditFieldButtonData.key }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "game-edit-field-button",
  data() {
    return {
      editData: {},
    };
  },
  computed: {},
  methods: {
    setActiveEditField() {
      this.$store.dispatch("setActiveEditField", this.gameEditFieldButtonData);
    },
    updateEditedGameField() {
      this.editData.key = this.gameEditFieldButtonData.key;
      // let key = this.gameEditFieldButtonData.key;
      // this.editData[key] = this.editData.value;
      this.$store.dispatch("updateEditedGameField", this.editData);
      this.$store.dispatch("getInitAndFormat");
    },
  },

  components: {},
  props: ["gameEditFieldButtonData"],
};
</script>


<style scoped>
</style>