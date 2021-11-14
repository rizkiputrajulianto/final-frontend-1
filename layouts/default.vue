<template>
    <div class="page-wrapper compact-wrapper" id="pageWrapper">
        <!-- Page Header-->
        <partials-navbar/>

        <!-- Page Body-->
        <div class="page-body-wrapper sidebar-icon">
            <partials-sidebar/>
            <!-- Content disini guys -->
            <div class="page-body">
                <div class="container-fluid dashboard-default-sec">
                    <div class="row">
                    
                        <Nuxt/>
                    
                    </div>
                </div>
            </div>   
            <!-- footer-->
            <partials-footer/>
        </div>
    </div>
</template>