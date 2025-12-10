// components/Modal.tsx
"use client";

import React from "react";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
}: ModalProps) {
  // 開いていないときは何も描画しない
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg bg-surface rounded-m shadow-2xl border border-ui-border animate-in zoom-in-95 duration-200"
        role="dialog"
      >
        {/* ヘッダー */}
        <div className="flex items-center justify-between px-l py-m border-b border-ui-border">
          <h3 className="text-lg font-bold text-text-high">{title}</h3>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-text-high transition-colors text-2xl leading-none"
            aria-label="閉じる"
          >
            &times;
          </button>
        </div>

        {/* コンテンツ */}
        <div className="p-l text-text-high">{children}</div>

        {/* フッター */}
        <div className="px-l py-m bg-muted/50 border-t border-ui-border flex justify-end gap-m">
          {footer ? (
            footer
          ) : (
            <Button intent="secondary" onClick={onClose}>
              閉じる
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
