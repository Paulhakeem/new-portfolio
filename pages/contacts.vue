<template>
  <header class="pt-10 text-center">
    <h1 class="text-xl text-gray-300 font-semibold">Let's Get In-touch</h1>
  </header>
  <main
    class="grid-cols-2 lg:grid pt-8 mx-10 justify-center place-items-center"
  >
    <div
      data-aos="fade-up-right"
      data-aos-anchor-placement="top-center"
      class="bg-[#ff4b57] p-6 rounded-lg w-80 dark:text-gray-300"
    >
      <h2 class="text-lg font-semibold text-gray-300">Contact information</h2>
      <p class="pb-4 text-gray-300 text-sm">
        Reach out on me and lets have a chat.
      </p>

      <div class="flex items-center mb-4">
        <Icon
          name="line-md:phone-filled"
          class="text-gray-200 mr-2"
          size="32"
        />
        <div>
          <a
            href="tel:+254792857288"
            class="text-sm text-gray-300 font-semibold"
            >+254 792 857 288</a
          >
          <p>
            <a
              href="tel:+254759732432"
              class="text-sm text-gray-300 font-semibold"
              >+254 759 732 432</a
            >
          </p>
        </div>
      </div>
      <div class="flex items-center mb-4">
        <Icon
          name="line-md:email-filled"
          class="text-gray-200 mr-2"
          size="32"
        />
        <div>
          <a href="mailto:paulnyamawi18@gmail.com">
            <p class="text-sm text-gray-300 font-semibold">
              paulnyamawi18@gmail.com
            </p>
          </a>
          <a href="mailto:poltechnology01@gmail.com">
            <p class="text-sm text-gray-300 font-semibold">
              poltechnology01@gmail.com
            </p>
          </a>
        </div>
      </div>

      <div class="flex items-center mb-4">
        <Icon
          name="tdesign:location-filled"
          class="text-gray-200 mr-2"
          size="32"
        />
        <div>
          <p class="text-sm text-gray-300 font-semibold">Mombasa Kenya</p>
        </div>
      </div>
    </div>

    <div
      data-aos="fade-up-left"
      data-aos-anchor-placement="top-center"
      class="p-6"
    >
      <form @submit.prevent="send">
        <div class="flex gap-10 w-full">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-300"
              >Name</label
            >
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="text-gray-400 mt-1 block w-full p-2 border-0 border-b-2 border-b-gray-300 focus:border-b-[#ff4b57] focus:ring-0 focus:outline-none transition duration-200"
              placeholder="Your Name"
              required
            />
          </div>
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-300"
              >Email</label
            >
            <input
              type="email"
              id="email"
              v-model="form.to"
              class="text-gray-400 mt-1 block w-full p-2 border-0 border-b-2 border-b-gray-300 focus:border-b-[#ff4b57] focus:ring-0 focus:outline-none transition duration-200"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div class="mb-4 w-full pt-4">
          <label for="message" class="block text-sm font-medium text-gray-300"
            >Your Subject</label
          >
          <input
            type="text"
            id="message"
            v-model="form.subject"
            class="w-full mt-2 p-2 text-sm text-gray-400 placeholder-gray-400 border-0 border-b-2 border-b-gray-300 focus:border-b-[#ff4b57] focus:ring-0 focus:outline-none transition duration-200"
            placeholder="Your subject"
            required
          />
        </div>

        <div class="mb-4 w-full pt-4">
          <label for="message" class="block text-sm font-medium text-[#ff4b57]"
            >Message</label
          >
          <textarea
            id="message"
            v-model="form.text"
            class="w-full mt-2 p-2 text-sm text-gray-400 placeholder-gray-400 border-0 border-b-2 border-b-gray-300 focus:border-b-[#ff4b57] focus:ring-0 focus:outline-none transition duration-200"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <div class="mt-6">
          <Button :disabled="loading" class="bg-[#ff4b57] cursor-pointer">{{ loading ? 'Sending...' : 'Send Message' }}</Button>
        </div>
      </form>
    </div>
  </main>
</template>

<script setup>
const { showSuccess, showError } = useAlert();
const loading = ref(false)
const form = reactive({
  name: "",
  to: "",
  subject: "",
  text: "",
});

const send = async () => {
  loading.value = true;
  try {
    const response = await $fetch("/api/send-email", {
      method: "POST",
      body: form,
    });
    if (response.success) {
      showSuccess("Message sent successfully!");
      form.name = "";
      form.to = "";
      form.subject = "";
      form.text = "";
    } else {
      showError("Failed to send message. Please try again.");
    }
  } catch (error) {
    showError("An error occurred while sending the message.");
  } finally {
    loading.value = false;
  }
};
</script>
