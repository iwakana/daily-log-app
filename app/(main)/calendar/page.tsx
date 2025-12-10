"use client";

import React from "react";
import { Card, CardContent } from "@/components/Card";
import Tag from "@/components/Tag";
import { useAppData } from "@/context/AppDataContext";

// Mood Rendering Config
const MOOD_CONFIG: Record<string, string> = {
  celebration: "bg-orange-100 text-orange-500",
  spa: "bg-emerald-100 text-emerald-500",
  rainy: "bg-blue-100 text-blue-500",
  thunderstorm: "bg-purple-100 text-purple-500",
  // Secondary Moods
  battery_low: "bg-gray-100 text-gray-500",
  restaurant: "bg-orange-50 text-orange-400",
  bedtime: "bg-indigo-50 text-indigo-400",
  monitor_heart: "bg-pink-50 text-pink-400",
  auto_awesome: "bg-yellow-50 text-yellow-600",
  rocket_launch: "bg-blue-50 text-blue-400",
};

export default function CalendarPage() {
  const { entries } = useAppData();
  
  // Get current date info
  const today = new Date();
  const currentMonth = today.getMonth(); // 0-11
  const currentYear = today.getFullYear();
  const monthLabel = today.toLocaleString("en-US", { month: "long" });

  // Filter entries for current month
  const currentMonthEntries = entries.filter((entry) => {
    const d = new Date(entry.fullDate);
    return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
  });

  // Calculate stats
  const greatCount = currentMonthEntries.filter(e => e.mood === "celebration").length;
  const calmCount = currentMonthEntries.filter(e => e.mood === "spa").length;

  // Calculate start day offset (0 = Sunday, 1 = Monday, ...)
  const startDayOffset = new Date(currentYear, currentMonth, 1).getDay();

  // Generate days for 1 to lastDay
  const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
  const days = Array.from({ length: lastDay }, (_, i) => i + 1);

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-20">
      {/* ヘッダー */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-high tracking-widest font-accent">
            {monthLabel}, {currentYear}
          </h1>
          <p className="text-text-muted mt-1">今月の心の記録</p>
        </div>
        <div className="flex gap-2">
          <Tag variant="default">
            <span className="material-symbols-rounded text-sm align-middle mr-1">
              celebration
            </span>
            Great: {greatCount}日
          </Tag>
          <Tag variant="success">
            <span className="material-symbols-rounded text-sm align-middle mr-1">
              spa
            </span>
            Calm: {calmCount}日
          </Tag>
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
                <span className="font-accent">{day}</span>
              </div>
            ))}
          </div>

          {/* 日付グリッド */}
          <div className="grid grid-cols-7 gap-2 md:gap-4">
            {/* 空白セル: 月初の曜日分だけ空ける */}
            {[...Array(startDayOffset)].map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

            {days.map((day) => {
              // その日の記録を探す
              const entry = currentMonthEntries.find((e) => {
                 const d = new Date(e.fullDate);
                 return d.getDate() === day;
              });
              
              const isToday = day === today.getDate() && currentMonth === today.getMonth();

              return (
                <div
                  key={day}
                  className={`
                    aspect-square rounded-m flex flex-col items-center justify-center relative group cursor-pointer transition-all
                    ${
                      entry
                        ? "bg-surface hover:shadow-md"
                        : "hover:bg-surface-hover"
                    }
                    ${
                      isToday
                        ? "border-2 border-brand-primary"
                        : "border border-transparent"
                    }
                  `}
                >
                  {/* 日付 */}
                  <span
                    className={`text-xs ${
                      isToday
                        ? "font-bold text-brand-primary"
                        : "text-text-muted"
                    }`}
                  >
                    <span className="font-accent">{day}</span>
                  </span>

                  {/* スタンプがあれば表示 */}
                  {entry && (
                    <div
                      className={`
                      w-8 h-8 rounded-full flex items-center justify-center text-xl mt-1
                      ${MOOD_CONFIG[entry.mood] || "bg-gray-100 text-gray-500"}
                    `}
                    >
                      <span className="material-symbols-rounded text-lg">
                        {entry.mood}
                      </span>
                    </div>
                  )}

                  {/* 今日のマーク */}
                  {isToday && (
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
