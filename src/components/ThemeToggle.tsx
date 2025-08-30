"use client";

import dynamic from "next/dynamic";
import { Sun } from "lucide-react";

const ThemeToggleClient = dynamic(() => import("./ThemeToggleClient"), {
  ssr: false,
  loading: () => (
    <div className="inline-flex items-center justify-center h-10 w-10 min-w-[40px] rounded-md border bg-background flex-shrink-0">
      <Sun className="h-4 w-4" />
      <span className="sr-only">テーマ切り替え</span>
    </div>
  ),
});

export default function ThemeToggle() {
  return <ThemeToggleClient />;
}
