<template>
    <PageHeader title="Our Menu" crumb="Menu" />
  <div class="pt-20">
    <MenuSection />
  </div>
  <ScrollTop />
</template>

<script setup>
import ScrollTop from '~/components/ScrollTop.vue'
import MenuSection from '~/components/MenuSection.vue'
import PageHeader from '~/components/PageHeader.vue'
</script>
