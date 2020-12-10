<template>
  <div class="home text-center">
    <h4 class="text-white text-center mt-5">Welcome to College Bowl Pickems</h4>
    <h3 class="text-white text-center">2020 / 2021</h3>

    <button
      v-if="!$auth.isAuthenticated"
      class="btn btn-warning text-center w-50 border border-white text-white shadow mt-5"
      @click="login()"
    >
      Login or register
    </button>
    <div
      v-if="
        $auth.isAuthenticated &&
        this.$store.state.users.findIndex(
          (u) => u.userId == this.$auth.userInfo.sub
        ) < 0
      "
      class="text-white"
    >
      <div class="input-group mb-3 w-75 mx-auto">
        <input
          type="text"
          class="form-control"
          placeholder="Enter username"
          aria-label=""
          v-model="newUser.name"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-light bg-warning"
            type="button"
            id="button-addon2"
            data-toggle="modal"
            data-target="#create-user-modal"
          >
            Save
          </button>
        </div>
        <!--------------------------create user modal----------------------------->
        <div
          class="modal p-3"
          tabindex="-1"
          role="dialog"
          id="create-user-modal"
        >
          <div class="modal-dialog-centered" role="document">
            <div
              v-if="
                this.$store.state.users.findIndex(
                  (u) => u.name == this.newUser.name
                ) < 0
              "
              class="modal-content bg-dark border border-white pt-2 text-white"
            >
              <h5>Good luck, {{ this.newUser.name }}!</h5>
              <button
                type="button"
                class="btn btn-warning border border-white w-50 mx-auto m-3"
                @click="createUser()"
              >
                OK
              </button>
            </div>
            <div
              v-else
              class="modal-content bg-dark border border-white pt-2 text-white"
            >
              <h5>Sorry, "{{ this.newUser.name }}" is taken.</h5>
              <h5>Please choose another name.</h5>
              <button
                type="button"
                class="btn btn-warning w-75 border border-white shadow mx-auto m-3"
                data-dismiss="modal"
              >
                Enter another name
              </button>
            </div>
          </div>
        </div>
        <!------------------------------------------------------------------------>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      newUser: {},
    };
  },
  mounted() {
    console.log("logged in: ", this.$auth.userInfo);
  },
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      await this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getUsers");
    },
    logout() {
      this.$store.dispatch("logout");
    },
    createUser() {
      if (
        this.$store.state.users.findIndex((u) => u.name == this.newUser.name) ==
          -1 &&
        this.newUser.name.length != ""
      ) {
        console.log(
          "user in state: ",
          this.$store.state.users.findIndex((u) => u.name == this.newUser.name)
        );
        console.log("newUser: ", this.newUser);
        this.newUser.userId = this.$auth.userInfo.sub;
        this.newUser.email = this.$auth.userInfo.email;
        this.newUser.picture = this.$auth.userInfo.picture;
        console.log("user: ", this.$auth.userInfo);
        console.log("this user: ", this.newUser);
        this.$store.dispatch("createUser", this.newUser);
        $("#create-user-modal").modal("hide");
      } else {
        console.log("something bad happened...");
      }
    },
  },
  components: {},
};
</script>
