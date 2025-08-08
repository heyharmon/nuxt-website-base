<template>
    <TheHeader />
    <Hero 
        title="We replace mailboxes in Northern Utah" 
        description="Locally Owned • Satisfaction Guaranteed"
        ctaText="Makeover My Mailbox for $380"
        ctaLink="/book"
        backgroundAlt="Beautiful home with fresh mailbox"
    />
    <Feature 
        title="Affordable mailbox makeovers by father & son"
        description="What started as a weekend project that sparked a business. We are reviving Centerville's streets one mailbox at a time."
        imageSrc="/images/homepage/before-after.png"
        imageAlt="White mailbox on wooden post"
    />
    <Columns 
        title="How it works"
        :show-numbers="true"
        numbers-background-color="bg-[#d6ab13]"
        :steps="[
          {
            title: 'Choose mailbox options',
            description: 'Pick a post style, mailbox color and addons.'
          },
          {
            title: 'Schedule',
            description: 'Pick a date and time that works for you.'
          },
          {
            title: 'Install day',
            description: 'We install, clean up and wave goodbye.'
          }
        ]"
    />
    <CtaSection 
        background-image="/images/homepage/green-house.png"
        background-alt="Beautiful home with fresh mailbox"
        title="Ready for a curb-appeal upgrade?"
        description="Let's refresh your mailbox"
        primary-cta-text="Book Now"
        primary-cta-link="/book"
    />
    <TheFooter />
</template>

<script setup>
useSeoMeta({
  title: 'Riley\'s Mailboxes - Fresh Mailboxes, Fresh Curb Appeal | Davis County, Utah',
  description: 'Locally owned mailbox installation and renovation services in Davis County, Utah. Professional mailbox makeovers for $380 with satisfaction guaranteed.',
  ogTitle: 'Riley\'s Mailboxes - Fresh Mailboxes, Fresh Curb Appeal',
  ogDescription: 'Locally owned mailbox installation and renovation services in Davis County, Utah. Professional mailbox makeovers for $380 with satisfaction guaranteed.',
  ogImage: '/images/meta/default-og.png',
  ogUrl: 'https://rileysmailboxes.com',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Riley\'s Mailboxes - Fresh Mailboxes, Fresh Curb Appeal',
  twitterDescription: 'Locally owned mailbox installation and renovation services in Davis County, Utah. Professional mailbox makeovers for $380 with satisfaction guaranteed.',
  twitterImage: '/images/meta/default-og.png'
})
</script>
