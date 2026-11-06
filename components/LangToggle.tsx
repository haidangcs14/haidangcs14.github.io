"use client";

import { useLang, type Lang } from "@/lib/i18n";
import { ui } from "@/data/profile";

const OPTIONS: { value: Lang; label: string }[] = [
  { value: "vi", label: "VI" },
  { value: "en", label: "EN" },
];

export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="seg" role="group" aria-label={ui[lang].langLabel}>
      {OPTIONS.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={lang === o.value}
          onClick={() => setLang(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
