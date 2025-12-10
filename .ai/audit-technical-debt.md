# Audit & Technical Debt - PART D

**Version 2.0 FINAL**

---

## 🔍 Audit Log出力（必須）

コード生成後、必ず以下の形式で出力すること。

```
[🔍 AI AUDIT REPORT]
--------------------------------------------------
1. TOKEN COMPLIANCE
   [ ] No Raw Values (#hex, px) detected?
       Result: ✅ PASS / ❌ FAIL
       Details: [Line 23: style={{ color: '#FF0000' }}]
       
   [ ] No Forbidden Utilities (bg-blue-500) detected?
       Result: ✅ PASS / ❌ FAIL
       
   [ ] All Colors mapped to Tokens?
       Result: ✅ PASS / ⚠️ PARTIAL (8/10)

2. ACCESSIBILITY CHECK
   [ ] Contrast Ratio >= 4.5:1?
       Result: ✅ PASS / ❌ FAIL
       
   [ ] Clickable Areas >= 44x44px?
       Result: ✅ PASS / ❌ FAIL
       
   [ ] ARIA attributes present?
       Result: ✅ PASS / ⚠️ MISSING

3. IMPLEMENTATION CHECK
   [ ] Syntax matches PART B patterns?
       Result: ✅ PASS
       
   [ ] No destructive changes?
       Result: ✅ PASS

--------------------------------------------------
>>> STATUS: [ ✅ READY / ⚠️ PROVISIONAL / ❌ BLOCKED ]
```

---

## 📝 仮置きTokenフロー

### Token不足時の優先順位

1. **類似Token使用（最優先）**

```typescript
// Missing: hover:bg-brand-primary-dark

  {/* Temporary: Using secondary for missing primary-dark */}

```

2. **近い意味のToken**

```typescript
// Missing: text-caption

  {/* Temporary: Using secondary for missing caption */}

```

3. **どうしても該当なし**

```typescript
// Missing: tokens.opacity.muted

  {/* TODO: [AI_PLACEHOLDER] Need tokens.opacity.muted */}

```

---

## ⚠️ コメント記法（統一）

### ✅ 正しい記法

```typescript

  {/* Temporary: Using primary instead of missing 'accent-warm' */}

```

### ❌ 不適切な記法

```typescript

  {/* TODO */}

```
