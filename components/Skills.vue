<template>
  <div class="mt-12 mb-6 text-center">
    <h2 class="text-2xl text-[#ff4b57] font-medium">Tech stack & tools</h2>
    <p class="text-gray-400 mt-2">Tools and technologies I use regularly</p>

    <div class="mt-6">
      <div
        class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 justify-items-center"
      >
        <div
          v-for="(skill, index) in techSkils"
          :key="index"
          class="skill-item group"
          :style="{ animationDelay: `${index * 0.1}s` }"
          data-aos="zoom-in"
          :data-aos-delay="index * 100"
        >
          <div class="skill-bubble relative overflow-hidden">
            <!-- Animated background gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-[#1b2130] via-[#2b2e41] to-[#1b2130] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#ff4b57]/20 via-[#ff6b77]/20 to-[#ff4b57]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"
            ></div>

            <!-- Skill icon with floating animation -->
            <div
              class="relative z-10 flex items-center justify-center w-16 h-16"
            >
              <Icon
                :name="skill.icon"
                class="text-[#ff4b57] text-2xl transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:rotate-12"
              />
            </div>

            <!-- Hover glow effect -->
            <div
              class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-[#ff4b57] to-[#ff6b77]"
            ></div>
          </div>

          <!-- Skill name with slide-up animation -->
          <p
            class="text-gray-300 text-sm mt-2 transition-all duration-300 group-hover:text-white group-hover:font-semibold transform group-hover:translate-y-[-2px]"
          >
            {{ skill.name }}
          </p>

          <!-- Progress indicator -->
          <div class="mt-1 w-full bg-gray-700 rounded-full h-1 overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-[#ff4b57] to-[#ff6b77] rounded-full transition-all duration-1000 ease-out opacity-0 group-hover:opacity-100"
              :style="{
                width: skill.proficiency + '%',
                animationDelay: `${index * 0.1 + 0.5}s`,
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
    icon: "material-icon-theme:html",
    name: "HTML",
  },
  {
    icon: "skill-icons:css",
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
    icon: "material-icon-theme:vue",
    name: "Vue.js",
  },
  {
    icon: "material-icon-theme:nuxt",
    name: "Nuxt.js",
  },
  {
    icon: "material-icon-theme:git",
    name: "Git",
  },
  {
    icon: "ri:github-fill",
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
  {
    icon: "devicon:mysql",
    name: "MySQL",
  },
  {
    icon: "devicon:php",
    name: "PHP",
  },
]);
</script>

<style scoped>
.skill-bubble {
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;
}
.skill-bubble:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
}
</style>
