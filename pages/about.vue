<template>
  <TheHeader />
  
    <Hero 
      title="About Us"
      background-image="/images/homepage/green-house.png"
      height="h-[40vh]"
      padding-top="pt-22"
    />

    <Feature 
      title="Our Story"
      description="What started as a simple weekend project has grown into a passion for transforming Centerville's neighborhoods, one mailbox at a time. We believe that small details make a big difference in curb appeal, and every home deserves a beautiful, functional mailbox that reflects the pride of homeownership."
      image-src="/images/about/about.png"
      image-alt="Our mailbox transformation work"
    />

    <Columns 
      title="Our Mission"
      subtitle="To provide affordable, high-quality mailbox makeovers that enhance curb appeal and bring pride to every Centerville home."
      :show-numbers="true"
      background-color="bg-[#fcf7e8]"
      :steps="[
        {
          title: 'Quality First',
          description: 'We use only the best materials and craftsmanship to ensure your mailbox stands the test of time.'
        },
        {
          title: 'Local Focus',
          description: 'As Centerville locals, we understand our community\'s unique style and take pride in our neighborhood.'
        },
        {
          title: 'Satisfaction Guaranteed',
          description: 'We stand behind our work with a complete satisfaction guarantee on every mailbox makeover.'
        }
      ]"
    />

    <Feature 
      title="Why Choose Riley's Mailboxes?"
      image-src="/images/about/about-why.png"
      image-alt="Professional mailbox installation"
      image-position="left"
      :list-items="[
        {
          title: 'Locally Owned & Operated',
          description: 'We\'re your neighbors, invested in making Centerville beautiful.'
        },
        {
          title: 'Affordable Pricing',
          description: 'Professional results at a price that won\'t break the bank.'
        },
        {
          title: 'Quick Turnaround',
          description: 'Most makeovers completed within a few days of scheduling.'
        },
        {
          title: 'Custom Solutions',
          description: 'Every mailbox is unique, and we tailor our approach to your style.'
        }
      ]"
    />

    <CtaSection 
      background-image="/images/homepage/green-house.png"
      background-alt="Beautiful home with fresh mailbox"
      title="Ready to Get Started?"
      description="Let's Transform Your Mailbox Today"
      primary-cta-text="Book Now"
      primary-cta-link="/book"
    />

    <TheFooter />
</template>

<script setup>
// About page component

useSeoMeta({
  title: 'About Riley\'s Mailboxes - Local Centerville Mailbox Experts',
  description: 'Learn about Riley\'s Mailboxes, your locally owned and operated mailbox installation and renovation service in Centerville, Utah. Quality first, satisfaction guaranteed.',
  ogTitle: 'About Riley\'s Mailboxes - Local Centerville Mailbox Experts',
  ogDescription: 'Learn about Riley\'s Mailboxes, your locally owned and operated mailbox installation and renovation service in Centerville, Utah. Quality first, satisfaction guaranteed.',
  ogImage: '/images/meta/default-og.png',
  ogUrl: 'https://rileysmailboxes.com/about',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'About Riley\'s Mailboxes - Local Centerville Mailbox Experts',
  twitterDescription: 'Learn about Riley\'s Mailboxes, your locally owned and operated mailbox installation and renovation service in Centerville, Utah. Quality first, satisfaction guaranteed.',
  twitterImage: '/images/meta/default-og.png'
})
</script>
