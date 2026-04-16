import type { SVGProps } from "react";

/**
 * Kolam-inspired corner ornament — interlocking loops.
 * Use at card corners, pull-quote brackets, etc.
 */
export default function KolamCorner(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      {/* outer loop */}
      <path d="M2 38 Q2 2 38 2" />
      <path d="M6 38 Q6 6 38 6" />
      {/* inner loops (Kolam knot crossings) */}
      <path d="M10 38 Q10 20 20 14 Q30 10 38 10" />
      <path d="M16 38 Q16 26 24 20 Q32 16 38 16" />
      {/* dot accents */}
      <circle cx="20" cy="20" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="28" r="1" fill="currentColor" stroke="none" />
      <circle cx="28" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
