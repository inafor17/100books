import Link from "next/link";
import { LayoutGrid, List } from "lucide-react";
import type { ViewMode } from "@/types/view";

interface ViewModeToggleProps {
  value: ViewMode;
  onChange?: (value: ViewMode) => void;
}

export default function ViewModeToggle({ value }: ViewModeToggleProps) {
  return (
    <div className="inline-flex border rounded-md p-1 bg-background flex-shrink-0" role="group" aria-label="表示モード">
      <Link
        href="/list"
        className={`inline-flex items-center justify-center h-10 w-10 min-w-[40px] rounded-sm transition-colors flex-shrink-0 ${
          value === "list" 
            ? "bg-primary text-primary-foreground" 
            : "hover:bg-muted hover:text-muted-foreground"
        }`}
        aria-label="リスト表示"
      >
        <List className="h-4 w-4" />
      </Link>
      <Link
        href="/cards"
        className={`inline-flex items-center justify-center h-10 w-10 min-w-[40px] rounded-sm transition-colors flex-shrink-0 ${
          value === "grid" 
            ? "bg-primary text-primary-foreground" 
            : "hover:bg-muted hover:text-muted-foreground"
        }`}
        aria-label="グリッド表示"
      >
        <LayoutGrid className="h-4 w-4" />
      </Link>
    </div>
  );
}
