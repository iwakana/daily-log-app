export const THEMES = {
  pink: {
    label: "Pink (Default)",
    colors: {
      "--color-brand-primary": "#f472b6", // Soft Pink
      "--color-brand-secondary": "#60a5fa", // Pastel Blue
      "--color-brand-accent": "#fcd34d", // Cream Yellow
    },
  },
  blue: {
    label: "Blue",
    colors: {
      "--color-brand-primary": "#60a5fa", // Blue
      "--color-brand-secondary": "#f472b6", // Pink
      "--color-brand-accent": "#34d399", // Green
    },
  },
  green: {
    label: "Green",
    colors: {
      "--color-brand-primary": "#34d399", // Emerald
      "--color-brand-secondary": "#fbbf24", // Amber
      "--color-brand-accent": "#60a5fa", // Blue
    },
  },
  orange: {
    label: "Orange",
    colors: {
      "--color-brand-primary": "#fbbf24", // Amber
      "--color-brand-secondary": "#f472b6", // Pink
      "--color-brand-accent": "#34d399", // Green
    },
  },
};

export type ThemeKey = keyof typeof THEMES;
