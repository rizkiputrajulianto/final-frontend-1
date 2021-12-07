<template>
  <header class="main-nav">
    <div class="sidebar-user text-center">
      <a class="setting-primary" href="javascript:void(0)"
        ><i data-feather="settings"></i></a
      ><img
        v-if="!$auth.loggedIn || $auth.user.photo == ''"
        class="img-90 rounded-circle"
        src="/assets/images/dashboard/1.png"
        alt=""
      />
      <img
        v-else
        :src="$auth.user.photo"
        class="img-90 rounded-circle"
        alt=""
      />
      <div v-if="this.$auth.loggedIn">
        <div v-if="this.$auth.user.name">
          <div class="badge-bottom">
            <span class="badge badge-primary">{{ $auth.user.name }}</span>
          </div>
        </div>
        <div v-else>
          <div class="badge-bottom">
            <span class="badge badge-primary">{{ $auth.user.username }}</span>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="badge-bottom">
          <span class="badge badge-primary">Guest</span>
        </div>
      </div>
      <ul>
        <li>
          <div v-if="this.$auth.loggedIn">
            <span>{{ $auth.user.status }}</span>
          </div>
          <div v-else>
            <span>Guest</span>
          </div>
          <p>Status</p>
        </li>
        <li>
          <div v-if="this.$auth.loggedIn">
            <div v-if="this.$auth.user.activeClass">
              <span
                ><span class="counter">{{
                  $auth.user.activeClass.length
                }}</span></span
              >
            </div>
            <div v-else>
              <span><span class="counter">0</span></span>
            </div>
          </div>
          <div v-else>
            <span><span class="counter">0</span></span>
          </div>
          <p>Class</p>
        </li>
        <li>
          <div v-if="this.$auth.loggedIn">
            <div v-if="sosmed">
              <span
                ><span class="counter">{{ sosmed }}</span></span
              >
            </div>
            <div v-else>
              <span><span class="counter">0</span></span>
            </div>
          </div>
          <div v-else>
            <span><span class="counter">0</span></span>
          </div>
          <p>Sosmed</p>
        </li>
      </ul>
    </div>
    <nav>
      <div class="main-navbar">
        <div class="left-arrow" id="left-arrow">
          <i data-feather="arrow-left"></i>
        </div>
        <div id="mainnav">
          <ul class="nav-menu custom-scrollbar">
            <li class="dropdown">List Option</li>
            <li v-for="(menu, i) in listMenu" :key="i" class="dropdown">
              <nuxt-link class="nav-link" :to="menu.tohref"
                ><i :data-feather="menu.icon"></i>
                <span>{{ menu.nama }}</span></nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="right-arrow" id="right-arrow">
          <i data-feather="arrow-right"></i>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      sosmed: 0,
      listMenu: [
        {
          nama: "Homepage",
          icon: "home",
          tohref: "/",
        },
        {
          nama: "All Courses",
          icon: "server",
          tohref: "/courses",
        },
        {
          nama: "My Courses",
          icon: "heart",
          tohref: "/mycourses",
        },
        {
          nama: "Precenses",
          icon: "check-square",
          tohref: "/precences",
        },
        {
          nama: "Profile",
          icon: "user-check",
          tohref: "/profile",
        },
      ],
    };
  },
  mounted() {
    this.sosmeds();
  },
  methods: {
    sosmeds() {
      let socmed = this.$auth.user.sosmed;
      Object.filter = (obj, predicate) =>
        Object.fromEntries(Object.entries(obj).filter(predicate));
      let count = Object.filter(
        socmed,
        ([key, value]) => value !== "" && value !== socmed.id
      );
      console.log(count);
      if (socmed == null) {
        this.sosmed = 0;
      } else {
        this.sosmed = Object.keys(count).length;
        console.log(this.sosmed);
      }
    },
  },
};
</script>