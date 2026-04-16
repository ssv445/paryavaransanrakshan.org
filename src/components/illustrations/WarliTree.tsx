import type { SVGProps } from "react";

/**
 * Warli-style tree icon — stylised trunk with circular canopy and dot-leaves.
 * Represents the Plantation program.
 */
export default function WarliTree(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      {/* trunk */}
      <line x1="32" y1="58" x2="32" y2="30" />
      {/* roots */}
      <path d="M32 58 L26 62" />
      <path d="M32 58 L38 62" />
      {/* branches */}
      <path d="M32 42 L22 36" />
      <path d="M32 42 L42 36" />
      <path d="M32 35 L24 28" />
      <path d="M32 35 L40 28" />
      {/* canopy (triangle — Warli style) */}
      <polygon points="32,4 8,34 56,34" fill="none" />
      {/* dot leaves */}
      <circle cx="20" cy="28" r="2" fill="currentColor" stroke="none" />
      <circle cx="32" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="44" cy="28" r="2" fill="currentColor" stroke="none" />
      <circle cx="26" cy="20" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="38" cy="20" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="32" cy="24" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
