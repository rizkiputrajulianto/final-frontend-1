<template>
  <div>
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="requestDB">
          <div class="form-group">
            <label for="judul">Judul Materi</label>
            <input
              type="text"
              v-model="data.namaMateri"
              class="form-control"
              id="judul"
              placeholder="Judul Materi"
            />
          </div>
          <div class="form-group">
            <label for="jenisFile">Jenis File</label>
            <select
              class="form-control"
              id="jenisFile"
              v-model="data.jenisMateri"
            >
              <option value="Recording">Record</option>
              <option value="Materi">Materi</option>
            </select>
          </div>
          <div class="form-group">
            <label for="file">File</label>
            <input
              type="file"
              accept="file/ppt, file/pdf, file/pptx, file/mp4"
              class="form-control-file"
              id="file"
              @change="change"
            />
          </div>
          <button class="btn btn-dark" type="button" @click="$router.go(-1)">
            Back
          </button>
          <button class="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        namaMateri: "",
        jenisMateri: "",
        file: "",
        idSesi: this.$route.params.sesiId,
      },
      files: null,
    };
  },
  props: {
    idClass: { type: String, default: "" },
    idMateri: { type: String, default: "" },
  },
  mounted() {
    this.GET_DATA();
  },
  methods: {
    change(e) {
      const file = e.target.files[0];
      this.files = file;
    },
    async GET_DATA() {
      try {
        if (this.idMateri) {
          const data = await this.getData("/materi/one/" + this.idMateri);
          this.data = {
            namaMateri: data.data.namaMateri,
            jenisMateri: data.data.jenisMateri,
            file: data.data.file,
          };
        }
      } catch (error) {
        return this.$swal({
          title: "Error",
          text: error.message,
          type: "error",
          confirmButtonText: "Close",
          icon: "error",
        });
      }
    },
    async requestDB() {
      try {
        if (this.idMateri) {
          if (this.files) {
            const formData = new FormData();
            formData.append("material", this.files);
            const uploads = await this.createData("/uploads/files", formData);
            this.data.file = uploads.data;
          }
          const data = await this.putData(
            "/materi/" + this.idMateri,
            this.data
          );
          if (data) {
            this.$swal({
              title: "Success",
              text: "Data berhasil diubah",
              type: "success",
              confirmButtonText: "Close",
            });
            this.$router.push({ path: "/" + this.idClass + "/course" });
          }
        } else {
          if (this.files) {
            const formData = new FormData();
            formData.append("material", this.files);
            const uploads = await this.createData("/uploads/files", formData);
            this.data.file = uploads.data;
          }
          const data = await this.createData(`/materi`, this.data);
          if (data) {
            this.$swal({
              title: "Success",
              text: "Data berhasil ditambahkan",
              type: "success",
              confirmButtonText: "Close",
            });
            this.$router.push({ path: "/" + this.idClass + "/course" });
          }
        }
      } catch (error) {
        return this.$swal({
          title: "Error",
          text: error.message,
          type: "error",
          confirmButtonText: "Close",
          icon: "error",
        });
      }
    },
  },
};
</script>