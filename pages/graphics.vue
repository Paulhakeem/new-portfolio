<template>
  <main class="graphics-page">
    <header class="graphics-heading">
      <div>
        <p class="graphics-kicker"><span></span> Selected visual work</p>
        <h1>Ideas made <em>visible.</em></h1>
      </div>
      <p class="graphics-intro">
        A collection of campaigns, brand moments and digital artwork—made to
        catch the eye and tell a story.
      </p>
    </header>
    <div
      class="graphics-grid"
    >
      <figure
        v-for="(photo, index) in photos"
        :key="photo.src"
        class="graphics-card"
        :class="`graphics-card--${index + 1}`"
      >
        <img
          :src="photo.src"
          :alt="photo.alt"
          loading="lazy"
        />
        <figcaption>
          <span>0{{ index + 1 }}</span>
          <span>{{ photo.alt }}</span>
        </figcaption>
      </figure>
    </div>
  </main>
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

<style scoped>
.graphics-page {
  width: min(1200px, calc(100% - 3rem));
  margin: 0 auto;
  padding: clamp(4rem, 8vw, 7rem) 0;
}

.graphics-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 3.5rem;
}

.graphics-kicker {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0 0 1rem;
  color: #bf4a38;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.graphics-kicker span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #bf4a38;
}

.graphics-heading h1 {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 400;
  letter-spacing: -0.06em;
  line-height: 1;
}

.graphics-heading h1 em {
  color: #bf4a38;
  font-weight: 400;
}

.graphics-intro {
  max-width: 24rem;
  margin: 0 0 0.2rem;
  color: #716f67;
  font-size: 1rem;
  line-height: 1.8;
}

.graphics-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 2rem 1.5rem;
}

.graphics-card {
  grid-column: span 4;
  margin: 0;
}

.graphics-card:nth-child(4n + 1) {
  grid-column: span 5;
}

.graphics-card:nth-child(4n + 2) {
  grid-column: span 7;
  margin-top: 3rem;
}

.graphics-card:nth-child(4n + 3) {
  grid-column: span 7;
}

.graphics-card:nth-child(4n + 4) {
  grid-column: span 5;
  margin-top: 3rem;
}

.graphics-card img {
  display: block;
  width: 100%;
  height: clamp(260px, 38vw, 480px);
  object-fit: cover;
  background: #ece7de;
  transition: transform 300ms ease, filter 300ms ease;
}

.graphics-card:hover img {
  filter: saturate(1.05);
  transform: translateY(-4px);
}

.graphics-card figcaption {
  display: flex;
  gap: 0.8rem;
  align-items: baseline;
  padding-top: 0.8rem;
  color: #716f67;
  font-size: 0.76rem;
}

.graphics-card figcaption span:first-child {
  color: #bf4a38;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

@media (max-width: 700px) {
  .graphics-page {
    width: calc(100% - 2rem);
  }

  .graphics-heading {
    display: block;
    margin-bottom: 2.5rem;
  }

  .graphics-intro {
    margin-top: 1.25rem;
  }

  .graphics-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem 0.8rem;
  }

  .graphics-card,
  .graphics-card:nth-child(n) {
    grid-column: span 1;
    margin-top: 0;
  }

  .graphics-card img {
    height: clamp(200px, 64vw, 360px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .graphics-card img {
    transition: none;
  }
}
</style>
