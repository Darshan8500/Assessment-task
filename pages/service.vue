<template>
  <PageHeader title="Services" crumb="Service" />

  
  <div class="mt-16">
    <!-- Section Title -->
    <div class="flex items-center justify-center gap-6 mb-4" data-aos="fade-up" data-aos-delay="100">
      <span class="block h-[2px] w-10 bg-[#FEA116]"></span>
      <h5 class="text-[#FEA116] text-[20px] font-pacifico">Our Services</h5>
      <span class="block h-[2px] w-10 bg-[#FEA116]"></span>
    </div>

    <h2 class="text-4xl font-bold text-center text-gray-800 mb-4 font-nunito" data-aos="fade-up" data-aos-delay="150">
      Explore Our Services
    </h2>
  </div>

  <!-- Service Sections -->
  <div class="pt-20">
    <ServiceSection />
    <ServiceSection />
  </div>

  <ScrollTop />
</template>
