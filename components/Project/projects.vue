<template>
  <section id="projects" class="py-12">
    <div class="text-center text-2xl text-gray-200 pb-8 font-light">
      <h1>My <span class="text-[#ff4b57]">Projects</span></h1>
    </div>

    <div class="mx-auto max-w-6xl px-4 relative">
      <Carousel :opts="{ align: 'start', containScroll: 'trimSnaps' }">
        <template #default>
          <CarouselContent>
            <CarouselItem v-for="img in images" :key="img.title" class="w-64 sm:w-72 md:w-80 lg:w-96">
              <div class="project-card rounded-xl overflow-hidden shadow-lg bg-gray-800">
                <img :src="img.src" :alt="img.alt" class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
                <div class="p-4">
                  <h3 class="text-white text-lg font-semibold">{{ img.title }}</h3>
                  <p class="text-gray-300 text-sm mt-2">A snapshot of the project and quick link.</p>
                  <div class="mt-4">
                    <a :href="img.link" target="_blank" class="inline-block px-3 py-2 bg-[#ff4b57] text-white text-sm rounded-md hover:bg-[#ff6b77] transition">View Project</a>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          <div class="absolute left-0 top-1/2 -translate-y-1/2">
            <CarouselPrevious />
          </div>

          <div class="absolute right-0 top-1/2 -translate-y-1/2">
            <CarouselNext />
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

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
]);
</script>
<style scoped>
/* project card small helpers */
.project-card {
  transition: transform .25s ease, box-shadow .25s ease;
}
.project-card:hover {
  transform: translateY(-6px);
}
</style>
