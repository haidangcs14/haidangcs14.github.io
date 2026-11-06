"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number; // mili giây mỗi chữ khi gõ (chưa tính độ lệch ngẫu nhiên)
  deleteSpeed?: number; // mili giây mỗi chữ khi xóa
  hold?: number; // dừng sau khi gõ xong
  pause?: number; // nghỉ khi đã xóa hết, trước khi gõ lại
};

export default function TypedName({
  text,
  speed = 110,
  deleteSpeed = 55,
  hold = 2200,
  pause = 600,
}: Props) {
  // Bắt đầu với tên đầy đủ: lần gõ đầu tiên đã diễn ra ở màn hình loading
  const [count, setCount] = useState(text.length);
  const [phase, setPhase] = useState<"typing" | "hold" | "deleting">("hold");

  useEffect(() => {
    // Người dùng chọn giảm chuyển động: giữ nguyên tên, không lặp
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setTimeout> | undefined;
    let observer: MutationObserver | undefined;
    let i = text.length;
    let dir: 1 | -1 = -1;

    const tick = () => {
      if (dir === 1) {
        i += 1;
        setCount(i);
        if (i < text.length) {
          setPhase("typing");
          timer = setTimeout(tick, speed + Math.random() * 70);
        } else {
          setPhase("hold");
          dir = -1;
          timer = setTimeout(tick, hold);
        }
      } else {
        i -= 1;
        setCount(i);
        if (i > 0) {
          setPhase("deleting");
          timer = setTimeout(tick, deleteSpeed);
        } else {
          setPhase("hold");
          dir = 1;
          timer = setTimeout(tick, pause);
        }
      }
    };

    // Chờ màn hình loading xong rồi mới bắt đầu vòng lặp
    const start = () => {
      timer = setTimeout(tick, hold);
    };
    const root = document.documentElement;
    if (root.dataset.ready) {
      start();
    } else {
      observer = new MutationObserver(() => {
        if (root.dataset.ready) {
          observer?.disconnect();
          start();
        }
      });
      observer.observe(root, {
        attributes: true,
        attributeFilter: ["data-ready"],
      });
    }

    return () => {
      if (timer) clearTimeout(timer);
      observer?.disconnect();
    };
  }, [text, speed, deleteSpeed, hold, pause]);

  return (
    <h1 className="typed" data-phase={phase}>
      <span className="sr-only">{text}</span>
      {/* Giữ chỗ bằng đúng độ rộng của tên đầy đủ để bố cục không bị nhảy */}
      <span className="typed-ghost" aria-hidden="true">
        {text}
      </span>
      <span className="typed-live" aria-hidden="true">
        {text.slice(0, count)}
        <span className="caret" />
      </span>
    </h1>
  );
}
