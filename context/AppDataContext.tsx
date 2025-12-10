"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

import { THEMES, ThemeKey } from "@/lib/themes";

// Types
export interface DiaryEntry {
  id: string; // Changed to string for UUID generation
  date: string; // Format: "MM/DD" or "YYYY-MM-DD"
  fullDate: string; // ISO string for sorting
  mood: string; // "sunny" | "spa" | "rainy" | "thunderstorm" | "celebration"
  text: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatarConfig: string; // scalable for future avatar features
  theme: ThemeKey;
}

interface AppDataContextType {
  entries: DiaryEntry[];
  userProfile: UserProfile;
  addEntry: (entry: Omit<DiaryEntry, "id">) => void;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
}

const AppDataContext = createContext<AppDataContextType | undefined>(undefined);

const STORAGE_KEY_ENTRIES = "career-ai-ui-entries";
const STORAGE_KEY_PROFILE = "career-ai-ui-profile";

export function AppDataProvider({children}: {children: React.ReactNode}) {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "Guest",
    email: "",
    avatarConfig: "default",
    theme: "pink", // Default theme
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from LocalStorage on mount
  useEffect(() => {
    try {
      const savedEntries = localStorage.getItem(STORAGE_KEY_ENTRIES);
      const savedProfile = localStorage.getItem(STORAGE_KEY_PROFILE);

      if (savedEntries) {
        setEntries(JSON.parse(savedEntries));
      } else {
        // Initial Dummy Data
        const dummyEntries: DiaryEntry[] = [
          {
            id: "1",
            date: "12/10",
            fullDate: "2025-12-10",
            mood: "celebration",
            text: "新しいアプリのアイデアを思いついた！",
          },
          {
            id: "2",
            date: "12/09",
            fullDate: "2025-12-09",
            mood: "spa",
            text: "ゆっくりお風呂に入ってリラックス。",
          },
        ];
        setEntries(dummyEntries);
      }

      if (savedProfile) {
        setUserProfile((prev) => ({ ...prev, ...JSON.parse(savedProfile) }));
      }
    } catch (error) {
      console.error("Failed to load data from localStorage:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Apply Theme
  useEffect(() => {
    const theme = THEMES[userProfile.theme] || THEMES["pink"];
    const root = document.documentElement;
    
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [userProfile.theme]);

  // Save to LocalStorage whenever state changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY_ENTRIES, JSON.stringify(entries));
    }
  }, [entries, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(userProfile));
    }
  }, [userProfile, isLoaded]);

  const addEntry = (newEntry: Omit<DiaryEntry, "id">) => {
    const entry: DiaryEntry = {
      ...newEntry,
      id: crypto.randomUUID(),
    };
    // Add to beginning of list
    setEntries((prev) => [entry, ...prev]);
  };

  const updateUserProfile = (updates: Partial<UserProfile>) => {
    setUserProfile((prev) => ({ ...prev, ...updates }));
  };

  return (
    <AppDataContext.Provider value={{ entries, userProfile, addEntry, updateUserProfile }}>
      {children}
    </AppDataContext.Provider>
  );
}

export function useAppData() {
  const context = useContext(AppDataContext);
  if (context === undefined) {
    throw new Error("useAppData must be used within an AppDataProvider");
  }
  return context;
}
