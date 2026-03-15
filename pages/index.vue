<template>
  <div>
    <header class="pt-12 mx-4">
      <div
        class="mx-auto max-w-6xl px-4 py-14 bg-gradient-to-br from-[#0f1724] via-[#23253a] to-[#121426] rounded-3xl shadow-lg"
      >
        <div
          class="flex flex-col-reverse md:flex-row items-center justify-between gap-10"
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
              <span class="block mt-2 text-[#ff6b6f]"
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
                  class="bg-[#ff4b57] hover:bg-[#ff6b77] transition duration-300 flex items-center gap-2 px-5 py-2 rounded-full text-white font-medium"
                >
                  <Icon name="line-md:download-loop" size="20" />
                  Download CV
                </Button>
              </a>

              <a
                href="#projects"
                class="mt-3 sm:mt-0 inline-flex items-center text-sm text-gray-300 hover:text-white"
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
              class="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-[#ff4b57] shadow-2xl hover:scale-105 transition duration-500"
            >
              <!-- glow effect -->
              <div
                class="absolute inset-0 rounded-full blur-2xl opacity-30 bg-gradient-to-r from-pink-500 to-red-500"
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
                class="social-btn"
              >
                <Icon name="ant-design:github-filled" class="size-7" />
              </a>

              <!-- LinkedIn -->
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/paul-nyamawi-9244b924b/"
                target="_blank"
                rel="noopener noreferrer"
                class="social-btn"
              >
                <Icon name="ant-design:linkedin-filled" class="size-7" />
              </a>

              <!-- Twitter / X -->
              <a
                aria-label="Twitter"
                href="https://x.com/Hakeemi20"
                target="_blank"
                rel="noopener noreferrer"
                class="social-btn"
              >
                <Icon name="prime:twitter" class="size-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <main>
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
