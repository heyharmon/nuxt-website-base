#!/usr/bin/env node
import fs from 'fs'
import path from 'path'

const migrations = {
  replaceColors: {
    '#e9ca5d': 'theme.colors.primary.DEFAULT',
    '#d6ab13': 'theme.colors.primary.hover',
    '#fcf7e8': 'theme.colors.primary.light',
    'bg-[#e9ca5d]': 'bg-primary',
    'bg-[#fcf7e8]': 'bg-surface-primary',
    'text-gray-800': 'text-text-primary',
    'text-gray-700': 'text-text-secondary',
    'text-gray-600': 'text-text-muted'
  },
  replaceSpacing: {
    'py-20': 'section-spacing-lg',
    'py-16': 'section-spacing-md',
    'py-12': 'section-spacing-sm',
    'max-w-7xl': 'container-lg',
    'max-w-6xl': 'container-md',
    'max-w-4xl': 'container-sm'
  },
  replaceRadii: {
    'rounded-3xl': 'rounded-card',
    'rounded-lg': 'rounded-button',
    'rounded-full': 'rounded-badge'
  }
}

function migrateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8')
  let modified = false
  Object.entries(migrations.replaceColors).forEach(([old, replacement]) => {
    if (content.includes(old)) {
      content = content.replace(new RegExp(old, 'g'), replacement)
      modified = true
      console.log(`  \u2713 Replaced ${old} with ${replacement}`)
    }
  })
  Object.entries(migrations.replaceSpacing).forEach(([old, replacement]) => {
    if (content.includes(old)) {
      content = content.replace(new RegExp(old, 'g'), replacement)
      modified = true
      console.log(`  \u2713 Replaced ${old} with ${replacement}`)
    }
  })
  Object.entries(migrations.replaceRadii).forEach(([old, replacement]) => {
    if (content.includes(old)) {
      content = content.replace(new RegExp(old, 'g'), replacement)
      modified = true
      console.log(`  \u2713 Replaced ${old} with ${replacement}`)
    }
  })
  if (modified) {
    fs.writeFileSync(filePath, content)
    console.log(`\u2705 Migrated: ${filePath}`)
  }
}

function migrateDirectory(dir) {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      migrateDirectory(filePath)
    } else if (file.endsWith('.vue') || file.endsWith('.js')) {
      console.log(`\nProcessing: ${filePath}`)
      migrateFile(filePath)
    }
  })
}

console.log('\u{1F680} Starting migration to template system...')
migrateDirectory('./components')
migrateDirectory('./pages')
console.log('\n\u2728 Migration complete!')
