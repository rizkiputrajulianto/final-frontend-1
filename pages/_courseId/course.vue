<template>
  <div class="container-fluid">
    <!-- {{ dataClass }}
    <hr />
    {{ slide }} -->
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
                  class="nav-link active"
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

    <div class="col-md-12">
      <div class="col-sm-12 col-xl-6 xl-100">
        <div class="card">
          <div class="card-header pb-0">
            <h5>Course : {{ dataClass.namaKelas }}</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3 col-xs-12">
                <div
                  class="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                  v-for="(items, i) in dataClass.Sessions"
                  :key="i"
                >
                  <a
                    :class="` d-flex justify-content-between nav-link ${
                      i == 0 ? 'show active' : ''
                    }`"
                    :id="`v-pills-sesi${i + 1}-tab`"
                    data-bs-toggle="pill"
                    role="tab"
                    style="cursor: pointer"
                    :aria-controls="`v-pills-sesi${i + 1}`"
                    aria-selected="false"
                    @click="() => (slide = i)"
                    >Sesi {{ items.urutanSesi }}
                    <span
                      ><nuxt-link
                        v-if="$auth.user.status === 'Admin'"
                        class="btn btn-dark"
                        style="z-index: 10"
                        :to="'/sessions/' + classKode + '/' + items.kodeSesi"
                        >EDIT</nuxt-link
                      ></span
                    ></a
                  >
                </div>
                <nuxt-link
                  v-if="$auth.user.status === 'Admin'"
                  class="nav-link w-100"
                  :to="'/sessions/' + `${this.$route.params.courseId}` + '/add'"
                  >+ Session</nuxt-link
                >
              </div>
              <div class="col-sm-9 col-xs-12">
                <div
                  class="tab-content"
                  id="v-pills-tabContent"
                  v-for="(list, i) in dataClass.Sessions"
                  :key="i"
                  v-show="slide === i"
                >
                  <div
                    :class="`tab-pane fade show active`"
                    :id="`v-pills-sesi${i + 1}`"
                    role="tabpanel"
                    :aria-labelledby="`v-pills-sesi${i + 1}-tab`"
                  >
                    <h5>Sesi {{ list.urutanSesi }}</h5>
                    <div
                      class="col-sm-6 col-xl-6 col-lg-6"
                      v-for="(item, index) in list.Materi"
                      :key="index"
                    >
                      <div class="card o-hidden border-0">
                        <div class="bg-primary b-r-4 card-body">
                          <div class="media static-top-widget">
                            <div class="align-self-center text-center">
                              <i data-feather="book"></i>
                            </div>
                            <div class="media-body">
                              <h6 class="m-0">{{ item.namaMateri }}</h6>
                              <i class="icon-bg" data-feather="edit"></i>
                              <span>{{
                                $moment(list.waktuMulai).format("DD MMMM")
                              }}</span>
                              <br />
                              <button
                                class="btn btn-success btn-sm"
                                type="button"
                                data-bs-toggle="modal"
                                :data-bs-target="`#modal-course${
                                  i.toString() + index
                                }`"
                              >
                                Buka
                              </button>
                              <!-- modal -->
                              <div
                                class="modal fade"
                                :id="`modal-course${i.toString() + index}`"
                                tabindex="-99"
                                role="dialog"
                                aria-labelledby="modal-course"
                                aria-hidden="true"
                                style="color: black"
                              >
                                <div class="modal-dialog modal-lg">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h4
                                        class="modal-title"
                                        :id="`modal-course${index}`"
                                      >
                                        {{ item.namaMateri }}
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
                                        <div
                                          v-if="item.jenisMateri == 'Materi'"
                                          class="col-md-12 file-content"
                                        >
                                          <div
                                            class="row file-manager card-body"
                                          >
                                            <h6>Document File :</h6>
                                            <hr />
                                            <ul class="files">
                                              <li class="file-box">
                                                <div class="file-top">
                                                  <i
                                                    class="
                                                      fa fa-file-pdf-o
                                                      txt-success
                                                    "
                                                  ></i>
                                                  <!-- opsinya : powerpoint, pdf, code, archive -->
                                                  <i
                                                    class="
                                                      fa fa-ellipsis-v
                                                      f-14
                                                      ellips
                                                    "
                                                  ></i>
                                                </div>
                                                <div class="file-bottom">
                                                  <h6>
                                                    <span
                                                      v-if="item.file === null"
                                                    >
                                                      Not File Yet
                                                    </span>
                                                    <a
                                                      v-else
                                                      :href="item.file"
                                                      target="_blank"
                                                      >File PDF</a
                                                    >
                                                  </h6>
                                                </div>
                                              </li>
                                              <li class="file-box">
                                                <div class="file-top">
                                                  <i
                                                    class="
                                                      fa fa-file-powerpoint-o
                                                      txt-success
                                                    "
                                                  ></i>
                                                  <!-- opsinya : powerpoint, pdf, code, archive -->
                                                  <i
                                                    class="
                                                      fa fa-ellipsis-v
                                                      f-14
                                                      ellips
                                                    "
                                                  ></i>
                                                </div>
                                                <div class="file-bottom">
                                                  <h6>
                                                    <span
                                                      v-if="item.file === null"
                                                      >No File Yet</span
                                                    >
                                                    <a
                                                      v-else
                                                      :href="item.file"
                                                      target="_blank"
                                                      >File PPT</a
                                                    >
                                                  </h6>
                                                </div>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div
                                          v-else
                                          class="col-md-12 file-content"
                                        >
                                          <div
                                            class="row file-manager card-body"
                                          >
                                            <h6>Multimedia File :</h6>
                                            <hr />
                                            <ul class="files">
                                              <li class="file-box">
                                                <div class="file-top">
                                                  <i
                                                    class="
                                                      fa fa-file-video-o
                                                      txt-success
                                                    "
                                                  ></i>
                                                  <!-- opsinya : video, image, audio -->
                                                  <i
                                                    class="
                                                      fa fa-ellipsis-v
                                                      f-14
                                                      ellips
                                                    "
                                                  ></i>
                                                </div>
                                                <div class="file-bottom">
                                                  <h6>
                                                    <span
                                                      v-if="item.file === null"
                                                      >No File Yet</span
                                                    >
                                                    <a
                                                      v-else
                                                      :href="item.file"
                                                      target="_blank"
                                                      >File Video</a
                                                    >
                                                  </h6>
                                                </div>
                                              </li>
                                              <li class="file-box">
                                                <div class="file-top">
                                                  <i
                                                    class="
                                                      fa fa-file-image-o
                                                      txt-success
                                                    "
                                                  ></i>
                                                  <!-- opsinya : video, image, audio -->
                                                  <i
                                                    class="
                                                      fa fa-ellipsis-v
                                                      f-14
                                                      ellips
                                                    "
                                                  ></i>
                                                </div>
                                                <div class="file-bottom">
                                                  <h6>
                                                    <span
                                                      v-if="item.file === null"
                                                      >No File Yet</span
                                                    >
                                                    <a
                                                      v-else
                                                      :href="item.file"
                                                      target="_blank"
                                                      >Preview</a
                                                    >
                                                  </h6>
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

                              <button
                                class="btn btn-info btn-sm"
                                type="button"
                                v-if="$auth.user.status === 'Admin'"
                              >
                                <nuxt-link
                                  :to="
                                    '/materi/' +
                                    classKode +
                                    '/' +
                                    list.kodeSesi +
                                    '/' +
                                    item.id
                                  "
                                  >Edit</nuxt-link
                                >
                              </button>
                              <button
                                class="btn btn-dark btn-sm"
                                type="button"
                                v-if="$auth.user.status === 'Admin'"
                                @click="deleteMateri(item.id)"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nuxt-link
                    v-if="$auth.user.status === 'Admin'"
                    class="p-5"
                    :to="'/materi/' + classKode + '/' + list.kodeSesi + '/add'"
                  >
                    + Materi</nuxt-link
                  >
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
      dataClass: "",
      slide: 0,
      classKode: this.$route.params.courseId,
    };
  },
  mounted() {
    this.GET_LIST_SESSION();
  },
  methods: {
    async GET_LIST_SESSION() {
      try {
        const data = await this.getData(
          `/class/${this.$route.params.courseId}`
        );
        this.dataClass = data.data;
      } catch (error) {
        return this.$swal({
          type: "error",
          title: "Oops...",
          text: error.message,
        });
      }
    },
    async deleteMateri(id) {
      try {
        const del = await this.deleteData(`/materi/${id}`);
        if (del) {
          this.$swal({
            type: "success",
            title: "Success",
            text: "Data Berhasil Dihapus",
          });
          this.$nuxt.refresh();
          this.GET_LIST_SESSION();
        } else {
          this.$swal({
            type: "error",
            title: "Oops...",
            text: "Data Gagal Dihapus",
          });
        }
      } catch (error) {
        return this.$swal({
          type: "error",
          title: "Error",
          text: error.message,
        });
      }
    },
  },
};
</script>
