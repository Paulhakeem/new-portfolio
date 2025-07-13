<template>
  <section class="pt-10">
    <div class="p-4">
      <div class="ml-[4em]">
        <h1 class="text-2xl font-semibold text-gray-300">
          <span class="text-[#ff4b57]">My-</span> Projects
        </h1>
        <p class="mt-2 text-gray-400">
          Here you can find a list of my projects.
        </p>
      </div>
      <!-- Add your project content here -->

      <div
        class="flex flex-wrap gap-10 justify-center items-center m-auto pt-6"
      >
        <div class="bg-[#2b2e41] w-72 h-auto p-2 rounded-md">
          <div class="flex justify-center items-center mt-2">
            <img src="/public/images/1.png" alt="AI Icon" class="" />
          </div>
          <div class="pt-4">
            <p class="text-md text-[#ff4b57] font-semibold">
              AI-car-Landing Page
            </p>
          </div>
          <Button class="mt-4 bg-gray-300 text-gray-700 cursor-pointer my-2"
            >Visit
            <Icon class="ml-2" name="ri:external-link-line" size="16" />
          </Button>
        </div>
        <div class="bg-[#2b2e41] w-72 h-auto p-2 rounded-md">
          <div class="flex justify-center items-center mt-2">
            <img src="/public/images/2.png" alt="AI Icon" class="" />
          </div>
          <div class="pt-4">
            <p class="text-md text-[#ff4b57] font-semibold">
              Car Rental Landing Page
            </p>
          </div>
          <Button class="mt-4 bg-gray-300 text-gray-700 cursor-pointer my-2"
            >Visit
            <Icon class="ml-2" name="ri:external-link-line" size="16" />
          </Button>
        </div>
        <div class="bg-[#2b2e41] w-72 h-auto p-2 rounded-md">
          <div class="flex justify-center items-center mt-2">
            <img src="/public/images/3.png" alt="AI Icon" class="" />
          </div>
          <div class="pt-4">
            <p class="text-md text-[#ff4b57] font-semibold">Online Store</p>
          </div>
          <Button class="mt-4 bg-gray-300 text-gray-700 cursor-pointer my-2"
            >Visit
            <Icon class="ml-2" name="ri:external-link-line" size="16" />
          </Button>
        </div>
        <div class="bg-[#2b2e41] w-72 h-auto p-2 rounded-md">
          <div class="flex justify-center items-center mt-2">
            <img src="/public/images/5.png" alt="AI Icon" class="" />
          </div>
          <div class="pt-4">
            <p class="text-md text-[#ff4b57] font-semibold">Darshboard</p>
          </div>
          <a href="https://dashboard-sooty-zeta-83.vercel.app/" target="_blank" rel="noopener noreferrer">
          <Button class="mt-4 bg-gray-300 text-gray-700 cursor-pointer my-2"
            >Visit
            <Icon class="ml-2" name="ri:external-link-line" size="16" />
          </Button>
            </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
