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

const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl;

useSeoMeta({
  title: "Graphics | Paul Nyamawi",
  description:
    "View graphic design work by Paul Nyamawi, including campaign visuals, brand styling, and modern digital art for online experiences.",
  ogTitle: "Graphics | Paul Nyamawi",
  ogDescription:
    "View graphic design work by Paul Nyamawi, including campaign visuals, brand styling, and modern digital art for online experiences.",
  ogUrl: `${siteUrl}/graphics`,
  ogImage: `${siteUrl}/images/profile.jpg`,
  twitterCard: "summary_large_image",
  twitterTitle: "Graphics | Paul Nyamawi",
  twitterDescription:
    "View graphic design work by Paul Nyamawi, including campaign visuals, brand styling, and modern digital art for online experiences.",
  twitterImage: `${siteUrl}/images/profile.jpg`,
  robots: "index, follow",
});

useHead({
  link: [{ rel: "canonical", href: `${siteUrl}/graphics` }],
});

definePageMeta({
  title: "Graphics | Paul Nyamawi",
});

const photos = ref([
  {
    src: "/photos/bnb.png",
    alt: "Paul Nyamawi vacation promotional graphic design",
  },
  {
    src: "/photos/Apartment.png",
    alt: "Modern apartment branding and property marketing artwork",
  },
  {
    src: "/photos/confirm.png",
    alt: "Confirmation design mockup for a digital booking experience",
  },
  {
    src: "/photos/holiday.png",
    alt: "Holiday campaign graphic for travel and promotions",
  },
  {
    src: "/photos/jamhuri.png",
    alt: "Jamhuri celebration poster design by Paul Nyamawi",
  },
  {
    src: "/photos/year.png",
    alt: "Year end marketing banner design and event poster",
  },
  {
    src: "/photos/offer.png",
    alt: "Special offer promotional artwork for digital marketing",
  },
  {
    src: "/photos/valentines.png",
    alt: "Valentines day promotional visual created by Paul Nyamawi",
  },
]);
</script>
