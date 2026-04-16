import type { SVGProps } from "react";

/**
 * Warli-style school/education icon — open book with a figure reading.
 * Represents the Educational Institutes karyavibhag.
 */
export default function WarliSchool(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      {/* open book */}
      <path d="M6 20 L32 28 L58 20" />
      <path d="M6 20 L6 50 L32 58 L58 50 L58 20" />
      <line x1="32" y1="28" x2="32" y2="58" />
      {/* page lines left */}
      <line x1="12" y1="28" x2="28" y2="34" />
      <line x1="12" y1="34" x2="28" y2="40" />
      <line x1="12" y1="40" x2="28" y2="46" />
      {/* page lines right */}
      <line x1="52" y1="28" x2="36" y2="34" />
      <line x1="52" y1="34" x2="36" y2="40" />
      <line x1="52" y1="40" x2="36" y2="46" />
      {/* small Warli figure reading above book */}
      <circle cx="32" cy="8" r="4" />
      <line x1="32" y1="12" x2="32" y2="22" />
      <path d="M28 16 L24 20" />
      <path d="M36 16 L40 20" />
    </svg>
  );
}
