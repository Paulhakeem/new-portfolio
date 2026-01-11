<template>
  <section class="pt-10">
    <div class="p-4">
      <div class="ml-[4em]">
        <h1 class="text-2xl font-semibold text-gray-300">
          <span class="text-[#ff4b57]">My-</span> Projects
        </h1>
        <p class="mt-2 text-gray-400">
          Here you can find a list of my projects.
        </p>
      </div>
      <!-- Add your project content here -->
      <div class="mx-auto max-w-6xl px-4 pt-5 sm:px-6 lg:px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="(image, index) in images" :key="index"
          class="bg-[#2b2e41] w-72 h-auto p-4 rounded-md m-auto"
        >
            <div class="flex justify-center items-center mt-2">
              <img :src="image.src" alt="AI Icon" class="" />
            </div>
            <div class="pt-4">
              <p class="text-md text-[#ff4b57] font-semibold">
                {{ image.title }}
              </p>
            </div>
            <a :href="image.link" target="_blank">
              <Button class="mt-4 bg-gray-300 text-gray-700 cursor-pointer my-2"
                >Visit
                <Icon class="ml-2" name="ri:external-link-line" size="16" />
              </Button>
            </a>
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
  {
    title: "Event Booking",
    src: "/images/7.png",
    alt: "Event Booking",
    link: "https://letsbook.vercel.app/",
  },
]);
</script>
