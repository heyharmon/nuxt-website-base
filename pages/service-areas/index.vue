<template>
  <div class="bg-[#fcf7e8]">
    <TheHeader />
    
    <Hero 
      title="Our Service Areas"
      description="Professional Mailbox Services Across Northern Utah"
      ctaText="Get Your Free Estimate"
      ctaLink="/contact"
      backgroundImage="/images/homepage/hero.png"
      backgroundAlt="Beautiful home with fresh mailbox"
    />

    <!-- Main Content -->
    <section class="py-20 bg-[#fcf7e8]">
      <div class="max-w-6xl mx-auto px-8">
        
        <!-- Introduction Section -->
        <div class="mb-16 text-center">
          <h2 class="text-3xl md:text-4xl font-black leading-tight mb-8 text-gray-800 uppercase tracking-tight">
            Where We Serve
          </h2>
          <p class="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Riley's Mailboxes proudly serves homeowners across Northern Utah with professional mailbox installation, repair, and renovation services. Our locally owned and operated business has been enhancing curb appeal for over 20 years across three major service areas.
          </p>
        </div>

        <!-- Service Areas Grid -->
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          
          <!-- Salt Lake City -->
          <div class="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-2xl font-black text-gray-800 mb-4 uppercase tracking-tight">
              Salt Lake City
            </h3>
            <p class="text-gray-700 mb-6 leading-relaxed">
              Serving the heart of Utah's capital city and surrounding neighborhoods including Sugar House, Millcreek, Holladay, Sandy, and more throughout Salt Lake County.
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[#e9ca5d] rounded-full"></div>
                <span class="text-gray-600">Sugar House</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[#e9ca5d] rounded-full"></div>
                <span class="text-gray-600">Millcreek</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[#e9ca5d] rounded-full"></div>
                <span class="text-gray-600">Holladay</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[#e9ca5d] rounded-full"></div>
                <span class="text-gray-600">Sandy</span>
              </li>
            </ul>
            <NuxtLink to="/service-areas/salt-lake-city" class="inline-block bg-[#e9ca5d] text-gray-800 px-6 py-3 font-semibold no-underline rounded transition-all duration-300 hover:-translate-y-1">
              Learn More
            </NuxtLink>
          </div>

          <!-- Davis County -->
          <div class="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-2xl font-black text-gray-800 mb-4 uppercase tracking-tight">
              Davis County
            </h3>
            <p class="text-gray-700 mb-6 leading-relaxed">
              Providing expert mailbox services throughout Davis County communities including Bountiful, Centerville, Farmington, Kaysville, Layton, and surrounding areas.
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[#e9ca5d] rounded-full"></div>
                <span class="text-gray-600">Bountiful</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[#e9ca5d] rounded-full"></div>
                <span class="text-gray-600">Centerville</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[#e9ca5d] rounded-full"></div>
                <span class="text-gray-600">Farmington</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[#e9ca5d] rounded-full"></div>
                <span class="text-gray-600">Kaysville</span>
              </li>
            </ul>
            <NuxtLink to="/service-areas/davis-county" class="inline-block bg-[#e9ca5d] text-gray-800 px-6 py-3 font-semibold no-underline rounded transition-all duration-300 hover:-translate-y-1">
              Learn More
            </NuxtLink>
          </div>

          <!-- Weber County -->
          <div class="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-2xl font-black text-gray-800 mb-4 uppercase tracking-tight">
              Weber County
            </h3>
            <p class="text-gray-700 mb-6 leading-relaxed">
              Delivering quality mailbox solutions across Weber County including Ogden, Roy, Clearfield, North Ogden, Pleasant View, and other local communities.
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[#e9ca5d] rounded-full"></div>
                <span class="text-gray-600">Ogden</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[#e9ca5d] rounded-full"></div>
                <span class="text-gray-600">Roy</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[#e9ca5d] rounded-full"></div>
                <span class="text-gray-600">Clearfield</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[#e9ca5d] rounded-full"></div>
                <span class="text-gray-600">North Ogden</span>
              </li>
            </ul>
            <NuxtLink to="/service-areas/weber-county" class="inline-block bg-[#e9ca5d] text-gray-800 px-6 py-3 font-semibold no-underline rounded transition-all duration-300 hover:-translate-y-1">
              Learn More
            </NuxtLink>
          </div>

        </div>

        <!-- Why Choose Our Service Areas Section -->
        <div class="mb-16 bg-white p-8 rounded-3xl shadow-lg">
          <h2 class="text-3xl md:text-4xl font-black leading-tight mb-8 text-gray-800 uppercase tracking-tight text-center">
            Why We Serve These Areas
          </h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Local Expertise</h3>
              <p class="text-gray-700 leading-relaxed mb-6">
                As a locally owned and operated business for over 20 years, we understand the unique needs of Northern Utah homeowners. From dealing with harsh winter weather to matching the architectural styles common in our communities, we know what works best in our region.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Convenient Coverage</h3>
              <p class="text-gray-700 leading-relaxed mb-6">
                Our strategic service area coverage ensures we can provide rapid response times across the Wasatch Front. Whether you're in downtown Salt Lake City or the suburbs of Davis and Weber counties, we're never far away.
              </p>
            </div>
          </div>
        </div>

        <!-- Services We Provide Section -->
        <div class="mb-16">
          <h2 class="text-3xl md:text-4xl font-black leading-tight mb-8 text-gray-800 uppercase tracking-tight text-center">
            Services Available in All Areas
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-2xl shadow-lg">
              <h3 class="text-lg font-bold text-gray-800 mb-3">Mailbox Installation</h3>
              <p class="text-gray-700">Complete mailbox makeovers starting at $380 with professional installation and quality materials.</p>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-lg">
              <h3 class="text-lg font-bold text-gray-800 mb-3">Repair Services</h3>
              <p class="text-gray-700">Fast repairs for damaged mailboxes, including post replacement, door fixes, and weatherproofing.</p>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-lg">
              <h3 class="text-lg font-bold text-gray-800 mb-3">Brick Restoration</h3>
              <p class="text-gray-700">Specialized brick and stone mailbox restoration to bring your masonry mailbox back to life.</p>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-lg">
              <h3 class="text-lg font-bold text-gray-800 mb-3">Custom Designs</h3>
              <p class="text-gray-700">Tailored mailbox solutions to match your home's style and enhance your curb appeal.</p>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-lg">
              <h3 class="text-lg font-bold text-gray-800 mb-3">Emergency Repairs</h3>
              <p class="text-gray-700">Same-day estimates and next-day repairs for urgent mailbox damage from accidents or vandalism.</p>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-lg">
              <h3 class="text-lg font-bold text-gray-800 mb-3">Maintenance</h3>
              <p class="text-gray-700">Ongoing maintenance services to keep your mailbox looking great year-round.</p>
            </div>
          </div>
        </div>

        <!-- Contact CTA Section -->
        <div class="text-center bg-white p-8 rounded-3xl shadow-lg">
          <h2 class="text-3xl md:text-4xl font-black leading-tight mb-6 text-gray-800 uppercase tracking-tight">
            Ready to Get Started?
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-8">
            No matter which service area you're in, we're here to help transform your mailbox and enhance your curb appeal. Contact us today for your free estimate!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:3852075487" class="inline-block bg-[#e9ca5d] text-gray-800 px-10 py-3 text-lg font-semibold no-underline rounded transition-all duration-300 hover:-translate-y-1">
              Call (385) 207-5487
            </a>
            <NuxtLink to="/contact" class="inline-block bg-gray-800 text-[#fcf7e8] px-10 py-3 text-lg font-semibold no-underline rounded transition-all duration-300 hover:-translate-y-1">
              Get Free Quote
            </NuxtLink>
          </div>
        </div>

      </div>
    </section>

    <TheFooter />
  </div>
</template>

<script setup>
// Service Areas index page component

useSeoMeta({
  title: 'Service Areas - Mailbox Services Across Northern Utah | Riley\'s Mailboxes',
  description: 'Riley\'s Mailboxes serves Salt Lake City, Davis County, and Weber County with professional mailbox installation, repair, and renovation services. Over 20 years of local expertise.',
  ogTitle: 'Service Areas - Mailbox Services Across Northern Utah | Riley\'s Mailboxes',
  ogDescription: 'Riley\'s Mailboxes serves Salt Lake City, Davis County, and Weber County with professional mailbox installation, repair, and renovation services. Over 20 years of local expertise.',
  ogImage: '/images/meta/default-og.png',
  ogUrl: 'https://rileysmailboxes.com/service-areas',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Service Areas - Mailbox Services Across Northern Utah | Riley\'s Mailboxes',
  twitterDescription: 'Riley\'s Mailboxes serves Salt Lake City, Davis County, and Weber County with professional mailbox installation, repair, and renovation services. Over 20 years of local expertise.',
  twitterImage: '/images/meta/default-og.png'
})
</script>
