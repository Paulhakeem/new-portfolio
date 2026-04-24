<template>
  <div class="sticky top-0 z-50">
    <!-- Mobile Header -->
    <div
      class="flex md:hidden lg:hidden items-center justify-between px-4 py-3 bg-gradient-to-r from-[#192030] to-[#1a2a3a] border-b border-gray-700/30 shadow-lg"
    >
      <div class="flex items-center gap-2">
        <Icon name="mynaui:bubbles-solid" class="text-[#ff4b57] text-lg" />
        <p class="font-bold text-gray-200 text-sm">Paul</p>
      </div>
      <button
        @click="openCloseSidebar"
        class="p-2 text-gray-300 hover:text-[#ff4b57] transition-colors duration-300"
        aria-label="Toggle menu"
      >
        <Icon
          :name="open ? 'material-symbols:close' : 'material-symbols:menu'"
          size="24"
        />
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        @click="openCloseSidebar"
      />
    </Transition>

    <!-- Mobile Menu Panel -->
    <Transition
      enter-active-class="transition-transform duration-300"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-300"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <div
        v-if="open"
        class="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-[#192030] to-[#0f1620] z-50 shadow-2xl flex flex-col overflow-y-auto"
      >
        <div
          class="flex items-center justify-between p-4 border-b border-gray-700/30"
        >
          <div class="flex items-center gap-2">
            <Icon name="mynaui:bubbles-solid" class="text-[#ff4b57] text-lg" />
            <span class="font-bold text-gray-200">Paul</span>
          </div>
          <button
            @click="openCloseSidebar"
            class="p-1 text-gray-400 hover:text-gray-200 transition-colors"
          >
            <Icon name="material-symbols:close" size="20" />
          </button>
        </div>

        <nav class="flex-1 px-4 py-6 space-y-2">
          <NuxtLink
            v-for="item in menu"
            :key="item.name"
            :to="item.path"
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-[#ff4b57] hover:bg-gray-800/50 transition-all duration-200 group"
            @click="openCloseSidebar"
          >
            <Icon
              :name="item.icon"
              size="20"
              class="group-hover:text-[#ff4b57]"
            />
            <span class="text-sm font-medium">{{ item.name }}</span>
          </NuxtLink>
        </nav>
      </div>
    </Transition>

    <!-- Desktop Navigation -->
    <div
      class="hidden md:flex lg:flex w-full bg-gradient-to-r from-[#192030] to-[#1a2a3a] border-b border-gray-700/30"
    >
      <SidebarMenu />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);
const menu = [
  { name: "Home", path: "/", icon: "material-symbols:home-outline" },
  {
    name: "Projects",
    path: "/projects",
    icon: "material-symbols:folder-outline",
  },
  {
    name: "Graphics",
    path: "/graphics",
    icon: "material-symbols:image-outline",
  },
];

const openCloseSidebar = () => {
  open.value = !open.value;
};
</script>
