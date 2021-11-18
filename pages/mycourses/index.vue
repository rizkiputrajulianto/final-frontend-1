<template>
  <div class="container-fluid">
    <!-- {{ $auth.user }} -->
    <!-- content card my courses -->
    <div class="row learning-block">
      <h6>My Courses :</h6>
      <!-- {{ followClass.Sessions }} -->
      <!-- looping content card here guys -->
      <div
        class="col-md-4 col-sm-6 box-col-6"
        v-for="(item, i) in $auth.user.activeClass"
        :key="i"
      >
        <div class="card">
          <div class="product-box learning-box">
            <div class="product-img">
              <img
                v-if="item.fotoKelas"
                class="img-fluid top-radius-blog"
                :src="item.fotoKelas"
                alt=""
              />
              <img
                v-else
                class="img-fluid top-radius-blog"
                src="assets/images/dashboard/banner250.jpg"
                alt=""
              />
              <div class="product-hover">
                <ul>
                  <li>
                    <a
                      href="#"
                      @click="() => (followingClass = i)"
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
              <p>{{ item.deskripsi }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- content card next courses -->
    <div class="row learning-block">
      <hr />
      <h6>Session List :</h6>
      <!-- looping content card here guys -->
      <div
        class="col-md-12 col-sm-6 box-col-6"
        v-for="(items, i) in followClass.Sessions"
        :key="i"
      >
        <div class="row">
          <div class="col-xl-12 col-sm-6">
            <div class="card">
              <div class="blog-box blog-list row">
                <div class="col-xl-3 col-12">
                  <img
                    class="img-fluid sm-100-w"
                    src="/assets/images/dashboard/banner250.jpg"
                    alt=""
                  />
                </div>
                <div class="col-xl-7 col-12">
                  <div class="blog-details">
                    <div class="blog-date">
                      <span>{{ listDate[i] }}</span>
                      {{ listMonth[i] }}
                      {{ listYear[i] }}
                      <!-- masih belum bagus -->
                    </div>
                    <a href="#">
                      <h6>{{ items.namaSesi }}</h6></a
                    >
                    <div class="blog-bottom-content">
                      <ul class="blog-social">
                        <li>Nama Kelas : {{ namaKelas }}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-xl-2 col-12">
                  <button class="btn btn-primary" type="button">Open</button>
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
      listDate: [],
      listMonth: [],
      listYear: [],
      listHour: [],
      namaKelas: "",
      followingClass: 0,
    };
  },
  computed: {
    followClass() {
      const data = this.$auth.user.activeClass[this.followingClass];
      this.namaKelas = data.namaKelas;
      data.Sessions.forEach((item, i) => {
        const assignDate = moment(item.waktuMulai).format("dddd");
        const assignMonth = moment(item.waktuMulai).format("MMMM");
        const assignYear = moment(item.waktuMulai).format("YYYY");
        const assignHour = moment(item.waktuMulai).format("HH:mm");
        this.listDate.push(assignDate);
        this.listMonth.push(assignMonth);
        this.listYear.push(assignYear);
        this.listHour.push(assignHour);
      });
      return data;
    },
  },
};
</script>
