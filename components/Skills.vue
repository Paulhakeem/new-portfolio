<template>
  <div class="mt-12 mb-6 text-center">
    <h2 class="text-2xl text-[#ff4b57] font-medium">Tech stack & tools</h2>
    <p class="text-gray-400 mt-2">Tools and technologies I use regularly</p>

    <div class="mt-6">
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 justify-items-center">
        <div v-for="(skill, index) in techSkils" :key="index" class="w-full flex flex-col items-center">
          <div class="skill-bubble w-16 h-16 rounded-xl bg-gradient-to-br from-[#1b2130] to-[#2b2e41] flex items-center justify-center shadow-md">
            <Icon :name="skill.icon" class="text-[#ff4b57] text-2xl" />
          </div>
          <p class="text-gray-300 text-sm mt-2 truncate">{{ skill.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const techSkils = ref([
  {
    icon: "material-icon-theme:adobe-illustrator",
    name: "Illustrator",
  },
  {
    icon: "material-icon-theme:adobe-photoshop",
    name: "Photoshop",
  },
  {
    icon: "devicon-plain:wordpress",
    name: "WordPress",
  },
  {
    icon: "devicon:html5",
    name: "HTML",
  },
  {
    icon: "devicon:css3",
    name: "CSS",
  },
  {
    icon: "skill-icons:tailwindcss-dark",
    name: "Tailwindcss",
  },
  {
    icon: "skill-icons:javascript",
    name: "JavaScript",
  },
  {
    icon: "devicon:vuejs",
    name: "Vue.js",
  },
  {
    icon: "devicon:nuxtjs",
    name: "Nuxt.js",
  },
  {
    icon: "devicon:git",
    name: "Git",
  },
  {
    icon: "devicon:github",
    name: "GitHub",
  },
  {
    icon: "skill-icons:nodejs-dark",
    name: "Node.js",
  },
  {
    icon: "skill-icons:expressjs-dark",
    name: "Express.js",
  },
  {
    icon: "devicon:mongodb",
    name: "MongoDB",
  },
  {
    icon: "devicon:firebase",
    name: "Firebase",
  },
]);
</script>

<style scoped>
.skill-bubble {
  transition: transform .18s ease, box-shadow .18s ease;
}
.skill-bubble:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 12px 30px rgba(0,0,0,0.45);
}
</style>
