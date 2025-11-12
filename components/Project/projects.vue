<template>
  <section class="overflow-hidden bg-[#23253a] py-10">
    <div class="relative flex overflow-x-hidden">
      <!-- First row of images -->
      <div class="flex animate-slide">
        <img
          src=""
          class="w-60 sm:w-72 md:w-80 mx-4 rounded-xl"
          alt="slide1"
        />
        <img
          src=""
          class="w-60 sm:w-72 md:w-80 mx-4 rounded-xl"
          alt="slide2"
        />
        <img
          src=""
          class="w-60 sm:w-72 md:w-80 mx-4 rounded-xl"
          alt="slide3"
        />
        <img
          src=""
          class="w-60 sm:w-72 md:w-80 mx-4 rounded-xl"
          alt="slide4"
        />
        <img
          src=""
          class="w-60 sm:w-72 md:w-80 mx-4 rounded-xl"
          alt="slide5"
        />
      </div>

      <!-- Duplicate row for seamless infinite scroll -->
      <div class="flex animate-slide">
        <img
          src=""
          class="w-60 sm:w-72 md:w-80 mx-4 rounded-xl"
          alt="slide1"
        />
        <img
          src=""
          class="w-60 sm:w-72 md:w-80 mx-4 rounded-xl"
          alt="slide2"
        />
        <img
          src=""
          class="w-60 sm:w-72 md:w-80 mx-4 rounded-xl"
          alt="slide3"
        />
        <img
          src=""
          class="w-60 sm:w-72 md:w-80 mx-4 rounded-xl"
          alt="slide4"
        />
        <img
          src=""
          class="w-60 sm:w-72 md:w-80 mx-4 rounded-xl"
          alt="slide5"
        />
      </div>
    </div>
  </section>
</template>
<script setup></script>
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
