<template>
  <nav
    class="w-full px-6 py-4 bg-gradient-to-r from-[#192030] to-[#1a2a3a] border-b border-gray-700/30 shadow-lg"
  >
    <div class="flex items-center justify-between">
      <!-- Logo Section -->
      <NuxtLink
        to="/"
        class="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
      >
        <Icon name="mynaui:bubbles-solid" class="text-[#ff4b57] text-2xl" />
        <span class="text-lg font-bold text-gray-100">Paul</span>
      </NuxtLink>

      <!-- Navigation Links -->
      <div class="flex items-center gap-1">
        <NuxtLink
          v-for="item in menu"
          :key="item.name"
          :to="item.path"
          class="relative flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-[#ff4b57] transition-all duration-200 group"
        >
          <Icon
            :name="item.icon"
            size="18"
            class="group-hover:text-[#ff4b57]"
          />
          <span class="text-sm font-medium">{{ item.name }}</span>

          <!-- Underline Animation -->
          <span
            class="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#ff4b57] to-[#ff6b70] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
          />
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
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
</script>
