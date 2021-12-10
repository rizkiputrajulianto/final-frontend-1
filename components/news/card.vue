<template>
  <div>
    <!-- Slider main container -->
    <div class="swiper">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">
          <img
            src="https://shiftacademy.id/wp-content/uploads/2021/12/website-4.jpeg"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://shiftacademy.id/wp-content/uploads/2021/12/website-1.jpeg"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://shiftacademy.id/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-03-at-10.00.05-AM.jpeg"
            alt=""
            class="img-fluid"
          />
        </div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <script>
      const swipers = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    </script>
  </div>
</template>