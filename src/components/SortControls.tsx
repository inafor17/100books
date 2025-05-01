import { ArrowUp, ArrowDown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { SortKey, SortOrder } from "@/types/sort";

interface SortControlsProps {
  sortKey: SortKey;
  onSortKeyChange: (value: SortKey) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (value: SortOrder) => void;
}

export default function SortControls({ sortKey, onSortKeyChange, sortOrder, onSortOrderChange }: SortControlsProps) {
  return (
    <div className="flex items-center gap-4">
      <Select value={sortKey} onValueChange={(value) => onSortKeyChange(value as SortKey)}>
        <SelectTrigger className="w-[140px] !h-10 text-sm px-3 py-2 rounded-md border bg-background hover:bg-muted transition-colors whitespace-nowrap">
          <SelectValue placeholder="並び替え" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="title">表題</SelectItem>
          <SelectItem value="author">作者</SelectItem>
          <SelectItem value="sortTimeWritten">年代</SelectItem>
        </SelectContent>
      </Select>
      <button
        onClick={() => onSortOrderChange(sortOrder === "asc" ? "desc" : "asc")}
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border bg-background hover:bg-muted transition-colors whitespace-nowrap h-10 text-sm"
        aria-label={`${sortOrder === "asc" ? "降順" : "昇順"}に並び替え`}
      >
        {sortOrder === "asc" ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
      </button>
    </div>
  );
}
