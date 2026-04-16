import type { SVGProps } from "react";

/**
 * Warli-style crossed-out bag icon — a polythene bag with a strike-through.
 * Represents the Polythene Free program.
 */
export default function WarliNoPlastic(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      {/* bag body */}
      <path d="M18 22 L16 56 L48 56 L46 22 Z" />
      {/* handles */}
      <path d="M24 22 C24 14 28 10 32 10 C36 10 40 14 40 22" />
      {/* creases */}
      <line x1="26" y1="32" x2="26" y2="48" />
      <line x1="38" y1="32" x2="38" y2="48" />
      {/* strike-through circle + slash */}
      <circle cx="32" cy="34" r="22" strokeWidth="2.5" />
      <line x1="16" y1="50" x2="48" y2="18" strokeWidth="2.5" />
    </svg>
  );
}
