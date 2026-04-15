import type { SVGProps } from "react";

/**
 * A simple repeating Kolam-inspired motif used as a section divider.
 * Monochrome SVG, currentColor, scales to full width.
 */
export default function KolamDivider(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 12"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
      {...props}
    >
      <defs>
        <pattern id="kolam" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round">
            {/* four-petal lotus dot motif */}
            <circle cx="6" cy="6" r="1.2" fill="currentColor" />
            <path d="M6 1.5 C 8 3, 8 5, 6 6 C 4 5, 4 3, 6 1.5 Z" />
            <path d="M6 10.5 C 8 9, 8 7, 6 6 C 4 7, 4 9, 6 10.5 Z" />
            <path d="M1.5 6 C 3 4, 5 4, 6 6 C 5 8, 3 8, 1.5 6 Z" />
            <path d="M10.5 6 C 9 4, 7 4, 6 6 C 7 8, 9 8, 10.5 6 Z" />
          </g>
        </pattern>
      </defs>
      <rect width="120" height="12" fill="url(#kolam)" />
    </svg>
  );
}
