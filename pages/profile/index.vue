<template>
  <div class="container-fluid">
    <profile-detail
      :nama="profileUser.name"
      :status="profileUser.status"
      :img="
        profileUser.photo ? profileUser.photo : '/assets/images/dashboard/1.png'
      "
      :email="profileUser.email"
      :phone="profileUser.phoneNumber"
      :jobs="profileUser.currentJob"
      :address="alamat.alamat"
      :kecamatans="alamat.kecamatan"
      :city="alamat.kota"
      :provice="alamat.provinsi"
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
      alamat: {},
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
        if (this.$auth.user.name === null) {
          this.$router.push("/profile/update/" + this.$auth.user.username);
        } else {
          const response = await this.getData("/user/profile")
            .then((result) => {
              if (result) {
                console.log(result.data);
                this.profileUser = result.data;
                this.alamat = result.data.address;
                const { facebook, twitter, instagram, linkedin } =
                  result.data.sosmed;
                [this.facebooks, this.facebooksLinks] = facebook.split(",");
                [this.twitters, this.twittersLinks] = twitter.split(",");
                [this.instagrams, this.instagramsLinks] = instagram.split(",");
                [this.linkedins, this.linkedinsLinks] = linkedin.split(",");
              } else {
                return true;
              }
            })
            .catch((err) => {
              return true;
            });
        }
      } catch (error) {
        return true;
      }
    },
  },
};
</script>
