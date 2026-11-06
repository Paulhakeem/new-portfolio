<template>
  <div class="home-page">
    <section class="home-hero">
      <div class="home-hero__copy">
        <p class="home-kicker"><span></span> Independent designer & developer</p>
        <h1>
          Thoughtful design.<br />
          <em>Useful</em> technology.
        </h1>
        <p class="home-hero__intro">
          I’m Paul, a graphic designer and web developer in Mombasa. I bring
          good ideas to life through considered visuals and accessible digital
          experiences.
        </p>
        <div class="home-hero__actions">
          <a class="home-button home-button--primary" href="#projects">
            Explore my work <span aria-hidden="true">↗</span>
          </a>
          <a class="home-button home-button--quiet" href="mailto:paulnyamawi18@gmail.com">
            Start a conversation
          </a>
        </div>
        <div class="home-hero__meta">
          <div class="home-hero__availability">
            <span class="home-availability-dot"></span>
            Available for select projects
          </div>
          <div class="home-hero__socials" aria-label="Social profiles">
            <a href="https://github.com/Paulhakeem" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/paul-nyamawi-9244b924b/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="https://x.com/Hakeemi20" target="_blank" rel="noopener noreferrer">X ↗</a>
          </div>
        </div>
      </div>

      <div class="home-hero__visual">
        <div class="home-portrait-frame">
          <img
            src="/images/profile.jpg"
            alt="Paul Nyamawi, graphic designer and web developer"
            width="800"
            height="800"
            fetchpriority="high"
          />
        </div>
        <div class="home-portrait-caption">
          <span class="home-caption-index">01 / 03</span>
          <span>Designing with purpose, building with care.</span>
        </div>
        <span class="home-hero__stamp" aria-hidden="true">Made in<br />Mombasa</span>
      </div>
    </section>

    <section class="home-intro-strip" aria-label="About my work">
      <span>Visual identity</span><i></i><span>Digital products</span><i></i><span>Front-end development</span><i></i><span>Based in Kenya</span>
    </section>

    <section class="home-section home-skills" aria-labelledby="expertise-heading">
      <Skills />
    </section>

    <section id="projects" class="home-section home-projects">
      <ProjectProjects />
    </section>

    <section id="contact" class="home-section home-contact">
      <Contacts />
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl;

useSeoMeta({
  title: "Paul Nyamawi | Graphic Designer & Web Developer",
  description:
    "I design and build responsive, accessible digital experiences with Vue.js, Nuxt, and modern UI design for brands and startups.",
  ogTitle: "Paul Nyamawi | Graphic Designer & Web Developer",
  ogDescription:
    "I design and build responsive, accessible digital experiences with Vue.js, Nuxt, and modern UI design for brands and startups.",
  ogUrl: siteUrl,
  ogImage: `${siteUrl}/images/profile.jpg`,
  twitterCard: "summary_large_image",
  twitterTitle: "Paul Nyamawi | Graphic Designer & Web Developer",
  twitterDescription:
    "I design and build responsive, accessible digital experiences with Vue.js, Nuxt, and modern UI design for brands and startups.",
  twitterImage: `${siteUrl}/images/profile.jpg`,
  robots: "index, follow",
  author: "Paul Nyamawi",
});

useHead({
  link: [{ rel: "canonical", href: siteUrl }],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Paul Nyamawi",
        jobTitle: "Graphic Designer & Web Developer",
        url: siteUrl,
        image: `${siteUrl}/images/profile.jpg`,
        sameAs: [
          "https://github.com/Paulhakeem",
          "https://www.linkedin.com/in/paul-nyamawi-9244b924b/",
          "https://x.com/Hakeemi20",
        ],
        description:
          "Graphic Designer and web developer creating accessible, responsive user experiences with Vue.js and Nuxt.",
      }),
    },
  ],
});

definePageMeta({
  title: "Home | Paul Nyamawi",
});
</script>

<style scoped>
.home-page {
  color: #20231f;
}

