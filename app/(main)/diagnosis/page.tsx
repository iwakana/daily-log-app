/**
 * app/diagnosis/page.tsx
 *   キャリア診断開始画面
 *
 * PART B: Component Implementation (Nalerva DS準拠)
 * - Token-only styling (no raw #hex, px)
 * - Accessibility: aria labels, 44px touch targets
 * - Tone: 明るい・希望・前向き・責めない
 * - Responsive: Mobile-first
 */
"use client";
import { tokens } from "@/design-tokens";
import Link from "next/link";
import React from "react";

// ==================== AUDIT LOG HELPERS ====================
/**
 * PART D: Audit Logging
 * Collects compliance entries throughout component lifecycle
 */
const auditLog: string[] = [];

function logAudit(
  level: "INFO" | "TODO" | "NOTE" | "ACTION",
  component: string,
  message: string
) {
  const entry = `[AUDIT][PART D] | LEVEL: ${level} | COMPONENT: ${component} | MSG: ${message}`;
  auditLog.push(entry);
  // eslint-disable-next-line no-console
  console.info(entry);
}

export default function DiagnosisPage() {
  // Audit: Component mounted
  logAudit(
    "INFO",
    "app/diagnosis/page.tsx",
    "Diagnosis page loaded (Journaling Theme)"
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: tokens.color["bg-surface"],
        color: tokens.color["text-primary"],
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* ==================== HERO SECTION ==================== */}
      <section
        style={{
          padding: `${tokens.spacing["xl"]} ${tokens.spacing["l"]}`,
          background: `linear-gradient(135deg, ${tokens.color["bg-brand-primary"]} 0%, ${tokens.color["bg-brand-secondary"]} 100%)`,
          color: tokens.color["bg-surface"],
          textAlign: "center",
        }}
        aria-labelledby="hero-title"
      >
        <div
          style={{ maxWidth: tokens.size["hero-max"], margin: "0 auto" }}
        >
          <h1
            id="hero-title"
            style={{
              fontSize: tokens.typography["h1-size"],
              fontWeight: tokens.typography["h1-weight"],
              margin: "0 0 " + tokens.spacing["p-m"] + " 0",
              lineHeight: tokens.lineHeight["leading-tight"],
            }}
          >
            毎日の出来事を、もっと楽しく残そう
          </h1>

          <p
            style={{
              fontSize: tokens.typography["body-size"],
              fontWeight: tokens.typography["body-weight"],
              margin: "0 0 " + tokens.spacing["p-l"] + " 0",
              lineHeight: tokens.lineHeight["leading-relaxed"],
              maxWidth: tokens.size["hero-max"],
              marginLeft: "auto",
              marginRight: "auto",
              opacity: 0.95,
            }}
          >
            日記スタイル診断なら、あなたにぴったりの記録方法が3分で分かります。
            <br />
            無理なく楽しく続けられる、あなただけの日記ライフを見つけましょう。
            <br />
            今日という日を、特別な思い出に変える一歩を。
          </p>

          <Link
            href="/diagnosis/start"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: `${tokens.spacing["p-m"]} ${tokens.spacing["p-l"]}`,
              backgroundColor: tokens.color["bg-surface"],
              color: tokens.color["bg-brand-primary"],
              textDecoration: "none",
              fontSize: tokens.typography["body-size"],
              fontWeight: 600,
              borderRadius: tokens.radius["rounded-m"],
              minHeight: tokens.size["touch-min"],
              boxShadow: tokens.shadow["shadow-card"],
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "pointer",
              lineHeight: tokens.lineHeight["leading-none"],
            }}
            aria-label="日記スタイル診断を始める"
          >
            診断を始める
          </Link>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section
        style={{
          padding: tokens.spacing["p-xl"],
          backgroundColor: tokens.color["bg-surface-muted"],
        }}
        aria-labelledby="features-title"
      >
        <div
          style={{ maxWidth: tokens.size["container-max"], margin: "0 auto" }}
        >
          <h2
            id="features-title"
            style={{
              fontSize: tokens.typography["h2-size"],
              fontWeight: tokens.typography["h2-weight"],
              margin: "0 0 " + tokens.spacing["p-m"] + " 0",
              textAlign: "center",
              color: tokens.color["text-primary"],
            }}
          >
            診断でわかること
          </h2>

          <p
            style={{
              fontSize: tokens.typography["body-size"],
              color: tokens.color["text-secondary"],
              textAlign: "center",
              margin: "0 0 " + tokens.spacing["p-l"] + " 0",
              maxWidth: tokens.size["feature-max"],
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            あなたの性格やライフスタイルに合わせて、最適な記録方法をご提案します。
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(auto-fit, minmax(${tokens.size["card-min"]}, 1fr))`,
              gap: tokens.spacing["gap-l"],
              marginTop: tokens.spacing["p-l"],
            }}
          >
            {/* Card 1: Writing Style */}
            <article
              style={{
                padding: tokens.spacing["p-l"],
                backgroundColor: tokens.color["bg-surface"],
                borderRadius: tokens.radius["rounded-m"],
                boxShadow: tokens.shadow["shadow-card"],
                transition: "box-shadow 0.2s",
              }}
            >
              <div
                style={{
                  fontSize: tokens.typography["hero-emoji-size"],
                  marginBottom: tokens.spacing["p-m"],
                  lineHeight: tokens.lineHeight["leading-normal"],
                }}
                aria-hidden="true"
              >
                ✍️
              </div>
              <h3
                style={{
                  fontSize: tokens.typography["h3-size"],
                  fontWeight: tokens.typography["h3-weight"],
                  margin: "0 0 " + tokens.spacing["p-m"] + " 0",
                  color: tokens.color["text-primary"],
                }}
              >
                あなたらしい書き方
              </h3>
              <p
                style={{
                  fontSize: tokens.typography["small-size"],
                  color: tokens.color["text-secondary"],
                  lineHeight: tokens.lineHeight["leading-relaxed"],
                  margin: 0,
                }}
              >
                自分では気づかなかった、文章のクセや魅力的な表現方法が見つかります。
              </p>
            </article>

            {/* Card 2: Recommended Themes */}
            <article
              style={{
                padding: tokens.spacing["p-l"],
                backgroundColor: tokens.color["bg-surface"],
                borderRadius: tokens.radius["rounded-m"],
                boxShadow: tokens.shadow["shadow-card"],
                transition: "box-shadow 0.2s",
              }}
            >
              <div
                style={{
                  fontSize: tokens.typography["hero-emoji-size"],
                  marginBottom: tokens.spacing["p-m"],
                  lineHeight: tokens.lineHeight["leading-normal"],
                }}
                aria-hidden="true"
              >
                📔
              </div>
              <h3
                style={{
                  fontSize: tokens.typography["h3-size"],
                  fontWeight: tokens.typography["h3-weight"],
                  margin: "0 0 " + tokens.spacing["p-m"] + " 0",
                  color: tokens.color["text-primary"],
                }}
              >
                おすすめのテーマ
              </h3>
              <p
                style={{
                  fontSize: tokens.typography["small-size"],
                  color: tokens.color["text-secondary"],
                  lineHeight: tokens.lineHeight["leading-relaxed"],
                  margin: 0,
                }}
              >
                「何を書けばいいかわからない」を解消。あなたが好きそうなトピックや、振り返りたくなるテーマをご提案します。
              </p>
            </article>

            {/* Card 3: Habit Tips */}
            <article
              style={{
                padding: tokens.spacing["p-l"],
                backgroundColor: tokens.color["bg-surface"],
                borderRadius: tokens.radius["rounded-m"],
                boxShadow: tokens.shadow["shadow-card"],
                transition: "box-shadow 0.2s",
              }}
            >
              <div
                style={{
                  fontSize: tokens.typography["hero-emoji-size"],
                  marginBottom: tokens.spacing["p-m"],
                  lineHeight: tokens.lineHeight["leading-normal"],
                }}
                aria-hidden="true"
              >
                🌟
              </div>
              <h3
                style={{
                  fontSize: tokens.typography["h3-size"],
                  fontWeight: tokens.typography["h3-weight"],
                  margin: "0 0 " + tokens.spacing["p-m"] + " 0",
                  color: tokens.color["text-primary"],
                }}
              >
                続けられるコツ
              </h3>
              <p
                style={{
                  fontSize: tokens.typography["small-size"],
                  color: tokens.color["text-secondary"],
                  lineHeight: tokens.lineHeight["leading-relaxed"],
                  margin: 0,
                }}
              >
                三日坊主にならないための、小さな工夫やタイミングへのアドバイスをお届けします。
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ==================== PROCESS SECTION ==================== */}
      <section
        style={{
          padding: tokens.spacing["p-xl"],
          backgroundColor: tokens.color["bg-surface"],
        }}
        aria-labelledby="process-title"
      >
        <div
          style={{ maxWidth: tokens.size["container-max"], margin: "0 auto" }}
        >
          <h2
            id="process-title"
            style={{
              fontSize: tokens.typography["h2-size"],
              fontWeight: tokens.typography["h2-weight"],
              margin: "0 0 " + tokens.spacing["p-l"] + " 0",
              textAlign: "center",
              color: tokens.color["text-primary"],
            }}
          >
            診断の流れ
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(auto-fit, minmax(${tokens.size["process-min"]}, 1fr))`,
              gap: tokens.spacing["gap-l"],
              marginTop: tokens.spacing["p-l"],
            }}
          >
            {/* Step 1 */}
            <div
              style={{
                textAlign: "center",
                padding: tokens.spacing["p-l"],
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: tokens.size["icon-60"],
                  height: tokens.size["icon-60"],
                  borderRadius: tokens.radius["rounded-m"],
                  backgroundColor: tokens.color["bg-brand-primary"],
                  color: tokens.color["bg-surface"],
                  fontSize: tokens.typography["h2-size"],
                  fontWeight: tokens.typography["h2-weight"],
                  marginBottom: tokens.spacing["p-m"],
                  margin: "0 auto " + tokens.spacing["p-m"] + " auto",
                  lineHeight: tokens.lineHeight["leading-normal"],
                }}
                aria-label="ステップ 1"
              >
                1
              </div>
              <h3
                style={{
                  fontSize: tokens.typography["h3-size"],
                  fontWeight: tokens.typography["h3-weight"],
                  margin: "0 0 " + tokens.spacing["p-m"] + " 0",
                  color: tokens.color["text-primary"],
                }}
              >
                簡単な質問に答える
              </h3>
              <p
                style={{
                  fontSize: tokens.typography["small-size"],
                  color: tokens.color["text-secondary"],
                  margin: 0,
                  lineHeight: tokens.lineHeight["leading-normal"],
                }}
              >
                約3分で完了。好みや日々の過ごし方について教えてください。
              </p>
            </div>

            {/* Arrow or Separator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: tokens.color["text-secondary"],
                fontSize: tokens.typography["h3-size"],
                lineHeight: tokens.lineHeight["leading-normal"],
              }}
              aria-hidden="true"
            >
              →
            </div>

            {/* Step 2 */}
            <div
              style={{
                textAlign: "center",
                padding: tokens.spacing["p-l"],
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: tokens.size["icon-60"],
                  height: tokens.size["icon-60"],
                  borderRadius: tokens.radius["rounded-m"],
                  backgroundColor: tokens.color["bg-brand-secondary"],
                  color: tokens.color["bg-surface"],
                  fontSize: tokens.typography["h2-size"],
                  fontWeight: tokens.typography["h2-weight"],
                  margin: "0 auto " + tokens.spacing["p-m"] + " auto",
                  lineHeight: tokens.lineHeight["leading-normal"],
                }}
                aria-label="ステップ 2"
              >
                2
              </div>
              <h3
                style={{
                  fontSize: tokens.typography["h3-size"],
                  fontWeight: tokens.typography["h3-weight"],
                  margin: "0 0 " + tokens.spacing["p-m"] + " 0",
                  color: tokens.color["text-primary"],
                }}
              >
                AIが分析
              </h3>
              <p
                style={{
                  fontSize: tokens.typography["small-size"],
                  color: tokens.color["text-secondary"],
                  margin: 0,
                  lineHeight: tokens.lineHeight["leading-normal"],
                }}
              >
                あなたの回答から、最適な日記スタイルと相性を分析します。
              </p>
            </div>

            {/* Arrow or Separator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: tokens.color["text-secondary"],
                fontSize: tokens.typography["h3-size"],
                lineHeight: tokens.lineHeight["leading-normal"],
              }}
              aria-hidden="true"
            >
              →
            </div>

            {/* Step 3 */}
            <div
              style={{
                textAlign: "center",
                padding: tokens.spacing["p-l"],
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: tokens.size["icon-60"],
                  height: tokens.size["icon-60"],
                  borderRadius: tokens.radius["rounded-m"],
                  backgroundColor: tokens.color["bg-brand-accent"],
                  color: tokens.color["bg-surface"],
                  fontSize: tokens.typography["h2-size"],
                  fontWeight: tokens.typography["h2-weight"],
                  margin: "0 auto " + tokens.spacing["p-m"] + " auto",
                  lineHeight: tokens.lineHeight["leading-normal"],
                }}
                aria-label="ステップ 3"
              >
                3
              </div>
              <h3
                style={{
                  fontSize: tokens.typography["h3-size"],
                  fontWeight: tokens.typography["h3-weight"],
                  margin: "0 0 " + tokens.spacing["p-m"] + " 0",
                  color: tokens.color["text-primary"],
                }}
              >
                結果を確認
              </h3>
              <p
                style={{
                  fontSize: tokens.typography["small-size"],
                  color: tokens.color["text-secondary"],
                  margin: 0,
                  lineHeight: tokens.lineHeight["leading-normal"],
                }}
              >
                あなただけのスタイルガイドと、今日から使えるテンプレートをお届けします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section
        style={{
          padding: tokens.spacing["p-xl"],
          backgroundColor: tokens.color["bg-brand-primary"],
          color: tokens.color["bg-surface"],
          textAlign: "center",
        }}
        aria-labelledby="cta-title"
      >
        <div
          style={{ maxWidth: tokens.size["container-max"], margin: "0 auto" }}
        >
          <h2
            id="cta-title"
            style={{
              fontSize: tokens.typography["h2-size"],
              fontWeight: tokens.typography["h2-weight"],
              margin: "0 0 " + tokens.spacing["p-m"] + " 0",
            }}
          >
            今日から、あなただけの物語を紡ぎましょう
          </h2>

          <p
            style={{
              fontSize: tokens.typography["body-size"],
              margin: "0 0 " + tokens.spacing["p-l"] + " 0",
              opacity: 0.95,
              lineHeight: tokens.lineHeight["leading-relaxed"],
            }}
          >
            診断は完全無料。結果はすぐに表示されます。
            <br />
            日々の記録が、未来のあなたへの贈り物になりますように。
          </p>

          <button
            onClick={() => {
              // Navigate to /diagnosis/start
              window.location.href = "/diagnosis/start";
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: `0 ${tokens.spacing["p-l"]}`,
              height: tokens.size["touch-min"],
              backgroundColor: tokens.color["bg-surface"],
              color: tokens.color["bg-brand-primary"],
              border: "none",
              borderRadius: tokens.radius["rounded-m"],
              fontSize: tokens.typography["body-size"],
              fontWeight: 600,
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: tokens.shadow["shadow-card"],
              lineHeight: tokens.lineHeight["leading-none"],
            }}
            aria-label="今すぐ診断を開始"
          >
            診断を開始（無料）
          </button>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer
        style={{
          padding: tokens.spacing["p-l"],
          backgroundColor: tokens.color["bg-surface-muted"],
          borderTop: `${tokens.border["width-default"]} solid ${tokens.color["border-default"]}`,
          textAlign: "center",
          marginTop: "auto",
        }}
      >
        <p
          style={{
            fontSize: tokens.typography["caption-size"],
            color: tokens.color["text-secondary"],
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} — 日々の記録を楽しむあなたへ
        </p>
      </footer>
    </div>
  );
}

// ==================== EXPORT AUDIT LOG ====================
// PART D: Compliance Verification (Run after component renders)
export function getAuditLog(): string[] {
  return auditLog;
}
