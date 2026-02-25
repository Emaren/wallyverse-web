"use client";

import { usePathname } from "next/navigation";

import { getMoodFromPath } from "@/lib/wallyverse-content";

import { SwirlField } from "./SwirlField";

export function SiteAmbient() {
  const pathname = usePathname();
  const mood = getMoodFromPath(pathname);

  return (
    <>
      <SwirlField mood={mood} />
      <div className={`ambient-haze ambient-${mood}`} aria-hidden="true" />
      <div className="ambient-grain" aria-hidden="true" />
      <div className="ambient-vignette" aria-hidden="true" />
    </>
  );
}
