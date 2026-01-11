<template>
  <div>
    <header class="pt-10 text-center">
      <h1 class="text-2xl text-gray-100 font-semibold">Let's get in touch</h1>
      <p class="text-gray-400 mt-2">I'd love to hear about your project or collaboration.</p>
    </header>

    <main class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 mt-10 items-start">
      <!-- Contact Info Card -->
      <aside data-aos="fade-up-right" class="relative rounded-2xl p-6 bg-gradient-to-br from-[#10131a] to-[#1b2130] shadow-xl border border-gray-800">
        <div class="-mt-6 mb-4">
          <h2 class="text-lg font-semibold text-gray-100">Contact information</h2>
          <p class="text-sm text-gray-400">Reach out for collaborations, freelance work, or a friendly hello.</p>
        </div>

        <div class="mt-6 space-y-4">
          <div class="flex items-start gap-3">
            <div class="icon-circle bg-[#0f1724] p-2 rounded-lg">
              <Icon name="line-md:phone-filled" class="text-[#ff4b57]" size="20" />
            </div>
            <div>
              <a href="tel:+254792857288" class="block text-sm font-medium text-gray-100">+254 792 857 288</a>
              <a href="tel:+254759732432" class="block text-sm text-gray-400">+254 759 732 432</a>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div class="icon-circle bg-[#0f1724] p-2 rounded-lg">
              <Icon name="line-md:email-filled" class="text-[#ff4b57]" size="20" />
            </div>
            <div>
              <a href="mailto:paulnyamawi18@gmail.com" class="block text-sm font-medium text-gray-100">paulnyamawi18@gmail.com</a>
              <a href="mailto:poltechnology01@gmail.com" class="block text-sm text-gray-400">poltechnology01@gmail.com</a>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div class="icon-circle bg-[#0f1724] p-2 rounded-lg">
              <Icon name="tdesign:location-filled" class="text-[#ff4b57]" size="20" />
            </div>
            <div>
              <p class="text-sm font-medium text-gray-100">Mombasa, Kenya</p>
              <p class="text-sm text-gray-400">Available for remote work</p>
            </div>
          </div>

          <div class="mt-4 flex gap-3">
            <a href="https://github.com/Paulhakeem" target="_blank" rel="noreferrer" class="p-2 rounded-md bg-white/6 hover:bg-white/10 transition">
              <Icon name="ant-design:github-filled" class="text-[#ff4b57]" />
            </a>
            <a href="https://www.linkedin.com/in/paul-nyamawi-9244b924b/" target="_blank" rel="noreferrer" class="p-2 rounded-md bg-white/6 hover:bg-white/10 transition">
              <Icon name="ant-design:linkedin-filled" class="text-[#ff4b57]" />
            </a>
            <a href="https://x.com/Hakeemi20" target="_blank" rel="noreferrer" class="p-2 rounded-md bg-white/6 hover:bg-white/10 transition">
              <Icon name="prime:twitter" class="text-[#ff4b57]" />
            </a>
          </div>
        </div>
      </aside>

      <!-- Contact Form -->
      <section data-aos="fade-up-left" class="p-6 rounded-2xl bg-[#0b0d12] border border-gray-800 shadow-lg">
        <form @submit.prevent="send" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="name" class="block text-sm text-gray-300">Name</label>
              <input id="name" v-model="form.name" required class="mt-1 block w-full p-3 rounded-lg bg-transparent border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-[#ff4b57] focus:border-transparent outline-none" placeholder="Your name" />
            </div>
            <div>
              <label for="email" class="block text-sm text-gray-300">Email</label>
              <input id="email" v-model="form.to" type="email" required class="mt-1 block w-full p-3 rounded-lg bg-transparent border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-[#ff4b57] focus:border-transparent outline-none" placeholder="you@company.com" />
            </div>
          </div>

          <div>
            <label for="subject" class="block text-sm text-gray-300">Subject</label>
            <input id="subject" v-model="form.subject" required class="mt-1 block w-full p-3 rounded-lg bg-transparent border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-[#ff4b57] focus:border-transparent outline-none" placeholder="Project, question, or hello" />
          </div>

          <div>
            <label for="message" class="block text-sm text-gray-300">Message</label>
            <textarea id="message" v-model="form.text" rows="5" required class="mt-1 block w-full p-3 rounded-lg bg-transparent border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-[#ff4b57] focus:border-transparent outline-none" placeholder="Tell me about your project..."></textarea>
          </div>

          <div class="flex items-center justify-between gap-4">
            <div class="text-sm text-gray-400">Prefer email? I'll reply within 48 hours.</div>
            <div>
              <Button :disabled="loading" class="bg-[#ff4b57] hover:bg-[#ff6b77]">{{ loading ? 'Sending...' : 'Send Message' }}</Button>
            </div>
          </div>
        </form>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useAlert } from '@/composables/useAlert'
import { Button } from '@/components/ui/button'

const { showSuccess, showError } = useAlert()
const loading = ref(false)
const form = reactive({ name: '', to: '', subject: '', text: '' })

const send = async () => {
  loading.value = true
  try {
    const response = await $fetch('/api/send-email', {
      method: 'POST',
      body: form,
    })
    if (response && response.success) {
      showSuccess('Message sent successfully!')
      form.name = ''
      form.to = ''
      form.subject = ''
      form.text = ''
    } else {
      showError('Failed to send message. Please try again.')
    }
  } catch (err) {
    showError('An error occurred while sending the message.')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.icon-circle { width: 40px; height: 40px; display:flex; align-items:center; justify-content:center; }
.icon-circle svg { width: 20px; height: 20px }
</style>
