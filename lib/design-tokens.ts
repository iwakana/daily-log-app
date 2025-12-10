/**
 *   Design System Tokens
 * PART A: Token Definitions (公式定義)
 *
 * このファイルは各コンポーネントがインポートしトークン値を参照する
 * Raw値（#hex, px）はここにのみ存在し、JSX側には存在しない
 */

export const tokens = {
  // ==================== COLOR TOKENS ====================
  color: {
    // Brand Colors
    // Note: keep these aligned with `tailwind.config.ts` color palette
    "bg-brand-primary": "#f472b6", // Soft Pink (主色) - matches tailwind.config
    "bg-brand-secondary": "#60a5fa", // Pastel Blue (副色)
    "bg-brand-accent": "#fcd34d", // Cream Yellow (アクセント)
    // Additional palette used in settings theme swatches
    "bg-palette-green": "#34d399",
    "bg-palette-yellow": "#fbbf24",

    // Surface Colors
    "bg-surface": "#ffffff", // White - Clean
    "bg-surface-muted": "#f8fafc", // Slate 50 - Subtle background

    // Text Colors
    "text-primary": "#0f172a", // Slate 900 - High contrast
    "text-secondary": "#475569", // Slate 600 - Readable secondary
    "text-tertiary": "#94a3b8", // Slate 400 - Subtle

    // Semantic Colors
    "text-success": "#059669", // Green - Success
    "text-warning": "#d97706", // Amber - Warning
    "text-danger": "#dc2626", // Red - Danger

    // UI Colors
    "bg-success": "#ecfdf5", // Green background
    "bg-warning": "#fffbeb", // Amber background
    "bg-danger": "#fef2f2", // Red background
    "border-default": "#e2e8f0", // Slate 200 - Default border

    // Interactive
    "bg-hover": "#f1f5f9", // Slate 100 - Hover state
  },

  // ==================== SPACING TOKENS ====================
  spacing: {
    "p-s": "8px",
    "p-m": "16px",
    "p-l": "24px",
    "p-xl": "48px",
    "gap-s": "8px",
    "gap-m": "16px",
    "gap-l": "24px",
  },

  // ==================== RADIUS TOKENS ====================
  radius: {
    "rounded-s": "4px",
    "rounded-m": "8px",
    // NOTE: "rounded-l" is deprecated project-wide for card panels.
    // Keep a backwards-compatible alias but prefer `rounded-m`.
    "rounded-l": "8px", // DEPRECATED: alias of rounded-m
  },

  // ==================== SHADOW TOKENS ====================
  shadow: {
    "shadow-card": "0 4px 12px rgba(15, 23, 42, 0.08)",
    "shadow-elevated": "0 10px 24px rgba(15, 23, 42, 0.12)",
  },

  // ==================== TYPOGRAPHY TOKENS ====================
  typography: {
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
    // Additional typography tokens
    "hero-emoji-size": "40px",
  },

  // ==================== SIZE TOKENS ====================
  size: {
    "touch-min": "44px", // Accessibility: minimum touch target
    "container-max": "1200px",
    // Additional layout/size tokens used in Diagnosis page
    "hero-max": "600px",
    "feature-max": "500px",
    "card-min": "280px",
    "process-min": "240px",
    "icon-60": "60px",
  },

  // ==================== BORDER TOKENS ====================
  border: {
    "width-default": "1px",
  },

} as const;

/**
 * AUDIT LOG (PART D) - Token Definition Stage
 * ENTRY D-TOKEN-001: All tokens defined in canonical form at lib/design-tokens.ts
 * ENTRY D-TOKEN-002: Raw values (#hex, px) centralized - no direct values in JSX
 * ENTRY D-TOKEN-003: Semantic naming convention applied (e.g., bg-brand-primary, p-m, shadow-card)
 * ENTRY D-TOKEN-004: All required tokens available per Nalerva DS spec
 */
