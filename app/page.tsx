// app/page.tsx
export default function Page() {
  return (
    // 画面全体: 背景 surface / 文字 text-high
    <div className="min-h-screen bg-surface text-text-high flex items-center justify-center p-l">
      {/* カードコンポーネント: 枠線 ui-border / 丸み rounded-m */}
      <div className="max-w-md w-full border border-ui-border bg-white rounded-m shadow-xl overflow-hidden">
        {/* ヘッダー部分: 背景 muted / 余白 p-l */}
        <div className="bg-muted p-l border-b border-ui-border">
          <h2 className="text-xl font-bold text-text-high">
            🎉 System Connected
          </h2>
        </div>

        {/* コンテンツ部分 */}
        <div className="p-l">
          <p className="text-text-muted mb-l leading-relaxed">
            おめでとうございます！
            <br />
            デザインシステム「 」と実装コードが完全に接続されました。
          </p>

          {/* 情報エリア: アクセントカラー文字 */}
          <div className="bg-muted rounded-m p-m mb-l">
            <p className="text-sm text-text-muted">現在の設定:</p>
            <p className="font-mono text-brand-primary font-bold">
              bg-brand-primary (#0ea5e9) active ✅
            </p>
          </div>

          {/* ボタン: ブランドカラー背景 / 角丸 rounded-m */}
          <button className="w-full bg-brand-primary text-white font-bold py-3 px-4 rounded-m hover:opacity-90 transition-opacity">
            さあ、開発を始めよう
          </button>
        </div>
      </div>
    </div>
  );
}
