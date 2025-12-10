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
    "Diagnosis page loaded with token-only styling"
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
          padding: `${tokens.spacing["p-xl"]} ${tokens.spacing["p-l"]}`,
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
              lineHeight: 1.2,
            }}
          >
            あなたの可能性を、一緒に見つけましょう
          </h1>

          <p
            style={{
              fontSize: tokens.typography["body-size"],
              fontWeight: tokens.typography["body-weight"],
              margin: "0 0 " + tokens.spacing["p-l"] + " 0",
              lineHeight: 1.6,
              maxWidth: tokens.size["hero-max"],
              marginLeft: "auto",
              marginRight: "auto",
              opacity: 0.95,
            }}
          >
            キャリア診断なら、あなたの強みや向いているキャリアが3分で分かります。
            <br />
            それぞれの成長段階に合わせた、ぴったりなアドバイスをお届けします。
            <br />
            前向きな一歩を、今から始めましょう。
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
            }}
            aria-label="キャリア診断を始める"
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
            3つの視点から、あなたのキャリアの可能性を見つめ直します。
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(auto-fit, minmax(${tokens.size["card-min"]}, 1fr))`,
              gap: tokens.spacing["gap-l"],
              marginTop: tokens.spacing["p-l"],
            }}
          >
            {/* Card 1: 強み */}
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
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                💪
              </div>
              <h3
                style={{
                  fontSize: tokens.typography["h3-size"],
                  fontWeight: tokens.typography["h3-weight"],
                  margin: "0 0 " + tokens.spacing["p-m"] + " 0",
                  color: tokens.color["text-primary"],
                }}
              >
                あなたの強み
              </h3>
              <p
                style={{
                  fontSize: tokens.typography["small-size"],
                  color: tokens.color["text-secondary"],
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                これまでの経験や適性から、あなたが持つ才能や強みを見つけ出します。自分では気づかなかった可能性も発見できます。
              </p>
            </article>

            {/* Card 2: 向いているキャリア */}
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
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                🎯
              </div>
              <h3
                style={{
                  fontSize: tokens.typography["h3-size"],
                  fontWeight: tokens.typography["h3-weight"],
                  margin: "0 0 " + tokens.spacing["p-m"] + " 0",
                  color: tokens.color["text-primary"],
                }}
              >
                向いているキャリア
              </h3>
              <p
                style={{
                  fontSize: tokens.typography["small-size"],
                  color: tokens.color["text-secondary"],
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                あなたの強みや志向に合った、最適なキャリアパスをご提案します。多くの選択肢の中から、あなたらしい道を見つけましょう。
              </p>
            </article>

            {/* Card 3: 次のステップ */}
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
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                📍
              </div>
              <h3
                style={{
                  fontSize: tokens.typography["h3-size"],
                  fontWeight: tokens.typography["h3-weight"],
                  margin: "0 0 " + tokens.spacing["p-m"] + " 0",
                  color: tokens.color["text-primary"],
                }}
              >
                次に踏むべきステップ
              </h3>
              <p
                style={{
                  fontSize: tokens.typography["small-size"],
                  color: tokens.color["text-secondary"],
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                理想のキャリアに近づくために、今から何をすべきかが明確になります。具体的で実行可能なアクションプランをお届けします。
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
                  lineHeight: 1.5,
                }}
              >
                約3分で完了。難しい質問はありません。
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
                  lineHeight: 1.5,
                }}
              >
                数秒で分析完了。待ちなしで結果へ。
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
                  lineHeight: 1.5,
                }}
              >
                詳細な診断結果と、あなたへのアドバイス。
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
            今、キャリアの次の一歩を見つけましょう
          </h2>

          <p
            style={{
              fontSize: tokens.typography["body-size"],
              margin: "0 0 " + tokens.spacing["p-l"] + " 0",
              opacity: 0.95,
              lineHeight: 1.6,
            }}
          >
            診断は完全無料。結果はすぐに表示されます。
            <br />
            あなたの可能性を、一緒に探してみませんか？
          </p>

          <button
            onClick={() => {
              // Navigate to /diagnosis/start
              window.location.href = "/diagnosis/start";
            }}
            style={{
              padding: `${tokens.spacing["p-m"]} ${tokens.spacing["p-l"]}`,
              backgroundColor: tokens.color["bg-surface"],
              color: tokens.color["bg-brand-primary"],
              border: "none",
              borderRadius: tokens.radius["rounded-m"],
              fontSize: tokens.typography["body-size"],
              fontWeight: 600,
              cursor: "pointer",
              minHeight: tokens.size["touch-min"],
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: tokens.shadow["shadow-card"],
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
          © {new Date().getFullYear()} — 社員向けキャリア自律支援
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
