<template>
  <div class="container-fluid">
    <div class="row learning-block">
      <!-- content card here guys -->
      <div
        class="col-md-4 col-sm-6 box-col-6"
        v-for="(item, i) in listData"
        :key="i"
      >
        <div class="card">
          <div class="product-box learning-box">
            <div class="product-img">
              <img
                class="img-fluid top-radius-blog"
                :src="
                  item.fotoKelas
                    ? item.fotoKelas
                    : 'https://www.cognitoforms.com/file/RlZaPqUXSZwjYuIShOaf5q2EPyeMFxyXuXGybiQ7ufg6aZu-v_DtU0Y7yp5P9k8H'
                "
                alt=""
              />
              <div class="product-hover">
                <ul>
                  <li>
                    <a
                      href="#"
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
              <a href="">
                <div class="bottom-details">
                  <h6>{{ item.namaKelas }}</h6>
                </div></a
              >
              <p>
                <small>{{
                  $moment(item.tanggalMulai).format("DD MMMM YYYY")
                }}</small>
              </p>
              <p>{{ item.deskripsi }}</p>
              <br />
              <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                :data-bs-target="`#modal-course${i}`"
              >
                Lihat
              </button>
              <button
                v-if="item.isRegistered"
                class="btn btn-danger"
                type="button"
                @click="outKelas(item.id)"
              >
                Keluar Kelas
              </button>
              <button
                v-else
                class="btn btn-success"
                type="button"
                @click="joinKelas(item.kodeKelas)"
              >
                Register
              </button>
            </div>
          </div>
        </div>
        <!-- modal -->
        <div
          class="modal fade"
          :id="`modal-course${i}`"
          tabindex="-99"
          role="dialog"
          aria-labelledby="modal-course"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="modal-course">
                  {{ item.namaKelas }}
                </h4>
                <hr />
                <button
                  class="btn-close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-4"></div>
                  <div class="col-md-8">
                    <p>
                      Periode Kelas :
                      {{ $moment(item.tanggalMulai).format("DD MMMM YYYY") }}
                      Sampai
                      {{ $moment(item.tanggalSelesai).format("DD MMMM YYYY") }}
                    </p>
                    <hr />
                    <p>Deskripsi : {{ item.deskripsi }}</p>

                    <button
                      v-if="item.isRegistered"
                      class="btn btn-danger"
                      type="button"
                      @click="outKelas(item.id)"
                    >
                      Keluar Kelas
                    </button>
                    <button
                      v-else
                      class="btn btn-success"
                      type="button"
                      @click="joinKelas(item.kodeKelas)"
                    >
                      Register
                    </button>
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
      listData: "",
    };
  },
  mounted() {
    this.GET_LIST_CLASS();
  },
  methods: {
    async GET_LIST_CLASS() {
      try {
        const data = await this.getData("/class/following");
        this.listData = data.data;
      } catch (error) {
        this.$swal({
          title: "Error",
          text: error.message,
          type: "error",
          confirmButtonText: "Close",
        });
      }
    },
    async joinKelas(classId) {
      try {
        const data = {
          idClass: classId,
          role: "Student",
        };
        console.log(data);
        const requestDB = await this.createData("/member/", data);
        if (requestDB) {
          this.$swal({
            title: "Success",
            text: "Berhasil mendaftar ke kelas",
            type: "success",
            confirmButtonText: "Close",
          }).then(() => {
            this.GET_LIST_CLASS();
            this.$router.push("/courses");
          });
        }
      } catch (error) {
        return this.$swal({
          title: "Error",
          text: error.msg,
          icon: "error",
        });
      }
    },
    async outKelas(idClass) {
      try {
        const requestDB = await this.deleteData(
          "/member/" + this.$auth.user.id + "/" + idClass
        );
        if (requestDB) {
          this.$swal({
            title: "Success",
            text: "Berhasil keluar dari kelas",
            type: "success",
            confirmButtonText: "Close",
          }).then(() => {
            this.GET_LIST_CLASS();
          });
        }
      } catch (error) {
        return this.$swal({
          title: "Error",
          text: error.msg,
          icon: "error",
        });
      }
    },
  },
};
</script>
