<template>
  <div class="pb-16">
    <!-- top header  -->
    <PageHeader title="About Us" crumb="About" />

    <!--  About section  -->
    <section class="container mx-auto px-4 pt-12">
      <AboutSection />
    </section>
    <TeamSection />
    <ScrollTop />
  </div>
</template>

<script setup>
import ScrollTop from '~/components/ScrollTop.vue'
import PageHeader from '~/components/PageHeader.vue'
import AboutSection from '~/components/AboutSection.vue'
import TeamSection from '~/components/TeamSection.vue'
</script>
