<template>
  <section id="team" class="py-20 bg-gray-50">
    <div class="text-center mb-12">
      <h5 class="text-primary text-lg font-semibold">Team Members</h5>
      <h1 class="text-4xl font-bold">Our Master Chefs</h1>
    </div>

    <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <TeamCard
        v-for="(member, index) in teamMembers"
        :key="index"
        :image="member.image"
        :name="member.name"
        :designation="member.designation"
        :socials="member.socials"
      />
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
