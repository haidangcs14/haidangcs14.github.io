"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { content } from "@/data/profile";

export type Lang = "vi" | "en";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LangContext = createContext<Ctx>({ lang: "vi", setLang: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("vi");

  // Lần đầu vào: ưu tiên lựa chọn đã lưu, sau đó đến ngôn ngữ trình duyệt.
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "vi" || saved === "en") {
        setLangState(saved);
      } else if (!navigator.language.toLowerCase().startsWith("vi")) {
        setLangState("en");
      }
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = content[lang].siteTitle;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
