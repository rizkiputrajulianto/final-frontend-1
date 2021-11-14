<template>
    <div class="container-fluid">

      <!-- content card my courses -->
      <div class="row learning-block">
        <h6>My Courses :</h6>
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

      </div>

      <!-- content card next courses -->
      <div class="row learning-block">
        <hr>
        <h6>Session List :</h6>
        <!-- looping content card here guys -->
        <div class="col-md-12 col-sm-6 box-col-6">
          <div class="row">
            <div class="col-xl-12 col-sm-6">
              <div class="card">
                <div class="blog-box blog-list row">
                  <div class="col-xl-3 col-12"><img class="img-fluid sm-100-w" src="/assets/images/dashboard/banner250.jpg" alt=""></div>
                  <div class="col-xl-7 col-12">
                    <div class="blog-details">
                      <div class="blog-date"><span>05</span> January 2021</div><a href="">
                        <h6>Nama Materi</h6></a>
                      <div class="blog-bottom-content">
                        <ul class="blog-social">
                          <li>Nama Kelas : </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-2 col-12"><button class="btn btn-primary" type="button">Open</button></div>
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
