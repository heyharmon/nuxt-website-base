<template>
  <section class="py-20 bg-[#fcf7e8]">
    <div class="max-w-[1600px] mx-auto px-8">
      <div class="flex flex-col items-center justify-between gap-12 lg:gap-24" :class="imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'">
        <div :class="imagePosition === 'left' ? 'lg:w-5/12 lg:pr-8' : 'lg:w-5/12 lg:pl-8'">
          <h2 class="text-3xl md:text-4xl font-black leading-tight mb-6 text-gray-800 uppercase tracking-tight">
            {{ title }}
          </h2>
          <p v-if="description" class="text-lg leading-relaxed mb-8 text-gray-700 max-w-lg">
            {{ description }}
          </p>
          <div v-if="listItems.length" class="space-y-6">
            <div v-for="(item, index) in listItems" :key="index" class="flex items-start gap-4">
              <div class="w-6 h-6 bg-[#e9ca5d] rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 class="font-bold text-gray-800 mb-2">{{ item.title }}</h3>
                <p class="text-gray-700">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-8/12">
          <NuxtImg :src="imageSrc" :alt="imageAlt" class="w-full h-auto rounded-3xl object-cover shadow-none" />
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
  description: {
    type: String,
    default: ''
  },
  imageSrc: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    default: ''
  },
  imagePosition: {
    type: String,
    default: 'right'
  },
  listItems: {
    type: Array,
    default: () => []
  }
})
</script>
