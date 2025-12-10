"use client";

import React from "react";
import { Card, CardContent } from "@/components/Card";
import Tag from "@/components/Tag";

export default function CalendarPage() {
  // ダミーデータ：過去の気分スタンプ
  const records = [
    { date: 1, mood: "🥰", color: "bg-rose-100" },
    { date: 2, mood: "🍵", color: "bg-emerald-100" },
    { date: 3, mood: "😢", color: "bg-blue-100" },
    { date: 4, mood: "🥰", color: "bg-rose-100" },
    { date: 5, mood: "🍵", color: "bg-emerald-100" },
    { date: 8, mood: "😡", color: "bg-orange-100" },
    { date: 10, mood: "🥰", color: "bg-rose-100" },
  ];

  // カレンダーの日付生成 (1日〜31日)
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-20">
      {/* ヘッダー */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-high tracking-widest">
            December, 2025
          </h1>
          <p className="text-text-muted mt-1">今月の心の記録</p>
        </div>
        <div className="flex gap-2">
          <Tag variant="default">🥰 絶好調: 3日</Tag>
          <Tag variant="success">🍵 穏やか: 2日</Tag>
        </div>
      </div>

      {/* カレンダー本体 */}
      <Card className="bg-white/80 backdrop-blur-sm shadow-md border-2 border-surface-subtle">
        <CardContent className="p-6">
          {/* 曜日ヘッダー */}
          <div className="grid grid-cols-7 mb-4 text-center">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-xs font-bold text-brand-primary uppercase tracking-wider"
              >
                {day}
              </div>
            ))}
          </div>

          {/* 日付グリッド */}
          <div className="grid grid-cols-7 gap-2 md:gap-4">
            {/* 空白セル（1日が水曜始まりと仮定） */}
            {[...Array(3)].map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

            {days.map((day) => {
              // その日の記録を探す
              const record = records.find((r) => r.date === day);

              return (
                <div
                  key={day}
                  className={`
                    aspect-square rounded-m flex flex-col items-center justify-center relative group cursor-pointer transition-all
                    ${
                      record
                        ? "bg-surface hover:shadow-md"
                        : "hover:bg-surface-hover"
                    }
                    ${
                      day === 10
                        ? "border-2 border-brand-primary"
                        : "border border-transparent"
                    }
                  `}
                >
                  {/* 日付 */}
                  <span
                    className={`text-xs ${
                      day === 10
                        ? "font-bold text-brand-primary"
                        : "text-text-muted"
                    }`}
                  >
                    {day}
                  </span>

                  {/* スタンプがあれば表示 */}
                  {record && (
                    <div
                      className={`
                      w-8 h-8 rounded-full flex items-center justify-center text-xl mt-1
                      ${record.color}
                    `}
                    >
                      {record.mood}
                    </div>
                  )}

                  {/* 今日のマーク */}
                  {day === 10 && (
                    <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-brand-primary" />
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
