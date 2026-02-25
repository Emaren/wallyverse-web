"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/lib/wallyverse-content";

type ArcNavProps = {
  items: NavItem[];
  compact?: boolean;
};

function isActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function ArcNav({ items, compact = false }: ArcNavProps) {
  const pathname = usePathname();

  return (
    <nav className={compact ? "arc-nav arc-nav-compact" : "arc-nav"} aria-label="Wallyverse">
      {items.map((item) => {
        const active = isActive(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={active ? "arc-link arc-link-active" : "arc-link"}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
