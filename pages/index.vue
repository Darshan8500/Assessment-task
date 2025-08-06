<template>
  <div>
    <Hero />
    <ScrollTop />
    <Service />
    <About />
    <MenuSection />
    <Booking />
    <TeamSection />
    <TestimonialSection />
  </div>
</template>

<script setup>
import ScrollTop from '~/components/ScrollTop.vue'
import Hero from '~/components/HeroSection.vue'
import About from '~/components/AboutSection.vue'
import Service from '~/components/ServiceSection.vue'
import MenuSection from '@/components/MenuSection.vue'
import Booking from '~/components/BookingSection.vue'
import TeamSection from '~/components/TeamSection.vue'
import TestimonialSection from '@/components/TestimonialSection.vue'
</script>
