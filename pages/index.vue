<template>
  <div>
    <header class="lg:grid pt-12 mx-4">
      <div
        class="flex flex-col-reverse md:flex-row items-center justify-center mx-auto px-4 py-10 sm:gap-8 md:gap-12 lg:gap-20 max-w-6xl"
      >
        <!-- Left Text Section -->
        <div
          data-aos="fade-up-right"
          data-aos-anchor-placement="top-center"
          class="text-center md:text-left"
        >
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#dcdee8]">
            Hi!👋, I'm Paul,<br />
            <span class="text-[#ff4b57]">I learn, I Develop..</span>
          </h1>

          <h6 class="mt-3 text-gray-300 text-lg sm:text-xl font-semibold">
            A Graphic Designer & Front-End Developer
          </h6>

          <p
            class="pt-4 pb-6 text-gray-400 text-base sm:text-lg font-normal max-w-[600px] mx-auto md:mx-0"
          >
            I am a Graphic Designer and Front-End Developer with a passion for
            creating visually appealing and user-friendly digital experiences.
            My journey in design and development has equipped me with the skills
            to bring ideas to life through innovative solutions. I specialize in
            Vue.js and Nuxt.js, and I'm always eager to learn new technologies
            to enhance my skills.
          </p>

          <span class="italic text-[#ff4b57] text-sm block"
            >- With Small Steps, I Will Go Very Far_</span
          >

          <div class="mt-6 flex justify-center md:justify-start">
            <a href="/images/PAUL.pdf" download="Paul_Nyamawi_CV.pdf">
              <Button
                class="bg-[#ff4b57] hover:bg-[#ff6b77] transition duration-300 flex items-center gap-2 px-5 py-2 rounded-full text-white font-medium"
              >
                <Icon name="line-md:download-loop" size="20" />
                Check-out My CV
              </Button>
            </a>
          </div>
        </div>

        <!-- Right Profile Image Section -->
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          class="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 mb-8 md:mb-0"
        >
          <img
            src="/public/images/profile.jpg"
            alt="Hero Image"
            class="rounded-full object-cover ring-4 ring-[#ff4b57] drop-shadow-[0_0_20px_#ff4b57] w-full h-full"
          />

          <!-- GitHub (Top) -->
          <a
            href="https://github.com/Paulhakeem"
            target="_blank"
            rel="noopener noreferrer"
            class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div
              class="bg-white p-2 size-10 flex items-center justify-center rounded-full shadow-md hover:scale-110 transition"
            >
              <Icon
                name="ant-design:github-filled"
                class="text-[#ff4b57] size-7"
              />
            </div>
          </a>

          <!-- LinkedIn (Right) -->
          <a
            href="https://www.linkedin.com/in/paul-nyamawi-9244b924b/"
            target="_blank"
            rel="noopener noreferrer"
            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3"
          >
            <div
              class="bg-white p-2 size-10 flex items-center justify-center rounded-full shadow-md hover:scale-110 transition"
            >
              <Icon
                name="ant-design:linkedin-filled"
                class="text-[#ff4b57] size-7"
              />
            </div>
          </a>

          <!-- Instagram (Bottom) -->
          <a
            href="https://www.instagram.com/coderpaul18/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
          >
            <div
              class="bg-white p-2 size-10 flex items-center justify-center rounded-full shadow-md hover:scale-110 transition"
            >
              <Icon
                name="ant-design:instagram-filled"
                class="text-[#ff4b57] size-7"
              />
            </div>
          </a>

          <!-- Twitter (Left) -->
          <a
            href="https://x.com/Hakeemi20"
            target="_blank"
            rel="noopener noreferrer"
            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3"
          >
            <div
              class="bg-white p-2 size-10 flex items-center justify-center rounded-full shadow-md hover:scale-110 transition"
            >
              <Icon name="prime:twitter" class="text-[#ff4b57] size-7" />
            </div>
          </a>
        </div>
      </div>
    </header>
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
  </div>
</template>

<script setup>
import { Button } from "@/components/ui/button";
</script>
