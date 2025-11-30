<template>
  <section class="overflow-hidden bg-[#23253a] py-10">
    <div class="text-center text-2xl text-gray-200 pb-10 font-light">
      <h1>My <span>Projects</span></h1>
    </div>

    <!-- SLIDER WRAPPER -->
    <div class="relative overflow-x-hidden">
      <!-- ROW (Animated Slide) -->
      <div class="flex animate-slide gap-4">
        <!-- PROJECT CARD -->
        <div
          v-for="img in images"
          :key="img"
          class="relative shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 xl:w-md 2xl:w-lg rounded-xl overflow-hidden"
        >
          <img
            :src="img.src"
            class="w-full h-48 sm:h-56 md:h-64 object-cover"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black/50 flex flex-col justify-end p-4"
          >
            <h3 class="text-white text-xl font-bold py-4">
              {{ img.title }}
            </h3>

            <a
              :href="img.link"
              class="px-3 py-1 bg-[#ff4b57] text-white text-sm rounded-md w-fit"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
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
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-slide {
  animation: slide 25s linear infinite;
}
</style>
