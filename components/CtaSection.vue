<template>
  <section class="relative py-20 text-center overflow-hidden" :class="backgroundImage ? 'py-40 text-white' : 'bg-[#fcf7e8] text-gray-800'">
    <!-- Background image layer -->
    <div v-if="backgroundImage" class="absolute inset-0 z-10">
      <NuxtImg 
        :src="backgroundImage" 
        :alt="backgroundAlt" 
        class="w-full h-full object-cover"
      />
    </div>
    
    <!-- Dark overlay -->
    <div v-if="backgroundImage" class="absolute inset-0 bg-black/60 z-20"></div>
    
    <!-- Content -->
    <div class="relative max-w-6xl mx-auto px-8" :class="backgroundImage ? 'z-30' : ''">
      <div class="flex flex-col items-center justify-center">
        <h2 class="text-3xl md:text-4xl font-black leading-tight mb-8 uppercase tracking-tight" :class="backgroundImage ? 'text-[#fcf7e8] lg:text-6xl mb-6' : 'text-gray-800'">
          {{ title }}
        </h2>
        <p v-if="description" class="text-xl mb-8" :class="backgroundImage ? 'text-[#fcf7e8] md:text-2xl font-medium mb-12 tracking-wide' : 'text-gray-700'">{{ description }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center" :class="backgroundImage ? 'mt-4' : ''">
          <a v-if="primaryCtaText && primaryCtaLink" :href="primaryCtaLink" class="inline-block bg-[#e9ca5d] text-gray-800 px-10 py-3 text-lg font-semibold no-underline rounded transition-all duration-300 hover:-translate-y-1">
            {{ primaryCtaText }}
          </a>
          <a v-if="secondaryCtaText && secondaryCtaLink" :href="secondaryCtaLink" class="inline-block px-10 py-3 text-lg font-semibold no-underline rounded transition-all duration-300 hover:-translate-y-1" :class="backgroundImage ? 'bg-[#fcf7e8] text-gray-800' : 'bg-gray-800 text-[#fcf7e8]'">
            {{ secondaryCtaText }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  backgroundImage: {
    type: String,
  },
  backgroundAlt: {
    type: String,
    default: 'Background'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  primaryCtaText: {
    type: String,
  },
  primaryCtaLink: {
    type: String,
  },
  secondaryCtaText: {
    type: String,
  },
  secondaryCtaLink: {
    type: String,
  }
})
</script>
