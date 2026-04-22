<template>
  <div class="relative min-h-screen">
    <header class="pt-12 relative z-10">
      <div
        class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 bg-gradient-to-br from-[#0f1724] via-[#23253a] to-[#121426] rounded-3xl shadow-lg animate-gradient-xy relative overflow-hidden"
      >
        <!-- Animated background elements -->
        <div class="absolute inset-0 opacity-10">
          <div
            class="absolute top-10 left-10 w-32 h-32 bg-[#ff4b57] rounded-full blur-3xl animate-pulse"
          ></div>
          <div
            class="absolute bottom-10 right-10 w-24 h-24 bg-[#ff6b77] rounded-full blur-2xl float-slow"
          ></div>
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl morph-blob"
          ></div>
        </div>

        <div
          class="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10 lg:gap-12 relative z-10"
        >
          <!-- Left Text Section -->
          <div
            data-aos="fade-up-right"
            data-aos-anchor-placement="top-center"
            class="flex-1 text-center md:text-left"
          >
            <h1
              class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#e6eefc] leading-tight"
            >
              Hi! 👋 I'm Paul
              <span class="block mt-2 text-[#ff6b6f] text-glow"
                >I design & build delightful interfaces</span
              >
            </h1>

            <p
              class="mt-4 text-gray-300 text-base sm:text-lg max-w-prose mx-auto md:mx-0"
            >
              I'm a Graphic Designer and Front-End Developer focused on building
              accessible, responsive user experiences with Vue.js and Nuxt.js. I
              combine visual craft with practical engineering to ship polished
              products.
            </p>

            <div
              class="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 justify-center md:justify-start"
            >
              <a href="/images/PAUL.pdf" download="Paul_Nyamawi_CV.pdf">
                <Button
                  class="bg-[#ff4b57] hover:bg-[#ff6b77] transition duration-300 flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-2 rounded-full text-white font-medium w-full sm:w-auto justify-center min-h-[44px] hover-lift ripple"
                >
                  <Icon name="line-md:download-loop" size="20" />
                  Download CV
                </Button>
              </a>

              <a
                href="#projects"
                class="mt-3 sm:mt-0 inline-flex items-center justify-center px-4 py-3 text-base sm:text-sm text-gray-300 hover:text-white border border-transparent hover:border-[#ff4b57] rounded-lg transition-all duration-300 min-h-[44px] w-full sm:w-auto magnetic"
              >
                See Projects
                <span class="ml-2 text-[#ff4b57]">→</span>
              </a>
            </div>
          </div>

          <!-- Right Profile Image Section -->
          <div
            data-aos="fade-left"
            class="flex-none flex flex-col items-center md:items-end"
          >
            <!-- Profile Image -->
            <div
              class="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-[#ff4b57] shadow-2xl hover:scale-105 transition duration-500 profile-float hover-glow"
            >
              <!-- Enhanced glow effect -->
              <div
                class="absolute inset-0 rounded-full blur-2xl opacity-30 bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 animate-pulse"
              ></div>
              <div
                class="absolute inset-0 rounded-full blur-xl opacity-20 bg-gradient-to-r from-[#ff4b57] to-[#ff6b77] animate-gradient-x"
              ></div>

              <img
                src="/images/profile.jpg"
                alt="Paul profile"
                class="relative w-full h-full object-cover"
              />
            </div>

            <!-- Social Icons -->
            <div
              class="mt-6 flex items-center justify-center md:justify-end gap-4"
            >
              <!-- GitHub -->
              <a
                aria-label="GitHub"
                href="https://github.com/Paulhakeem"
                target="_blank"
                rel="noopener noreferrer"
                class="social-btn hover-lift"
              >
                <Icon name="ant-design:github-filled" class="size-7" />
              </a>

              <!-- LinkedIn -->
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/paul-nyamawi-9244b924b/"
                target="_blank"
                rel="noopener noreferrer"
                class="social-btn hover-lift"
              >
                <Icon name="ant-design:linkedin-filled" class="size-7" />
              </a>

              <!-- Twitter / X -->
              <a
                aria-label="Twitter"
                href="https://x.com/Hakeemi20"
                target="_blank"
                rel="noopener noreferrer"
                class="social-btn hover-lift"
              >
                <Icon name="prime:twitter" class="size-7" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <main class="relative z-10">
        <div class="m-auto max-w-3xl px-4">
          <Skills />
        </div>

        <div>
          <ProjectProjects />
        </div>
        <div>
          <Contacts />
        </div>
      </main>
    </header>
  </div>
</template>

<script setup>
import { Button } from "@/components/ui/button";
</script>
