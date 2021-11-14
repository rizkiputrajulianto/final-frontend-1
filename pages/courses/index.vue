<template>
    <div class="container-fluid">
      <div class="row learning-block">

        <!-- content card here guys -->
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
                <p><small>Tanggal</small></p>
                <p>Deskripsi Kelas</p>
                <br/>
                <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modal-course">Lihat</button>
                <button class="btn btn-success" type="button">Register</button>
              </div>
            </div>
          </div>
        </div>      
        <!-- modal -->
        <div class="modal fade" id="modal-course" tabindex="-99" role="dialog" aria-labelledby="modal-course" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="modal-course">Nama Kelas</h4>
                <hr>
                <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-4">

                  </div>
                  <div class="col-md-8">
                    <p>Periode Kelas :</p>
                    <hr>
                    <p>Deskripsi : Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <button class="btn btn-success" type="button">Register</button>
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
