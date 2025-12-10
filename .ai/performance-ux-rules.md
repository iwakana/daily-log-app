# Performance & UX Rules - PART C

**Version 2.0 FINAL**

---

## 🎯 Visual Safety

### タッチターゲット

- **最小サイズ**: 44px × 44px
- **実装**: `min-h-[44px] min-w-[44px]` または `p-m`（16px padding）

### コントラスト比

- **通常テキスト**: 4.5:1 以上
- **大きなテキスト**（18px以上）: 3:1 以上
- **基準**: WCAG AA準拠

---

## 🎬 Motion Rules

### 標準設定

```typescript
// Hover/Active/Focus
className="transition-all duration-300 ease-out"

// 具体例

  Click

```

### 禁止パターン

- ❌ `duration-0`（機械的）
- ❌ `duration-1000`（遅すぎ）
- ❌ `ease-in`（不自然な加速）

---

## ♿ アクセシビリティチェックリスト

### 必須項目

- [ ] すべてのボタンに適切な `aria-label`
- [ ] フォーム要素に `<label>` 関連付け
- [ ] 画像に `alt` 属性
- [ ] インタラクティブ要素に `role` 属性
- [ ] キーボード操作可能（Tab / Enter / Space）
- [ ] Focus状態の視覚表示

### モーダル・ダイアログ

- [ ] Focus Trap実装
- [ ] ESCキーで閉じる
- [ ] 開いた時にフォーカス移動
- [ ] 閉じた時に元の位置に戻る
