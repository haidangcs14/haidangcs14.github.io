"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { ui } from "@/data/profile";

export default function BackToTop() {
  const { lang } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className="to-top"
      data-visible={visible}
      aria-label={ui[lang].backToTop}
      title={ui[lang].backToTop}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
