// components/Card.tsx
import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

// 外枠（カード本体）
export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface border border-ui-border rounded-m shadow-sm overflow-hidden", //  の基本スタイル（角丸を統一）
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// カードのヘッダー（タイトルエリア）
export function CardHeader({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn("px-l py-m border-b border-ui-border", className)}
      {...props}
    >
      {children}
    </div>
  );
}

// カードの中身（コンテンツエリア）
export function CardContent({ className, children, ...props }: CardProps) {
  return (
    <div className={cn("p-l", className)} {...props}>
      {children}
    </div>
  );
}
