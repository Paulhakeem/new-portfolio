<template>
  <header class="site-header">
    <div class="site-header__inner">
      <NuxtLink to="/" class="site-brand" aria-label="Paul Nyamawi home">
        <span class="site-brand__mark">P.</span>
        <span class="site-brand__name">Paul Nyamawi</span>
      </NuxtLink>

      <nav class="site-nav__links" aria-label="Main navigation">
        <NuxtLink
          v-for="item in menu"
          :key="item.path"
          :to="item.path"
          active-class="is-active"
          :exact-active-class="item.path === '/' ? 'is-active' : ''"
        >
          {{ item.name }}
        </NuxtLink>
        <a class="site-nav__contact" href="mailto:paulnyamawi18@gmail.com">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <button
        class="site-nav__menu-button"
        type="button"
        :aria-expanded="open"
        aria-controls="mobile-navigation"
        :aria-label="open ? 'Close navigation menu' : 'Open navigation menu'"
        @click="open = !open"
      >
        <Icon :name="open ? 'lucide:x' : 'lucide:menu'" size="21" />
      </button>
    </div>

    <Transition name="nav-panel">
      <nav
        v-if="open"
        id="mobile-navigation"
        class="site-nav__mobile"
        aria-label="Mobile navigation"
      >
        <NuxtLink
          v-for="item in menu"
          :key="item.path"
          :to="item.path"
          active-class="is-active"
          :exact-active-class="item.path === '/' ? 'is-active' : ''"
          @click="open = false"
        >
          {{ item.name }}
          <span aria-hidden="true">↗</span>
        </NuxtLink>
        <a href="mailto:paulnyamawi18@gmail.com" @click="open = false">
          Contact <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";

const route = useRoute();
const open = ref(false);
const menu = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Graphics", path: "/graphics" },
];

watch(
  () => route.fullPath,
  () => {
    open.value = false;
  },
);
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid rgba(32, 35, 31, 0.08);
  background: rgba(246, 243, 237, 0.9);
  backdrop-filter: blur(18px);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1200px, calc(100% - 3rem));
  min-height: 76px;
  margin: 0 auto;
}

.site-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #20231f;
  text-decoration: none;
}

.site-brand__mark {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 50%;
  background: #bf4a38;
  color: #fffdfa;
  font-family: Georgia, serif;
  font-size: 1.1rem;
  font-weight: 700;
}

.site-brand__name {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.site-nav__links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.site-nav__links a,
.site-nav__mobile a {
  color: #716f67;
  font-size: 0.84rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 160ms ease;
}

.site-nav__links a:hover,
.site-nav__links a.is-active,
.site-nav__mobile a:hover,
.site-nav__mobile a.is-active {
  color: #bf4a38;
}

.site-nav__links .site-nav__contact {
  padding: 0.75rem 1rem;
  border: 1px solid #bf4a38;
  border-radius: 999px;
  color: #bf4a38;
}

.site-nav__contact span {
  padding-left: 0.25rem;
}

.site-nav__menu-button {
  display: none;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid #ded8ce;
  border-radius: 50%;
  background: transparent;
  color: #20231f;
}

.site-nav__mobile {
  display: none;
}

.nav-panel-enter-active,
.nav-panel-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.nav-panel-enter-from,
.nav-panel-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}

@media (max-width: 700px) {
  .site-header__inner {
    width: calc(100% - 2rem);
    min-height: 66px;
  }

  .site-nav__links {
    display: none;
  }

  .site-nav__menu-button {
    display: grid;
  }

  .site-nav__mobile {
    display: grid;
    gap: 0;
    padding: 0.25rem 1rem 1rem;
    background: #f6f3ed;
  }

  .site-nav__mobile a {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0.25rem;
    border-top: 1px solid #ded8ce;
  }
}
</style>
