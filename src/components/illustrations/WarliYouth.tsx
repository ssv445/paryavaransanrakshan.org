import type { SVGProps } from "react";

/**
 * Warli-style youth icon — energetic figure with raised arm and plant.
 * Represents the Yuvashakti karyavibhag.
 */
export default function WarliYouth(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      {/* figure */}
      <circle cx="28" cy="12" r="5" />
      <line x1="28" y1="17" x2="28" y2="40" />
      <line x1="28" y1="40" x2="22" y2="56" />
      <line x1="28" y1="40" x2="34" y2="56" />
      {/* raised arm — energy/victory */}
      <line x1="28" y1="24" x2="16" y2="30" />
      <line x1="28" y1="24" x2="42" y2="14" />
      {/* small plant/sapling in raised hand */}
      <line x1="42" y1="14" x2="42" y2="4" />
      <path d="M38 8 Q42 4, 46 8" fill="currentColor" fillOpacity="0.15" />
      <path d="M39 12 Q42 8, 45 12" fill="currentColor" fillOpacity="0.15" />
      {/* energy lines */}
      <line x1="48" y1="4" x2="52" y2="2" />
      <line x1="50" y1="8" x2="54" y2="8" />
      <line x1="48" y1="14" x2="52" y2="16" />
    </svg>
  );
}
