"use client";

import { useState } from "react";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-m">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-surface border border-border rounded-m overflow-hidden"
        >
          <button
            onClick={() => toggleItem(item.id)}
            aria-expanded={expandedId === item.id}
            aria-controls={`accordion-panel-${item.id}`}
            className="w-full px-m py-m flex items-center justify-between hover:bg-surface-hover transition-all duration-300 ease-out"
          >
            <span className="text-text-high font-semibold text-left">
              {item.title}
            </span>
            <svg
              className={`w-5 h-5 text-brand-primary transition-transform duration-300 ease-out ${
                expandedId === item.id ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>

          {expandedId === item.id && (
            <div
              id={`accordion-panel-${item.id}`}
              className="px-m py-m bg-surface-subtle border-t border-border animate-in fade-in duration-300"
            >
              <p className="text-text-muted leading-relaxed">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
