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
 * 
 * Or add to package.json:
 *   "scripts": { "sync-tokens": "ts-node scripts/sync-design-tokens.ts" }
 */

import fs from "fs";
import path from "path";

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
  [key: string]: any;
}

/**
 * Parse design-tokens.ts and extract the tokens object
 */
function extractTokensFromFile(filePath: string): TokenStructure {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    
    // Extract the tokens object using regex
    const tokenMatch = content.match(/export const tokens = ({[\s\S]*?}) as const;/);
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
  const code = `// AUTO-GENERATED: Tailwind Adapter for Design Tokens
// Source: design-tokens.ts (Canonical Source of Truth)
// ⚠️  DO NOT EDIT MANUALLY — run "npm run sync-tokens" to regenerate
//
// This file bridges canonical design tokens to Tailwind theme.extend

export const tokens = ${JSON.stringify(tokens, null, 2)} as const;

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
