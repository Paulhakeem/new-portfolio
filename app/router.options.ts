import type { RouterConfig } from "nuxt/schema";

export default {
  scrollBehavior(to, _from, savedPosition) {
    const behavior =
      import.meta.client &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth";

    if (savedPosition) {
      return { ...savedPosition, behavior };
    }

    if (to.hash) {
      return { el: to.hash, behavior };
    }

    return { top: 0, behavior };
  },
} satisfies RouterConfig;
