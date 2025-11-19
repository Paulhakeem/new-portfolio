<template>
  <section class="overflow-hidden bg-[#23253a] py-10">
    <div class="text-center text-2xl text-gray-200 pb-10 font-light">
      <h1>My <span>Projects</span></h1>
    </div>
    <div class="relative flex overflow-x-hidden">
      <!-- First row of images -->
      <div v-for="img in images" :key="img" class="flex animate-slide">
        <!-- ITEM 1 -->
        <div class="relative w-80 mx-4 rounded-xl overflow-hidden">
          <img :src="img.src" class="w-full h-full object-cover" />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black/50 flex flex-col justify-end p-4"
          >
            <h3 class="text-white text-lg font-bold">
              {{ img.title }}
            </h3>

            <a
              :href="img.link"
              class="px-3 py-1 bg-[#ff4b57] text-white text-sm rounded-md w-fit" target="_blank"
            >
              View Project
            </a>
          </div>
        </div>
      </div>

      <!-- DUPLICATE FOR SEAMLESS SCROLL -->
      <div class="flex animate-slide">
        <div class="relative w-80 mx-4 rounded-xl overflow-hidden">
          <img
            src="/images/My holiday deals.png"
            class="w-full h-full object-cover"
          />

          <div
            class="absolute inset-0 bg-black/40 flex flex-col justify-end p-4"
          >
            <h3 class="text-white text-lg font-bold">Holiday Deals</h3>
            <p class="text-gray-200 text-sm mb-2">Offers & travel UI</p>
            <a
              href="#"
              class="px-3 py-1 bg-[#ff4b57] text-white text-sm rounded-md w-fit"
            >
              View Project
            </a>
          </div>
        </div>

        <div class="relative w-80 mx-4 rounded-xl overflow-hidden">
          <img src="/images/6.png" class="w-full h-full object-cover" />

          <div
            class="absolute inset-0 bg-black/40 flex flex-col justify-end p-4"
          >
            <h3 class="text-white text-lg font-bold">Social Media Graphic</h3>
            <p class="text-gray-200 text-sm mb-2">High-quality visuals</p>
            <a
              href="#"
              class="px-3 py-1 bg-[#ff4b57] text-white text-sm rounded-md w-fit"
            >
              View Project
            </a>
          </div>
        </div>

        <div class="relative w-80 mx-4 rounded-xl overflow-hidden">
          <img src="/images/3.png" class="w-full h-full object-cover" />

          <div
            class="absolute inset-0 bg-black/40 flex flex-col justify-end p-4"
          >
            <h3 class="text-white text-lg font-bold">Brand Concept</h3>
            <p class="text-gray-200 text-sm mb-2">Sleek & elegant</p>
            <a
              href="#"
              class="px-3 py-1 bg-[#ff4b57] text-white text-sm rounded-md w-fit"
            >
              View Project
            </a>
          </div>
        </div>

        <div class="relative w-80 mx-4 rounded-xl overflow-hidden">
          <img src="/images/5.png" class="w-full h-full object-cover" />

          <div
            class="absolute inset-0 bg-black/40 flex flex-col justify-end p-4"
          >
            <h3 class="text-white text-lg font-bold">Promo Banner</h3>
            <p class="text-gray-200 text-sm mb-2">Bold & stylish</p>
            <a
              href="#"
              class="px-3 py-1 bg-[#ff4b57] text-white text-sm rounded-md w-fit"
            >
              View Project
            </a>
          </div>
        </div>

        <div class="relative w-80 mx-4 rounded-xl overflow-hidden">
          <img src="/images/4.png" class="w-full h-full object-cover" />

          <div
            class="absolute inset-0 bg-black/40 flex flex-col justify-end p-4"
          >
            <h3 class="text-white text-lg font-bold">Mockup Design</h3>
            <p class="text-gray-200 text-sm mb-2">Clean & professional</p>
            <a
              href="#"
              class="px-3 py-1 bg-[#ff4b57] text-white text-sm rounded-md w-fit"
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
