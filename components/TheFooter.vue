<template>
  <footer :class="footerClasses">
    <div :class="theme.getContainerClasses('lg')">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
        <div class="text-center">
          <div class="mb-4">
            <NuxtLink to="/" class="flex items-center justify-center no-underline">
              <NuxtImg :src="theme.theme.brand.logo.light" :alt="theme.theme.brand.name" class="h-16 w-auto" />
            </NuxtLink>
          </div>
          <p class="text-sm" :class="theme.getTextColor('text.muted')">{{ theme.theme.brand.tagline }}</p>
        </div>
        <div class="text-center" v-for="section in theme.site.navigation.footer" :key="section.title">
          <h3 class="text-lg font-bold mb-4" :class="theme.getTextColor('primary')">{{ section.title }}</h3>
          <ul class="space-y-2">
            <li v-for="link in section.links" :key="link.path">
              <NuxtLink :to="link.path" :class="footerLinkClasses">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="text-center">
          <p class="text-sm mb-4" :class="theme.getTextColor('text.muted')">
            <strong>Get in touch</strong><br />
            {{ theme.site.contact.address }}
          </p>
          <NuxtLink v-if="theme.site.features.booking" to="/book" :class="theme.getButtonClasses('outline','md','border-primary text-primary')">
            Book Now
          </NuxtLink>
        </div>
      </div>
      <div class="border-t pt-4 text-center" :class="theme.getTextColor('text.muted') + ' border-neutral-300'">
        <p class="text-xs m-0">&copy; {{ new Date().getFullYear() }} {{ theme.theme.brand.name }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useTheme } from '~/composables/useTheme'

const theme = useTheme()

const footerClasses = theme.buildClasses(
  theme.getBackgroundColor('neutral.800'),
  theme.getSectionClasses('md'),
  theme.getTextColor('text.inverse')
)

const footerLinkClasses = theme.buildClasses(
  theme.getTextColor('text.muted'),
  'hover:opacity-80 no-underline transition-colors'
)
</script>
