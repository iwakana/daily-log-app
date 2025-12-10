# Component Patterns - PART B

**Version 2.0 FINAL**

---

## 🧩 主要コンポーネント実装パターン

---

### 1️⃣ アコーディオン

**必須要件：**

- `<button>` + `aria-expanded` + `aria-controls`
- クリックでトグル
- アイコン回転アニメーション

**実装例：**

```typescript

  
    {title}
    
  


  {content}

```

**Token使用：**

- Background: `bg-surface`, `hover:bg-surface-muted`
- Spacing: `p-m`
- Motion: `transition-all duration-300`

---

### 2️⃣ モーダル

**必須要件：**

- Overlay（固定背景）
- 閉じるボタン
- Overlayクリックで閉じる
- Focus Trap（推奨：`@headlessui/react` Dialog）

**実装例：**

```typescript
import { Dialog } from '@headlessui/react';


  {/* Overlay */}
  
  
  {/* Content */}
  
    
      
        
          {title}
        
        
          
        
      
      {children}
    
  

```

---

### 3️⃣ タブ

**必須要件：**

- 選択状態は1つのみ
- `aria-controls` 管理
- Keyboard Navigation: `ArrowLeft`, `ArrowRight`, `Home`, `End`

**実装例：**

```typescript

  {tabs.map((tab, i) => (
    <button
      key={i}
      role="tab"
      aria-selected={selectedIndex === i}
      aria-controls={`panel-${i}`}
      className={`p-m transition-all duration-300 ${
        selectedIndex === i 
          ? 'border-b-2 border-brand-primary text-brand-primary' 
          : 'text-text-secondary hover:text-text-primary'
      }`}
      onClick={() => setSelectedIndex(i)}
    >
      {tab.label}
    
  ))}

```

---

## 🎨 共通パターン

### ボタン

```typescript
// Primary


// Secondary


// Danger

```

### カード

```typescript

  {content}

```
