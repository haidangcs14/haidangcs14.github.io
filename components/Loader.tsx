"use client";

import { useEffect, useState } from "react";
import { common } from "@/data/profile";

const SPIN_MIN_MS = 1000; // vòng tròn xoay tối thiểu
const MAX_WAIT_MS = 6000; // an toàn: tối đa chờ tài nguyên
const TYPE_SPEED = 110; // mili giây mỗi chữ
const HOLD_MS = 700; // dừng sau khi gõ xong, trước khi hiện nội dung

type Phase = "spin" | "type" | "hide" | "gone";

export default function Loader() {
  const [phase, setPhase] = useState<Phase>("spin");
  const [count, setCount] = useState(0);
  const name = common.name;

  // 1) Vòng tròn xoay cho tới khi trang tải xong (và đủ thời gian tối thiểu)
  useEffect(() => {
    let done = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const go = () => {
      if (done) return;
      done = true;
      const wait = Math.max(0, SPIN_MIN_MS - performance.now());
      timer = setTimeout(() => setPhase("type"), wait);
    };

    if (document.readyState === "complete") go();
    else window.addEventListener("load", go, { once: true });
    const maxTimer = setTimeout(go, MAX_WAIT_MS);

    return () => {
      window.removeEventListener("load", go);
      clearTimeout(maxTimer);
      if (timer) clearTimeout(timer);
    };
  }, []);

  // 2) Gõ tên từng chữ, rồi hiện nội dung
  useEffect(() => {
    if (phase !== "type") return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let i = 0;

    const finish = () => {
      timer = setTimeout(
        () => {
          document.documentElement.dataset.ready = "true"; // cho hero bắt đầu hiện
          setPhase("hide");
        },
        reduce ? 200 : HOLD_MS,
      );
    };

    if (reduce) {
      setCount(name.length);
      finish();
      return () => {
        if (timer) clearTimeout(timer);
      };
    }

    const tick = () => {
      i += 1;
      setCount(i);
      if (i < name.length) {
        // Thêm chút ngẫu nhiên để nhịp gõ trông tự nhiên
        timer = setTimeout(tick, TYPE_SPEED + Math.random() * 70);
      } else {
        finish();
      }
    };
    timer = setTimeout(tick, 250);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [phase, name]);

  // 3) Sau khi mờ dần xong thì gỡ hẳn khỏi DOM
  useEffect(() => {
    if (phase !== "hide") return;
    const t = setTimeout(() => setPhase("gone"), 600);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div
      className="loader"
      data-state={phase === "hide" ? "hide" : "show"}
      data-phase={phase}
      role="status"
      aria-label="Loading"
    >
      <div className="loader-spinner" aria-hidden="true" />
      <p
        className="loader-name"
        data-complete={count === name.length}
        aria-hidden="true"
      >
        {/* Giữ chỗ bằng đúng độ rộng của tên để chữ không bị lệch khi gõ */}
        <span className="loader-name-ghost">{name}</span>
        <span className="loader-name-live">
          {name.slice(0, count)}
          <span className="caret" />
        </span>
      </p>
    </div>
  );
}
