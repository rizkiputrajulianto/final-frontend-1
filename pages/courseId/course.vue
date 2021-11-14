<template>
    <div class="container-fluid">
      <div class="col-md-12 project-list">
        <div class="card">
          <div class="row">
            <div class="col-md-6 p-0">
              <ul class="nav nav-tabs border-tab" id="top-tab">
                <li class="nav-item"><a class="nav-link" href="courseid/schedule" role="tab"><i data-feather="calendar"></i>Jadwal</a></li>
                <li class="nav-item"><a class="nav-link active" href="courseid/course"><i data-feather="edit"></i>Course</a></li>
                <li class="nav-item"><a class="nav-link" href="courseid/teamate"><i data-feather="users"></i>Anggota</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <div class="col-sm-12 col-xl-6 xl-100">
          <div class="card">
            <div class="card-header pb-0">
              <h5>Course : Nama Kelas yang diikuti</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3 col-xs-12">
                  <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-sesi1-tab" data-bs-toggle="pill" href="#v-pills-sesi1" role="tab" aria-controls="v-pills-sesi1" aria-selected="true">Sesi 1</a>
                    <a class="nav-link" id="v-pills-sesi2-tab" data-bs-toggle="pill" href="#v-pills-sesi2" role="tab" aria-controls="v-pills-sesi2" aria-selected="false">Sesi 2</a>
                  </div>
                </div>
                <div class="col-sm-9 col-xs-12">
                  <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-sesi1" role="tabpanel" aria-labelledby="v-pills-sesi1-tab">
                      <h5>Sesi 1</h5>
                      <div class="col-sm-6 col-xl-6 col-lg-6">
                        <div class="card o-hidden border-0">
                          <div class="bg-primary b-r-4 card-body">
                            <div class="media static-top-widget">
                              <div class="align-self-center text-center"><i data-feather="book"></i></div>
                              <div class="media-body">
                                <h6 class="m-0">Judul Materi</h6>
                                <i class="icon-bg" data-feather="edit"></i>
                                <span>Tanggal</span>
                                <br>
                                <button class="btn btn-success btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#modal-course">Buka</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-sesi2" role="tabpanel" aria-labelledby="v-pills-sesi2-tab">
                      <h5>Sesi 2</h5>
                      <div class="col-sm-6 col-xl-6 col-lg-6">
                        <div class="card o-hidden border-0">
                          <div class="bg-primary b-r-4 card-body">
                            <div class="media static-top-widget">
                              <div class="align-self-center text-center"><i data-feather="book"></i></div>
                              <div class="media-body">
                                <h6 class="m-0">Judul Materi</h6>
                                <i class="icon-bg" data-feather="edit"></i>
                                <span>Tanggal</span>
                                <br>
                                <button class="btn btn-success btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#modal-course">Buka</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>                      
                    </div>
                    <!-- modal -->
                    <div class="modal fade" id="modal-course" tabindex="-99" role="dialog" aria-labelledby="modal-course" aria-hidden="true">
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title" id="modal-course">Judul Materi</h4>
                            <hr>
                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <div class="row">
                              <div class="col-md-6 file-content">
                                <div class="row file-manager card-body">
                                <h6>Document File :</h6>
                                <hr>                                  
                                  <ul class="files">
                                    <li class="file-box">
                                      <div class="file-top">
                                        <i class="fa fa-file-pdf-o txt-success"></i>
                                        <!-- opsinya : powerpoint, pdf, code, archive -->
                                        <i class="fa fa-ellipsis-v f-14 ellips"></i>
                                      </div>
                                      <div class="file-bottom">
                                        <h6>Backend</h6>
                                      </div>
                                    </li> 
                                    <li class="file-box">
                                      <div class="file-top">
                                        <i class="fa fa-file-powerpoint-o txt-success"></i>
                                        <!-- opsinya : powerpoint, pdf, code, archive -->
                                        <i class="fa fa-ellipsis-v f-14 ellips"></i>
                                      </div>
                                      <div class="file-bottom">
                                        <h6>Backend</h6>
                                      </div>
                                    </li>                                     
                                  </ul>                                 
                                </div>
                              </div>
                              <div class="col-md-6 file-content">
                                <div class="row file-manager card-body">
                                <h6>Multimedia File :</h6>
                                <hr>                                    
                                  <ul class="files">
                                    <li class="file-box">
                                      <div class="file-top">
                                        <i class="fa fa-file-video-o txt-success"></i>
                                        <!-- opsinya : video, image, audio -->
                                        <i class="fa fa-ellipsis-v f-14 ellips"></i>
                                      </div>
                                      <div class="file-bottom">
                                        <h6>Rec.Backend</h6>
                                      </div>
                                    </li> 
                                    <li class="file-box">
                                      <div class="file-top">
                                        <i class="fa fa-file-image-o txt-success"></i>
                                        <!-- opsinya : video, image, audio -->
                                        <i class="fa fa-ellipsis-v f-14 ellips"></i>
                                      </div>
                                      <div class="file-bottom">
                                        <h6>Preview</h6>
                                      </div>
                                    </li>                                     
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
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {}
</script>
