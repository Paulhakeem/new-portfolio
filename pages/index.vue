<template>

  <header class="grid place-items-center pt-12">
    <div
      class="flex-wrap lg:flex space-y-14 mx-4 gap-60 justify-between items-center"
    >
      <div data-aos="fade-up-right" data-aos-anchor-placement="top-center">
        <h1 class="text-3xl font-bold text-[#dcdee8]">
          Hi!, I'm Paul👋,<br />
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
      <div data-aos="fade-left" data-aos-anchor-placement="top-center">
        <img
          src="/public/images/profile.jpg"
          alt="Hero Image"
          class="size-50 rounded-full object-cover ring-4 ring-[#ff4b57] drop-shadow-[0_0_20px_#ff4b57] flex mx-auto item-center"
          sizes="sm:100vw md:50vw lg:400px"
        />
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
