<template>
  <form class="bg-white p-8 rounded-3xl shadow-lg" :action="formEndpoint" method="POST" enctype="multipart/form-data" id="form">
    <div class="grid md:grid-cols-2 gap-6 mb-6">
      <div>
        <label for="firstName" class="block text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">First Name *</label>
        <input type="text" id="firstName" name="firstName" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ca5d] focus:border-transparent" required>
      </div>
      <div>
        <label for="lastName" class="block text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">Last Name *</label>
        <input type="text" id="lastName" name="lastName" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ca5d] focus:border-transparent" required>
      </div>
    </div>
    
    <div class="grid md:grid-cols-2 gap-6 mb-6">
      <div>
        <label for="email" class="block text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">Email</label>
        <input type="email" id="email" name="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ca5d] focus:border-transparent">
      </div>
      <div>
        <label for="phone" class="block text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">Phone *</label>
        <input type="tel" id="phone" name="phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ca5d] focus:border-transparent" required>
      </div>
    </div>
    
    <div class="mb-8">
      <label for="message" class="block text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">Message</label>
      <textarea id="message" name="message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ca5d] focus:border-transparent" :placeholder="messagePlaceholder"></textarea>
    </div>
    
    <div class="text-center">
      <button type="submit" class="cursor-pointer inline-block bg-[#e9ca5d] text-gray-800 px-10 py-3 text-lg font-semibold rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        {{ submitButtonText }}
      </button>
    </div>
  </form>
</template>

<script setup>
defineProps({
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
