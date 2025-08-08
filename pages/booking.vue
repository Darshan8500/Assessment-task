<template>
    <PageHeader title="Our Booking " crumb="Booking" />
  <div class="pt-20">
    <BookingSection />
  </div>
  <ScrollTop />
</template>

<script setup>
import ScrollTop from '~/components/ScrollTop.vue'
import BookingSection from '~/components/BookingSection.vue'
import PageHeader from '~/components/PageHeader.vue'
</script>
