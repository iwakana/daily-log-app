# Design System Rules - PART A

**Version 2.0 FINAL**

---

## 🎯 3 大原則（最優先）

### 1. JSON is Law

- JSON 未定義の値の直書き禁止
- Token に存在しない値は仮置き → Audit 対象

### 2. Semantic First

- Token 経由でスタイル指定
- ✅ `bg-brand-primary`
- ❌ `bg-blue-500`

### 3. Propose, Don't Stop

- 未定義 Token があっても停止しない
- 必ず：仮置き + TODO + Audit 出力

---

## 🎨 利用可能な Token

### 色（Colors）

```typescript
// ブランド
"bg-brand-primary"; // #0284c7 ✅ WCAG AA (7.8:1)
"bg-brand-secondary"; // #64748b ✅ WCAG AA対応
"bg-brand-accent"; // #7c3aed ✅ WCAG AA (6.4:1)

// 背景
"bg-surface"; // #ffffff
"bg-surface-subtle"; // #f8fafc
"bg-surface-hover"; // #f1f5f9

// テキスト
"text-high"; // #0f172a (黒に近い)
"text-muted"; // #64748b (グレー)
"text-inverted"; // #ffffff (白)

// ボーダー
"border-default"; // #e2e8f0

// ステータス
"bg-state-success"; // #15803d ✅ WCAG AA (8.2:1)
"bg-state-warning"; // #b45309 ✅ WCAG AA (8.7:1)
"bg-state-danger"; // #991b1b ✅ WCAG AA (10.5:1)
"bg-state-info"; // #1e40af ✅ WCAG AA (8.5:1)
```

**📋 WCAG 2.2 AA 準拠**: すべてのテキストカラー組み合わせは **4.5:1 以上**のコントラスト比を保証

### 余白（Spacing）

```typescript
'p-s'    // 8px
'p-m'    // 16px
'p-l'    // 24px
'p-xl'   // 48px

'gap-s'  'gap-m'  'gap-l'  'gap-xl'
```

### 角丸（Border Radius）

```typescript
"rounded-s"; // 4px
"rounded-m"; // 8px  ← **標準: カードパネルにはこれを使用**
"rounded-l"; // DEPRECATED: 旧来の12px。プロジェクトでは `rounded-m` を使ってください
```

> **標準ルール**: カードパネル（情報カード、モーダル、チャットバブル等）の標準角丸は **`rounded-m`** を使用してプロジェクト全体で統一してください。


### 影（Shadow）

```typescript
"shadow-card"; // カード用
"shadow-elevated"; // 浮遊感
```

---

## ❌ 絶対禁止

```typescript
// ❌ 生値指定
style={{ color: '#FF0000' }}
className="bg-[#0ea5e9]"

// ❌ Tailwind直指定
className="bg-blue-500"
className="p-4"
className="rounded-lg"

// ❌ インラインスタイル（Token以外）
style={{ padding: '16px' }}
```

---

## ✅ Token 化不要な Utility

以下は直接使用 OK：

```typescript
// Layout
flex, grid, block, inline, absolute, relative, fixed, sticky;

// Positioning
top - 0, left - 0, inset - 0, justify - between, items - center;

// Display
hidden, overflow - hidden, overflow - auto;

// Z-Index
z - 0, z - 10, z - 50;

// Cursor
cursor - pointer, cursor - not - allowed;

// Pointer Events
pointer - events - none;
```

---

## 🚨 違反時の対応

AI 出力が本ルールに違反している場合、その出力は**即時無効**とする。

### 重大違反

- Token 無視
- Forbidden Utility 使用
- Semantic 違反
- Audit 未出力
- 仮置 Token 未申告

→ **修正 + 再生成が必須**
