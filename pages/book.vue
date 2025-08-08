<template>
  <div class="bg-[#fcf7e8]">
    <TheHeader />
    
    <Hero 
      title="Book Your Appointment"
      description="We'll show you samples and discuss your mailbox options."
      background-image="/images/homepage/green-house.png"
      height="h-[40vh]"
      padding-top="pt-22"
    />

    <!-- Booking Form Section -->
    <section class="py-15 bg-[#fcf7e8]">
      <div class="max-w-4xl mx-auto px-8">
        <FormBooking 
          form-endpoint="https://usebasin.com/f/93c6f60709a0"
          submit-button-text="Book Appointment"
          success-redirect-url="/book-success"
        />
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-black leading-tight mb-12 text-gray-800 uppercase tracking-tight">
          What to Expect
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6">
            <div class="w-16 h-16 bg-[#e9ca5d] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8h12v8H4V8zm2 2v2h2v-2H6zm4 0v2h2v-2h-2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Free Consultation</h3>
            <p class="text-gray-600">We'll assess your current mailbox and discuss your vision for the perfect replacement.</p>
          </div>
          <div class="p-6">
            <div class="w-16 h-16 bg-[#e9ca5d] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">View Samples</h3>
            <p class="text-gray-600">See and touch our high-quality materials and browse our portfolio of completed projects.</p>
          </div>
          <div class="p-6">
            <div class="w-16 h-16 bg-[#e9ca5d] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Custom Quote</h3>
            <p class="text-gray-600">Receive a detailed, no-obligation quote tailored to your specific needs and preferences.</p>
          </div>
        </div>
      </div>
    </section>
    
    <TheFooter />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Book Your Mailbox Makeover - Riley\'s Mailboxes | Centerville, Utah',
  description: 'Schedule your $380 mailbox makeover appointment with Riley\'s Mailboxes. Quick booking process, flexible scheduling, and satisfaction guaranteed in Centerville, Utah.',
  ogTitle: 'Book Your Mailbox Makeover - Riley\'s Mailboxes',
  ogDescription: 'Schedule your $380 mailbox makeover appointment with Riley\'s Mailboxes. Quick booking process, flexible scheduling, and satisfaction guaranteed in Centerville, Utah.',
  ogImage: '/images/meta/default-og.png',
  ogUrl: 'https://rileysmailboxes.com/book',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Book Your Mailbox Makeover - Riley\'s Mailboxes',
  twitterDescription: 'Schedule your $380 mailbox makeover appointment with Riley\'s Mailboxes. Quick booking process, flexible scheduling, and satisfaction guaranteed in Centerville, Utah.',
  twitterImage: '/images/meta/default-og.png'
})
</script>
