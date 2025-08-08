<template>
    <PageHeader title="Our Team" crumb="Team" />
  <div class="pt-20">
    <TeamSection />
        <TeamSection />
  </div>
    <ScrollTop />
</template>

<script setup>
import ScrollTop from '~/components/ScrollTop.vue'
import TeamSection from '~/components/TeamSection.vue'
import PageHeader from '~/components/PageHeader.vue'
</script>
