<template>
  <div class="container-fluid">
    <div class="col-md-12 project-list">
      <div class="card">
        <div class="row">
          <div class="col-md-6 p-0">
            <ul class="nav nav-tabs border-tab" id="top-tab">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
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
                  class="nav-link active"
                  :to="'/' + `${$route.params.courseId}` + '/teamate'"
                  ><i data-feather="users"></i>Anggota</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <h6>Mentor & SPV Class :</h6>
      <div
        class="col-md-4 col-sm-12 col-12"
        v-for="(admin, i) in listMember"
        :key="i"
      >
        <div class="card" v-if="admin.joinClass.role != 'Student'">
          <div class="card-body">
            <div class="media">
              <img
                class="img-70 rounded-circle m-r-15"
                :src="admin.photo || '/assets/images/dashboard/1.png'"
                alt=""
              />
              <div class="social-status social-online"></div>
              <div class="media-body">
                <span class="f-w-600 d-block">{{
                  admin.name || admin.username
                }}</span>
                <span class="f-w-300">{{ admin.joinClass.role }}</span>
                <div>
                  <span
                    ><a href="#"><i class="fa fa-facebook"></i></a
                  ></span>
                  <span
                    ><a href="#"><i class="fa fa-google-plus"></i></a
                  ></span>
                  <span
                    ><a href="#"><i class="fa fa-twitter"></i></a
                  ></span>
                  <span
                    ><a href="#"><i class="fa fa-instagram"></i></a
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h6>Peserta Kelas :</h6>
      <div
        class="col-md-4 col-sm-12 col-12"
        v-for="(peserta, index) in listStudent"
        :key="index"
      >
        <div class="card">
          <div class="card-body">
            <div class="media">
              <img
                class="img-70 rounded-circle m-r-15"
                :src="peserta.photo || '/assets/images/dashboard/1.png'"
                alt=""
              />
              <div class="social-status social-online"></div>
              <div class="media-body">
                <span class="f-w-600 d-block">{{
                  peserta.name || peserta.username
                }}</span>
                <span class="f-w-300">{{ peserta.joinClass.role }}</span>
                <div>
                  <span
                    ><a href="#"><i class="fa fa-facebook"></i></a
                  ></span>
                  <span
                    ><a href="#"><i class="fa fa-google-plus"></i></a
                  ></span>
                  <span
                    ><a href="#"><i class="fa fa-twitter"></i></a
                  ></span>
                  <span
                    ><a href="#"><i class="fa fa-instagram"></i></a
                  ></span>
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
      listMember: [],
    };
  },
  computed: {
    listStudent() {
      return this.listMember.filter(
        (member) => member.joinClass.role == "Student"
      );
    },
  },
  mounted() {
    this.GET_ANGGOTA();
  },
  methods: {
    async GET_ANGGOTA() {
      try {
        const data = await this.getData(
          "/member/" + this.$route.params.courseId
        );
        this.listMember = data.data.Users;
      } catch (error) {
        return this.$swal({
          title: "Error",
          icon: "error",
          text: error.toString(),
        });
      }
    },
  },
};
</script>
