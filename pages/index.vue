<template>
  <header class="lg:grid pt-12 mx-4">
    <div class="flex flex-wrap justify-center items-center m-auto sm:gap-3 md:gap-5 lg:gap-10">
      <div data-aos="fade-up-right" data-aos-anchor-placement="top-center">
        <h1 class="text-3xl font-bold text-[#dcdee8]">
          Hi!👋, I'm Paul,<br />
          <span class="text-[#ff4b57]">I learn, I Develop..</span>
        </h1>
        <h6 class="mt-2 text-gray-300 text-lg font-semibold">
          A Graphic Designer & Front-End Developer
        </h6>
        <p class="pt-4 pb-4 text-gray-400 text-base font-normal max-w-[600px]">
          I am a Graphic Designer and Front-End Developer with a passion for
          creating visually appealing and user-friendly digital experiences. My
          journey in design and development has equipped me with the skills to
          bring ideas to life through innovative solutions. I specialize in
          Vue.js and Nuxt.js, and I'm always eager to learn new technologies to
          enhance my skills.
        </p>

        <span class="italic text-[#ff4b57] text-sm"
          >- With Small Steps, I Will Go Very Far_"</span
        >

        <div class="mt-6">
          <a href="/PAUL.pdf" download="Paul_Nyamawi_CV.pdf">
            <Button class="bg-[#ff4b57] cursor-pointer">
              <Icon name="line-md:download-loop" size="20" />
              Check-out My CV</Button
            >
          </a>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-anchor-placement="top-center"
        class="relative w-80 h-80 mx-auto"
      >
        <img
          src="/public/images/profile.jpg"
          alt="Hero Image"
          class="size-50 rounded-full object-cover ring-4 ring-[#ff4b57] drop-shadow-[0_0_20px_#ff4b57] flex mx-auto item-center"
          sizes="sm:100vw md:50vw lg:400px"
        />

        <!-- Top Icon -->
        <a
          href="https://github.com/Paulhakeem?tab=overview&from=2025-07-01&to=2025-07-14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1.5 size-9 place-items-center flex items-center rounded-full"
          >
            <Icon
              name="ant-design:github-filled"
              class="text-[#ff4b57] size-8"
            />
          </div>
        </a>
        <!-- Right Icon -->
        <a
          href="https://www.linkedin.com/in/paul-nyamawi-9244b924b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            class="absolute right-20 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-1.5 size-9 place-items-center flex items-center rounded-full"
          >
            <Icon
              name="ant-design:linkedin-filled"
              class="text-[#ff4b57] size-8"
            />
          </div>
        </a>
        <!-- Bottom Icon -->
        <a
          href="https://www.instagram.com/coderpaul18/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            class="absolute bottom-30 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-1.5 size-9 place-items-center flex items-center rounded-full"
          >
            <Icon
              name="ant-design:instagram-filled"
              class="text-[#ff4b57] size-8"
            />
          </div>
        </a>
        <!-- Left Icon -->
        <a
          href="https://x.com/Hakeemi20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            class="absolute left-20 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-1.5 size-9 place-items-center flex items-center rounded-full"
          >
            <Icon name="prime:twitter" class="text-[#ff4b57] size-8" />
          </div>
        </a>
      </div>
    </div>
  </header>
  <main>
    <div class="m-auto max-w-3xl px-4">
      <Skills />
    </div>
  </main>
</template>

<script setup>
import { Button } from "@/components/ui/button";
</script>
