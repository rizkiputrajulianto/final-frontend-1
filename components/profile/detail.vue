<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h3>Profile</h3>
            <hr />
            <div class="d-flex align-items-center justify-content-center">
              <img
                class="img-100 rounded-circle"
                :src="img"
                alt="ProfilePicture"
              />
            </div>
            <br />
            <div class="d-flex justify-content-center">
              <h6 class="btn btn-dark" style="cursor: default">{{ status }}</h6>
            </div>
            <br />
            <div class="d-flex justify-content-center">
              <h4>{{ nama }}</h4>
            </div>
            <br />
            <div class="row">
              <div class="col-md-3">
                <a
                  :href="facebook"
                  class="btn"
                  style="background-color: #4267b2; cursor: default"
                  ><i class="fa fa-facebook"></i>{{ facebook }}</a
                >
              </div>
              <div class="col-md-3">
                <a
                  :href="twitter"
                  class="btn"
                  style="background-color: #1da1f2; cursor: default"
                  ><i class="fa fa-twitter"></i>{{ twitter }}</a
                >
              </div>
              <div class="col-md-3">
                <a
                  :href="instagram"
                  class="btn"
                  style="background-color: #e1306c; cursor: default"
                  ><i class="fa fa-instagram"></i>{{ instagram }}</a
                >
              </div>
              <div class="col-md-3">
                <a
                  :href="linkedin"
                  class="btn"
                  style="background-color: #2867b2; cursor: default"
                  ><i class="fa fa-linkedin"></i>{{ linkedin }}</a
                >
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-md-4">
                <div class="container-fluid">
                  <h6>Email</h6>
                  <p>{{ email }}</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="container-fluid">
                  <h6>Phone</h6>
                  <p>{{ phone }}</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="container-fluid">
                  <h6>Job</h6>
                  <p>{{ jobs }}</p>
                </div>
              </div>
              <div class="col-md-12">
                <div class="container-fluid mt-3">
                  <h6>Address</h6>
                  <p>
                    {{ address }},Kecamatan {{ kecamatans }}, {{ city }},{{
                      province
                    }}, {{ country }}
                  </p>
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
  props: {
    img: { type: String, default: "/assets/images/dashboard/1.png" },
    nama: { type: String, default: "No Name - Please Edit" },
    status: { type: String, default: "Guest" },
    facebook: { type: String, default: "#" },
    twitter: { type: String, default: "#" },
    instagram: { type: String, default: "#" },
    linkedin: { type: String, default: "#" },
    email: { type: String, default: "Guest@SA.com" },
    phone: { type: String, default: "0123456789" },
    address: { type: String, default: "Bekasi" },
    kecamatans: { type: String, default: "Tambun Selatan" },
    city: { type: String, default: "Bekasi" },
    province: { type: String, default: "Jawa Barat" },
    country: { type: String, default: "Indonesia" },
    jobs: { type: String, default: "Gap Year" },
  },
};
</script>