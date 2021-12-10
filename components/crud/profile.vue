<template>
  <div class="card">
    <div class="card-body">
      <h3>Edit Profile</h3>
      <hr />
      <form @submit.prevent="update">
        <div class="form-group">
          <label for="nama">Name</label>
          <input
            type="text"
            class="form-control"
            id="nama"
            v-model="data.name"
            required
          />
          <small>Input your Fullname</small>
        </div>
        <div class="form-group">
          <label for="ttl">Born Date</label>
          <input
            type="date"
            class="form-control"
            id="ttl"
            v-model="data.bornDate"
          />
        </div>
        <div class="form-group">
          <label for="foto">Photo</label>
          <input
            type="file"
            accept="file/jpg, file/png"
            class="form-control-file"
            id="foto"
            @change="toUrl"
          />
        </div>
        <div class="form-group">
          <label for="job">Current Job</label>
          <input
            type="text"
            class="form-control"
            id="job"
            v-model="data.currentJob"
          />
        </div>
        <div class="form-group">
          <label for="institusi">Institution</label>
          <input
            type="text"
            class="form-control"
            id="institusi"
            v-model="data.institution"
          />
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input
            type="text"
            class="form-control"
            id="phone"
            v-model="data.phoneNumber"
          />
        </div>
        <div class="form-group">
          <label for="alamat">Alamat</label>
          <input
            type="text"
            class="form-control"
            id="alamat"
            v-model="data.alamat.alamat"
          />
        </div>
        <div class="form-group">
          <label for="kecamatan">Kecamatan</label>
          <input
            type="text"
            class="form-control"
            id="kecamatan"
            v-model="data.alamat.kecamatan"
          />
        </div>
        <div class="form-group">
          <label for="kota">Kota</label>
          <select
            name="city"
            v-model="data.alamat.kota"
            id="kota"
            class="form-control"
            data-live-search="true"
          >
            <option>Select City</option>
            <option v-for="(list, i) in kota" :key="i" :value="list.namaKota">
              {{ list.namaKota }}
            </option>
          </select>
        </div>
        <div class="input-group">
          <span class="input-group-text">Facebook &amp; Link</span>
          <input
            type="text"
            aria-label="Facebook Username"
            class="form-control"
            v-model="data.sosmed.facebook"
          />
          <input
            type="text"
            aria-label="Facebook Link"
            class="form-control"
            v-model="linkFacebook"
          />
        </div>
        <br />
        <div class="input-group">
          <span class="input-group-text">Twitter &amp; Link</span>
          <input
            type="text"
            aria-label="Twitter Username"
            class="form-control"
            v-model="data.sosmed.twitter"
          />
          <input
            type="text"
            aria-label="Twitter Link"
            class="form-control"
            v-model="linkTwitter"
          />
        </div>
        <br />
        <div class="input-group">
          <span class="input-group-text">Instagram &amp; Link</span>
          <input
            type="text"
            aria-label="Instagram Username"
            class="form-control"
            v-model="data.sosmed.instagram"
          />
          <input
            type="text"
            aria-label="Instagram Link"
            class="form-control"
            v-model="linkInstagram"
          />
        </div>
        <br />
        <div class="input-group">
          <span class="input-group-text">LinkedIn &amp; Link</span>
          <input
            type="text"
            aria-label="LinkedIn Username"
            class="form-control"
            v-model="data.sosmed.linkedin"
          />
          <input
            type="text"
            aria-label="LinkedIn Link"
            v-model="linkLinkedIn"
            class="form-control"
          />
        </div>
        <br />
        <button type="button" class="btn btn-dark" @click="$router.go(-1)">
          Back
        </button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        name: "",
        bornDate: "",
        currentJob: "",
        institution: "",
        photo: "",
        phoneNumber: "",
        alamat: {
          kota: "",
          kecamatan: "",
          alamat: "",
        },
        sosmed: {
          facebook: "",
          twitter: "",
          instagram: "",
          linkedin: "",
        },
      },
      kota: "",
      photo: "",
      linkFacebook: "",
      linkInstagram: "",
      linkTwitter: "",
      linkLinkedIn: "",
    };
  },
  mounted() {
    this.GET_DATA();
  },
  methods: {
    toUrl(event) {
      // make file to url
      const file = event.target.files[0];
      this.photo = file;
    },
    async GET_DATA() {
      try {
        const requestUser = await this.getData(
          "/user/" + this.$auth.user.username
        );
        const requestKota = await this.getData("/kota/");
        this.kota = requestKota.data;
        this.data.photo = requestUser.data.photo;
        this.data.bornDate = requestUser.data.bornDate;
        this.data.currentJob = requestUser.data.currentJob;
        this.data.institution = requestUser.data.institution;
        this.data.name = requestUser.data.name;
        this.data.phoneNumber = requestUser.data.phoneNumber;
        this.data.alamat.alamat = requestUser.data.alamat.namaAlamat;
        this.data.alamat.kecamatan =
          requestUser.data.alamat.Kecamatan.namaKecamatan;
        this.data.alamat.kota = requestUser.data.alamat.Kecamatan.kota.namaKota;
        [this.data.sosmed.facebook, this.linkFacebook] =
          requestUser.data.sosmed.facebook.split(",");
        [this.data.sosmed.twitter, this.linkTwitter] =
          requestUser.data.sosmed.twitter.split(",");
        [this.data.sosmed.instagram, this.linkInstagram] =
          requestUser.data.sosmed.instagram.split(",");
        [this.data.sosmed.linkedin, this.linkLinkedIn] =
          requestUser.data.sosmed.linkedin.split(",");
      } catch (error) {
        return true;
      }
    },
    async update() {
      try {
        if (this.photo) {
          const formData = new FormData();
          formData.append("avatar", this.photo);
          //upload photo
          const requestUpload = await this.createData(
            "/uploads/avatar",
            formData
          );
          this.data.photo = requestUpload.data;
        }
        //no sosmed
        if (
          this.data.sosmed.facebook == "" &&
          this.data.sosmed.twitter == "" &&
          this.data.sosmed.instagram == "" &&
          this.data.sosmed.linkedin == ""
        ) {
          delete this.data.sosmed;
        } else {
          if (this.linkFacebook) {
            this.data.sosmed.facebook =
              this.data.sosmed.facebook + "," + this.linkFacebook;
          }
          if (this.linkTwitter) {
            this.data.sosmed.twitter =
              this.data.sosmed.twitter + "," + this.linkTwitter;
          }
          if (this.linkInstagram) {
            this.data.sosmed.instagram =
              this.data.sosmed.instagram + "," + this.linkInstagram;
          }
          if (this.linkLinkedIn) {
            this.data.sosmed.linkedin =
              this.data.sosmed.linkedin + "," + this.linkLinkedIn;
          }
        }

        const request = await this.putData(
          "/user/" + this.$route.params.edit,
          this.data
        );
        if (request) {
          this.$auth.user.name = this.data.name;
          this.$router.push("/profile");
        }
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