<template>
  <section id="projects" class="py-20 relative overflow-hidden">
    <!-- Animated background gradient -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#ff4b57]/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"
      ></div>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-16 animate-fade-in">
        <div class="inline-block mb-4">
          <span
            class="px-4 py-2 text-sm font-semibold text-[#ff4b57] bg-[#ff4b57]/10 rounded-full border border-[#ff4b57]/20"
          >
            ✨ My Creative Work
          </span>
        </div>
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Featured
          <span
            class="bg-gradient-to-r from-[#ff4b57] via-pink-400 to-[#ff6b77] bg-clip-text text-transparent"
          >
            Projects
          </span>
        </h1>
        <p class="text-gray-300 text-md md:text-lg max-w-2xl mx-auto">
          Explore a collection of my most impressive digital creations, built
          with modern technologies and designed for real-world impact.
        </p>
      </div>

      <!-- View Toggle -->
      <div class="flex justify-center gap-4 mb-12">
        <button
          @click="viewMode = 'carousel'"
          :class="[
            'px-6 py-2 rounded-full font-semibold transition-all duration-300',
            viewMode === 'carousel'
              ? 'bg-gradient-to-r from-[#ff4b57] to-pink-400 text-white shadow-lg shadow-[#ff4b57]/50'
              : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10',
          ]"
        >
          🎠 Carousel
        </button>
        <button
          @click="viewMode = 'grid'"
          :class="[
            'px-6 py-2 rounded-full font-semibold transition-all duration-300',
            viewMode === 'grid'
              ? 'bg-gradient-to-r from-[#ff4b57] to-pink-400 text-white shadow-lg shadow-[#ff4b57]/50'
              : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10',
          ]"
        >
          📋 Grid
        </button>
      </div>

      <!-- Carousel View -->
      <div v-if="viewMode === 'carousel'" class="relative">
        <Carousel
          :opts="{ align: 'start', containScroll: 'trimSnaps', loop: true }"
        >
          <template #default>
            <CarouselContent class="pb-4">
              <CarouselItem
                v-for="(img, idx) in images"
                :key="img.title"
                class="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <div class="project-card-wrapper h-full">
                  <div
                    class="project-card group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-[#ff4b57]/50 transition-all duration-500 h-full flex flex-col"
                    :style="{ animationDelay: `${idx * 0.1}s` }"
                  >
                    <!-- Shine effect -->
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"
                    ></div>

                    <!-- Image Container -->
                    <div
                      class="relative overflow-hidden flex-shrink-0 h-64 bg-gradient-to-br from-gray-900 to-black"
                    >
                      <img
                        :src="img.src"
                        :alt="img.alt"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-1"
                      />

                      <!-- Gradient Overlay -->
                      <div
                        class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                      ></div>

                      <!-- Tag Badge -->
                      <div class="absolute top-4 right-4">
                        <span
                          class="px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-[#ff4b57] to-pink-500 rounded-full"
                        >
                          Featured
                        </span>
                      </div>

                      <!-- Hover Button -->
                      <div
                        class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <a
                          :href="img.link"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="px-6 py-3 bg-white text-gray-900 font-bold rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 transform group-hover:scale-110"
                        >
                          Launch Project →
                        </a>
                      </div>
                    </div>

                    <!-- Content -->
                    <div class="flex-grow p-6 flex flex-col justify-between">
                      <div>
                        <h3
                          class="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ff4b57] group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300"
                        >
                          {{ img.title }}
                        </h3>
                        <p class="text-gray-400 text-sm leading-relaxed">
                          {{
                            img.description ||
                            "Innovative digital solution crafted with cutting-edge technologies and modern design principles."
                          }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>

            <!-- Navigation -->
            <div class="absolute -left-16 top-1/3 z-20">
              <CarouselPrevious
                class="h-12 w-12 bg-gradient-to-r from-[#ff4b57] to-pink-400 hover:shadow-lg hover:shadow-[#ff4b57]/50 border-0"
              />
            </div>
            <div class="absolute -right-16 top-1/3 z-20">
              <CarouselNext
                class="h-12 w-12 bg-gradient-to-r from-[#ff4b57] to-pink-400 hover:shadow-lg hover:shadow-[#ff4b57]/50 border-0"
              />
            </div>
          </template>
        </Carousel>
      </div>

      <!-- Grid View -->
      <div
        v-if="viewMode === 'grid'"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="(img, idx) in images"
          :key="img.title"
          class="project-card group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-[#ff4b57]/50 transition-all duration-500 flex flex-col h-full"
          :style="{ animationDelay: `${idx * 0.05}s` }"
        >
          <!-- Shine effect -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"
          ></div>

          <!-- Image Container -->
          <div
            class="relative overflow-hidden flex-shrink-0 h-56 bg-gradient-to-br from-gray-900 to-black"
          >
            <img
              :src="img.src"
              :alt="img.alt"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-1"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500"
            ></div>

            <div class="absolute top-4 right-4">
              <span
                class="px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-[#ff4b57] to-pink-500 rounded-full"
              >
                Featured
              </span>
            </div>

            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <a
                :href="img.link"
                target="_blank"
                rel="noopener noreferrer"
                class="px-5 py-2 bg-white text-gray-900 font-bold rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 transform group-hover:scale-110"
              >
                View →
              </a>
            </div>
          </div>

          <!-- Content -->
          <div class="flex-grow p-5 flex flex-col justify-between">
            <div>
              <h3
                class="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ff4b57] group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300"
              >
                {{ img.title }}
              </h3>
              <p class="text-gray-400 text-sm line-clamp-2">
                {{
                  img.description ||
                  "Innovative digital solution with modern design."
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
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

const viewMode = ref("carousel");

const images = ref([
  {
    title: "Skywork Website",
    src: "/images/skywork.png",
    alt: "AI",
    description:
      "Advanced AI workspace platform with intuitive collaboration tools and real-time features.",
    link: "https://skywork.vercel.app/",
  },
  {
    title: "Online Store",
    src: "/images/3.png",
    alt: "Online Store",
    description:
      "Full-featured e-commerce platform with product catalog, cart, and checkout functionality.",
    link: "https://medusa-sooty-nine.vercel.app/",
  },
  {
    title: "Dashboard",
    src: "/images/5.png",
    alt: "Dashboard",
    description:
      "Comprehensive analytics dashboard with data visualization and real-time updates.",
    link: "https://dashboard-sooty-zeta-83.vercel.app/",
  },
  {
    title: "Movie app",
    src: "/images/4.png",
    alt: "Movie app",
    description:
      "Interactive movie discovery app with ratings, reviews, and personalized recommendations.",
    link: "https://pre-movies.vercel.app/",
  },
  {
    title: "myholidays Website",
    src: "/images/My holiday deals.png",
    alt: "BnB",
    description:
      "Holiday booking platform with destination guides, reviews, and special deals.",
    link: "https://my-holidays.vercel.app/",
  },
  {
    title: "Weather app",
    src: "/images/6.png",
    alt: "Weather app",
    description:
      "Beautiful weather application with real-time forecasts and location-based services.",
    link: "https://local-weather-app-red.vercel.app/",
  },
]);
</script>

<style scoped>
.project-card {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 10px 30px rgba(255, 75, 87, 0.1);
  animation: slideInUp 0.6s ease-out both;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(255, 75, 87, 0.25);
}

.project-card-wrapper {
  animation: fadeInUp 0.6s ease-out both;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes animate-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: animate-fade-in 0.8s ease-out;
}

:deep(.carousel__viewport) {
  overflow-x: auto;
  scroll-padding: 0 2rem;
}

:deep(.carousel__scroll-area) {
  scroll-behavior: smooth;
}

:deep(.carousel__slide) {
  scroll-snap-align: center;
  scroll-snap-stop: always;
}

/* Line clamp utility */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
