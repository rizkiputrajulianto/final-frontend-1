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
              <h3>Register</h3>
              <form @submit.prevent="register">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="regist.email"
                    placeholder="example@email.com"
                  />
                </div>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    v-model="regist.username"
                    placeholder="Username"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="regist.password"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" class="btn btn-warning rounded w-100">
                  Daftar
                </button>
              </form>
              <!-- form -->
              <div class="d-flex align-items-center justify-content-center">
                <nuxt-link class="my-2" to="login">Login</nuxt-link>
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
  auth: false,
  data() {
    return {
      regist: {
        email: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async register() {
      try {
        const response = await this.createData("user/register", this.regist);
        if (response) {
          this.$router.push("/login");
        }
      } catch (error) {
        this.$swal({
          title: "Error",
          text: error.toString(),
          icon: "error",
        });
      }
    },
  },
};
</script>