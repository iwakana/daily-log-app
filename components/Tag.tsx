// components/Tag.tsx
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ▼ タグのバリアント定義
const tagVariants = cva(
  "inline-flex items-center rounded-full font-medium border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20",
        secondary:
          "border-transparent bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20",
        outline: "text-text-high border-border",
        destructive:
          "border-transparent bg-state-danger/10 text-state-danger hover:bg-state-danger/20",
        success: "border-transparent bg-state-success/10 text-state-success",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {}

export default function Tag({ className, variant, ...props }: TagProps) {
  return <div className={cn(tagVariants({ variant }), className)} {...props} />;
}
