<template>
  <section class="py-20 bg-[#fcf7e8]">
    <div class="max-w-[1600px] mx-auto px-8">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        <!-- Left side -->
        <div class="lg:w-5/12 lg:pl-8">
          <h2 class="text-3xl md:text-4xl font-black leading-tight mb-6 text-gray-800 uppercase tracking-tight">
            {{ title }}
          </h2>
          <p v-if="description" class="text-lg leading-relaxed mb-8 text-gray-700 max-w-lg">
            {{ description }}
          </p>
          
          <div class="space-y-6">
            <div v-for="(contact, index) in contactInfo" :key="index" class="flex items-center gap-4">
              <div class="w-12 h-12 bg-[#e9ca5d] rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20" v-html="contact.icon"></svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-800 mb-1">{{ contact.label }}</h3>
                <a v-if="contact.link" :href="contact.link" class="text-lg text-gray-700 hover:text-gray-900 transition-colors">{{ contact.value }}</a>
                <p v-else class="text-lg text-gray-700">{{ contact.value }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right side -->
        <div class="lg:w-6/12">
          <FormContact 
            :form-endpoint="formEndpoint"
            :message-placeholder="messagePlaceholder"
            :submit-button-text="submitButtonText"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Get in touch'
  },
  description: {
    type: String,
    default: ''
  },
  contactInfo: {
    type: Array,
    required: true
  },
  formEndpoint: {
    type: String,
    required: true
  },
  messagePlaceholder: {
    type: String,
    default: 'Tell us about your project...'
  },
  submitButtonText: {
    type: String,
    default: 'Send Message'
  }
})
</script>
