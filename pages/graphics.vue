<template>
  <div>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 m-auto max-w-6xl">
      <div
        class="pt-8"
        v-for="(photo, index) in photos"
        :key="index"
      >
        <img
          class="w-full object-cover"
          :src="photo.src"
          :alt="photo.alt"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const photos = ref([
  {
    src: "/photos/bnb.png",
    alt: "Gallery Image",
  },
  {
    src: "/photos/Apartment.png",
    alt: "Gallery Image",
  },
  {
    src: "/photos/confirm.png",
    alt: "Gallery Image",
  },
  {
    src: "/photos/holiday.png",
    alt: "Gallery Image",
  },
  {
    src: "/photos/jamhuri.png",
    alt: "Gallery Image",
  },
  {
    src: "/photos/year.png",
    alt: "Gallery Image",
  },
  {
    src: "/photos/offer.png",
    alt: "Gallery Image",
  },
  {
    src: "/photos/valentines.png",
    alt: "Gallery Image",
  },
]);
</script>
