<template>
  <button
    @click="toggleTheme"
    class="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-[#ff4b57] to-[#ff6b77] hover:from-[#ff6b77] hover:to-[#ff8b97] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
    :aria-label="
      colorMode.value === 'dark'
        ? 'Switch to light mode'
        : 'Switch to dark mode'
    "
  >
    <Icon
      :name="
        colorMode.value === 'dark'
          ? 'line-md:sun-rising-twotone-loop'
          : 'line-md:moon-twotone-loop'
      "
      class="text-white text-xl transition-transform duration-300 group-hover:rotate-12"
    />
  </button>
</template>

<script setup>
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>
