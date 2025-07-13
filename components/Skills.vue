<template>
  <div class="mt-12 mb-6 text-center">
    <h2 class="text-2xl text-[#ff4b57] font-light">Tech stack/tools:</h2>

    <div
      class="mt-4 border border-[#ff4b57] w-full p-5 flex flex-wrap gap-4"
    >
      <div
        v-for="(skills, index) in techSkils"
        :key="index"
        class="items-center justify-center flex flex-col gap-2"
      >
        <Icon :name="skills.icon" class="text-[#ff4b57] text-3xl" />
        <p class="text-gray-300 text-sm">{{ skills.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
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
]);
</script>
