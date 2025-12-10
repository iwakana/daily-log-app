"use client";

import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { Card, CardHeader, CardContent } from "@/components/Card";

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 pb-20">
      <h1 className="text-2xl font-bold text-text-high tracking-widest">
        Settings
      </h1>

      {/* プロフィール設定 */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-bold text-text-high">👤 プロフィール</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-brand-secondary text-white flex items-center justify-center text-2xl font-bold shadow-sm">
              I
            </div>
            <Button intent="ghost" size="s">
              アイコンを変更
            </Button>
          </div>
          <Input label="表示名" defaultValue="name" />
          <Input label="メールアドレス" defaultValue="" />
          <div className="pt-2">
            <Button intent="primary">変更を保存</Button>
          </div>
        </CardContent>
      </Card>

      {/* アプリ設定 */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-bold text-text-high">
            🎨 アプリの見た目
          </h2>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* カラーテーマ（ダミーUI） */}
          <div>
            <label className="text-sm font-bold text-text-high block mb-2">
              テーマカラー
            </label>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-brand-primary ring-2 ring-offset-2 ring-brand-primary shadow-sm"></button>
              <button className="w-10 h-10 rounded-full bg-brand-secondary opacity-50"></button>
              <button className="w-10 h-10 rounded-full bg-state-success opacity-50"></button>
              <button className="w-10 h-10 rounded-full bg-state-warning opacity-50"></button>
            </div>
          </div>

          {/* 通知設定 */}
          <div className="flex items-center justify-between p-3 bg-muted rounded-m">
            <div>
              <div className="font-bold text-text-high text-sm">
                通知を受け取る
              </div>
              <div className="text-xs text-text-muted">
                日記のつけ忘れ防止通知
              </div>
            </div>
            <div className="w-12 h-6 bg-brand-primary rounded-full relative cursor-pointer">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* その他 */}
      <div className="pt-4 border-t border-brand-primary/20">
        <Button
          intent="ghost"
          className="text-state-danger hover:bg-state-danger/10 hover:text-state-danger"
        >
          ログアウト
        </Button>
      </div>
    </div>
  );
}
