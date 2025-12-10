# Figma Token Import Guide

## 手順

### 1. Figma からトークンをエクスポート

Figma Tokens Plugin を使用：

1. Figma でプロジェクトを開く
2. Plugins → Figma Tokens
3. Export → JSON
4. `figma-export.json` として保存

### 2. プロジェクトに配置

\`\`\`bash

# JSON を配置

cp /path/to/figma-export.json design-tokens/figma-export.json
\`\`\`

### 3. 変換スクリプト実行

\`\`\`bash
npm run tokens:sync
\`\`\`

または手動で：

- `design-tokens/index.ts` でマッピング確認
- `design-tokens.ts` が自動更新される

### 4. Tailwind 再起動

\`\`\`bash
npm run dev
\`\`\`

### 5. 確認

- ブラウザで色・余白・影が更新されているか確認
- 違和感があれば `design-tokens/index.ts` のマッピングを調整

## トークンマッピング例

| Figma Token         | アプリ Token     | 用途         |
| ------------------- | ---------------- | ------------ |
| color.brand.primary | bg-brand-primary | メインカラー |
| spacing.m           | p-m, gap-m       | 標準余白     |
| borderRadius.m      | rounded-m        | 標準角丸     |
