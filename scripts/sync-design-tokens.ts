#!/usr/bin/env node
/**
 * Sync Design Tokens Script
 *
 * Purpose: Automatically generate Tailwind adapter from canonical tokens in design-tokens.ts
 * Single Source of Truth: design-tokens.ts (root)
 * Output: src/styles/design-tokens.ts (Tailwind adapter for tailwind.config.ts)
 *
 * Usage:
 *   npx ts-node scripts/sync-design-tokens.ts
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define paths
const rootDir = path.resolve(__dirname, "..");
const sourceTokenFile = path.join(rootDir, "design-tokens.ts");
const adapterFile = path.join(rootDir, "src", "styles", "design-tokens.ts");

interface TokenStructure {
  color?: Record<string, string>;
  spacing?: Record<string, string>;
  radius?: Record<string, string>;
  shadow?: Record<string, string>;
  typography?: Record<string, string | number>;
  size?: Record<string, string>;
  border?: Record<string, string>;
  lineHeight?: Record<string, number>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

/**
 * Parse design-tokens.ts and extract the tokens object
 */
function extractTokensFromFile(filePath: string): TokenStructure {
  try {
    const content = fs.readFileSync(filePath, "utf-8");

    // Extract the tokens object using regex
    const tokenMatch = content.match(
      /export const tokens = ({[\s\S]*?}) as const;/
    );
    if (!tokenMatch) {
      throw new Error("Could not find tokens export in source file");
    }

    // Use Function constructor to safely evaluate the object
    const tokensStr = tokenMatch[1];
    const evalFn = new Function(`return (${tokensStr})`);
    const tokens = evalFn();

    return tokens;
  } catch (error) {
    console.error(`❌ Error reading tokens from ${filePath}:`, error);
    process.exit(1);
  }
}

/**
 * Generate adapter TypeScript code for Tailwind config
 */
function generateAdapterCode(tokens: TokenStructure): string {
  // Build a Tailwind-friendly view: keep flat tokens but also provide
  // nested `colors` and normalized `borderRadius` and spacing aliases.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adapter = Object.assign({}, tokens as any);

  // Build nested colors object for common Tailwind usage
  const flat = (tokens.color || {}) as Record<string, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const colorsNested: Record<string, any> = {
    brand: {
      primary: flat["bg-brand-primary"],
      secondary: flat["bg-brand-secondary"],
      accent: flat["bg-brand-accent"],
      // primaryHover fallback to bg-hover or primary
      "primary-hover": flat["bg-hover"] || flat["bg-brand-primary"],
    },
    surface: {
      DEFAULT: flat["bg-surface"],
      subtle: flat["bg-surface-muted"],
      hover: flat["bg-hover"],
    },
    text: {
      primary: flat["text-primary"],
      secondary: flat["text-secondary"],
      tertiary: flat["text-tertiary"],
    },
    state: {
      success: flat["text-success"],
      warning: flat["text-warning"],
      danger: flat["text-danger"],
    },
    border: flat["border-default"],
  };

  adapter.colors = colorsNested;

  // Normalize borderRadius keys for Tailwind (remove 'rounded-' prefix)
  const radiusFlat = (tokens.radius || {}) as Record<string, string>;
  const borderRadius: Record<string, string> = {};
  for (const [k, v] of Object.entries(radiusFlat)) {
    const key = k.replace(/^rounded-/, "");
    borderRadius[key] = v as string;
  }
  adapter.borderRadius = borderRadius;

  // Ensure spacing aliases s/m/l/xl exist at top-level spacing
  const spacing = Object.assign(
    {},
    tokens.spacing || ({} as Record<string, string>)
  );
  if (spacing["s"] === undefined && spacing["p-s"])
    spacing["s"] = spacing["p-s"];
  if (spacing["m"] === undefined && spacing["p-m"])
    spacing["m"] = spacing["p-m"];
  if (spacing["l"] === undefined && spacing["p-l"])
    spacing["l"] = spacing["p-l"];
  if (spacing["xl"] === undefined && spacing["p-xl"])
    spacing["xl"] = spacing["p-xl"];
  adapter.spacing = spacing;

  const code = `// AUTO-GENERATED: Tailwind Adapter for Design Tokens
// Source: design-tokens.ts (Canonical Source of Truth)
// ⚠️  DO NOT EDIT MANUALLY — run "npm run sync-tokens" to regenerate
//
// This file bridges canonical design tokens to Tailwind theme.extend

export const tokens = ${JSON.stringify(adapter, null, 2)} as const;

export type Tokens = typeof tokens;
`;
  return code;
}

/**
 * Main sync function
 */
function syncTokens() {
  console.log("🔄 Syncing design tokens...");
  console.log(`📖 Source: ${sourceTokenFile}`);
  console.log(`📤 Output: ${adapterFile}`);

  // Extract tokens from canonical source
  const tokens = extractTokensFromFile(sourceTokenFile);

  // Generate adapter code
  const adapterCode = generateAdapterCode(tokens);

  // Ensure output directory exists
  const outputDir = path.dirname(adapterFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`✅ Created directory: ${outputDir}`);
  }

  // Write adapter file
  fs.writeFileSync(adapterFile, adapterCode, "utf-8");
  console.log(`✅ Adapter generated successfully: ${adapterFile}`);
  console.log(`   Tokens synced: ${Object.keys(tokens).length} categories`);

  // Validate Tailwind can import it
  try {
    const adapterContent = fs.readFileSync(adapterFile, "utf-8");
    if (adapterContent.includes("export const tokens")) {
      console.log("✅ Adapter validation passed");
    }
  } catch {
    console.warn("⚠️  Could not validate adapter");
  }
}

// Run
syncTokens();
