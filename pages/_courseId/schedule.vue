<template>
  <div class="container-fluid">
    <div class="col-md-12 project-list">
      <div class="card">
        <div class="row">
          <div class="col-md-6 p-0">
            <ul class="nav nav-tabs border-tab" id="top-tab" role="tablist">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link active"
                  :to="'/' + `${$route.params.courseId}` + '/schedule'"
                  role="tab"
                  ><i data-feather="calendar"></i>Jadwal</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :to="'/' + `${$route.params.courseId}` + '/course'"
                  ><i data-feather="edit"></i>Course</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :to="'/' + `${$route.params.courseId}` + '/teamate'"
                  ><i data-feather="users"></i>Anggota</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- content card my courses -->
    <div class="row learning-block">
      <h6>My Schedule :</h6>
      <!-- looping content card here guys -->
      <div class="col-md-4 col-sm-6 box-col-6">
        <div class="card">
          <div class="product-box learning-box">
            <div class="product-img">
              <img
                class="img-fluid top-radius-blog"
                :src="listClass.fotoKelas"
                alt=""
                v-if="listClass.fotoKelas"
              />
              <img
                class="img-fluid top-radius-blog"
                src="/assets/images/dashboard/banner250.jpg"
                alt=""
                v-else
              />
              <div class="product-hover">
                <ul>
                  <li>
                    <nuxt-link
                      :to="`/${listClass.kodeKelas}/schedule`"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Lihat Detail Kelas"
                      ><i class="icon-eye"></i
                    ></nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="details-main">
              <a href="">
                <div class="bottom-details">
                  <h6>{{ listClass.namaKelas }}</h6>
                </div></a
              >
              <p>{{ listClass.deskripsi }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-8 col-sm-6 box-col-6">
        <div class="col-md-12 col-sm-6 box-col-6">
          <div class="row">
            <div
              class="col-xl-12 col-sm-6"
              v-for="(item, i) in listClass.Sessions"
              :key="i"
            >
              <div class="card">
                <div class="blog-box blog-list row">
                  <div class="col-xl-3 col-5">
                    <img
                      :src="listClass.fotoKelas"
                      alt=""
                      class="img-fluid sm-10-w"
                      v-if="listClass.fotoKelas"
                    />
                    <img
                      class="img-fluid sm-10-w"
                      src="/assets/images/dashboard/banner250.jpg"
                      alt=""
                      v-else
                    />
                  </div>
                  <div class="col-xl-3 col-7">
                    <div class="blog-details">
                      <div class="blog-date">
                        <span>{{ $moment(item.waktuMulai).format("DD") }}</span
                        >{{ $moment(item.waktuMulai).format("MMMM YYYY") }}
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-12">
                    <div class="blog-details">
                      <h6>{{ item.namaSesi }}</h6>
                      <div class="blog-bottom-content">
                        <ul class="blog-social">
                          <li>Sesi ke : {{ item.urutanSesi }}</li>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      listClass: "",
      kelas: this.$route.params.courseId,
    };
  },
  mounted() {
    this.GET_COURSE_DATA();
  },
  methods: {
    async GET_COURSE_DATA() {
      try {
        const data = await this.getData("/class/" + this.kelas);
        this.listClass = data.data;
      } catch (error) {
        return this.$swal({
          type: "error",
          title: "Oops...",
          text: error.message,
        });
      }
    },
  },
};
</script>
