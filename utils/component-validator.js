export class ComponentValidator {
  constructor() {
    this.errors = []
    this.warnings = []
  }

  validateComponent(componentCode) {
    const colorPatterns = [
      /#[0-9a-fA-F]{3,6}/g,
      /rgb\(/g,
      /bg-\[#/g,
      /text-\[#/g
    ]
    colorPatterns.forEach(pattern => {
      if (pattern.test(componentCode)) {
        this.warnings.push('Component contains hardcoded colors. Use theme variables instead.')
      }
    })

    const spacingPatterns = [
      /p[xy]?-[0-9]{2,}/g,
      /m[xy]?-[0-9]{2,}/g
    ]
    spacingPatterns.forEach(pattern => {
      if (pattern.test(componentCode)) {
        this.warnings.push('Component contains hardcoded spacing. Consider using theme spacing.')
      }
    })

    if (/style="/g.test(componentCode)) {
      this.errors.push('Component contains inline styles. Use classes instead.')
    }

    if (!/defineProps/g.test(componentCode)) {
      this.errors.push('Component missing prop definitions.')
    }

    return {
      valid: this.errors.length === 0,
      errors: this.errors,
      warnings: this.warnings
    }
  }
}
