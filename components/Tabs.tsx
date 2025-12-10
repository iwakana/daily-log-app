"use client";

import { useState, useRef, useEffect } from "react";

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
}

export function Tabs({ tabs, defaultTabId }: TabsProps) {
  const [selectedIndex, setSelectedIndex] = useState(
    tabs.findIndex((t) => t.id === defaultTabId) || 0
  );
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex: number | null = null;

    switch (e.key) {
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = index === 0 ? tabs.length - 1 : index - 1;
        break;
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = index === tabs.length - 1 ? 0 : index + 1;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    e.preventDefault();
    setSelectedIndex(nextIndex);
    tabsRef.current[nextIndex]?.focus();
  };

  return (
    <div className="w-full">
      {/* Tab List */}
      <div
        role="tablist"
        className="flex gap-0 border-b border-border overflow-x-auto"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => {
              tabsRef.current[index] = el;
            }}
            role="tab"
            aria-selected={selectedIndex === index}
            aria-controls={`tabpanel-${tab.id}`}
            onClick={() => setSelectedIndex(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`px-m py-m font-medium transition-all duration-300 ease-out whitespace-nowrap ${
              selectedIndex === index
                ? "border-b-2 border-brand-primary text-brand-primary"
                : "text-text-muted hover:text-text-high"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="mt-m">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            id={`tabpanel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            hidden={selectedIndex !== index}
            className={`animate-in fade-in duration-300 ${
              selectedIndex === index ? "block" : "hidden"
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
