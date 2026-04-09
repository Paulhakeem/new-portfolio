<template>
  <div
    class="min-h-screen bg-gradient-to-br from-[#0f1724] via-[#23253a] to-[#121426] flex items-center justify-center"
  >
    <div class="text-center">
      <h1 class="text-6xl font-bold text-[#ff4b57] mb-4">404</h1>
      <h2 class="text-2xl font-semibold text-gray-300 mb-8">Page Not Found</h2>
      <p class="text-gray-400 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <NuxtLink
        to="/"
        class="inline-block px-6 py-4 bg-[#ff4b57] text-white rounded-lg hover:bg-[#e63946] transition-colors min-h-[44px] text-base"
      >
        Go Home
      </NuxtLink>
    </div>
  </div>
</template>
