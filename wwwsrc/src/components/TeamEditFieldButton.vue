<template>
  <div class="team-edit-field-button" @click="setActiveEditField()">
    <div
      v-if="
        this.teamEditFieldButtonData.key != 'id' &&
        this.teamEditFieldButtonData.key != 'gameId' &&
        this.teamEditFieldButtonData.key != 'firstTeam' &&
        this.teamEditFieldButtonData.key != 'secondTeam' &&
        this.teamEditFieldButtonData.key != 'userData'
      "
    >
      <div
        v-if="this.teamEditFieldButtonData == this.$store.state.activeEditField"
      >
        <button
          v-if="this.teamEditFieldButtonData.value"
          class="btn btn-warning mb-2 rounded border mt-4 border-white text-white text-center w-75 p-2"
        >
          <h3>
            {{ this.teamEditFieldButtonData.value }}
          </h3>
        </button>
        <button
          v-else
          class="btn btn-secondary rounded border border-white text-white text-center m-1 w-75 p-2"
        >
          Add {{ this.teamEditFieldButtonData.key }}
        </button>

        <input
          type="text"
          class="text-center border rounded w-75 mb-2"
          placeholder="Enter new info..."
          v-model="editData.value"
        />
        <button
          class="btn btn-info btn-block border w-75 mb-4 rounded text-white mx-auto text-center"
          @click="updateEditedTeamField()"
        >
          Save
        </button>
      </div>
      <div v-else>
        <button
          v-if="this.teamEditFieldButtonData.value"
          class="btn btn-warning rounded border border-white text-white text-center m-1 w-75 p-2"
        >
          {{ this.teamEditFieldButtonData.value }}
        </button>
        <button
          v-else
          class="btn btn-secondary rounded border border-white text-white text-center m-1 w-75 p-2"
        >
          Add {{ this.teamEditFieldButtonData.key }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "team-edit-field-button",
  data() {
    return {
      editData: {},
    };
  },
  computed: {},
  methods: {
    async setActiveEditField() {
      await this.$store.dispatch(
        "setActiveEditField",
        this.teamEditFieldButtonData
      );
    },
    async updateEditedTeamField() {
      this.editData.key = this.teamEditFieldButtonData.key;
      // let key = this.teamEditFieldButtonData.key;
      // this.editData[key] = this.editData.value;
      console.log("team field to update: ", this.editData);
      await this.$store.dispatch("updateEditedTeamField", this.editData);
      this.$store.dispatch("getInitAndFormat");
    },
  },

  components: {},
  props: ["teamEditFieldButtonData"],
};
</script>


<style scoped>
</style>