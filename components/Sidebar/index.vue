<template>
  <div class="bg-[#192030] top-0 z-50">
    <div
      class="flex lg:hidden z-50 items-center justify-between p-4 w-full h-full"
    >
     <div class="flex items-center">
      <Icon name="mynaui:bubbles-solid" class="inline-block mr-2 text-[#ff4b57]" />
      <p class="font-bold text-gray-300">Paul</p>
     </div>
      <Icon
        class="z-50 cursor-pointer left-2 top-2 text-white"
        size="30"
        name="material-symbols:menu"
        @click="openCloseSidebar"
      />
      <div
        v-if="open"
        class="fixed top-0 left-0 w-full h-screen z-[999]"
      >
        <Icon
          class="absolute top-4 right-4 cursor-pointer text-gray-300 justify-start"
          size="30"
          name="material-symbols:close"
          @click="openCloseSidebar"
        />
        <SidebarMenu />
      </div>
    </div>
    <div class="hidden lg:flex w-[300x] flex-col justify-between">
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
