<template>
  <div class="vh-100 d-flex justify-content-center">
    <div class="d-flex align-items-center">
      <div class="card shadow-lg rounded" style="width: 50vw">
        <div class="card-body p-0">
          <div class="row">
            <!-- side -->
            <div class="col-md-6">
              <img
                src="https://fashionsista.co/wallpaper/wallpaper/20210402/light-yellow-aesthetic-wallpapers-wallpaper-preview.jpg"
                alt="side image"
                class="w-100"
                srcset=""
              />
            </div>
            <!-- side -->
            <!-- form -->
            <div
              class="col-md-6 px-4 d-flex flex-column justify-content-center"
            >
              <h3>Login</h3>
              <form @submit.prevent="login">
                <div class="form-group">
                  <label for="email">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    v-model="logins.username"
                    placeholder="Email or Username"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="logins.password"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" class="btn btn-warning rounded w-100">
                  Login
                </button>
              </form>
              <!-- form -->
              <div class="d-flex align-items-center justify-content-center">
                <nuxt-link class="my-2 nav-link" to="/register"
                  >Create a new Account</nuxt-link
                >
              </div>
              <div class="d-flex align-items-center justify-content-center">
                <nuxt-link class="btn btn-warning" to="/"
                  ><i class="fas fa-long-arrow-alt-left"
                    >Go Back to Homepage</i
                  ></nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "login",
  data() {
    return {
      logins: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$auth.loginWith("local", {
          data: this.logins,
        });
        this.$swal({
          title: "Login Success",
          text: "You are now logged in",
          icon: "success",
        });
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>