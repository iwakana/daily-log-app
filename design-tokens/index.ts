// design-tokens/index.ts
import figmaTokens from "./figma-export.json";

// Figma の構造を Next.js 用に変換
export function convertFigmaTokens(figmaJson: any) {
  return {
    color: {
      "bg-brand-primary": figmaJson.color.brand.primary.value,
      "bg-brand-secondary": figmaJson.color.brand.secondary.value,
      "bg-surface": figmaJson.color.surface.default.value,
      // ...
    },
    spacing: {
      s: figmaJson.spacing.small.value,
      m: figmaJson.spacing.medium.value,
      l: figmaJson.spacing.large.value,
      // ...
    },
    radius: {
      s: figmaJson.borderRadius.small.value,
      m: figmaJson.borderRadius.medium.value,
      l: figmaJson.borderRadius.large.value,
    },
    shadow: {
      card: figmaJson.shadow.card.value,
      elevated: figmaJson.shadow.elevated.value,
    },
  } as const;
}

export const tokens = convertFigmaTokens(figmaTokens);