.home-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.78fr);
  gap: clamp(3rem, 8vw, 8rem);
  align-items: center;
  width: min(1200px, calc(100% - 3rem));
  min-height: min(760px, calc(100svh - 76px));
  margin: 0 auto;
  padding: 5rem 0 6rem;
}

.home-kicker,
.home-caption-index {
  color: #bf4a38;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.home-kicker {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.home-kicker span,
.home-availability-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #bf4a38;
}

.home-hero h1 {
  margin: 1.5rem 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(3.2rem, 6.8vw, 6.2rem);
  font-weight: 400;
  letter-spacing: -0.07em;
  line-height: 0.99;
}

.home-hero h1 em {
  color: #bf4a38;
  font-weight: 400;
}

.home-hero__intro {
  max-width: 35rem;
  color: #716f67;
  font-size: clamp(1rem, 1.35vw, 1.15rem);
  line-height: 1.8;
}

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.home-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  min-height: 48px;
  font-size: 0.86rem;
  font-weight: 700;
  text-decoration: none;
  transition: transform 160ms ease, background 160ms ease;
}

.home-button:hover {
  transform: translateY(-2px);
}

.home-button--primary {
  padding: 0 1.3rem;
  border-radius: 999px;
  background: #bf4a38;
  color: #fffdfa;
}

.home-button--primary:hover {
  background: #a83b2b;
}

.home-button--quiet {
  color: #20231f;
}

.home-button--quiet:hover {
  color: #bf4a38;
}

.home-hero__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  margin-top: 4rem;
  padding-top: 1.25rem;
  border-top: 1px solid #ded8ce;
  color: #716f67;
  font-size: 0.74rem;
}

.home-hero__availability,
.home-hero__socials {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.home-availability-dot {
  background: #69815c;
  box-shadow: 0 0 0 4px rgba(105, 129, 92, 0.14);
}

.home-hero__socials {
  gap: 1rem;
}

.home-hero__socials a {
  color: inherit;
  text-decoration: none;
}

.home-hero__socials a:hover {
  color: #bf4a38;
}

.home-hero__visual {
  position: relative;
  max-width: 460px;
  justify-self: end;
}

.home-portrait-frame {
  position: relative;
  overflow: hidden;
  aspect-ratio: 0.83;
  background: #e8dfd3;
  box-shadow: 20px 20px 0 #e8dfd3;
}

.home-portrait-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: saturate(0.82);
}

.home-portrait-caption {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
  color: #716f67;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 0.82rem;
  font-style: italic;
}

.home-hero__stamp {
  position: absolute;
  right: -2.6rem;
  top: 3rem;
  display: grid;
  width: 92px;
  height: 92px;
  place-content: center;
  border: 1px solid #bf4a38;
  border-radius: 50%;
  background: #f6f3ed;
  color: #bf4a38;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 0.85rem;
  line-height: 1.15;
  text-align: center;
  transform: rotate(9deg);
}

.home-intro-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1.3rem 1rem;
  border-top: 1px solid #ded8ce;
  border-bottom: 1px solid #ded8ce;
  background: #f0ece4;
  color: #716f67;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.home-intro-strip i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #bf4a38;
}

.home-section {
  padding: clamp(4rem, 8vw, 7rem) max(1.5rem, calc((100vw - 1200px) / 2));
}

.home-skills {
  background: #fbf9f5;
}

.home-contact {
  background: #eee8df;
}

@media (max-width: 760px) {
  .home-hero {
    grid-template-columns: 1fr;
    gap: 3rem;
    width: calc(100% - 2rem);
    min-height: auto;
    padding: 4rem 0 4.5rem;
  }

  .home-hero h1 {
    font-size: clamp(3.25rem, 12vw, 5rem);
  }

  .home-hero__visual {
    width: min(100% - 1.5rem, 420px);
    justify-self: center;
    margin-right: 1rem;
  }

  .home-hero__meta {
    margin-top: 2.5rem;
  }

  .home-intro-strip {
    gap: 0.8rem;
    font-size: 0.6rem;
    letter-spacing: 0.08em;
  }

  .home-section {
    padding-right: 1rem;
    padding-left: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-button {
    transition: none;
  }
}
</style>
