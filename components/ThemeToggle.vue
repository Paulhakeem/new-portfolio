<template>
  <button
    @click="toggleTheme"
    class="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
    :class="
      isDark
        ? 'bg-[#1e1e2e] border border-white/10 hover:bg-[#2a2a3e]'
        : 'bg-white border border-gray-200 hover:bg-gray-50 shadow-md'
    "
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <Transition name="spin" mode="out-in">
      <Icon
        v-if="isDark"
        key="sun"
        name="material-symbols:light-mode"
        class="text-xl text-yellow-400"
      />
      <Icon
        v-else
        key="moon"
        name="material-symbols:dark-mode"
        class="text-xl text-gray-600"
      />
    </Transition>
  </button>
</template>

<script setup>
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

const toggleTheme = () => {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<style scoped>
.spin-enter-active,
.spin-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}
.spin-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}
.spin-enter-to {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}
.spin-leave-from {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}
.spin-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}
</style>
