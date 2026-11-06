"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import { ui } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";

const IDS = [
  "home",
  "experience",
  "projects",
  "certificates",
  "education",
  "skills",
] as const;
type Id = (typeof IDS)[number];

export default function Nav() {
  const { lang } = useLang();
  const t = ui[lang];
  const [active, setActive] = useState<Id>("home");
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLElement>(null);
  const lockRef = useRef(false); // true khi đang cuộn tới mục được bấm
  const lockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Theo dõi section đang xem (tạm dừng khi đang cuộn do bấm menu)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (lockRef.current) return;
        entries.forEach(
          (e) => e.isIntersecting && setActive(e.target.id as Id),
        );
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Menu ngang: chỉ cuộn bên trong chính menu, không đụng tới cuộn của trang
  useEffect(() => {
    const box = linksRef.current;
    const a = box?.querySelector<HTMLElement>('a[aria-current="true"]');
    if (!box || !a) return;
    const left =
      a.getBoundingClientRect().left -
      box.getBoundingClientRect().left +
      box.scrollLeft -
      (box.clientWidth - a.offsetWidth) / 2;
    box.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  // Đóng dropdown khi bấm ra ngoài hoặc nhấn Esc
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function goTo(e: React.MouseEvent<HTMLAnchorElement>, id: Id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    setActive(id);
    setOpen(false);

    // Khoá việc nhận diện mục đang xem cho tới khi cuộn xong
    lockRef.current = true;
    const unlock = () => {
      lockRef.current = false;
    };
    if (lockTimer.current) clearTimeout(lockTimer.current);
    lockTimer.current = setTimeout(unlock, 1200);
    window.addEventListener("scrollend", unlock, { once: true });

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <header className="nav" ref={headerRef}>
      <a className="skip" href="#main">
        {t.skip}
      </a>
      <div className="nav-inner">
        {/* Mobile: nút 3 gạch + tên mục đang xem */}
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={t.sectionMenu}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="bars" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
        <span className="mobile-label" aria-hidden="true">
          {t.nav[active]}
        </span>

        {/* Desktop: menu ngang */}
        <nav className="nav-links" aria-label="Primary" ref={linksRef}>
          <ul>
            {IDS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  onClick={(e) => goTo(e, id)}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="controls">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>

      {open && (
        <ul id="mobile-menu" className="mobile-menu">
          {IDS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                onClick={(e) => goTo(e, id)}
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
