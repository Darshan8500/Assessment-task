<template>
  <section id="testimonial" class="py-20 bg-white">
    <div class="text-center mb-12">
      <p class="text-[#FEA116] font-semibold text-xl mb-2">Testimonial</p>
      <h2 class="text-4xl font-bold text-[#0F172B]">Our Clients Say!!!</h2>
    </div>

    <div class="max-w-6xl mx-auto px-4">
      <Swiper
        :slides-per-view="1"
        :breakpoints="{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }"
        :centeredSlides="true"
        :loop="true"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :modules="[Pagination, Autoplay]"
        @slideChange="onSlideChange"
        class="mySwiper"
      >
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <TestimonialCard :image="image" :active="index === activeIndex" />
        </SwiperSlide>

        <div class="swiper-pagination mt-6"></div>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import TestimonialCard from './TestimonialCard.vue'
import { ref } from 'vue'

const activeIndex = ref(1)
const images = [
  '/images/testimonial/testimonial-1.jpg',
  '/images/testimonial/testimonial-2.jpg',
  '/images/testimonial/testimonial-3.jpg',
  '/images/testimonial/testimonial-4.jpg',
  //'/images/testimonial/testimonial-1.jpg'
]

function onSlideChange(swiper) {
  activeIndex.value = swiper.realIndex
}
</script>
