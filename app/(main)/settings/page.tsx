"use client";

import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { Card, CardHeader, CardContent } from "@/components/Card";
import { useAppData } from "@/context/AppDataContext";
import { THEMES, ThemeKey } from "@/lib/themes";

export default function SettingsPage() {
  const { userProfile, updateUserProfile } = useAppData();
  
  // Local state for editing
  const [name, setName] = React.useState(userProfile.name);
  const [email, setEmail] = React.useState(userProfile.email);

  // Sync local state when context updates (e.g. on initial load)
  React.useEffect(() => {
    setName(userProfile.name);
    setEmail(userProfile.email);
  }, [userProfile]);

  const handleSave = () => {
    updateUserProfile({ name, email });
    alert("設定を保存しました！");
  };

  const handleThemeChange = (themeKey: ThemeKey) => {
    updateUserProfile({ theme: themeKey });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 pb-20">
      <h1 className="text-2xl font-bold text-text-high tracking-widest font-accent">
        Settings
      </h1>

      {/* プロフィール設定 */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-bold text-text-high flex items-center gap-2">
            <span className="material-symbols-rounded">person</span>
            プロフィール
          </h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-brand-secondary text-white flex items-center justify-center text-2xl font-bold shadow-sm">
              {name.charAt(0).toUpperCase()}
            </div>
            <Button intent="ghost" size="s">
              アイコンを変更
            </Button>
          </div>
          <Input 
            label="表示名" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <Input 
            label="メールアドレス" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <div className="pt-2">
            <Button intent="primary" onClick={handleSave}>変更を保存</Button>
          </div>
        </CardContent>
      </Card>

      {/* アプリ設定 */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-bold text-text-high flex items-center gap-2">
            <span className="material-symbols-rounded">palette</span>
            アプリの見た目
          </h2>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* カラーテーマ */}
          <div>
            <label className="text-sm font-bold text-text-high block mb-2">
              テーマカラー
            </label>
            <div className="flex gap-3">
              {(Object.keys(THEMES) as ThemeKey[]).map((key) => {
                 const theme = THEMES[key];
                 const isActive = userProfile.theme === key;
                 // Extract primary color for preview
                 const primaryColor = theme.colors["--color-brand-primary"];
                 
                 return (
                   <button
                     key={key}
                     onClick={() => handleThemeChange(key)}
                     className={`w-10 h-10 rounded-full shadow-sm transition-all ${
                       isActive ? "ring-2 ring-offset-2 ring-brand-primary scale-110" : "opacity-70 hover:opacity-100"
                     }`}
                     style={{ backgroundColor: primaryColor }}
                     aria-label={`Select ${theme.label} theme`}
                   />
                 );
              })}
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
