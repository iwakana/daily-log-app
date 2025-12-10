import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <h1 className="font-accent text-3xl">Daily Log</h1>
      <p>日々の記録をはじめましょう</p>

      {/* ダッシュボードへのリンクボタン */}
      <Link href="/dashboard">
        <button
          style={{
            padding: "12px 24px",
            background: "#0ea5e9",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          ダッシュボードへ移動
        </button>
      </Link>
    </main>
  );
}
