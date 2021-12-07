<template>
  <div class="container-fluid">
    <profile-detail
      :nama="user.name"
      :status="user.status"
      :img="user.photo ? user.photo : '/assets/images/dashboard/1.png'"
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
      :facebookLink="facebooksLinks"
      :instagramLink="instagramsLinks"
      :twitterLink="twittersLinks"
      :linkedinLink="linkedinsLinks"
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
      photo: "",
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
      facebooksLinks: "",
      twittersLinks: "",
      instagramsLinks: "",
      linkedinsLinks: "",
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
        const { name } = response.data;
        const { photo } = response.data;
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
        [this.facebooks, this.facebooksLinks] = facebook.split(",");
        [this.twitters, this.twittersLinks] = twitter.split(",");
        [this.instagrams, this.instagramsLinks] = instagram.split(",");
        [this.linkedins, this.linkedinsLinks] = linkedin.split(",");
        this.names = name;
        this.photo = photo;
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
