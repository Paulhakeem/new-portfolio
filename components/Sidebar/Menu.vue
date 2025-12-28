<template>
  <!-- component -->
  <nav
    class="font-sans flex text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-[#212437] text-gray-300 sm:items-baseline w-full"
  >
    <div class="mb-2 sm:mb-0 hidden lg:flex items-center">
      <Icon name="mynaui:bubbles-solid" class="inline-block mr-2 text-[#ff4b57]" />
      <RouterLink
        to=""
        class="text-md no-underline text-grey-darkest hover:text-blue-dark"
        >Paul</RouterLink
      >
    </div>
    <div class="flex flex-col sm:flex-row sm:items-baseline gap-8">
      <RouterLink
        v-for="item in menu"
        :key="item.name"
        :to="item.path"
        class="text-md no-underline text-grey-darkest hover:text-[#ff4b57] ml-2"
        >{{ item.name }}</RouterLink
      >
    </div>
  </nav>
</template>

<script setup>
const menu = [
  { name: 'Home', path: '/' },
  { name: 'Project', path: '/projects' },
  { name: 'Graphics', path: '/graphics' },
];
</script>
