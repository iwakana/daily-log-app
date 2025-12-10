// design-tokens.ts
//   Design System - Canonical Token Store
// Version 2.0 FINAL

export const tokens = {
  color: {
    // ブランド
    "bg-brand-primary": "#0ea5e9",
    "bg-brand-secondary": "#6366f1",
    "bg-brand-accent": "#a78bfa",

    // 背景
    "bg-surface": "#ffffff",
    "bg-surface-muted": "#f1f5f9",

    // テキスト
    "text-primary": "#0f172a",
    "text-secondary": "#475569",

    // ボーダー
    "border-default": "#e6edf3",

    // ステータス
    "bg-success": "#16a34a",
    "bg-warning": "#facc15",
    "bg-danger": "#dc2626",

    // オーバーレイ
    "overlay-dark": "rgba(0, 0, 0, 0.5)",
  },

  spacing: {
    s: "8px",
    m: "16px",
    l: "24px",
    xl: "48px",

    "gap-s": "8px",
    "gap-m": "16px",
    "gap-l": "24px",
  },

  radius: {
    s: "6px",
    m: "8px",
    l: "12px",
  },

  shadow: {
    card: "0 6px 14px rgba(2, 6, 23, 0.04)",
    elevated: "0 10px 20px rgba(2, 6, 23, 0.08)",
  },

  typography: {
    h1: "2.5rem", // 40px
    h2: "2rem", // 32px
    h3: "1.5rem", // 24px
    body: "1rem", // 16px
    small: "0.875rem", // 14px
  },

  size: {
    "touch-min": "44px", // WCAG タッチターゲット最小サイズ
  },
} as const;

export type Tokens = typeof tokens;
