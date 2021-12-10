<template>
  <div class="container-fluid">
    <div class="col-xl-12 col-lg-12 col-md-12">
      <div class="default-according style-1 faq-accordion job-accordion">
        <div class="row" v-for="(item, i) in listClass" :key="i">
          <div class="col-xl-12">
            <div class="card">
              <div class="card-header">
                <h5 class="p-0">
                  <button
                    class="btn btn-link ps-0"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#collapse_course' + i"
                    aria-expanded="true"
                    aria-controls="collapse_course1"
                  >
                    {{ item.namaKelas }}
                  </button>
                </h5>
              </div>
              <div
                class="collapse show"
                :id="'collapse_course' + i"
                aria-labelledby="collapse_course1"
                data-parent="#accordion"
              >
                <div class="card-body post-about">
                  <ul>
                    <li v-for="(list, index) in item.Sessions" :key="index">
                      <div class="row">
                        <div class="col-md-5 col-sm-10">
                          <h5>{{ list.namaSesi }}</h5>
                          <p>
                            Tanggal:
                            {{ $moment(list.waktuMulai).format("d MMMM YYYY") }}
                            <br />
                            Jam:
                            {{ $moment(list.waktuMulai).format("HH:mm") }}
                            <br />
                            <b
                              v-if="
                                item.joinClass.role === 'Fasilitator' ||
                                item.joinClass.role === 'Tutor'
                              "
                            >
                              kode Sesi: {{ list.kodeSesi }}
                            </b>
                          </p>
                        </div>
                        <div class="col-md-4 col-sm-12 text-center">
                          <hr class="d-sm-block d-md-none" />
                        </div>
                        <div
                          v-if="list.Absen == 'Not Yet'"
                          class="col-md-2 col-sm-2 text-center"
                        >
                          <button
                            class="btn btn-primary text-center"
                            type="button"
                            data-bs-toggle="modal"
                            :data-bs-target="'#modal_x' + list.kodeSesi"
                          >
                            Isi Absen
                          </button>
                        </div>
                        <div v-else class="col-md-2 col-sm-2 text-center">
                          <button
                            class="btn btn-primary text-center"
                            type="button"
                            disabled
                          >
                            Sudah Absen
                          </button>
                        </div>
                        <div class="col-md-12 col-sm-12">
                          <hr class="text-danger" />
                        </div>
                      </div>
                      <!-- Modal -->
                      <div
                        class="modal fade"
                        :id="'modal_x' + list.kodeSesi"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                Isi Absensi
                              </h5>
                            </div>
                            <form
                              @submit.prevent="
                                submit(list.kodeSesi, item.kodeKelas)
                              "
                            >
                              <div class="modal-body">
                                <div class="form-group">
                                  <label for="absen">Masukkan Kode Sesi</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    v-model="kodeSesi"
                                  />
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="submit"
                                  class="btn btn-primary text-center"
                                >
                                  Absen
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-dark text-center"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
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
      kodeSesi: "",
      listClass: null,
    };
  },
  mounted() {
    this.GET_DATA();
  },
  methods: {
    async GET_DATA() {
      try {
        const response = await this.getData("/absen/");
        this.listClass = response.data;
      } catch (error) {
        console.log(error.msg);
      }
    },
    async submit(kode, kelas) {
      try {
        if (this.kodeSesi == kode) {
          const data = {
            kodeSesi: kode,
            kodeKelas: kelas,
          };
          const requestDB = await this.createData("/absen/", data);
          this.$swal({
            title: "Berhasil",
            text: "Absen Berhasil",
            icon: "success",
            button: "Ok",
          }).then(() => {
            this.GET_DATA();
          });
        } else {
          return this.$swal({
            type: "error",
            title: "Error",
            text: "Kode Sesi Salah",
          });
        }
      } catch (error) {
        return this.$swal({
          type: "error",
          title: "Error",
          text: error.msg,
        });
      }
    },
  },
};
</script>
