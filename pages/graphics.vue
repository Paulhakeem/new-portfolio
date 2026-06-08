<template>
  <div>
    <div
      class="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-3 md:gap-4 m-auto max-w-6xl px-4"
    >
      <div class="pt-8" v-for="(photo, index) in photos" :key="index">
        <img
          :src="photo.src"
          :alt="photo.alt"
          loading="lazy"
          format="webp"
          sizes="(max-width: 640px) 100vw, 25vw"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  title: "Graphics | Paul Nyamawi",
  meta: [
    {
      name: "description",
      content:
        "A gallery of graphic design work by Paul Nyamawi, showcasing polished visuals and modern UI assets.",
    },
    {
      property: "og:title",
      content: "Graphics | Paul Nyamawi",
    },
    {
      property: "og:description",
      content:
        "A gallery of graphic design work by Paul Nyamawi, showcasing polished visuals and modern UI assets.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "/graphics",
    },
  ],
});

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
