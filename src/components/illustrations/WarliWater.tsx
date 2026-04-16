import type { SVGProps } from "react";

/**
 * Warli-style water drop icon — stylised drop with concentric ripples.
 * Represents the Save Water program.
 */
export default function WarliWater(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      {/* water drop */}
      <path d="M32 6 C32 6 14 28 14 40 C14 50 22 56 32 56 C42 56 50 50 50 40 C50 28 32 6 32 6Z" />
      {/* inner ripples */}
      <path d="M22 42 Q27 38 32 42 Q37 46 42 42" />
      <path d="M24 48 Q28 44 32 48 Q36 52 40 48" />
      {/* dot accent */}
      <circle cx="32" cy="24" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}
