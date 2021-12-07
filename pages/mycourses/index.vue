<template>
  <div class="container-fluid">
    <!-- content card my courses -->
    <div class="row learning-block">
      <h6>My Courses :</h6>
      <!-- looping content card here guys -->
      <div
        class="col-md-4 col-sm-6 box-col-6"
        v-for="(item, i) in this.classes"
        :key="i"
      >
        <div class="card">
          <div class="product-box learning-box">
            <div class="product-img">
              <img
                v-if="item.fotoKelas"
                class="img-fluid top-radius-blog"
                :src="item.fotoKelas"
                alt=""
              />
              <img
                v-else
                class="img-fluid top-radius-blog"
                src="assets/images/dashboard/banner250.jpg"
                alt=""
              />
              <div class="product-hover">
                <ul>
                  <li>
                    <a
                      href="#"
                      @click="() => (followingClass = i)"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Lihat Detail Kelas"
                      ><i class="icon-eye"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="details-main">
              <a :href="'/' + item.kodeKelas + '/schedule'">
                <div class="bottom-details">
                  <h6>{{ item.namaKelas }}</h6>
                </div></a
              >
              <p>{{ item.deskripsi }}</p>
            </div>
            <div class="d-flex justify-content-center">
              <button class="btn btn-dark btn-sm" type="button">
                <nuxt-link
                  class="nav-link"
                  :to="'/' + item.kodeKelas + '/schedule'"
                  >OPEN</nuxt-link
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- content card next courses -->
    <div class="row learning-block">
      <hr />
      <h6>Session List :</h6>
      <!-- looping content card here guys -->
      <div
        class="col-md-12 col-sm-6 box-col-6"
        v-for="(items, i) in Session"
        :key="i"
      >
        <div class="row">
          <div class="col-xl-12 col-sm-6">
            <div class="card">
              <div class="blog-box blog-list row">
                <div class="col-xl-3 col-12">
                  <!-- src="/assets/images/dashboard/banner250.jpg" -->
                  <img
                    class="img-fluid sm-100-w"
                    src="https://www.cognitoforms.com/file/RlZaPqUXSZwjYuIShOaf5q2EPyeMFxyXuXGybiQ7ufg6aZu-v_DtU0Y7yp5P9k8H"
                    alt=""
                  />
                </div>
                <div class="col-xl-7 col-12">
                  <div class="blog-details">
                    <div class="blog-date">
                      <span>{{
                        $moment(items.waktuMulai).format("dddd")
                      }}</span>
                      {{ $moment(items.waktuMulai).format("MMMM") }}
                      {{ $moment(items.waktuMulai).format("YYYY") }}
                      <!-- masih belum bagus -->
                    </div>
                    <a href="#">
                      <h6>{{ items.namaSesi }}</h6></a
                    >
                    <div class="blog-bottom-content">
                      <ul class="blog-social">
                        <li>Nama Kelas : {{ namaKelas[followingClass] }}</li>
                      </ul>
                    </div>
                  </div>
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
  data() {
    return {
      listDate: [],
      listMonth: [],
      listYear: [],
      listHour: [],
      namaKelas: [],
      followingClass: 0,
      classes: null,
      list: [],
      sesi: [],
    };
  },
  mounted() {
    this.GET_DATA();
  },
  computed: {
    Session() {
      return this.sesi[this.followingClass];
    },
  },
  methods: {
    async GET_DATA() {
      try {
        const response = await this.getData("/user/following");
        this.classes = response.data;
        response.data.forEach((e) => {
          this.namaKelas.push(e.namaKelas);
          this.sesi.push(e.Sessions);
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
