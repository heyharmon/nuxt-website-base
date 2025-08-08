<template>
  <section :class="sectionClasses">
    <div v-if="backgroundImage" class="absolute inset-0 z-10">
      <NuxtImg
        :src="backgroundImage"
        :alt="backgroundAlt"
        class="w-full h-full object-cover"
      />
    </div>
    <div v-if="backgroundImage && overlay" :class="overlayClasses"></div>
    <div :class="contentClasses">
      <p v-if="pretitle" :class="pretitleClasses">{{ pretitle }}</p>
      <h1 :class="titleClasses">{{ title }}</h1>
      <p v-if="description" :class="descriptionClasses">{{ description }}</p>
      <div v-if="ctaLink" class="mt-8">
        <NuxtLink
          :to="ctaLink"
          :class="theme.getButtonClasses(ctaVariant, ctaSize)"
        >
          {{ ctaText }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from '~/composables/useTheme'

const theme = useTheme()

const props = defineProps({
  pretitle: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  ctaText: { type: String, default: '' },
  ctaLink: { type: String, default: '' },
  ctaVariant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
  },
  ctaSize: {
    type: String,
    default: 'lg',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  backgroundImage: { type: String, default: '' },
  backgroundAlt: { type: String, default: 'Background' },
  overlay: { type: Boolean, default: true },
  overlayType: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'darker', 'light', 'gradient'].includes(value)
  },
  height: {
    type: String,
    default: 'lg',
    validator: (value) => ['sm', 'md', 'lg', 'xl', 'full'].includes(value)
  },
  alignment: {
    type: String,
    default: 'center',
    validator: (value) => ['left', 'center', 'right'].includes(value)
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'minimal', 'bold'].includes(value)
  }
})

const sectionClasses = computed(() => {
  const heightMap = {
    sm: 'h-[40vh] min-h-[400px]',
    md: 'h-[60vh] min-h-[500px]',
    lg: 'h-[70vh] min-h-[600px]',
    xl: 'h-[80vh] min-h-[700px]',
    full: 'h-screen'
  }
  const alignmentMap = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right'
  }
  return theme.buildClasses(
    'relative flex justify-center overflow-hidden',
    heightMap[props.height],
    alignmentMap[props.alignment],
    props.backgroundImage ? '' : theme.getBackgroundColor('surface.primary'),
    theme.theme.radius.xl
  )
})

const overlayClasses = computed(() => {
  const overlayMap = {
    dark: 'bg-black/60',
    darker: 'bg-black/80',
    light: 'bg-white/90',
    gradient: 'bg-gradient-to-b from-black/60 to-black/40'
  }
  return theme.buildClasses('absolute inset-0 z-20', overlayMap[props.overlayType])
})

const contentClasses = computed(() => {
  return theme.buildClasses('relative z-30', theme.getContainerClasses('md'), 'py-12')
})

const pretitleClasses = computed(() => {
  return theme.buildClasses(
    theme.getParagraphClasses('xl'),
    props.backgroundImage ? 'text-white/90' : theme.getTextColor('text.secondary'),
    'mb-4'
  )
})

const titleClasses = computed(() => {
  const variantMap = {
    default: theme.getHeadingClasses(1),
    minimal: theme.buildClasses(theme.theme.typography.sizes['3xl'], theme.theme.typography.weights.semibold),
    bold: theme.buildClasses(theme.theme.typography.sizes['5xl'], theme.theme.typography.weights.black, theme.theme.typography.transforms.uppercase)
  }
  return theme.buildClasses(
    variantMap[props.variant],
    props.backgroundImage ? 'text-white' : theme.getTextColor('text.primary'),
    'mb-6 leading-tight'
  )
})

const descriptionClasses = computed(() => {
  return theme.buildClasses(
    theme.getParagraphClasses('xl'),
    props.backgroundImage ? 'text-white/90' : theme.getTextColor('text.secondary'),
    'mb-8 max-w-3xl',
    props.alignment === 'center' ? 'mx-auto' : ''
  )
})
</script>
