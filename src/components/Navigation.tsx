import Link from "next/link";
import { Grid, List } from "lucide-react";

interface NavigationProps {
  currentPath?: string;
}

export default function Navigation({ currentPath }: NavigationProps) {

  const navItems = [
    { href: "/cards", label: "カード表示", icon: Grid },
    { href: "/list", label: "リスト表示", icon: List },
  ];

  return (
    <nav className="flex items-center gap-6">
      {navItems.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            currentPath === href
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          <Icon className="h-4 w-4" />
          {label}
        </Link>
      ))}
    </nav>
  );
}