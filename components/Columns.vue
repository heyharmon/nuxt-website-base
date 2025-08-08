<template>
  <section class="py-20" :class="backgroundColor">
    <div class="max-w-[1600px] mx-auto px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-black leading-tight mb-6 text-gray-800 uppercase tracking-tight">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="text-xl text-gray-700 max-w-3xl mx-auto">
          {{ subtitle }}
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(step, index) in steps" :key="index" class="text-center p-8">
          <div v-if="showNumbers" class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" :class="numbersBackgroundColor">
            <span class="text-2xl font-bold text-gray-800">{{ index + 1 }}</span>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-4 uppercase">{{ step.title }}</h3>
          <p v-if="step.description" class="text-gray-700">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  steps: {
    type: Array,
    required: true
  },
  showNumbers: {
    type: Boolean,
    default: false
  },
  backgroundColor: {
    type: String,
    default: 'bg-[#e9ca5d]'
  },
  numbersBackgroundColor: {
    type: String,
    default: 'bg-[#e9ca5d]'
  }
})
</script>
