// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily Log | 毎日の心地よい記録",
  description: "心と身体を整える日記アプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">

      {/* 全体にパステルの優しい背景色(bg-muted)を適用 */}
      <body className="bg-muted text-text-high antialiased selection:bg-brand-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
