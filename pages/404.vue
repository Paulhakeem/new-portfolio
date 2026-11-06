<template>
  <div
    class="min-h-[70vh] bg-[#f6f3ed] flex items-center justify-center px-6 py-24"
  >
    <div class="text-center">
      <p class="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#bf4a38]">A little off course</p>
      <h1 class="mb-4 font-serif text-7xl font-normal tracking-tight text-[#20231f]">404</h1>
      <h2 class="mb-3 text-xl font-semibold text-[#20231f]">Page not found</h2>
      <p class="mb-8 text-[#716f67]">
        The page you're looking for doesn't exist.
      </p>
      <NuxtLink
        to="/"
        class="inline-flex min-h-[48px] items-center rounded-full bg-[#bf4a38] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a83b2b]"
      >
        Go Home
      </NuxtLink>
    </div>
  </div>
</template>
