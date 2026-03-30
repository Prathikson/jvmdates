"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ta";

const LangContext = createContext<{
  lang: Lang;
  toggle: () => void;
  t: (en: string, ta: string) => string;
}>({ lang: "en", toggle: () => {}, t: (en) => en });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "ta" : "en"));
  const t = (en: string, ta: string) => (lang === "en" ? en : ta);
  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
