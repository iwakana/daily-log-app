// app/login/page.tsx
"use client";

import Link from "next/link";
import Button from "@/components/Button";
import Tag from "@/components/Tag";
import Input from "@/components/Input"; // 👈 ★忘れずに追加！

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted p-m">
      <div className="w-full max-w-md bg-surface p-xl rounded-m shadow-lg border border-ui-border">
        {/* (ロゴ部分はそのまま) */}
        <div className="text-center mb-xl">{/* ...省略... */}</div>

        <form className="space-y-l" onSubmit={(e) => e.preventDefault()}>
          {/* ▼▼▼ ここが劇的に変わります ▼▼▼ */}

          {/* メールアドレス */}
          <Input
            label="メールアドレス"
            type="email"
            placeholder="name@example.com"
          />

          {/* パスワード（わざとエラーを出してみる実験） */}
          <Input
            label="パスワード"
            type="password"
            placeholder="••••••••"
            // 👇 errorTextを入れるだけで、赤枠＆メッセージが出ます！
            //errorText="パスワードが短すぎます（8文字以上）"
          />

          {/* ▲▲▲ ここまで ▲▲▲ */}

          <div className="mt-6">
            <Link href="/" className="block">
              <Button intent="primary" size="l" fullWidth>
                ログインして開始
              </Button>
            </Link>
          </div>
        </form>

        {/* (フッターはそのまま) */}
      </div>
    </div>
  );
}
