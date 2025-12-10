"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar({
  userName = "User",
}: {
  userName?: string;
  userEmail?: string;
}) {
  const pathname = usePathname();

  // ☁️ メニューを「日記アプリ」用に変更
  const menuItems = [
    { label: "今日の記録", href: "/dashboard", icon: "edit_note" },
    { label: "カレンダー", href: "/calendar", icon: "calendar_month" },
    { label: "設定", href: "/settings", icon: "settings" },
  ];

  return (
    <aside className="hidden md:flex w-64 h-screen bg-surface border-r border-ui-border flex-col shadow-sm">
      {/* ロゴエリア */}
      <div className="p-m border-b border-ui-border flex items-center gap-m">
        <span className="material-symbols-rounded text-3xl text-brand-primary">
          cloud
        </span>
        <div>
          <h1 className="text-lg font-bold text-text-high tracking-widest font-accent">
            Daily Log
          </h1>
          <p className="text-xs text-text-muted font-accent">My Wellness</p>
        </div>
      </div>

      {/* メニューリスト */}
      <nav className="flex-1 py-m px-m space-y-m">
        {menuItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-m px-m py-3 rounded-m font-bold transition-all duration-200
                ${
                  active
                    ? "bg-brand-primary text-white shadow-md transform scale-105"
                    : "text-text-muted hover:bg-surface-hover hover:text-brand-primary"
                }
              `}
            >
              <span className="material-symbols-rounded text-xl">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* ユーザー情報 */}
      <div className="p-m border-t border-ui-border bg-surface-subtle/50">
        <div className="flex items-center gap-m p-m rounded-m bg-white/50 border border-white">
          <div className="w-10 h-10 rounded-full bg-brand-secondary text-white flex items-center justify-center font-bold text-lg shadow-sm">
            {userName.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-text-high text-sm">{userName}</p>
            <p className="text-xs text-text-muted truncate">Have a nice day!</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
