<template>
  <div>
    <TheHeader />
    <Hero
      :title="heroContent.title"
      :description="heroContent.description"
      :cta-text="heroContent.ctaText"
      :cta-link="heroContent.ctaLink"
      :background-image="heroContent.backgroundImage"
      height="lg"
      variant="default"
    />
    <Feature
      v-if="features.main"
      :title="features.main.title"
      :description="features.main.description"
      :image-src="features.main.image"
      :image-alt="features.main.imageAlt"
      :list-items="features.main.items"
    />
    <Columns
      v-if="process.enabled"
      :title="process.title"
      :subtitle="process.subtitle"
      :steps="process.steps"
      :show-numbers="true"
    />
    <CtaSection
      :title="cta.title"
      :description="cta.description"
      :primary-cta-text="cta.primaryText"
      :primary-cta-link="cta.primaryLink"
      :background-image="cta.backgroundImage"
    />
    <TheFooter />
  </div>
</template>

<script setup>
import { useTheme } from '~/composables/useTheme'

const { site } = useTheme()

const heroContent = {
  title: 'Welcome to Our Company',
  description: 'We provide exceptional services to help your business grow',
  ctaText: 'Get Started',
  ctaLink: '/contact',
  backgroundImage: '/images/hero-bg.jpg'
}

const features = {
  main: {
    title: 'What We Do',
    description: 'We specialize in delivering high-quality solutions tailored to your needs.',
    image: '/images/feature-main.jpg',
    imageAlt: 'Our services',
    items: [
      { title: 'Professional Service', description: 'Expert team with years of experience' },
      { title: 'Quality Guaranteed', description: 'We stand behind our work' },
      { title: 'Affordable Pricing', description: 'Competitive rates without compromising quality' }
    ]
  }
}

const process = {
  enabled: true,
  title: 'How It Works',
  subtitle: 'Our simple three-step process',
  steps: [
    { title: 'Consultation', description: 'We discuss your needs and goals' },
    { title: 'Planning', description: 'We create a customized solution' },
    { title: 'Execution', description: 'We deliver exceptional results' }
  ]
}

const cta = {
  title: 'Ready to Get Started?',
  description: 'Contact us today for a free consultation',
  primaryText: 'Contact Us',
  primaryLink: '/contact',
  backgroundImage: '/images/cta-bg.jpg'
}

useSeoMeta({
  title: `${site.meta.title} - ${site.meta.description}`,
  description: site.meta.description,
  ogTitle: site.meta.title,
  ogDescription: site.meta.description,
  ogImage: site.meta.image,
  ogUrl: site.meta.url
})
</script>
