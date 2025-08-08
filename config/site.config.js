// Site-specific configuration (content, metadata, etc.)
export default {
  meta: {
    title: 'Your Company Name',
    description: 'Your company description',
    url: 'https://yoursite.com',
    image: '/images/meta/default-og.png'
  },
  contact: {
    phone: '(555) 123-4567',
    email: 'hello@yoursite.com',
    address: 'Your City, State'
  },
  social: {
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: ''
  },
  forms: {
    contact: 'https://usebasin.com/f/YOUR_FORM_ID',
    booking: 'https://usebasin.com/f/YOUR_FORM_ID'
  },
  navigation: {
    header: [
      { label: 'About', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Contact', path: '/contact' }
    ],
    footer: [
      {
        title: 'Company',
        links: [
          { label: 'About', path: '/about' },
          { label: 'Services', path: '/services' }
        ]
      },
      {
        title: 'Support',
        links: [
          { label: 'Contact', path: '/contact' },
          { label: 'FAQ', path: '/faq' }
        ]
      }
    ]
  },
  features: {
    booking: true,
    blog: false,
    testimonials: true,
    gallery: true
  }
}
