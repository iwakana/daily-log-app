"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

/**
 * app/consultation/page.tsx —   AIキャリア相談室
 *
 * 構成:
 * - ヘッダー（タイトル + 戻る/クリアボタン）
 * - チャットエリア（AIメッセージ左側, ユーザーメッセージ右側）
 * - 入力エリア（固定下部）
 *
 * Design Tokens: Tailwind config から生成（#hex 直書き禁止）
 * UX: 安心感・親しみやすさを重視
 */

interface Message {
  id: string;
  type: "ai" | "user";
  text: string;
  timestamp: Date;
}

const INITIAL_AI_MESSAGE: Message = {
  id: "1",
  type: "ai",
  text: "こんにちは。今の仕事で『モヤモヤ』していることはありますか？何でも大丈夫。一緒に考えてみましょう。",
  timestamp: new Date(),
};

export default function ConsultationPage() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_AI_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponses = [
        "そうですね。成長が止まっていると感じるのは、今のポジションでのチャレンジが足りなくなってきたということかもしれません。",
        "それは素敵な気づきですね。その『モヤモヤ』の正体をもっと詳しく聞かせてもらえますか？",
        "そういった気持ちになることは誰にでもあります。大切なのは、そこからどう行動するかです。",
        "それを機に、新しいスキルを身につけることを考えてみてはどうでしょうか？",
      ];

      const randomResponse =
        aiResponses[Math.floor(Math.random() * aiResponses.length)];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        text: randomResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleClearHistory = () => {
    if (window.confirm("チャット履歴を削除してもよろしいですか？")) {
      setMessages([INITIAL_AI_MESSAGE]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen bg-muted flex flex-col overflow-hidden">
      {/* ==================== HEADER ==================== */}
      <header className="bg-surface border-b border-ui-border px-l py-m flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-m">
          {/* Back Button */}
          <Link
            href="/dashboard"
            className="p-m text-text-muted hover:text-brand-primary transition-colors font-bold"
            aria-label="戻る"
          >
            ←
          </Link>

          {/* Title */}
          <div>
            <h1 className="text-xl font-bold text-text-high">
              AIキャリア相談室
            </h1>
            <p className="text-xs text-text-muted">
              どんなことでも話してください。秘密は厳守します。
            </p>
          </div>
        </div>

        {/* Clear Button */}
        <button
          onClick={handleClearHistory}
          className="px-m py-3 text-sm text-text-muted hover:text-brand-primary hover:bg-muted rounded-m transition-all font-semibold"
          aria-label="履歴を削除"
        >
          🗑️ 履歴クリア
        </button>
      </header>

      {/* ==================== CHAT AREA ==================== */}
      <div className="flex-1 overflow-y-auto px-l py-l space-y-l">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === "ai" ? "justify-start" : "justify-end"
            }`}
          >
            {message.type === "ai" ? (
              // AI Message
              <div className="flex gap-m max-w-xl">
                {/* AI Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-white font-bold text-lg">
                    🤖
                  </div>
                </div>

                {/* Message Bubble */}
                <div className="bg-surface rounded-m rounded-tl-none shadow-sm px-l py-m border border-ui-border">
                  <p className="text-text-high leading-relaxed text-sm">
                    {message.text}
                  </p>
                  <p
                    className="text-xs text-text-muted mt-m"
                    suppressHydrationWarning={true}
                  >
                    {message.timestamp.toLocaleTimeString("ja-JP", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ) : (
              // User Message
              <div className="flex justify-end max-w-xl">
                <div className="bg-brand-primary rounded-m rounded-tr-none shadow-sm px-l py-m">
                  <p className="text-white leading-relaxed text-sm">
                    {message.text}
                  </p>
                  <p className="text-xs text-white opacity-75 mt-m">
                    {message.timestamp.toLocaleTimeString("ja-JP", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-m">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-white font-bold text-lg">
                  🤖
                </div>
              </div>
              <div className="bg-surface rounded-m rounded-tl-none shadow-sm px-l py-m border border-ui-border">
                <div className="flex gap-m">
                  <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce" />
                  <div
                    className="w-2 h-2 bg-text-muted rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="w-2 h-2 bg-text-muted rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Scroll Anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* ==================== INPUT AREA (Fixed Bottom) ==================== */}
      <div className="bg-surface border-t border-ui-border px-l py-m">
        <div className="flex items-end gap-m">
          {/* Input Field */}
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="思いや悩みを自由に書いてください..."
            className="flex-1 bg-muted text-text-high placeholder-text-muted rounded-full px-l py-3 border border-ui-border focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition"
            aria-label="メッセージ入力"
            disabled={isLoading}
          />

          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="flex-shrink-0 p-3 text-brand-primary hover:text-brand-primary hover:opacity-70 disabled:opacity-50 transition-all font-bold text-2xl"
            aria-label="メッセージを送信"
          >
            ✈️
          </button>
        </div>

        {/* Helper Text */}
        <p className="text-xs text-text-muted mt-m text-center">
          Shift + Enter で改行 | Enter で送信
        </p>
      </div>
    </div>
  );
}
