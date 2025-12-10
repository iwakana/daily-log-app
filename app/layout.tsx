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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Borel:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      {/* 全体にパステルの優しい背景色(bg-muted)を適用 */}
      <body className="bg-muted text-text-high antialiased selection:bg-brand-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
