<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-[#ff4b57]/8 to-purple-500/8 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-500/6 to-[#ff4b57]/6 rounded-full blur-2xl animate-pulse animation-delay-2000"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-pink-400/5 to-cyan-400/5 rounded-full blur-xl animate-pulse animation-delay-1000"
      ></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in">
        <div class="inline-block mb-4">
          <span
            class="px-4 py-2 text-sm font-semibold text-[#ff4b57] bg-[#ff4b57]/10 rounded-full border border-[#ff4b57]/20"
          >
            📬 Get In Touch
          </span>
        </div>

        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span
            class="bg-gradient-to-r from-[#ff4b57] via-pink-400 to-[#ff6b77] bg-clip-text text-transparent"
          >
            Let's Connect
          </span>
          <br />
          <span class="text-white">& Start Something</span>
        </h2>

        <p
          class="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Ready to bring your ideas to life? Whether it's a project
          collaboration, freelance opportunity, or just a friendly chat about
          technology - I'm here to listen and create amazing solutions together.
        </p>
      </div>

      <!-- Contact Grid -->
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Contact Information -->
        <div class="animate-fade-in-up animation-delay-200">
          <div
            class="relative bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
          >
            <!-- Card shine effect -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            ></div>

            <div class="relative z-10 flex items-start gap-4 mb-8">
              <div
                class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#ff4b57]/20 to-[#ff4b57]/10 rounded-xl flex items-center justify-center"
              >
                <Icon
                  name="line-md:email-filled"
                  class="w-6 h-6 text-[#ff4b57]"
                />
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-2">
                  Contact Information
                </h3>
                <p class="text-gray-400 leading-relaxed">
                  Reach out for collaborations, freelance work, or a friendly
                  hello.
                </p>
              </div>
            </div>

            <div class="space-y-6">
              <!-- Phone -->
              <div
                class="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div
                  class="flex-shrink-0 w-10 h-10 bg-[#ff4b57]/10 rounded-lg flex items-center justify-center"
                >
                  <Icon
                    name="line-md:phone-filled"
                    class="w-5 h-5 text-[#ff4b57]"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-300 mb-1">Phone</p>
                  <a
                    href="tel:+254792857288"
                    class="block text-white hover:text-[#ff4b57] transition-colors font-medium"
                  >
                    +254 792 857 288
                  </a>
                  <a
                    href="tel:+254759732432"
                    class="block text-gray-400 hover:text-[#ff4b57] transition-colors text-sm"
                  >
                    +254 759 732 432
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div
                class="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div
                  class="flex-shrink-0 w-10 h-10 bg-[#ff4b57]/10 rounded-lg flex items-center justify-center"
                >
                  <Icon
                    name="line-md:email-filled"
                    class="w-5 h-5 text-[#ff4b57]"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-300 mb-1">Email</p>
                  <a
                    href="mailto:paulnyamawi18@gmail.com"
                    class="block text-white hover:text-[#ff4b57] transition-colors font-medium"
                  >
                    paulnyamawi18@gmail.com
                  </a>
                  <a
                    href="mailto:poltechnology01@gmail.com"
                    class="block text-gray-400 hover:text-[#ff4b57] transition-colors text-sm"
                  >
                    poltechnology01@gmail.com
                  </a>
                </div>
              </div>

              <!-- Location -->
              <div
                class="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div
                  class="flex-shrink-0 w-10 h-10 bg-[#ff4b57]/10 rounded-lg flex items-center justify-center"
                >
                  <Icon
                    name="tdesign:location-filled"
                    class="w-5 h-5 text-[#ff4b57]"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-300 mb-1">Location</p>
                  <p class="text-white font-medium">Mombasa, Kenya</p>
                  <p class="text-gray-400 text-sm">Available for remote work</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="mt-8 pt-6 border-t border-white/10">
              <p class="text-sm font-medium text-gray-300 mb-4">
                Follow me on social media
              </p>
              <div class="flex gap-3">
                <a
                  href="https://github.com/Paulhakeem"
                  target="_blank"
                  rel="noreferrer"
                  class="group relative w-12 h-12 bg-white/5 hover:bg-[#ff4b57] border border-white/10 hover:border-[#ff4b57] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#ff4b57]/25"
                >
                  <Icon
                    name="ant-design:github-filled"
                    class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  />
                  <span
                    class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                    >GitHub</span
                  >
                </a>
                <a
                  href="https://www.linkedin.com/in/paul-nyamawi-9244b924b/"
                  target="_blank"
                  rel="noreferrer"
                  class="group relative w-12 h-12 bg-white/5 hover:bg-[#ff4b57] border border-white/10 hover:border-[#ff4b57] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#ff4b57]/25"
                >
                  <Icon
                    name="ant-design:linkedin-filled"
                    class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  />
                  <span
                    class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                    >LinkedIn</span
                  >
                </a>
                <a
                  href="https://x.com/Hakeemi20"
                  target="_blank"
                  rel="noreferrer"
                  class="group relative w-12 h-12 bg-white/5 hover:bg-[#ff4b57] border border-white/10 hover:border-[#ff4b57] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#ff4b57]/25"
                >
                  <Icon
                    name="prime:twitter"
                    class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  />
                  <span
                    class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                    >Twitter</span
                  >
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="animate-fade-in-up animation-delay-400">
          <div
            class="relative bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
          >
            <!-- Card shine effect -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            ></div>

            <div class="relative z-10 flex items-start gap-4 mb-8">
              <div
                class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#ff4b57]/20 to-[#ff4b57]/10 rounded-xl flex items-center justify-center"
              >
                <Icon name="line-md:email" class="w-6 h-6 text-[#ff4b57]" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-2">
                  Send a Message
                </h3>
                <p class="text-gray-400 leading-relaxed">
                  Fill out the form below and I'll get back to you within 48
                  hours.
                </p>
              </div>
            </div>

            <form @submit.prevent="send" class="relative z-10 space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-300"
                    >Full Name</label
                  >
                  <input
                    id="name"
                    v-model="form.name"
                    required
                    class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff4b57] focus:border-[#ff4b57] transition-all duration-300 hover:bg-white/10"
                    placeholder="Your full name"
                  />
                </div>
                <div class="space-y-2">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-300"
                    >Email Address</label
                  >
                  <input
                    id="email"
                    v-model="form.to"
                    type="email"
                    required
                    class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff4b57] focus:border-[#ff4b57] transition-all duration-300 hover:bg-white/10"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label
                  for="subject"
                  class="block text-sm font-medium text-gray-300"
                  >Subject</label
                >
                <input
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff4b57] focus:border-[#ff4b57] transition-all duration-300 hover:bg-white/10"
                  placeholder="Project, question, or hello"
                />
              </div>

              <div class="space-y-2">
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-300"
                  >Message</label
                >
                <textarea
                  id="message"
                  v-model="form.text"
                  rows="5"
                  required
                  class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff4b57] focus:border-[#ff4b57] transition-all duration-300 hover:bg-white/10 resize-none"
                  placeholder="Tell me about your project, ideas, or how we can work together..."
                ></textarea>
              </div>

              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4"
              >
                <p class="text-sm text-gray-400 flex items-center gap-2">
                  <span class="text-lg">💌</span>
                  Prefer email? I'll reply within 48 hours.
                </p>
                <Button
                  :disabled="loading"
                  class="bg-gradient-to-r from-[#ff4b57] to-[#ff6b77] hover:from-[#ff6b77] hover:to-[#ff7b87] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff4b57]/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <span v-if="loading" class="flex items-center gap-2">
                    <Icon
                      name="line-md:loading-twotone-loop"
                      class="animate-spin w-5 h-5"
                    />
                    Sending...
                  </span>
                  <span v-else class="flex items-center gap-2">
                    <Icon name="line-md:send-filled" class="w-5 h-5" />
                    Send Message
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useAlert } from "@/composables/useAlert";
import { Button } from "@/components/ui/button";

const { showSuccess, showError } = useAlert();
const loading = ref(false);
const form = reactive({ name: "", to: "", subject: "", text: "" });

const send = async () => {
  loading.value = true;
  try {
    const response = await $fetch("/api/send-email", {
      method: "POST",
      body: form,
    });
    if (response && response.success) {
      showSuccess("Message sent successfully!");
      form.name = "";
      form.to = "";
      form.subject = "";
      form.text = "";
    } else {
      showError("Failed to send message. Please try again.");
    }
  } catch (err) {
    showError("An error occurred while sending the message.");
  } finally {
    loading.value = false;
  }
};
</script>

<style>
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

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
