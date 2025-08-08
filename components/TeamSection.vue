<template>
  <section id="team" class="py-20 bg-gray-50" data-aos="fade-up">
    <div class="text-center mb-12">
      <div class="flex items-center justify-center gap-3 mb-2">
        <span class="block h-[2px] w-10 bg-[#FEA116]"></span>
        <h5 class="text-[#FEA116] text-[20px] font-pacifico">Team Members</h5>
        <span class="block h-[2px] w-10 bg-[#FEA116]"></span>
      </div>
      <h1 class="text-4xl font-bold font-nunito text-[#0F172B]">Our Master Chefs</h1>
    </div>

    <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <TeamCard v-for="(member, index) in teamMembers" :key="index" :image="member.image" :name="member.name"
        :designation="member.designation" :socials="member.socials" />
    </div>
  </section>
</template>

<script setup>
import TeamCard from './TeamCard.vue'

const teamMembers = [
  {
    image: '/images/team/team-1.jpg',
    name: 'Full Name',
    designation: 'Designation',
    socials: [
      { icon: 'fab fa-facebook-f', href: '#' },
      { icon: 'fab fa-twitter', href: '#' },
      { icon: 'fab fa-instagram', href: '#' },
    ],
  },
  {
    image: '/images/team/team-2.jpg',
    name: 'Full Name',
    designation: 'Designation',
    socials: [
      { icon: 'fab fa-facebook-f', href: '#' },
      { icon: 'fab fa-twitter', href: '#' },
      { icon: 'fab fa-instagram', href: '#' },
    ],
  },
  {
    image: '/images/team/team-3.jpg',
    name: 'Full Name',
    designation: 'Designation',
    socials: [
      { icon: 'fab fa-facebook-f', href: '#' },
      { icon: 'fab fa-twitter', href: '#' },
      { icon: 'fab fa-instagram', href: '#' },
    ],
  },
  {
    image: '/images/team/team-4.jpg',
    name: 'Full Name',
    designation: 'Designation',
    socials: [
      { icon: 'fab fa-facebook-f', href: '#' },
      { icon: 'fab fa-twitter', href: '#' },
      { icon: 'fab fa-instagram', href: '#' },
    ],
  },
]
</script>
