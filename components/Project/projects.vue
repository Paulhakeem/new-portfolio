<template>
  <section id="projects" class="py-16 relative overflow-hidden">
    <!-- Section Title -->
    <div class="text-center pb-10">
      <h1 class="text-3xl md:text-4xl font-semibold text-white">
        My
        <span
          class="bg-gradient-to-r from-[#ff4b57] to-pink-400 bg-clip-text text-transparent"
        >
          Projects
        </span>
      </h1>
      <p class="text-gray-400 mt-2 text-sm">
        Some things I've been building recently ✨
      </p>
    </div>

    <div class="mx-auto max-w-6xl px-4 relative">
      <Carousel :opts="{ align: 'start', containScroll: 'trimSnaps' }">
        <template #default>
          <CarouselContent>
            <CarouselItem
              v-for="img in images"
              :key="img.title"
              class="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96"
            >
              <div
                class="project-card rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10"
              >
                <!-- Image -->
                <div class="relative overflow-hidden">
                  <img
                    :src="img.src"
                    :alt="img.alt"
                    class="w-full h-52 object-cover transition duration-500 hover:scale-110"
                  />

                  <!-- overlay -->
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition flex items-end p-4"
                  >
                    <a
                      :href="img.link"
                      target="_blank"
                      class="px-4 py-3 text-base bg-[#ff4b57] rounded-lg text-white hover:bg-pink-500 transition min-h-[44px] flex items-center justify-center"
                    >
                      View Project →
                    </a>
                  </div>
                </div>

                <!-- content -->
                <div class="p-5 text-left">
                  <h3 class="text-white text-lg font-semibold">
                    {{ img.title }}
                  </h3>

                  <p class="text-gray-400 text-sm mt-2">
                    A snapshot of the project and quick link.
                  </p>

                  <!-- cute tags -->
                  <div class="flex gap-2 mt-3 flex-wrap">
                    <span
                      class="text-xs px-2 py-1 rounded-full bg-[#ff4b57]/20 text-[#ff4b57]"
                    >
                      Web
                    </span>
                    <span
                      class="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400"
                    >
                      UI
                    </span>
                    <span
                      class="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400"
                    >
                      Vue
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          <!-- Navigation -->
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
import { ref } from "vue";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
.project-card {
  transition: all 0.35s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
}

.project-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 45px rgba(255, 75, 87, 0.25);
}
</style>
