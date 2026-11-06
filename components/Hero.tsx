"use client";

import { common, content, ui } from "@/data/profile";
import { useLang } from "@/lib/i18n";
import Avatar from "./Avatar";
import TypedName from "./TypedName";

export default function Hero() {
  const { lang } = useLang();
  const c = content[lang];
  const { links } = common;
  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-photo">
          <Avatar src={common.avatar} name={common.name} />
        </div>
        <div className="hero-text">
          <TypedName text={common.name} />
          <p className="hero-role">
            {c.role}, {c.location}
          </p>
          <div className="prose">
            {c.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="contact">
            <a href={`mailto:${common.email}`}>{common.email}</a>
            {common.phone && (
              <a href={`tel:${common.phone.replace(/[^+\d]/g, "")}`}>
                {common.phone}
              </a>
            )}
          </p>
          <ul className="hero-links">
            {links.github && (
              <li>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            )}
            {links.linkedin && (
              <li>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            )}
            {links.cv && (
              <li>
                <a href={links.cv} target="_blank" rel="noopener noreferrer">
                  {ui[lang].cv}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
