<template>
  <div class="edit-field-button" @click="setActiveEditField()">
    <div
      v-if="
        this.editFieldButtonData.key != 'id' &&
        this.editFieldButtonData.key != 'gameId' &&
        this.editFieldButtonData.key != 'firstTeam' &&
        this.editFieldButtonData.key != 'secondTeam'
      "
    >
      <div v-if="this.editFieldButtonData == this.$store.state.activeEditField">
        <button
          v-if="this.editFieldButtonData.value"
          class="btn btn-warning mb-2 rounded border mt-4 border-white text-white text-center w-75 p-2"
        >
          <h3>
            {{ this.editFieldButtonData.value }}
          </h3>
        </button>
        <button
          v-else
          class="btn btn-secondary rounded border border-white text-white text-center m-1 w-75 p-2"
        >
          Add {{ this.editFieldButtonData.key }}
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
          v-if="this.editFieldButtonData.value"
          class="btn btn-warning rounded border border-white text-white text-center m-1 w-75 p-2"
        >
          {{ this.editFieldButtonData.value }}
        </button>
        <button
          v-else
          class="btn btn-secondary rounded border border-white text-white text-center m-1 w-75 p-2"
        >
          Add {{ this.editFieldButtonData.key }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "edit-field-button",
  data() {
    return {
      editData: {},
    };
  },
  computed: {},
  methods: {
    setActiveEditField() {
      this.$store.dispatch("setActiveEditField", this.editFieldButtonData);
    },
    updateEditedGameField() {
      this.editData.key = this.editFieldButtonData.key;
      // let key = this.editFieldButtonData.key;
      // this.editData[key] = this.editData.value;
      this.$store.dispatch("updateEditedGameField", this.editData);
    },
  },

  components: {},
  props: ["editFieldButtonData"],
};
</script>


<style scoped>
</style>