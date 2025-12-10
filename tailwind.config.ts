import type { Config } from "tailwindcss";
import { tokens } from "./src/styles/design-tokens"; // 👈 素材をインポート！

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // ここでは値を直書きせず、tokens変数を参照するだけ
      colors: {
        brand: {
          primary: tokens.colors.brand.primary,
          "primary-hover": tokens.colors.brand.primaryHover,
          secondary: tokens.colors.brand.secondary,
          accent: tokens.colors.brand.accent,
        },
        surface: {
          DEFAULT: tokens.colors.surface.default,
          subtle: tokens.colors.surface.subtle,
          hover: tokens.colors.surface.hover,
        },
        muted: tokens.colors.muted,
        text: tokens.colors.text,
        state: tokens.colors.state,
        border: tokens.colors.border,
      },
      borderRadius: tokens.radius,
      spacing: tokens.spacing,
    },
  },
  plugins: [],
};

export default config;
