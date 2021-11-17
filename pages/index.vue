<template>
  <div class="container-fluid general-widget">
    <div class="row">
      <div class="col-sm-6 col-xl-3 col-lg-6">
        <div class="card o-hidden border-0">
          <div class="bg-primary b-r-4 card-body">
            <div class="media static-top-widget">
              <div class="align-self-center text-center">
                <i data-feather="database"></i>
              </div>
              <div class="media-body">
                <span class="m-0">Class Active</span>
                <h4 class="mb-0"><span class="counter">2</span> Classs</h4>
                <i class="icon-bg" data-feather="database"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-3 col-lg-6">
        <div class="card o-hidden border-0">
          <div class="bg-secondary b-r-4 card-body">
            <div class="media static-top-widget">
              <div class="align-self-center text-center">
                <i data-feather="shopping-bag"></i>
              </div>
              <div class="media-body">
                <span class="m-0">Precense</span>
                <h4 class="mb-0"><span class="counter">50</span>%</h4>
                <i class="icon-bg" data-feather="shopping-bag"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-3 col-lg-6">
        <div class="card o-hidden border-0">
          <div class="bg-success b-r-4 card-body">
            <div class="media static-top-widget">
              <div class="align-self-center text-center">
                <i data-feather="message-circle"></i>
              </div>
              <div class="media-body">
                <span class="m-0">Remain Task</span>
                <h4 class="mb-0 counter">893</h4>
                <i class="icon-bg" data-feather="message-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-3 col-lg-6">
        <div class="card o-hidden border-0">
          <div class="bg-danger b-r-4 card-body">
            <div class="media static-top-widget">
              <div class="align-self-center text-center">
                <i data-feather="user-plus"></i>
              </div>
              <div class="media-body">
                <span class="m-0">Remain Task</span>
                <h4 class="mb-0 counter">4531</h4>
                <i class="icon-bg" data-feather="user-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="(items, i) in listClass"
        :key="i"
        class="col-xl-4 col-lg-6 col-sm-6"
      >
        <div class="card">
          <div class="card-header">
            <div v-if="items.fotoKelas">
              <img :src="items.fotoKelas" alt="user" class="rounded" />
            </div>
            <div v-else>
              <img
                src="https://www.cognitoforms.com/file/RlZaPqUXSZwjYuIShOaf5q2EPyeMFxyXuXGybiQ7ufg6aZu-v_DtU0Y7yp5P9k8H"
                alt="gambarkelas"
                srcset=""
                width="100%"
              />
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ items.namaKelas }}</h5>
            <p class="card-text">{{ items.deskripsi }}</p>
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-4 col-sm-6 col-6">
                  <a href="#" class="btn btn-sm btn-primary">Details</a>
                </div>
                <div class="col-xl-6 col-lg-4 col-sm-6 col-6">
                  <a href="#" class="btn btn-sm btn-primary">Register</a>
                </div>
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
  auth: false,
  data() {
    return {
      listClass: [],
    };
  },
  mounted() {
    this.GET_LIST_CLASS();
  },
  methods: {
    async GET_LIST_CLASS() {
      try {
        const data = await this.getData("/class");
        console.log(data);
        this.listClass = data.data;
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
