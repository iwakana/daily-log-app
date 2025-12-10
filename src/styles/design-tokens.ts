// AUTO-GENERATED: Tailwind Adapter for Design Tokens
// Source: design-tokens.ts (Canonical Source of Truth)
// ⚠️  DO NOT EDIT MANUALLY — run "npm run sync-tokens" to regenerate
//
// This file bridges canonical design tokens to Tailwind theme.extend

export const tokens = {
  "color": {
    "bg-brand-primary": "var(--color-brand-primary)",
    "bg-brand-secondary": "var(--color-brand-secondary)",
    "bg-brand-accent": "var(--color-brand-accent)",
    "bg-palette-green": "var(--color-palette-green)",
    "bg-palette-yellow": "var(--color-palette-yellow)",
    "bg-surface": "var(--color-surface)",
    "bg-surface-muted": "var(--color-surface-muted)",
    "text-primary": "#0f172a",
    "text-secondary": "#475569",
    "text-tertiary": "#94a3b8",
    "text-success": "#059669",
    "text-warning": "#d97706",
    "text-danger": "#dc2626",
    "bg-success": "#ecfdf5",
    "bg-warning": "#fffbeb",
    "bg-danger": "#fef2f2",
    "border-default": "#e2e8f0",
    "bg-hover": "#f1f5f9"
  },
  "spacing": {
    "p-s": "8px",
    "p-m": "16px",
    "p-l": "24px",
    "p-xl": "48px",
    "gap-s": "8px",
    "gap-m": "16px",
    "gap-l": "24px",
    "s": "8px",
    "m": "16px",
    "l": "24px",
    "xl": "48px"
  },
  "radius": {
    "rounded-s": "4px",
    "rounded-m": "8px",
    "rounded-l": "8px"
  },
  "shadow": {
    "shadow-card": "0 4px 12px rgba(15, 23, 42, 0.08)",
    "shadow-elevated": "0 10px 24px rgba(15, 23, 42, 0.12)"
  },
  "typography": {
    "h1-size": "36px",
    "h1-weight": 700,
    "h2-size": "28px",
    "h2-weight": 700,
    "h3-size": "20px",
    "h3-weight": 600,
    "body-size": "16px",
    "body-weight": 400,
    "small-size": "14px",
    "small-weight": 400,
    "caption-size": "12px",
    "caption-weight": 500,
    "hero-emoji-size": "40px"
  },
  "size": {
    "touch-min": "44px",
    "container-max": "1200px",
    "hero-max": "600px",
    "feature-max": "500px",
    "card-min": "280px",
    "process-min": "240px",
    "icon-60": "60px"
  },
  "border": {
    "width-default": "1px"
  },
  "lineHeight": {
    "leading-none": 1,
    "leading-tight": 1.25,
    "leading-normal": 1.5,
    "leading-relaxed": 1.625
  },
  "fontFamily": {
    "font-accent": "Borel"
  },
  "colors": {
    "brand": {
      "primary": "var(--color-brand-primary)",
      "secondary": "var(--color-brand-secondary)",
      "accent": "var(--color-brand-accent)",
      "primary-hover": "#f1f5f9"
    },
    "surface": {
      "DEFAULT": "var(--color-surface)",
      "subtle": "var(--color-surface-muted)",
      "hover": "#f1f5f9"
    },
    "text": {
      "primary": "#0f172a",
      "secondary": "#475569",
      "tertiary": "#94a3b8"
    },
    "state": {
      "success": "#059669",
      "warning": "#d97706",
      "danger": "#dc2626"
    },
    "border": "#e2e8f0"
  },
  "borderRadius": {
    "s": "4px",
    "m": "8px",
    "l": "8px"
  }
} as const;

export type Tokens = typeof tokens;
