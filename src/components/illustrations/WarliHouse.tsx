import type { SVGProps } from "react";

/**
 * Warli-style house icon — hut with triangular roof and plant on top.
 * Represents the Harit Ghar (Green Home) program.
 */
export default function WarliHouse(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      {/* roof (triangle) */}
      <polygon points="32,8 6,34 58,34" />
      {/* walls */}
      <rect x="14" y="34" width="36" height="24" />
      {/* door */}
      <rect x="26" y="42" width="12" height="16" />
      {/* small window */}
      <rect x="40" y="38" width="6" height="6" />
      {/* plant on roof */}
      <line x1="32" y1="8" x2="32" y2="2" />
      <circle cx="28" cy="3" r="2" fill="currentColor" stroke="none" />
      <circle cx="36" cy="3" r="2" fill="currentColor" stroke="none" />
      <circle cx="32" cy="1" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
