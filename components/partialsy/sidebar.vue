<template>
    <div class="main-sidebar">
        <aside id="sidebar-wrapper">
        <div class="sidebar-brand">
            <a href="index.html">Stisla</a>
        </div>
        <div class="sidebar-brand sidebar-brand-sm">
            <a href="index.html">St</a>
        </div>
        <ul class="sidebar-menu">
            <li class="menu-header">Starter</li>
            <!-- <li class=""><nuxt-link class="nav-link" :to="sidebar1.tohref"><i :class="sidebar1.icon"></i> <span>{{sidebar1.nama}}</span></nuxt-link></li> -->
            <li v-for="(menu,i) in listMenu" :key="i">
                <nuxt-link class="nav-link" :to="menu.tohref"><i :class="menu.icon"></i> <span>{{menu.nama}}</span></nuxt-link>
            </li>
            <li class="nav-item dropdown">
                <a href="#" class="nav-link has-dropdown" data-toggle="dropdown"><i class="fas fa-columns"></i> <span>Layout</span></a>
                <ul class="dropdown-menu">
                <li><a class="nav-link" href="layout-top-navigation.html">Top Navigation</a></li>
                </ul>
            </li>          
        </ul>

        </aside>
    </div>    
</template>

<script>
    export default {
        // asyncData(){
        //     return{
        //         sidebar2: {
        //             nama : "Users",
        //             icon : "fas fa-square",
        //             tohref : "/users"
        //         }
        //     }
        // },
        data(){
            return{
                listMenu:[
                {
                    nama : "Dashboard",
                    icon : "fas fa-home",
                    tohref : "/"
                },{
                    nama : "User",
                    icon : "fas fa-igloo",
                    tohref : "/users"
                },{
                    nama : "Semua Kelas",
                    icon : "far fa-bookmark",
                    tohref : "/semua-kelas"
                },{
                    nama : "Kelas Saya",
                    icon : "far fa-bookmark",
                    tohref : "/kelas-saya"
                },{
                    nama : "Methods",
                    icon : "far fa-bell",
                    tohref : "/methods/methods"
                },{
                    nama : "Computed",
                    icon : "far fa-bell",
                    tohref : "/methods/computed"
                },{
                    nama : "Watcher",
                    icon : "far fa-bell",
                    tohref : "/methods/watcher"
                }
                ],
            }
        }
    }
</script>
