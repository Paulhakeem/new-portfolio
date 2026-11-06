<template>
  <main class="site-shell">
    <Sidebar />
    <slot />
    <footer class="site-footer">
      <NuxtLink to="/" class="site-footer__brand">Paul Nyamawi</NuxtLink>
      <span>Independent designer & developer · Mombasa, Kenya</span>
      <a href="mailto:paulnyamawi18@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a>
    </footer>
  </main>
</template>
