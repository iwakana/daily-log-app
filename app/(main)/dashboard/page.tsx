// app/(main)/dashboard/page.tsx
"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import { Card, CardContent } from "@/components/Card";
import Modal from "@/components/Modal";

// スタンプの定義
const MOODS = [
  { icon: "celebration", label: "Great", color: "bg-orange-100 text-orange-500" },
  { icon: "spa", label: "Calm", color: "bg-emerald-100 text-emerald-500" },
  { icon: "rainy", label: "Blue", color: "bg-blue-100 text-blue-500" },
  { icon: "thunderstorm", label: "Irritated", color: "bg-purple-100 text-purple-500" },
];

// 日記データの型（仮）
type DiaryEntry = {
  id: number;
  date: string;
  mood: string;
  text: string;
};

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMood, setSelectedMood] = useState(MOODS[0]);

  // 仮の日記データ
  const [entries, setEntries] = useState<DiaryEntry[]>([
    {
      id: 1,
      date: "12/10",
      mood: "celebration",
      text: "新しいアプリのアイデアを思いついた！",
    },
    {
      id: 2,
      date: "12/09",
      mood: "spa",
      text: "ゆっくりお風呂に入ってリラックス。",
    },
  ]);

  const handleStampClick = (mood: (typeof MOODS)[0]) => {
    setSelectedMood(mood);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 pb-20">
      {/* ヘッダー */}
      <header className="text-center py-6">
        <h1 className="text-2xl font-bold text-text-high tracking-widest font-accent flex items-center justify-center gap-2">
          Daily Log
          <span className="material-symbols-rounded text-brand-primary">
            cloud
          </span>
        </h1>
        <p className="text-text-muted mt-2">今日の気分はどうですか？</p>
      </header>

      {/* メインエリア：スタンプを押す */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MOODS.map((mood) => (
            <button
              key={mood.label}
              onClick={() => handleStampClick(mood)}
              className={`
                aspect-square rounded-m flex flex-col items-center justify-center gap-2
                transition-transform hover:scale-105 active:scale-95 border-2 border-transparent hover:border-brand-primary/30
                ${mood.color}
              `}
            >
              <span className="material-symbols-rounded text-4xl filter drop-shadow-sm leading-none">
                {mood.icon}
              </span>
              <span className="text-sm font-bold font-accent">{mood.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 履歴エリア：過去の日記 */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-text-high ml-2">最近の記録</h2>
        <div className="space-y-3">
          {entries.map((entry) => (
            <Card key={entry.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-subtle flex items-center justify-center text-2xl shadow-sm border border-brand-primary/20">
                  <span className="material-symbols-rounded text-brand-primary">
                    {entry.mood}
                  </span>
                </div>
                <div>
                  <div className="text-xs text-text-muted font-bold mb-1 font-accent">
                    {entry.date}
                  </div>
                  <p className="text-text-high text-sm">{entry.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 入力モーダル */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          <span className="flex items-center gap-2">
            <span className="material-symbols-rounded">{selectedMood.icon}</span>
            今日のひとこと
          </span>
        }
        footer={
          <Button
            intent="primary"
            fullWidth
            onClick={() => setIsModalOpen(false)}
          >
            記録する
          </Button>
        }
      >
        <div className="space-y-4">
          <p className="text-sm text-text-muted">
            今の気持ちや、今日あった小さな幸せを書き残しましょう。
          </p>
          <textarea
            className="w-full p-4 rounded-m border border-brand-primary/30 bg-surface-subtle focus:ring-2 focus:ring-brand-primary/50 outline-none h-32 resize-none text-text-high placeholder:text-text-muted/50"
            placeholder="例：天気が良くて気持ちよかった！"
          />
        </div>
      </Modal>
    </div>
  );
}
