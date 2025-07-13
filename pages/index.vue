<template>
  <header class="grid pt-12 mx-4">
    <div
      class="flex flex-wrap gap-10 justify-center items-center m-auto pt-6"
    >
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
          bring ideas to life through innovative solutions.
        </p>

        <span class="italic text-[#ff4b57] text-sm"
          >- With Small Steps, I Will Go Very Far_"</span
        >

        <div class="mt-6">
          <Button class="bg-[#ff4b57] cursor-pointer">Let's Talk</Button>
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
        <div
          class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1.5 size-9 place-items-center flex items-center rounded-full"
        >
          <Icon name="ant-design:github-filled" class="text-[#ff4b57] size-8" />
        </div>

        <!-- Right Icon -->
        <div
          class="absolute right-20 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-1.5 size-9 place-items-center flex items-center rounded-full"
        >
          <Icon
            name="ant-design:linkedin-filled"
            class="text-[#ff4b57] size-8"
          />
        </div>

        <!-- Bottom Icon -->
        <div
          class="absolute bottom-30 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-1.5 size-9 place-items-center flex items-center rounded-full"
        >
          <Icon
            name="ant-design:instagram-filled"
            class="text-[#ff4b57] size-8"
          />
        </div>
        <!-- Left Icon -->
        <div
          class="absolute left-20 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-1.5 size-9 place-items-center flex items-center rounded-full"
        >
          <Icon
            name="prime:twitter"
            class="text-[#ff4b57] size-8"
          />
        </div>
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
