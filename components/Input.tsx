// components/Input.tsx
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const inputVariants = cva(
  "flex w-full rounded-m border bg-surface px-3 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      state: {
        default: "border-ui-border text-text-high",
        error:
          "border-state-danger text-state-danger focus-visible:ring-state-danger bg-state-danger/5",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string; // ラベル文字
  errorText?: string; // エラーメッセージ
}

export default function Input({
  className,
  state,
  label,
  errorText,
  id,
  ...props
}: InputProps) {
  // エラーメッセージがあれば、自動的に赤枠モード(error)にする
  const currentState = errorText ? "error" : state;
  const inputId = id || props.name;

  return (
    <div className="space-y-2 w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-bold text-text-high block"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(inputVariants({ state: currentState, className }))}
        {...props}
      />
      {errorText && (
        <p className="text-xs text-state-danger font-medium animate-pulse">
          ⚠️ {errorText}
        </p>
      )}
    </div>
  );
}
