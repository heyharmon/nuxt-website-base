// This file contains all theme configuration for the website
// It will be the ONLY file that needs to be modified for visual customization
export default {
  // Brand Identity
  brand: {
    name: 'Company Name',
    tagline: 'Your tagline here',
    logo: {
      light: '/images/logo-light.svg',
      dark: '/images/logo-dark.svg',
      height: 'h-16 md:h-20'
    }
  },

  // Color System
  colors: {
    primary: {
      DEFAULT: '#e9ca5d',
      hover: '#d6ab13',
      light: '#fcf7e8',
      dark: '#c9a50f'
    },
    secondary: {
      DEFAULT: '#6B7280',
      hover: '#4B5563',
      light: '#F3F4F6',
      dark: '#374151'
    },
    neutral: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717'
    },
    surface: {
      primary: '#fcf7e8',
      secondary: '#FFFFFF',
      tertiary: '#F9FAFB'
    },
    text: {
      primary: '#262626',
      secondary: '#525252',
      inverse: '#FFFFFF',
      muted: '#737373'
    },
    overlay: {
      dark: 'rgba(0, 0, 0, 0.6)',
      darker: 'rgba(0, 0, 0, 0.8)',
      light: 'rgba(255, 255, 255, 0.9)'
    }
  },

  // Typography System
  typography: {
    fonts: {
      sans: 'system-ui, -apple-system, sans-serif',
      display: 'system-ui, -apple-system, sans-serif'
    },
    sizes: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl md:text-4xl',
      '4xl': 'text-4xl md:text-5xl lg:text-6xl',
      '5xl': 'text-5xl md:text-6xl lg:text-7xl'
    },
    weights: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      black: 'font-black'
    },
    transforms: {
      none: '',
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize'
    },
    tracking: {
      normal: '',
      tight: 'tracking-tight',
      wide: 'tracking-wide',
      wider: 'tracking-wider'
    }
  },

  // Spacing System
  spacing: {
    sections: {
      sm: 'py-12',
      md: 'py-16',
      lg: 'py-20',
      xl: 'py-24'
    },
    containers: {
      padding: 'px-4 sm:px-6 lg:px-8',
      maxWidth: {
        sm: 'max-w-3xl',
        md: 'max-w-5xl',
        lg: 'max-w-7xl',
        xl: 'max-w-[1600px]'
      }
    }
  },

  // Border Radius System
  radius: {
    none: 'rounded-none',
    sm: 'rounded',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    xl: 'rounded-2xl',
    '2xl': 'rounded-3xl',
    full: 'rounded-full',
    button: 'rounded-lg',
    card: 'rounded-2xl',
    input: 'rounded-lg',
    badge: 'rounded-full',
    image: 'rounded-2xl'
  },

  // Shadow System
  shadows: {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    card: 'shadow-lg',
    button: 'shadow-md hover:shadow-lg',
    input: 'shadow-sm'
  },

  // Component Styles
  components: {
    buttons: {
      base: 'inline-block font-semibold transition-all duration-300 no-underline',
      sizes: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        xl: 'px-10 py-5 text-xl'
      },
      variants: {
        primary: {
          base: 'bg-primary text-neutral-800',
          hover: 'hover:bg-primary-hover hover:-translate-y-1'
        },
        secondary: {
          base: 'bg-neutral-800 text-white',
          hover: 'hover:bg-neutral-700 hover:-translate-y-1'
        },
        outline: {
          base: 'border-2 border-current bg-transparent',
          hover: 'hover:bg-white hover:text-neutral-800'
        },
        ghost: {
          base: 'bg-transparent',
          hover: 'hover:bg-neutral-100'
        }
      }
    },
    inputs: {
      base: 'w-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
      sizes: {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-3 text-base',
        lg: 'px-6 py-4 text-lg'
      }
    },
    cards: {
      base: 'bg-white overflow-hidden',
      padding: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8'
      }
    },
    badges: {
      base: 'inline-flex items-center justify-center font-semibold',
      sizes: {
        sm: 'w-6 h-6 text-xs',
        md: 'w-12 h-12 text-sm',
        lg: 'w-16 h-16 text-base'
      }
    },
    navigation: {
      link: {
        base: 'font-medium transition-opacity duration-300 no-underline',
        hover: 'hover:opacity-80'
      },
      mobile: {
        background: 'bg-neutral-900/95 backdrop-blur-sm',
        link: 'block py-2'
      }
    },
    hero: {
      overlay: 'bg-gradient-to-b from-black/60 to-black/40',
      heights: {
        sm: 'h-[40vh] min-h-[400px]',
        md: 'h-[60vh] min-h-[500px]',
        lg: 'h-[70vh] min-h-[600px]',
        xl: 'h-[80vh] min-h-[700px]'
      }
    }
  },

  // Animation presets
  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    },
    easing: {
      default: 'ease-in-out',
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  }
}
