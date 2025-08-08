import themeConfig from '~/config/theme.config'
import siteConfig from '~/config/site.config'

export const useTheme = () => {
  const getThemeValue = (path, defaultValue = '') => {
    const keys = path.split('.')
    let value = themeConfig
    for (const key of keys) {
      value = value?.[key]
      if (value === undefined) return defaultValue
    }
    return value
  }

  const buildClasses = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }

  const getButtonClasses = (variant = 'primary', size = 'md', customClasses = '') => {
    const base = themeConfig.components.buttons.base
    const sizeClasses = themeConfig.components.buttons.sizes[size]
    const variantClasses = themeConfig.components.buttons.variants[variant]
    const radius = themeConfig.radius.button

    return buildClasses(
      base,
      sizeClasses,
      variantClasses?.base,
      variantClasses?.hover,
      radius,
      customClasses
    )
  }

  const getInputClasses = (size = 'md', customClasses = '') => {
    const base = themeConfig.components.inputs.base
    const sizeClasses = themeConfig.components.inputs.sizes[size]
    const radius = themeConfig.radius.input

    return buildClasses(base, sizeClasses, radius, customClasses)
  }

  const getCardClasses = (padding = 'md', customClasses = '') => {
    const base = themeConfig.components.cards.base
    const paddingClasses = themeConfig.components.cards.padding[padding]
    const radius = themeConfig.radius.card
    const shadow = themeConfig.shadows.card

    return buildClasses(base, paddingClasses, radius, shadow, customClasses)
  }

  const getSectionClasses = (spacing = 'lg', background = 'surface.primary') => {
    const spacingClasses = themeConfig.spacing.sections[spacing]
    const bgColor = getBackgroundColor(background)
    return buildClasses(spacingClasses, bgColor)
  }

  const getContainerClasses = (maxWidth = 'lg') => {
    const padding = themeConfig.spacing.containers.padding
    const width = themeConfig.spacing.containers.maxWidth[maxWidth]
    return buildClasses(width, 'mx-auto', padding)
  }

  const getBackgroundColor = (color) => {
    if (color.includes('.')) {
      const [category, shade] = color.split('.')
      const colorValue = themeConfig.colors[category]?.[shade]
      if (colorValue) {
        return `bg-[${colorValue}]`
      }
    }
    return `bg-${color}`
  }

  const getTextColor = (color) => {
    if (color.includes('.')) {
      const [category, shade] = color.split('.')
      const colorValue = themeConfig.colors[category]?.[shade]
      if (colorValue) {
        return `text-[${colorValue}]`
      }
    }
    return `text-${color}`
  }

  const getHeadingClasses = (level = 1, customClasses = '') => {
    const sizeMap = {
      1: themeConfig.typography.sizes['5xl'],
      2: themeConfig.typography.sizes['4xl'],
      3: themeConfig.typography.sizes['3xl'],
      4: themeConfig.typography.sizes['2xl'],
      5: themeConfig.typography.sizes.xl,
      6: themeConfig.typography.sizes.lg
    }
    const size = sizeMap[level] || themeConfig.typography.sizes['3xl']
    const weight = themeConfig.typography.weights.black
    const tracking = themeConfig.typography.tracking.tight
    const transform = themeConfig.typography.transforms.uppercase
    return buildClasses(size, weight, tracking, transform, customClasses)
  }

  const getParagraphClasses = (size = 'base', customClasses = '') => {
    const sizeClass = themeConfig.typography.sizes[size]
    return buildClasses(sizeClass, customClasses)
  }

  return {
    theme: themeConfig,
    site: siteConfig,
    getThemeValue,
    buildClasses,
    getButtonClasses,
    getInputClasses,
    getCardClasses,
    getSectionClasses,
    getContainerClasses,
    getBackgroundColor,
    getTextColor,
    getHeadingClasses,
    getParagraphClasses
  }
}
