# Website Template System Guide

## Quick Start for New Sites

1. **Fork the template repository**
2. **Update configuration files:**
   - `config/theme.config.js` - Visual styling
   - `config/site.config.js` - Site information
3. **Add your content to pages**
4. **Deploy**

## Configuration System

### Theme Configuration
All visual customization is handled in `config/theme.config.js`:
- Colors
- Typography
- Spacing
- Border radius
- Shadows
- Component styles

### Site Configuration
Site-specific settings in `config/site.config.js`:
- Metadata
- Contact information
- Social links
- Navigation structure
- Form endpoints
- Feature flags

## Component Guidelines

### Using Components
```vue
<template>
  <Hero
    title="Your Title"
    description="Your description"
    variant="default"
    height="lg"
    cta-variant="primary"
  />
</template>
```

### Component Props
- **Content props**: Text, images, links
- **Variant props**: Visual style variations
- **Size props**: Component sizing options
- **Behavior props**: Interactive behavior

## Customization Levels

### Level 1: Configuration Only
- Change colors in theme config
- Update fonts and typography
- Adjust spacing and sizing

### Level 2: Content Structure
- Modify page layouts
- Rearrange components
- Add or remove sections

### Level 3: Component Extension
- Create site-specific components
- Extend existing components
- Add new functionality

## Best Practices

### DO:
- Use theme variables for all styling
- Keep components generic and reusable
- Use semantic prop names
- Document customizations
- Test updates from parent template

### DON'T:
- Hardcode colors or spacing
- Modify core components directly
- Use inline styles
- Break the configuration contract

## Updating from Parent Template

1. **Add parent as remote:**
   ```bash
   git remote add template https://github.com/your-org/template.git
   ```
2. **Fetch updates:**
   ```bash
   git fetch template
   ```
3. **Merge updates:**
   ```bash
   git merge template/main --allow-unrelated-histories
   ```
4. **Resolve conflicts:**
   - Keep site-specific changes
   - Accept component updates
   - Test thoroughly

## Component Stability Contract

### Guaranteed Stable
- Component prop interfaces
- Theme configuration structure
- Composable APIs
- Default behaviors

### May Change
- Internal component implementation
- Performance optimizations
- Additional prop options
- New features

### Never Changes
- Existing prop names
- Configuration file structure
- Basic component behavior
- Semantic versioning
