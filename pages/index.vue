<template>
  <div class="container-fluid general-widget">
    <div class="row">
      <div class="col-sm-6 col-xl-3 col-lg-6">
        <div class="card o-hidden border-0">
          <div class="bg-primary b-r-4 card-body">
            <div class="media static-top-widget">
              <div class="align-self-center text-center">
                <i data-feather="database"></i>
              </div>
              <div class="media-body">
                <span class="m-0">Class Active</span>
                <h4 class="mb-0">
                  <span v-if="$auth.loggedIn" class="counter">{{
                    $auth.user.activeClass.length
                  }}</span>
                  <span v-else class="counter">0</span>
                  Classs
                </h4>
                <i class="icon-bg" data-feather="database"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-3 col-lg-6">
        <div class="card o-hidden border-0">
          <div class="bg-secondary b-r-4 card-body">
            <div class="media static-top-widget">
              <div class="align-self-center text-center">
                <i data-feather="shopping-bag"></i>
              </div>
              <div class="media-body">
                <span class="m-0">Precense</span>
                <h4 class="mb-0"><span class="counter">50</span>%</h4>
                <i class="icon-bg" data-feather="shopping-bag"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-3 col-lg-6">
        <div class="card o-hidden border-0">
          <div class="bg-success b-r-4 card-body">
            <div class="media static-top-widget">
              <div class="align-self-center text-center">
                <i data-feather="message-circle"></i>
              </div>
              <div class="media-body">
                <span class="m-0">Remain Task</span>
                <h4 class="mb-0 counter">0</h4>
                <i class="icon-bg" data-feather="message-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-3 col-lg-6">
        <div class="card o-hidden border-0">
          <div class="bg-danger b-r-4 card-body">
            <div class="media static-top-widget">
              <div class="align-self-center text-center">
                <i data-feather="user-plus"></i>
              </div>
              <div class="media-body">
                <span class="m-0">Remain Task</span>
                <h4 class="mb-0 counter">0</h4>
                <i class="icon-bg" data-feather="user-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="container">
        <h1>Pengumuman</h1>
        <hr />
        <div class="card-body d-flex justify-content-center">
          <news-card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
};
</script>
