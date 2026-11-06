"use client";
import { useEffect, useRef, useState } from "react";
import { common, content, ui } from "@/data/profile";
import { useLang } from "@/lib/i18n";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [seen, setSeen] = useState(false);

  // Khi tiêu đề cuộn vào màn hình thì khối "nhấc lên" một lần
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} className="section">
      <div className="wrap section-grid">
        <h2 ref={titleRef} data-seen={seen}>
          {title}
        </h2>
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}

export function Experience() {
  const { lang } = useLang();
  const t = ui[lang];
  return (
    <Section id="experience" title={t.sections.experience}>
      <ol className="timeline">
        {content[lang].experience.map((e) => (
          <li key={e.period + e.title}>
            <div className="exp-head">
              <p className="strong exp-title">
                {e.url ? (
                  <a href={e.url} target="_blank" rel="noopener noreferrer">
                    {e.title}
                  </a>
                ) : (
                  e.title
                )}
              </p>
              <p className="exp-period">{e.period}</p>
              {e.subtitle && <p className="exp-sub">{e.subtitle}</p>}
              {e.location && <p className="exp-loc">{e.location}</p>}
            </div>

            {e.description && (
              <p className="exp-line">
                <strong>{t.description}:</strong> {e.description}
              </p>
            )}
            {e.technologies && (
              <p className="exp-line">
                <strong>{t.technologies}:</strong> {e.technologies}
              </p>
            )}
            {e.responsibilities && e.responsibilities.length > 0 && (
              <div className="exp-line">
                <p className="exp-label">{t.responsibilities}</p>
                <ul className="exp-list">
                  {e.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Projects() {
  const { lang } = useLang();
  return (
    <Section id="projects" title={ui[lang].sections.projects}>
      <div className="projects">
        {content[lang].projects.map((p) => (
          <article key={p.title}>
            <h3>
              {p.title}
              {p.tech && (
                <>
                  <span className="proj-sep" aria-hidden="true">
                    |
                  </span>
                  <span className="proj-tech">{p.tech}</span>
                </>
              )}
            </h3>
            <p className="meta">
              {p.org}: {p.context}
            </p>
            <ul>
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

// export function Awards() {
//   const { lang } = useLang();
//   return (
//     <Section id="awards" title={ui[lang].sections.awards}>
//       <ul className="awards">
//         {content[lang].awards.map((a) => (
//           <li key={a.title + a.year}>
//             <span className="rank">{a.rank}</span>
//             <span>
//               <span className="strong">{a.title}</span>
//               <span className="detail">{a.detail}</span>
//             </span>
//             <span className="meta year">{a.year}</span>
//           </li>
//         ))}
//       </ul>
//     </Section>
//   );
// }

export function Certificates() {
  const { lang } = useLang();
  const t = ui[lang];
  return (
    <Section id="certificates" title={t.sections.certificates}>
      <ul className="certs">
        {content[lang].certificates.map((c, i) => (
          <li key={`${lang}-${i}`}>
            <span className="rank">{c.category}</span>
            <span>
              <span className="strong">{c.name}</span>
              <span className="detail">{c.issuer}</span>
              {c.url && (
                <a
                  className="cert-link"
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.viewCredential} ↗
                </a>
              )}
            </span>
            <span className="meta year">{c.year}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Education() {
  const { lang } = useLang();
  return (
    <Section id="education" title={ui[lang].sections.education}>
      <ul className="edu">
        {content[lang].education.map((e) => (
          <li key={e.school}>
            <p className="strong">{e.school}</p>
            <p>{e.degree}</p>
            <p className="meta">{e.period}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Skills() {
  const { lang } = useLang();
  return (
    <Section id="skills" title={ui[lang].sections.skills}>
      <ul className="chips">
        {common.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </Section>
  );
}
