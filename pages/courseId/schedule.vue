<template>
    <div class="container-fluid">
      <div class="col-md-12 project-list">
        <div class="card">
          <div class="row">
            <div class="col-md-6 p-0">
              <ul class="nav nav-tabs border-tab" id="top-tab" role="tablist">
                <li class="nav-item"><a class="nav-link active" href="/schedule" role="tab"><i data-feather="calendar"></i>Jadwal</a></li>
                <li class="nav-item"><a class="nav-link" href="/course"><i data-feather="edit"></i>Course</a></li>
                <li class="nav-item"><a class="nav-link" href="/teamate"><i data-feather="users"></i>Anggota</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <!-- content card my courses -->
      <div class="row learning-block">
        <h6>My Schedule :</h6>
        <!-- looping content card here guys -->
        <div class="col-md-4 col-sm-6 box-col-6">
          <div class="card">
            <div class="product-box learning-box">
              <div class="product-img"><img class="img-fluid top-radius-blog" src="/assets/images/dashboard/banner250.jpg" alt="">
                <div class="product-hover">
                  <ul>
                    <li><a href="" data-toggle="tooltip" data-placement="top" title="Lihat Detail Kelas"><i class="icon-eye"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="details-main"><a href="">                                       
                  <div class="bottom-details"> 
                    <h6>Nama Kelas</h6>
                  </div></a>
                <p>Deskripsi Kelas</p>
              </div>
            </div>
          </div>
        </div>   

        <div class="col-md-8 col-sm-6 box-col-6">
          <div class="col-md-12 col-sm-6 box-col-6">
            <div class="row">
              <div class="col-xl-12 col-sm-6">
                <div class="card">
                  <div class="blog-box blog-list row">
                    <div class="col-xl-3 col-5"><img class="img-fluid sm-10-w" src="/assets/images/dashboard/banner250.jpg" alt=""></div>
                    <div class="col-xl-3 col-7">
                      <div class="blog-details">
                        <div class="blog-date"><span>05</span> Jan 2021</div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-12">
                      <div class="blog-details">
                        <h6>Nama Materi</h6>
                        <div class="blog-bottom-content">
                          <ul class="blog-social">
                            <li>Sesi ke : </li>
                          </ul>
                        </div>
                      </div>
                    </div>                    
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
export default {}
</script>
