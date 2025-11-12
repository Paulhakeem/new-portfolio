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
    src: "/photos/bnb.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/photos/Apartment.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/photos/confirm.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/photos/holiday.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/photos/jamhuri.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/photos/year.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/photos/offer.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/photos/valentines.jpg",
    alt: "Gallery Image",
  },
]);
</script>
