<template>
  <div>
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="submitSession">
          <div class="form-group">
            <label for="namaSesi">Session Name</label>
            <input
              type="text"
              v-model="data.namaSesi"
              class="form-control"
              id="namaSesi"
              placeholder="Enter session name"
            />
          </div>
          <div class="form-froup">
            <label for="kodeSesi">Kode Sesi</label>
            <input
              type="text"
              v-model="data.kodeSesi"
              class="form-control"
              id="kodeSesi"
              placeholder="Enter session code"
            />
          </div>
          <div class="form-group">
            <label for="waktuMulai">Waktu Mulai</label>
            <input
              type="datetime-local"
              v-model="data.waktuMulai"
              class="form-control"
              id="waktuMulai"
              placeholder="Enter start time"
            />
          </div>
          <div class="form-group">
            <label for="waktuSelesai">Waktu Selesai</label>
            <input
              type="datetime-local"
              v-model="data.waktuSelesai"
              class="form-control"
              id="waktuSelesai"
              placeholder="Enter end time"
            />
          </div>
          <div class="from-group">
            <label for="urutanSesi">Urutan Sesi</label>
            <input
              type="number"
              v-model="data.urutanSesi"
              class="form-control"
              id="urutanSesi"
              placeholder="Enter session order"
            />
          </div>
          <button class="btn btn-dark" type="button" @click="$router.go(-1)">
            Back
          </button>
          <button type="submit" class="btn btn-primary">Submit</button>
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
        namaSesi: "",
        kodeSesi: "",
        waktuMulai: "",
        waktuSelesai: "",
        urutanSesi: "",
        idClass: this.$route.params.classIds,
      },
    };
  },
  props: {
    kode: { type: String, default: "" },
    kelasId: { type: String, default: "" },
  },
  mounted() {
    this.GET_DATA();
  },
  methods: {
    async GET_DATA() {
      try {
        if (this.kode) {
          const response = await this.getData("/jadwal/" + this.kode);
          const waktuStart = this.$moment(response.data.waktuMulai).format(
            "YYYY-MM-DDTHH:mm:ss"
          );
          const waktuFinish = this.$moment(response.data.waktuSelesai).format(
            "YYYY-MM-DDTHH:mm:ss"
          );
          this.data = {
            namaSesi: response.data.namaSesi,
            kodeSesi: response.data.kodeSesi,
            waktuMulai: waktuStart,
            waktuSelesai: waktuFinish,
            urutanSesi: response.data.urutanSesi,
            idClass: this.$route.params.classId,
          };
        }
      } catch (error) {
        return this.$swal({
          type: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: "<a href>Why do I have this issue?</a>",
        });
      }
    },
    async submitSession() {
      try {
        if (this.kode) {
          const requestDB = await this.putData(
            "/jadwal/" + this.kode,
            this.data
          );
          if (requestDB) {
            this.$swal({
              type: "success",
              title: "Success!",
              text: "Data has been updated!",
            });
            this.$router.push("/" + this.kelasId + "/course");
          }
        } else {
          const requestDBs = await this.createData("/jadwal/", this.data);
          if (requestDBs) {
            this.$swal({
              type: "success",
              title: "Success!",
              text: "Data has been created!",
            });
            this.$router.push("/" + this.kelasId + "/course");
          }
        }
      } catch (error) {
        return this.$swal({
          type: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },
  },
};
</script>