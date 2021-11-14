<template>
    <div>
      <link id="color" rel="stylesheet" href="/assets/css/color-1.css" media="screen">
      <!-- Page Header Start-->
      <div class="page-main-header">
        <div class="main-header-right row m-0">
          <div class="main-header-left">
            <div class="logo-wrapper"><img class="img-fluid" src="/assets/images/logo/logo.png" alt=""></div>
            <div class="dark-logo-wrapper"><img class="img-fluid" src="/assets/images/logo/logo.png" alt=""></div>
            <div class="toggle-sidebar"><i class="status_toggle middle" data-feather="align-center" id="sidebar-toggle"></i></div>
          </div>
          <div class="nav-right col pull-right right-menu p-0">
            <ul class="nav-menus">
              <li><a class="text-dark" onclick="javascript:toggleFullScreen()"><i data-feather="maximize"></i></a></li>
              <li>
                <div class="mode"><i class="fa fa-moon-o"></i></div>
              </li>
              <li class="onhover-dropdown p-0">
                <button class="btn btn-primary-light-head" type="button"><a href="logout">Log out</a></button>
              </li>
            </ul>
          </div>
          <div class="d-lg-none mobile-toggle pull-right w-auto"><i data-feather="more-horizontal"></i></div>
        </div>
      </div>      
    </div>
</template>