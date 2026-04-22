<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#ff4b57]/10 to-pink-400/10 rounded-full blur-2xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-xl animate-pulse animation-delay-1000"
      ></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in">
        <div class="inline-block mb-4">
          <span
            class="px-4 py-2 text-sm font-semibold text-[#ff4b57] bg-[#ff4b57]/10 rounded-full border border-[#ff4b57]/20"
          >
            🚀 My Expertise
          </span>
        </div>

        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span
            class="bg-gradient-to-r from-[#ff4b57] via-pink-400 to-[#ff6b77] bg-clip-text text-transparent"
          >
            Tech Stack
          </span>
          <br />
          <span class="text-white">& Tools</span>
        </h2>

        <p
          class="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          A comprehensive collection of technologies, frameworks, and tools I
          leverage to bring ideas to life with precision and innovation.
        </p>
      </div>

      <!-- Skills Categories -->
      <div class="space-y-16">
        <!-- Design Tools -->
        <div class="animate-fade-in-up animation-delay-200">
          <h3 class="text-2xl font-bold text-white mb-8 text-center">
            🎨 Design & Creative Tools
          </h3>
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            <div
              v-for="(skill, index) in designSkills"
              :key="`design-${index}`"
              class="skill-card group"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <div class="skill-content">
                <!-- Icon Container -->
                <div class="icon-wrapper">
                  <Icon :name="skill.icon" class="skill-icon" />
                </div>

                <!-- Skill Info -->
                <div class="skill-info">
                  <h4 class="skill-name">{{ skill.name }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Frontend Technologies -->
        <div class="animate-fade-in-up animation-delay-400">
          <h3 class="text-2xl font-bold text-white mb-8 text-center">
            💻 Frontend Technologies
          </h3>
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            <div
              v-for="(skill, index) in frontendSkills"
              :key="`frontend-${index}`"
              class="skill-card group"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <div class="skill-content">
                <!-- Icon Container -->
                <div class="icon-wrapper">
                  <Icon :name="skill.icon" class="skill-icon" />
                </div>

                <!-- Skill Info -->
                <div class="skill-info">
                  <h4 class="skill-name">{{ skill.name }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend & Database -->
        <div class="animate-fade-in-up animation-delay-600">
          <h3 class="text-2xl font-bold text-white mb-8 text-center">
            ⚙️ Backend & Database
          </h3>
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            <div
              v-for="(skill, index) in backendSkills"
              :key="`backend-${index}`"
              class="skill-card group"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <div class="skill-content">
                <!-- Icon Container -->
                <div class="icon-wrapper">
                  <Icon :name="skill.icon" class="skill-icon" />
                </div>

                <!-- Skill Info -->
                <div class="skill-info">
                  <h4 class="skill-name">{{ skill.name }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tools & Platforms -->
        <div class="animate-fade-in-up animation-delay-800">
          <h3 class="text-2xl font-bold text-white mb-8 text-center">
            🛠️ Tools & Platforms
          </h3>
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            <div
              v-for="(skill, index) in toolSkills"
              :key="`tool-${index}`"
              class="skill-card group"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <div class="skill-content">
                <!-- Icon Container -->
                <div class="icon-wrapper">
                  <Icon :name="skill.icon" class="skill-icon" />
                </div>

                <!-- Skill Info -->
                <div class="skill-info">
                  <h4 class="skill-name">{{ skill.name }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const designSkills = ref([
  {
    icon: "material-icon-theme:adobe-illustrator",
    name: "Illustrator",
  },
  {
    icon: "material-icon-theme:adobe-photoshop",
    name: "Photoshop",
  },
]);

const frontendSkills = ref([
  {
    icon: "material-icon-theme:html",
    name: "HTML",
  },
  {
    icon: "skill-icons:css",
    name: "CSS",
  },
  {
    icon: "skill-icons:tailwindcss-dark",
    name: "Tailwind CSS",
  },
  {
    icon: "skill-icons:javascript",
    name: "JavaScript",
  },
  {
    icon: "material-icon-theme:vue",
    name: "Vue.js",
  },
  {
    icon: "material-icon-theme:nuxt",
    name: "Nuxt.js",
  },
  {
    icon: "skill-icons:react-dark",
    name: "React",
  },
  {
    icon: "skill-icons:typescript",
    name: "TypeScript",
  },
]);

const backendSkills = ref([
  {
    icon: "skill-icons:nodejs-dark",
    name: "Node.js",
  },
  {
    icon: "skill-icons:expressjs-dark",
    name: "Express.js",
  },
  {
    icon: "devicon:mongodb",
    name: "MongoDB",
  },
  {
    icon: "devicon:firebase",
    name: "Firebase",
  },
  {
    icon: "devicon:mysql",
    name: "MySQL",
  },
  {
    icon: "devicon:php",
    name: "PHP",
  },
]);

const toolSkills = ref([
  {
    icon: "material-icon-theme:git",
    name: "Git",
  },
  {
    icon: "ri:github-fill",
    name: "GitHub",
  },
  {
    icon: "devicon-plain:wordpress",
    name: "WordPress",
  },
  {
    icon: "skill-icons:vscode-dark",
    name: "VS Code",
  },
  {
    icon: "skill-icons:postman",
    name: "Postman",
  },
]);
</script>

<style scoped>
/* Custom animations */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-800 {
  animation-delay: 0.8s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

/* Skill Card Styles */
.skill-card {
  animation: slide-in-up 0.6s ease-out both;
}

.skill-content {
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px 16px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.skill-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 75, 87, 0.1),
    transparent
  );
  transition: left 0.5s;
}

.skill-card:hover .skill-content::before {
  left: 100%;
}

.skill-card:hover .skill-content {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(255, 75, 87, 0.15);
  border-color: rgba(255, 75, 87, 0.3);
}

/* Icon Container */
.icon-wrapper {
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(255, 75, 87, 0.1) 0%,
    rgba(255, 75, 87, 0.05) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  transition: all 0.3s ease;
}

.skill-card:hover .icon-wrapper {
  background: linear-gradient(
    135deg,
    rgba(255, 75, 87, 0.2) 0%,
    rgba(255, 75, 87, 0.1) 100%
  );
  transform: scale(1.1);
}

.skill-icon {
  font-size: 32px;
  color: #ff4b57;
  transition: all 0.3s ease;
  filter: drop-shadow(0 0 8px rgba(255, 75, 87, 0.3));
}

.skill-card:hover .skill-icon {
  color: #ffffff;
  transform: rotate(5deg) scale(1.1);
  filter: drop-shadow(0 0 12px rgba(255, 75, 87, 0.5));
}

/* Skill Info */
.skill-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  text-align: center;
}

.skill-name {
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  transition: color 0.3s ease;
}

.skill-card:hover .skill-name {
  color: #ff4b57;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .skill-content {
    padding: 20px 12px;
  }

  .icon-wrapper {
    width: 56px;
    height: 56px;
  }

  .skill-icon {
    font-size: 28px;
  }

  .skill-name {
    font-size: 13px;
  }
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  .skill-card,
  .skill-content,
  .icon-wrapper,
  .skill-icon,
  .skill-name {
    animation: none !important;
    transition: none !important;
  }
}

/* Focus states for accessibility */
.skill-card:focus-visible {
  outline: 2px solid #ff4b57;
  outline-offset: 2px;
}
</style>
