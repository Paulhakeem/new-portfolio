<template>
  <div class="bg-[#192030] top-0 z-50 sticky">
    <div
      class="flex md:hidden lg:hidden z-50 items-center justify-between p-4 w-full h-full"
    >
      <div class="flex items-center">
        <Icon
          name="mynaui:bubbles-solid"
          class="inline-block mr-2 text-[#ff4b57]"
        />
        <p class="font-bold text-gray-300">Paul</p>
      </div>
      <Icon
        class="z-50 cursor-pointer left-2 top-2 text-white"
        size="30"
        name="material-symbols:menu"
        @click="openCloseSidebar"
      />
      <Transition
        enter-active-class="transition-transform duration-500"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-500"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <div
          v-if="open"
          class="fixed top-0 left-0 w-full h-screen z-[999] bg-[#192030]/95 backdrop-blur-sm"
        >
          <div class="flex justify-end p-4">
            <Icon
              class="cursor-pointer text-gray-300"
              size="30"
              name="material-symbols:close"
              @click="openCloseSidebar"
            />
          </div>
          <div
            class="flex flex-col items-center justify-center h-full space-y-8"
          >
            <RouterLink
              v-for="item in menu"
              :key="item.name"
              :to="item.path"
              class="text-2xl text-gray-300 hover:text-[#ff4b57] transition-colors"
              @click="openCloseSidebar"
            >
              {{ item.name }}
            </RouterLink>
          </div>
        </div>
      </Transition>
    </div>
    <div class="hidden md:flex lg:flex w-[300px] flex-col justify-between">
      <SidebarMenu />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);
const menu = [
  { name: "Home", path: "/" },
  { name: "Project", path: "/projects" },
  { name: "Graphics", path: "/graphics" },
];

const openCloseSidebar = () => {
  open.value = !open.value;
};
</script>
