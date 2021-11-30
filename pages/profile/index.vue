<template>
  <div class="container-fluid">
    {{ user.name }}
    <profile-detail
      :nama="user.name"
      :status="user.status"
      :img="user.photo || null"
      :email="user.email"
      :phone="phone"
      :jobs="jobz"
      :address="alamate.namaAlamat"
      :kecamatans="kecamatanz.namaKecamatan"
      :city="kotas.namaKota"
      :provice="provinsis.namaProvinsi"
      :facebook="facebooks"
      :instagram="instagrams"
      :twitter="twitters"
      :linkedin="linkedins"
    />
    <div class="d-flex justify-content-center">
      <a
        :href="'/profile/update/' + this.$auth.user.username"
        class="btn btn-outline-warning"
        >EDIT PROFILE</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileUser: "",
      names: "",
      alamate: "",
      kecamatanz: "",
      kotas: "",
      provinsis: "",
      phone: "",
      jobz: "",
      facebooks: "",
      twitters: "",
      instagrams: "",
      linkedins: "",
    };
  },
  computed: {
    user() {
      return this.profileUser;
    },
  },
  mounted() {
    this.THIS_DATA();
  },
  methods: {
    async THIS_DATA() {
      try {
        const response = await this.getData("/user/profile");
        console.log(response);
        const { name } = response.data;
        const { alamat } = response.data;
        const { Kecamatan } = response.data.alamat;
        const { kota } = response.data.alamat.Kecamatan;
        const { provinsi } = response.data.alamat.Kecamatan.kota;
        const { phoneNumber } = response.data;
        const { currentJob } = response.data;
        const { facebook } = response.data.sosmed;
        const { twitter } = response.data.sosmed;
        const { instagram } = response.data.sosmed;
        const { linkedin } = response.data.sosmed;
        this.facebooks = facebook;
        this.twitters = twitter;
        this.instagrams = instagram;
        this.linkedins = linkedin;
        this.names = name;
        this.phone = phoneNumber;
        this.jobz = currentJob;
        this.alamate = alamat;
        this.kecamatanz = Kecamatan;
        this.kotas = kota;
        this.provinsis = provinsi;
        this.profileUser = response.data;
      } catch (error) {
        return console.log(error);
      }
    },
  },
};
</script>
