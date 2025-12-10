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
      // ここでは値を直書きせず、auto-generated adapter の形 (`tokens.color`, `tokens.radius`, `tokens.spacing`) を参照
      colors: {
        brand: {
          primary: tokens.color["bg-brand-primary"],
          "primary-hover":
            tokens.color["bg-hover"] || tokens.color["bg-brand-primary"],
          secondary: tokens.color["bg-brand-secondary"],
          accent: tokens.color["bg-brand-accent"],
        },
        surface: {
          DEFAULT: tokens.color["bg-surface"],
          subtle: tokens.color["bg-surface-muted"],
          hover: tokens.color["bg-hover"],
        },
        muted: tokens.color["bg-surface-muted"],
        text: {
          primary: tokens.color["text-primary"],
          secondary: tokens.color["text-secondary"],
          tertiary: tokens.color["text-tertiary"],
        },
        state: {
          success: tokens.color["text-success"],
          warning: tokens.color["text-warning"],
          danger: tokens.color["text-danger"],
        },
        border: tokens.color["border-default"],
      },
      // Normalize radius keys: strip leading `rounded-` so Tailwind generates
      // utilities like `rounded-m` instead of `rounded-rounded-m`.
      borderRadius: Object.fromEntries(
        Object.entries(tokens.radius || {}).map(([k, v]) => [
          k.replace(/^rounded-/, ""),
          v,
        ])
      ),
      spacing: tokens.spacing,
      fontFamily: {
        accent: [tokens.fontFamily["font-accent"], "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
