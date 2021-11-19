<template>
  <div class="container-fluid">
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
                  class="nav-link"
                  :to="'/' + `${$route.params.courseId}` + '/course'"
                  ><i data-feather="edit"></i>Course</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link active"
                  :to="'/' + `${$route.params.courseId}` + '/teamate'"
                  ><i data-feather="users"></i>Anggota</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <h6>Mentor & SPV Class :</h6>
      <div class="col-md-4 col-sm-12 col-12">
        <div class="card">
          <div class="card-body">
            <div class="media">
              <img
                class="img-70 rounded-circle m-r-15"
                src="/assets/images/dashboard/1.png"
                alt=""
              />
              <div class="social-status social-online"></div>
              <div class="media-body">
                <span class="f-w-600 d-block">Nama Mentor</span>
                <span class="f-w-300">Jabatan</span>
                <div>
                  <span
                    ><a href="#"><i class="fa fa-facebook"></i></a
                  ></span>
                  <span
                    ><a href="#"><i class="fa fa-google-plus"></i></a
                  ></span>
                  <span
                    ><a href="#"><i class="fa fa-twitter"></i></a
                  ></span>
                  <span
                    ><a href="#"><i class="fa fa-instagram"></i></a
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h6>Peserta Kelas :</h6>
      <div class="col-md-4 col-sm-12 col-12">
        <div class="card">
          <div class="card-body">
            <div class="media">
              <img
                class="img-70 rounded-circle m-r-15"
                src="/assets/images/dashboard/1.png"
                alt=""
              />
              <div class="social-status social-online"></div>
              <div class="media-body">
                <span class="f-w-600 d-block">Nama Peserta</span>
                <span class="f-w-300">Jabatan</span>
                <div>
                  <span
                    ><a href="#"><i class="fa fa-facebook"></i></a
                  ></span>
                  <span
                    ><a href="#"><i class="fa fa-google-plus"></i></a
                  ></span>
                  <span
                    ><a href="#"><i class="fa fa-twitter"></i></a
                  ></span>
                  <span
                    ><a href="#"><i class="fa fa-instagram"></i></a
                  ></span>
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
export default {};
</script>
