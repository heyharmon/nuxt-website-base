<template>
  <header class="absolute top-0 left-0 w-full z-50 py-6 md:py-12">
    <div :class="theme.getContainerClasses('lg')">
      <nav class="flex justify-between items-center md:relative">
        <div class="hidden md:block">
          <ul class="flex list-none gap-8 m-0 p-0">
            <li v-for="item in theme.site.navigation.header" :key="item.path">
              <NuxtLink :to="item.path" :class="navLinkClasses">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <NuxtLink to="/" class="flex items-center no-underline">
            <NuxtImg :src="theme.theme.brand.logo.light" :alt="theme.theme.brand.name" :class="theme.theme.brand.logo.height + ' w-auto'" />
          </NuxtLink>
        </div>
        <div class="hidden md:block" v-if="theme.site.features.booking">
          <NuxtLink to="/book" :class="theme.getButtonClasses('outline','md','text-white border-white')">
            Book Now
          </NuxtLink>
        </div>
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2" :class="theme.getTextColor('text.inverse')" aria-label="Toggle mobile menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>
      <div v-if="mobileMenuOpen" class="md:hidden mt-6 p-6 rounded-lg" :class="theme.theme.components.navigation.mobile.background">
        <ul class="flex flex-col gap-4 list-none m-0 p-0 mb-6">
          <li v-for="item in theme.site.navigation.header" :key="item.path">
            <NuxtLink :to="item.path" :class="mobileLinkClasses" @click="mobileMenuOpen=false">{{ item.label }}</NuxtLink>
          </li>
        </ul>
        <NuxtLink v-if="theme.site.features.booking" to="/book" :class="theme.getButtonClasses('outline','md','text-white border-white block text-center')" @click="mobileMenuOpen=false">Book Now</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useTheme } from '~/composables/useTheme'

const theme = useTheme()
const mobileMenuOpen = ref(false)

const navLinkClasses = computed(() => {
  return theme.buildClasses(
    theme.theme.components.navigation.link.base,
    theme.theme.components.navigation.link.hover,
    theme.getTextColor('text.inverse')
  )
})

const mobileLinkClasses = computed(() => {
  return theme.buildClasses(
    theme.theme.components.navigation.link.base,
    theme.theme.components.navigation.link.hover,
    theme.getTextColor('text.inverse'),
    theme.theme.components.navigation.mobile.link
  )
})
</script>
