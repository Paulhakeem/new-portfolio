<template>
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-14">
        <h1 class="text-3xl md:text-4xl font-semibold text-white">
          My
          <span
            class="bg-gradient-to-r from-[#ff4b57] to-pink-400 bg-clip-text text-transparent"
          >
            Projects
          </span>
        </h1>

        <p class="text-gray-400 mt-3 text-sm md:text-base">
          Here are some projects I’ve built recently.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="project-card rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10"
        >
          <!-- Image -->
          <div class="relative overflow-hidden">
            <img
              :src="image.src"
              :alt="image.alt"
              class="w-full h-52 object-cover transition duration-500 hover:scale-110"
            />

            <!-- overlay button -->
            <div
              class="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 flex items-center justify-center transition"
            >
              <a :href="image.link" target="_blank">
                <button
                  class="flex items-center gap-2 px-4 py-3 bg-[#ff4b57] text-white rounded-lg hover:bg-pink-500 transition min-h-[44px] text-base"
                >
                  Visit Project
                  <Icon name="ri:external-link-line" size="18" />
                </button>
              </a>
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-5">
            <h3 class="text-lg font-semibold text-white">
              {{ image.title }}
            </h3>

            <p class="text-gray-400 text-sm mt-2">
              A simple preview of the project with a link to explore it.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const images = ref([
  {
    title: "Skywork Website",
    src: "/images/skywork.png",
    alt: "AI",
    link: "https://skywork.vercel.app/",
  },
  {
    title: "Car Rental Landing Page",
    src: "/images/2.png",
    alt: "Car Rental",
    link: "https://dolph-seven.vercel.app/",
  },
  {
    title: "Online Store",
    src: "/images/3.png",
    alt: "Online Store",
    link: "https://medusa-sooty-nine.vercel.app/",
  },
  {
    title: "Dashboard",
    src: "/images/5.png",
    alt: "Dashboard",
    link: "https://dashboard-sooty-zeta-83.vercel.app/",
  },
  {
    title: "Movie app",
    src: "/images/4.png",
    alt: "Movie app",
    link: "https://pre-movies.vercel.app/",
  },
  {
    title: "myholidays Website",
    src: "/images/My holiday deals.png",
    alt: "BnB",
    link: "https://my-holidays.vercel.app/",
  },
  {
    title: "Weather app",
    src: "/images/6.png",
    alt: "Weather app",
    link: "https://local-weather-app-red.vercel.app/",
  },
  {
    title: "Event Booking",
    src: "/images/7.png",
    alt: "Event Booking",
    link: "https://letsbook.vercel.app/",
  },
]);
</script>

<style scoped>
.project-card {
  transition: all 0.35s ease;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
}

.project-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 45px rgba(255, 75, 87, 0.25);
}
</style>
