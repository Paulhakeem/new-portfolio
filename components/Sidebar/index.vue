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
        <div v-if="open" class="fixed top-0 left-0 w-full h-screen z-[999]">
          <Icon
            class="absolute top-0 right-4 cursor-pointer text-gray-300 justify-start"
            size="30"
            name="material-symbols:close"
            @click="openCloseSidebar"
          />
          <SidebarMenu />
        </div>
      </Transition>
    </div>
    <div class="hidden md:flex lg:flex w-[300x] flex-col justify-between">
      <SidebarMenu />
    </div>
  </div>
</template>

<script setup>
const open = ref(false);

const openCloseSidebar = () => {
  open.value = !open.value;
};
</script>
