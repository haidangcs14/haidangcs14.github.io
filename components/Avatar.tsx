"use client";

import { useState } from "react";

// Hiện ảnh đại diện; nếu chưa có file ảnh thì hiện chữ cái đầu của tên.
export default function Avatar({ src, name }: { src: string; name: string }) {
  const [ok, setOk] = useState(true);
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(-2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return ok ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="avatar"
      src={src}
      alt={name}
      width={152}
      height={152}
      onError={() => setOk(false)}
    />
  ) : (
    <div className="avatar avatar-fallback" role="img" aria-label={name}>
      {initials}
    </div>
  );
}
