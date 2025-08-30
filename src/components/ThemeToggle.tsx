"use client";

import dynamic from "next/dynamic";

const ThemeToggleClient = dynamic(() => import("./ThemeToggleClient"), {
  ssr: false,
  loading: () => null,
});

export default function ThemeToggle() {
  return <ThemeToggleClient />;
}
