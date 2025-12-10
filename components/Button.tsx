// components/Button.tsx
"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

// ユーティリティ関数（クラス名の衝突を防ぐ）
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// ▼ ここが「Figmaのバリアント定義」そのもの
const buttonVariants = cva(
  // 1. 全パターン共通のスタイル（ベース）
  "inline-flex items-center justify-center font-bold rounded-m transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-95",
  {
    variants: {
      // 2. 「種類 (Intent)」の定義
      intent: {
        primary:
          "bg-brand-primary text-text-inverted hover:bg-brand-primary-hover shadow-md",
        secondary:
          "bg-surface border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/10",
        tertiary: "bg-muted text-text-high hover:bg-muted/80", // 第3のボタン
        ghost:
          "bg-transparent text-text-muted hover:text-brand-primary hover:bg-brand-primary/5",
        danger: "bg-state-danger text-white hover:bg-red-600",
      },
      // 3. 「サイズ (Size)」の定義
      size: {
        s: "text-xs px-3 py-1.5 gap-1.5 h-8",
        m: "text-sm px-5 py-2.5 gap-2 h-10",
        l: "text-base px-8 py-3 gap-3 h-12",
        icon: "h-10 w-10 p-2", // アイコンのみの場合
      },
      // 4. 「全幅 (Full Width)」の定義
      fullWidth: {
        true: "w-full",
      },
    },
    // デフォルトの設定
    defaultVariants: {
      intent: "primary",
      size: "m",
      fullWidth: false,
    },
  }
);

// プロパティの型定義（これのおかげでVS Codeが補完してくれる）
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  className,
  intent,
  size,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ intent, size, fullWidth, className }))}
      {...props}
    />
  );
}
