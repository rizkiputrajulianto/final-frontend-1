<template>
  <header class="main-nav">
    <div class="sidebar-user text-center"><a class="setting-primary" href="javascript:void(0)"><i data-feather="settings"></i></a><img class="img-90 rounded-circle" src="/assets/images/dashboard/1.png" alt="">
      <div class="badge-bottom"><span class="badge badge-primary">Nama User</span></div>
      <ul>
        <li><span>User</span>
          <p>Status</p>
        </li>
        <li><span><span class="counter">2</span></span>
          <p>Class</p>
        </li>
        <li><span><span class="counter">5</span></span>
          <p>Sosmed</p>
        </li>
      </ul>
    </div>
    <nav>
      <div class="main-navbar">
        <div class="left-arrow" id="left-arrow"><i data-feather="arrow-left"></i></div>
        <div id="mainnav">           
          <ul class="nav-menu custom-scrollbar">
            <li class="dropdown">List Option</li>
            <li v-for="(menu,i) in listMenu" :key="i" class="dropdown">
                <nuxt-link class="nav-link" :to="menu.tohref"><i :data-feather="menu.icon"></i> <span>{{menu.nama}}</span></nuxt-link>
            </li>            
          </ul>
        </div>
        <div class="right-arrow" id="right-arrow"><i data-feather="arrow-right"></i></div>
      </div>
    </nav>
  </header>      
</template>

<script>
    export default {
        data(){
            return{
                listMenu:[
                {
                    nama : "Homepage",
                    icon : "home",
                    tohref : "/"
                },{
                    nama : "All Courses",
                    icon : "server",
                    tohref : "/courses"
                },{
                    nama : "My Courses",
                    icon : "heart",
                    tohref : "/mycourses"
                },{
                    nama : "Precenses",
                    icon : "check-square",
                    tohref : "/precences"
                },{
                    nama : "Profile",
                    icon : "user-check",
                    tohref : "/profile"
                }
                ],
            }
        }
    }
</script>