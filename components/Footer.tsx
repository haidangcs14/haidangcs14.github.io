"use client";

import { common, content, ui } from "@/data/profile";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLang();
  return (
    <footer className="footer">
      <div className="wrap">
        © {new Date().getFullYear()} {common.name} · {ui[lang].lastUpdated}{" "}
        {content[lang].updated}
      </div>
    </footer>
  );
}
