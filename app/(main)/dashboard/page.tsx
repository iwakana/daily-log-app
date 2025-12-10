// app/(main)/dashboard/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import { Card, CardContent } from "@/components/Card";
import Modal from "@/components/Modal";

import { useAppData } from "@/context/AppDataContext";

// スタンプの定義
const MOODS = [
  { icon: "celebration", label: "Great", color: "bg-orange-100 text-orange-500" },
  { icon: "spa", label: "Calm", color: "bg-emerald-100 text-emerald-500" },
  { icon: "rainy", label: "Blue", color: "bg-blue-100 text-blue-500" },
  { icon: "thunderstorm", label: "Irritated", color: "bg-purple-100 text-purple-500" },
];

const SECONDARY_MOODS = [
  { icon: "battery_low", label: "Twired", color: "bg-gray-100 text-gray-500", labelJa: "つかれた" }, // labelJa is for internal reference/future use if needed, but display label is English
  { icon: "restaurant", label: "Hungry", color: "bg-orange-50 text-orange-400" },
  { icon: "bedtime", label: "Sleepy", color: "bg-indigo-50 text-indigo-400" },
  { icon: "monitor_heart", label: "Excited", color: "bg-pink-50 text-pink-400" },
  { icon: "auto_awesome", label: "Memorable", color: "bg-yellow-50 text-yellow-600" },
  { icon: "rocket_launch", label: "Productive", color: "bg-blue-50 text-blue-400" },
];

const ALL_MOODS = [
  ...MOODS,
  ...SECONDARY_MOODS,
];

// Layout configuration type
type CloudStyle = {
  left: string;
  top: string;
  animationDelay: string;
  rotation: string;
  scale: number;
  borderRadius: string;
};

export default function DashboardPage() {
  const { entries, addEntry } = useAppData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMood, setSelectedMood] = useState(ALL_MOODS[0]);
  const [entryText, setEntryText] = useState("");
  const [cloudStyles, setCloudStyles] = useState<CloudStyle[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // 1. Create a 3x4 grid of zones (0-11)
    // Zones 4 and 7 are the center column, middle rows.
    // 0  1  2
    // 3  4  5
    // 6  7  8
    // 9 10 11
    // We reserve 4 and 7 for the centered title.
    const zones = [0, 1, 2, 3, 5, 6, 8, 9, 10, 11];
    
    // Shuffle zones
    for (let i = zones.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [zones[i], zones[j]] = [zones[j], zones[i]];
    }

    // Generate styles
    const styles = ALL_MOODS.map((_, index) => {
        // Assign a unique zone
        const zoneIndex = zones[index];
        const col = zoneIndex % 3; // 0, 1, 2
        const row = Math.floor(zoneIndex / 3); // 0, 1, 2, 3

        // Base position (center of zone)
        const baseLeft = (col * 33.3) + 5; 
        const baseTop = (row * 25) + 5; 

        // Jitter
        const jitterX = (Math.random() * 10);
        const jitterY = (Math.random() * 10);

        const left = (baseLeft + jitterX) + "%";
        const top = (baseTop + jitterY) + "%";
        
        // Random animation attributes
        const animationDelay = Math.random() * 5 + "s";
        const rotation = Math.floor(Math.random() * 20) - 10 + "deg";
        
        // Scale: 0.8 (min) to 1.5 (max)
        const scale = 0.8 + Math.random() * 0.7; 
        
        // Organic Blob Shape
        const r1 = Math.floor(Math.random() * 40) + 40;
        const r2 = Math.floor(Math.random() * 40) + 40;
        const r3 = Math.floor(Math.random() * 40) + 40;
        const r4 = Math.floor(Math.random() * 40) + 40;
        const r5 = Math.floor(Math.random() * 40) + 40;
        const r6 = Math.floor(Math.random() * 40) + 40;
        const r7 = Math.floor(Math.random() * 40) + 40;
        const r8 = Math.floor(Math.random() * 40) + 40;
        const borderRadius = `${r1}% ${r2}% ${r3}% ${r4}% / ${r5}% ${r6}% ${r7}% ${r8}%`;

        return { left, top, animationDelay, rotation, scale, borderRadius };
    });
    setCloudStyles(styles);
  }, []);

  const handleStampClick = (mood: typeof ALL_MOODS[0]) => {
    setSelectedMood(mood);
    setEntryText(""); // Reset text on open
    setIsModalOpen(true);
  };

  const handleSave = () => {
    // Current date formatted as MM/DD
    const now = new Date();
    const dateStr = `${now.getMonth() + 1}/${now.getDate()}`;
    const fullDateStr = now.toISOString().split("T")[0];

    addEntry({
      date: dateStr,
      fullDate: fullDateStr,
      mood: selectedMood.icon,
      text: entryText,
    });
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen pb-20 overflow-hidden">
      {/* Cloud Container */}
      <div className="relative h-[600px] w-full max-w-4xl mx-auto flex items-center justify-center">
        {/* Centered Header */}
        <div className="absolute z-0 text-center pointer-events-none p-8">
            <h1 className="text-6xl font-bold text-text-high tracking-widest font-accent drop-shadow-sm mb-3">
            Daily Log
            </h1>
            <p className="text-text-primary font-accent tracking-wide text-xl mb-4">How are you feeling today?</p>
            <p className="text-sm text-text-secondary font-bold">
              今の気持ちのふわふわをタップして入力してみよう
            </p>
        </div>

        {!isClient ? (
             <div className="flex items-center justify-center h-full text-text-muted">Loading clouds...</div>
        ) : (
            ALL_MOODS.map((mood, index) => {
              const style = cloudStyles[index];
              if (!style) return null;

              return (
                <div
                  key={mood.label}
                  className="absolute animate-float"
                  style={{
                    left: style.left,
                    top: style.top,
                    animationDelay: style.animationDelay,
                  }}
                >
                  <button
                    onClick={() => handleStampClick(mood)}
                    className={`
                      flex flex-col items-center justify-center cursor-pointer
                      shadow-sm hover:shadow-lg transition-transform duration-300
                      ${mood.color}
                    `}
                    style={{
                      transform: `rotate(${style.rotation}) scale(${style.scale})`,
                      borderRadius: style.borderRadius,
                      padding: "1.5rem",
                      minWidth: "100px",
                      minHeight: "100px",
                    }}
                    aria-label={mood.label}
                  >
                    <span className="material-symbols-rounded text-3xl mb-1 filter drop-shadow-sm leading-none">
                      {mood.icon}
                    </span>
                    <span className="text-xs font-bold font-accent whitespace-nowrap">{mood.label}</span>
                  </button>
                </div>
              );
            })
        )}
      </div>

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
            onClick={handleSave}
            disabled={!entryText.trim()}
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
            value={entryText}
            onChange={(e) => setEntryText(e.target.value)}
          />
        </div>
      </Modal>
    </div>
  );
}
