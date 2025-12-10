# Token Synchronization Guide

## Overview

The **`sync-design-tokens`** script automatically generates the Tailwind adapter (`src/styles/design-tokens.ts`) from the canonical token source (`design-tokens.ts`).

**Single Source of Truth**: `design-tokens.ts` (project root)

**Adapter Output**: `src/styles/design-tokens.ts` (used by `tailwind.config.ts`)

---

## Usage

### Manual Sync

```bash
npm run sync-tokens
```

### Auto-Sync on Build

The build command automatically syncs tokens before building:

```bash
npm run build
```

This ensures `src/styles/design-tokens.ts` is always up-to-date before Tailwind processes it.

---

## Workflow

1. **Edit canonical tokens** in `design-tokens.ts`

   ```typescript
   export const tokens = {
     color: {
       /* ... */
     },
     spacing: {
       /* ... */
     },
     // ...
   } as const;
   ```

2. **Run sync** before development or build:

   ```bash
   npm run sync-tokens
   # or simply
   npm run build
   ```

3. **Adapter is generated** at `src/styles/design-tokens.ts`:

   ```typescript
   // AUTO-GENERATED: Tailwind Adapter
   export const tokens = {
     /* synced from design-tokens.ts */
   } as const;
   ```

4. **Tailwind config imports** from adapter:
   ```typescript
   // tailwind.config.ts
   import { tokens } from "./src/styles/design-tokens";
   ```

---

## Key Rules

- ✅ **Always edit canonical** `design-tokens.ts`
- ⚠️ **Never edit** `src/styles/design-tokens.ts` manually — it's auto-generated
- 🔄 **Run sync** when adding or modifying tokens
- 🏗️ **Build includes sync** — always safe to run `npm run build`

---

## Validation

The script validates:

- ✅ Source file (`design-tokens.ts`) is readable
- ✅ Tokens object can be parsed
- ✅ Adapter file is generated with valid TypeScript
- ✅ Output directory exists (created if needed)

If validation fails, check the error message and ensure `design-tokens.ts` is valid TypeScript.

---

## Example: Adding a New Token

### Step 1: Edit `design-tokens.ts`

```typescript
export const tokens = {
  color: {
    "bg-brand-primary": "#f472b6",
    "bg-new-color": "#xyz", // ← New token
  },
  // ...
} as const;
```

### Step 2: Sync

```bash
npm run sync-tokens
```

### Step 3: Use in Tailwind/Component

The new token is now available in `src/styles/design-tokens.ts` and ready for Tailwind to use.

---

## Troubleshooting

| Issue                          | Solution                                                                                  |
| ------------------------------ | ----------------------------------------------------------------------------------------- |
| "Could not find tokens export" | Check `design-tokens.ts` syntax and ensure `export const tokens = {...} as const;` exists |
| Permission denied              | Run `chmod +x scripts/sync-design-tokens.ts`                                              |
| Script not found               | Ensure `ts-node` is installed: `npm install --save-dev ts-node`                           |
| Adapter not updated            | Delete `src/styles/design-tokens.ts` and rerun `npm run sync-tokens`                      |
