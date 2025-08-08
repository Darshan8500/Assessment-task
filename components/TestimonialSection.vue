<template>
  <section id="testimonial" class="py-20 bg-white" data-aos="fade-up">
    <!-- Section Heading -->
    <div class="text-center mb-12">
      <div class="flex justify-center items-center gap-4">
        <!-- Left Line -->
        <span class="block h-[2px] w-10 bg-[#FEA116]"></span>

        <!-- Title -->
        <h5 class="text-[#FEA116] text-[20px] font-pacifico">Testimonial</h5>

        <!-- Right Line -->
        <span class="block h-[2px] w-10 bg-[#FEA116]"></span>
      </div>

      <!-- Subheading -->
      <h2 class="text-4xl font-bold text-[#0F172B] mt-3 font-nunito">Our Clients Say!!!</h2>
    </div>

    <!-- Swiper Slider -->
    <div class="max-w-6xl mx-auto px-4">
      <Swiper :slides-per-view="1" :breakpoints="{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }" :centeredSlides="true" :loop="true" :pagination="{
          clickable: true,
          el: '.custom-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }" :autoplay="{ delay: 3000, disableOnInteraction: false }" :modules="[Pagination, Autoplay]"
        @slideChange="onSlideChange" class="mySwiper">
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <TestimonialCard :image="image" :active="index === activeIndex" />
        </SwiperSlide>
      </Swiper>

      <!-- Custom Pagination -->
      <div class="custom-pagination mt-8 flex justify-center gap-2"></div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import TestimonialCard from './TestimonialCard.vue'
import { ref } from 'vue'

import 'swiper/css'
import 'swiper/css/pagination'

const activeIndex = ref(0)

const images = [
  '/images/testimonial/testimonial-1.jpg',
  '/images/testimonial/testimonial-2.jpg',
  '/images/testimonial/testimonial-3.jpg',
  '/images/testimonial/testimonial-4.jpg'
]

function onSlideChange(swiper) {
  activeIndex.value = swiper.realIndex
}
</script>

<style scoped>
/* Custom Swiper Pagination Dots */
.custom-pagination {
  margin-top: 1.5rem;
  /* mt-8 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* Align vertically */
  gap: 0.5rem;
  position: relative;
  /* Important for exact placement */
  top: 0;
  /* Reset any unintended offset */
}

::v-deep(.custom-pagination .swiper-pagination-bullet-active) {
  background-color: #FEA116 !important;
  /* Orange active dot */
  width: 14px !important;
  height: 14px !important;
  opacity: 1 !important;
}
</style>
