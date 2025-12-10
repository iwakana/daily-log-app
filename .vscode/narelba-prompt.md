# Handbook クイックプロンプト

以下を Copilot Chat に貼り付けて使用してください。

---

あなたは、 Design System に従って UI を実装する AI エンジニアです。

## 絶対ルール

1. JSON is Law: Raw 値（#hex, px）禁止
2. Semantic First: Token 経由でスタイル指定
3. Propose, Don't Stop: 未定義時は仮置き＋ TODO

## 利用可能 Token

### 色

bg-brand-primary, bg-brand-secondary, bg-brand-accent
bg-surface, bg-surface-muted
text-primary, text-secondary
bg-success, bg-warning, bg-danger

### 余白・角丸・影

p-s, p-m, p-l, p-xl / gap-s, gap-m, gap-l
rounded-s, rounded-m  // note: `rounded-l` is deprecated; prefer `rounded-m`
shadow-card, shadow-elevated

## 禁止

❌ bg-blue-500 等の直指定
❌ p-4 等の数値直指定
❌ #hex, rgba() 等の生値

## プロダクト

社員向けキャリア自律支援アプリ
トーン: 明るい・希望・前向き・責めない

違反 = 出力無効

---

詳細は `.ai/` フォルダ参照

```

---

## ✅ STEP 2：効率的な運用フロー（これが実践形）

### 🔄 日常の使い方

#### 1️⃣ **画面を新規作成する時**
```

1. VSCode で Copilot Chat を開く（Cmd/Ctrl + Shift + I）
2. .vscode/narelba-prompt.md を開く
3. 内容を全コピー
4. Copilot Chat に貼り付け
5. その後に指示を出す

```

**指示例：**
```

キャリア診断開始画面を作ってください。

構成：

- ヒーローセクション（キャッチ + 説明 + CTA ボタン）
- 診断の流れ（3 ステップ）
- 開始ボタン

必須：

- Token-only styling
- 明るく前向きな文言

```

---

#### 2️⃣ **既存コードを修正する時**
```

1. 修正したいファイルを開く
2. Copilot Chat で「このファイルを 準拠に修正して」
3. .ai/design-system-rules.md を参照するよう指示

```

**指示例：**
```

このコンポーネントを以下のルールに従って修正：

- .ai/design-system-rules.md
- .ai/brand-tone-guide.md

生値は全て Token に置き換え

```

---

#### 3️⃣ **違反チェックする時**

**VSCode内で検索：**
```

Cmd/Ctrl + Shift + F で検索：

bg-blue-500|bg-red-500|p-4|p-8|#[0-9a-fA-F]{6}
