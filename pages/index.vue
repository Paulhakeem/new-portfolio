<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Primary gradient background -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      ></div>

      <!-- Animated orbs -->
      <div
        class="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#ff4b57]/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#ff4b57]/5 to-transparent rounded-full blur-3xl"
      ></div>

      <!-- Subtle grid pattern overlay -->
      <div class="absolute inset-0 opacity-20">
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[length:30px_30px]"
        ></div>
      </div>
    </div>
    <div class="relative z-10">
      <!-- Hero Section -->
      <section
        class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
      >
        <div class="max-w-7xl mx-auto w-full">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <!-- Left Content -->
            <div class="order-2 lg:order-1 text-center lg:text-left space-y-8">
              <!-- Greeting Badge -->
              <div class="inline-block animate-fade-in">
                <span
                  class="px-4 py-2 text-sm font-semibold text-[#ff4b57] bg-[#ff4b57]/10 rounded-full border border-[#ff4b57]/20"
                >
                  👋 Hello, I'm Paul
                </span>
              </div>

              <!-- Main Heading -->
              <div class="space-y-4 animate-fade-in-up">
                <h1
                  class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                >
                  <span class="text-white">I design & build</span>
                  <br />
                  <span
                    class="bg-gradient-to-r from-[#ff4b57] via-pink-400 to-[#ff6b77] bg-clip-text text-transparent"
                  >
                    delightful interfaces
                  </span>
                </h1>
              </div>

              <!-- Description -->
              <div
                class="max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200"
              >
                <p class="text-gray-300 text-lg sm:text-xl leading-relaxed">
                  I'm a
                  <span class="text-[#ff4b57] font-semibold"
                    >Graphic Designer</span
                  >
                  and
                  <span class="text-[#ff4b57] font-semibold"
                    >Front-End Developer</span
                  >
                  focused on building accessible, responsive user experiences
                  with Vue.js and Nuxt.js.
                </p>
                <p class="text-gray-400 text-base mt-4">
                  I combine visual craft with practical engineering to ship
                  polished products that users love.
                </p>
              </div>

              <!-- CTA Buttons -->
              <div
                class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400"
              >
                <a
                  href="/images/PAUL.pdf"
                  download="Paul_Nyamawi_CV.pdf"
                  class="group"
                >
                  <button
                    class="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#ff4b57] to-pink-400 text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#ff4b57]/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 min-h-[56px]"
                  >
                    <Icon name="line-md:download-loop" size="24" />
                    Download CV
                  </button>
                </a>

                <a href="#projects" class="group">
                  <button
                    class="w-full sm:w-auto px-8 py-4 border-2 border-[#ff4b57]/50 text-[#ff4b57] hover:bg-[#ff4b57] hover:text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 min-h-[56px]"
                  >
                    View Projects
                    <Icon
                      name="ri:arrow-right-line"
                      size="24"
                      class="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </a>
              </div>

              <!-- Social Links -->
              <div
                class="flex justify-center lg:justify-start gap-6 pt-8 animate-fade-in-up animation-delay-600"
              >
                <a
                  href="https://github.com/Paulhakeem"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group p-3 bg-white/5 hover:bg-[#ff4b57]/20 border border-white/10 hover:border-[#ff4b57]/50 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <Icon
                    name="ant-design:github-filled"
                    class="size-6 text-gray-400 group-hover:text-white transition-colors"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/paul-nyamawi-9244b924b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group p-3 bg-white/5 hover:bg-[#ff4b57]/20 border border-white/10 hover:border-[#ff4b57]/50 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Icon
                    name="ant-design:linkedin-filled"
                    class="size-6 text-gray-400 group-hover:text-white transition-colors"
                  />
                </a>

                <a
                  href="https://x.com/Hakeemi20"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group p-3 bg-white/5 hover:bg-[#ff4b57]/20 border border-white/10 hover:border-[#ff4b57]/50 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  aria-label="Twitter"
                >
                  <Icon
                    name="prime:twitter"
                    class="size-6 text-gray-400 group-hover:text-white transition-colors"
                  />
                </a>
              </div>
            </div>

            <!-- Right Content - Profile Image -->
            <div
              class="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up animation-delay-300"
            >
              <div class="relative">
                <!-- Glow Effects -->
                <div
                  class="absolute inset-0 rounded-full blur-3xl opacity-30 bg-gradient-to-r from-[#ff4b57] via-pink-400 to-purple-500 animate-pulse"
                ></div>
                <div
                  class="absolute inset-0 rounded-full blur-2xl opacity-20 bg-gradient-to-r from-[#ff4b57] to-[#ff6b77] animate-gradient-x"
                ></div>

                <!-- Profile Image Container -->
                <div
                  class="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-4 ring-[#ff4b57]/50 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-[#ff4b57]/30"
                >
                  <img
                    src="/images/profile.jpg"
                    alt="Paul Nyamawi - Graphic Designer & Front-End Developer"
                    class="w-full h-full object-cover"
                  />

                  <!-- Overlay gradient -->
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  ></div>
                </div>

                <!-- Floating elements -->
                <div
                  class="absolute -top-4 -right-4 w-8 h-8 bg-[#ff4b57] rounded-full animate-bounce"
                ></div>
                <div
                  class="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce animation-delay-1000"
                ></div>
                <div
                  class="absolute top-1/2 -left-8 w-4 h-4 bg-purple-400 rounded-full animate-bounce animation-delay-500"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <Skills />
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="py-20 px-4 sm:px-6 lg:px-8">
        <ProjectProjects />
      </section>

      <!-- Contact Section -->
      <section class="py-20 px-4 sm:px-6 lg:px-8">
        <Contacts />
      </section>
    </div>
  </div>
</template>

<script setup>
import { Button } from "@/components/ui/button";
</script>

<style scoped>
/* Custom animations */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradient-x {
  0%,
  100% {
    transform: translateX(-50%);
  }
  50% {
    transform: translateX(50%);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}

/* Responsive typography adjustments */
@media (max-width: 640px) {
  .text-4xl {
    font-size: 2.5rem;
    line-height: 1.1;
  }

  .text-5xl {
    font-size: 3rem;
    line-height: 1.1;
  }
}

@media (max-width: 480px) {
  .text-4xl {
    font-size: 2.25rem;
  }

  .text-5xl {
    font-size: 2.75rem;
  }

  .text-6xl {
    font-size: 3.25rem;
  }
}

/* Enhanced button hover effects */
button:hover {
  box-shadow: 0 10px 25px rgba(255, 75, 87, 0.3);
}

/* Social link hover effects */
a:hover {
  transform: translateY(-2px);
}

/* Profile image responsive sizing */
@media (max-width: 1024px) {
  .w-64,
  .h-64 {
    width: 18rem;
    height: 18rem;
  }
}

@media (max-width: 768px) {
  .w-64,
  .h-64,
  .w-80,
  .h-80 {
    width: 16rem;
    height: 16rem;
  }
}

@media (max-width: 640px) {
  .w-64,
  .h-64,
  .w-80,
  .h-80 {
    width: 14rem;
    height: 14rem;
  }
}

/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Focus states for accessibility */
button:focus-visible,
a:focus-visible {
  outline: 2px solid #ff4b57;
  outline-offset: 2px;
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
