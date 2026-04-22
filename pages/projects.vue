<template>
  <div class="min-h-screen py-20 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#ff4b57]/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#ff4b57]/5 to-transparent rounded-full blur-3xl"
      ></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in">
        <div class="inline-block mb-6">
          <span
            class="px-4 py-2 text-sm font-semibold text-[#ff4b57] bg-[#ff4b57]/10 rounded-full border border-[#ff4b57]/20"
          >
            🚀 Portfolio Showcase
          </span>
        </div>

        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          My
          <span
            class="bg-gradient-to-r from-[#ff4b57] via-pink-400 to-[#ff6b77] bg-clip-text text-transparent"
          >
            Projects
          </span>
        </h1>

        <p
          class="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          A curated collection of my most impactful digital creations,
          showcasing innovation, design excellence, and technical expertise.
        </p>

        <!-- Stats -->
        <div class="flex justify-center gap-8 mt-10">
          <div class="text-center">
            <div class="text-3xl font-bold text-[#ff4b57]">
              {{ images.length }}
            </div>
            <div class="text-gray-400 text-sm">Projects</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-pink-400">12+</div>
            <div class="text-gray-400 text-sm">Technologies</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-purple-400">100%</div>
            <div class="text-gray-400 text-sm">Passion</div>
          </div>
        </div>
      </div>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          @click="activeFilter = 'all'"
          :class="[
            'px-6 py-3 rounded-full font-semibold transition-all duration-300',
            activeFilter === 'all'
              ? 'bg-gradient-to-r from-[#ff4b57] to-pink-400 text-white shadow-lg shadow-[#ff4b57]/50'
              : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-[#ff4b57]/30',
          ]"
        >
          All Projects
        </button>
        <button
          @click="activeFilter = 'web'"
          :class="[
            'px-6 py-3 rounded-full font-semibold transition-all duration-300',
            activeFilter === 'web'
              ? 'bg-gradient-to-r from-[#ff4b57] to-pink-400 text-white shadow-lg shadow-[#ff4b57]/50'
              : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-[#ff4b57]/30',
          ]"
        >
          Web Apps
        </button>
        <button
          @click="activeFilter = 'ui'"
          :class="[
            'px-6 py-3 rounded-full font-semibold transition-all duration-300',
            activeFilter === 'ui'
              ? 'bg-gradient-to-r from-[#ff4b57] to-pink-400 text-white shadow-lg shadow-[#ff4b57]/50'
              : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-[#ff4b57]/30',
          ]"
        >
          UI/UX
        </button>
        <button
          @click="activeFilter = 'featured'"
          :class="[
            'px-6 py-3 rounded-full font-semibold transition-all duration-300',
            activeFilter === 'featured'
              ? 'bg-gradient-to-r from-[#ff4b57] to-pink-400 text-white shadow-lg shadow-[#ff4b57]/50'
              : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-[#ff4b57]/30',
          ]"
        >
          Featured
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(image, index) in filteredImages"
          :key="index"
          class="project-card group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-[#ff4b57]/50 transition-all duration-500 flex flex-col h-full"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Shine Effect -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700 z-10"
          ></div>

          <!-- Image Container -->
          <div
            class="relative overflow-hidden flex-shrink-0 h-64 bg-gradient-to-br from-gray-900 to-black"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-1"
            />

            <!-- Gradient Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            ></div>

            <!-- Category Badge -->
            <div class="absolute top-4 left-4">
              <span
                class="px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-[#ff4b57] to-pink-500 rounded-full"
              >
                {{ image.category || "Web App" }}
              </span>
            </div>

            <!-- Featured Badge -->
            <div v-if="image.featured" class="absolute top-4 right-4">
              <span
                class="px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
              >
                ⭐ Featured
              </span>
            </div>

            <!-- Hover Button -->
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
            >
              <a :href="image.link" target="_blank" rel="noopener noreferrer">
                <button
                  class="px-6 py-3 bg-white text-gray-900 font-bold rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 transform group-hover:scale-110 flex items-center gap-2"
                >
                  View Project
                  <Icon name="ri:external-link-line" size="18" />
                </button>
              </a>
            </div>
          </div>

          <!-- Content -->
          <div class="flex-grow p-6 flex flex-col justify-between">
            <div>
              <h3
                class="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ff4b57] group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300"
              >
                {{ image.title }}
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed mb-4">
                {{
                  image.description ||
                  "Innovative digital solution crafted with modern technologies and thoughtful design."
                }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div
          class="bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <h3 class="text-2xl font-bold text-white mb-4">
            Interested in Working Together?
          </h3>
          <p class="text-gray-400 mb-6">
            I'm always excited to take on new challenges and create amazing
            digital experiences.
          </p>
          <a
            href="/#contact"
            class="inline-block px-8 py-3 bg-gradient-to-r from-[#ff4b57] to-pink-400 text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#ff4b57]/50 transition-all duration-300"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const activeFilter = ref("all");

const images = ref([
  {
    title: "Skywork Website",
    src: "/images/skywork.png",
    alt: "AI",
    description:
      "Advanced AI workspace platform with intuitive collaboration tools and real-time features.",
    category: "Web App",
    featured: true,
    link: "https://skywork.vercel.app/",
  },
  {
    title: "Online Store",
    src: "/images/3.png",
    alt: "Online Store",
    description:
      "Full-featured e-commerce platform with product catalog, cart, and checkout functionality.",
    category: "E-commerce",
    featured: true,
    link: "https://medusa-sooty-nine.vercel.app/",
  },
  {
    title: "Dashboard",
    src: "/images/5.png",
    alt: "Dashboard",
    description:
      "Comprehensive analytics dashboard with data visualization and real-time updates.",
    category: "Dashboard",
    featured: false,
    link: "https://dashboard-sooty-zeta-83.vercel.app/",
  },
  {
    title: "Movie app",
    src: "/images/4.png",
    alt: "Movie app",
    description:
      "Interactive movie discovery app with ratings, reviews, and personalized recommendations.",
    category: "Entertainment",
    featured: false,
    link: "https://pre-movies.vercel.app/",
  },
  {
    title: "myholidays Website",
    src: "/images/My holiday deals.png",
    alt: "BnB",
    description:
      "Holiday booking platform with destination guides, reviews, and special deals.",
    category: "Booking",
    featured: false,
    link: "https://my-holidays.vercel.app/",
  },
  {
    title: "Weather app",
    src: "/images/6.png",
    alt: "Weather app",
    description:
      "Beautiful weather application with real-time forecasts and location-based services.",
    category: "Utility",
    featured: false,
    link: "https://local-weather-app-red.vercel.app/",
  },
  {
    title: "Event Booking",
    src: "/images/7.png",
    alt: "Event Booking",
    description:
      "Seamless event booking platform with calendar integration and payment processing.",
    category: "Booking",
    featured: false,
    link: "https://letsbook.vercel.app/",
  },
]);

const filteredImages = computed(() => {
  if (activeFilter.value === "all") return images.value;
  if (activeFilter.value === "featured")
    return images.value.filter((img) => img.featured);
  if (activeFilter.value === "web")
    return images.value.filter(
      (img) => img.category === "Web App" || img.category === "E-commerce",
    );
  if (activeFilter.value === "ui")
    return images.value.filter((img) => img.category !== "Dashboard");
  return images.value;
});
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .project-card {
    animation-delay: 0s !important;
  }
}

/* Custom scrollbar for filter buttons */
@media (max-width: 640px) {
  .filter-buttons {
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .filter-buttons::-webkit-scrollbar {
    display: none;
  }
}
</style>
