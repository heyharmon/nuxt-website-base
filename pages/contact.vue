<template>
  <div class="bg-[#fcf7e8]">
    <TheHeader />
    
    <Hero 
      title="Contact Us"
      background-image="/images/homepage/green-house.png"
      height="h-[40vh]"
      padding-top="pt-22"
    />

    <ContactSection 
      title="Get in Touch"
      description="Ready to transform your mailbox? We'd love to hear from you! Reach out today for a free quote or to schedule your mailbox makeover."
      :contact-info="contactInfo"
      form-endpoint="https://usebasin.com/f/2a05631523ce"
      message-placeholder="Tell us about your mailbox project..."
      submit-button-text="Send Message"
    />

    <CtaSection 
      title="Prefer to Call or Text?"
      description="We're here to help! Give us a call or send a text for the fastest response."
      primary-cta-text="Call (385) 207-5487"
      primary-cta-link="tel:3852075487"
      secondary-cta-text="Send a Text"
      secondary-cta-link="sms:3852075487"
    />
    
    <TheFooter />
  </div>
</template>

<script setup>
// Contact page component

const contactInfo = [
  {
    label: 'Phone',
    value: '(385) 207-5487',
    link: 'tel:3852075487',
    icon: '<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>'
  },
  {
    label: 'Service Area',
    value: 'Davis County, Utah',
    icon: '<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>'
  }
]

useSeoMeta({
  title: 'Contact Riley\'s Mailboxes - Get Your Free Quote | Centerville, Utah',
  description: 'Contact Riley\'s Mailboxes for your free mailbox makeover quote. Call (385) 207-5487, email hello@rileysmailboxes.com, or fill out our contact form. Serving Centerville, Utah.',
  ogTitle: 'Contact Riley\'s Mailboxes - Get Your Free Quote',
  ogDescription: 'Contact Riley\'s Mailboxes for your free mailbox makeover quote. Call (385) 207-5487, email hello@rileysmailboxes.com, or fill out our contact form. Serving Centerville, Utah.',
  ogImage: '/images/meta/default-og.png',
  ogUrl: 'https://rileysmailboxes.com/contact',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Contact Riley\'s Mailboxes - Get Your Free Quote',
  twitterDescription: 'Contact Riley\'s Mailboxes for your free mailbox makeover quote. Call (385) 207-5487, email hello@rileysmailboxes.com, or fill out our contact form. Serving Centerville, Utah.',
  twitterImage: '/images/meta/default-og.png'
})
</script>
