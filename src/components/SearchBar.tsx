import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <label htmlFor="search" className="sr-only">
        作品を検索
      </label>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <input
        id="search"
        type="search"
        placeholder="タイトル、作者、地域、あらすじで検索..."
        className="h-10 w-full rounded-md border border-input bg-background px-10 py-2 text-[16px] leading-4 tracking-tight ring-offset-background placeholder:text-sm placeholder:tracking-normal focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
