import type { SVGProps } from "react";

/**
 * Warli-style temple/shrine icon — dome top with pillars.
 * Represents the Religious Institutes karyavibhag.
 */
export default function WarliTemple(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      {/* dome / shikhar */}
      <path d="M32 4 C22 4 14 14 14 22 L50 22 C50 14 42 4 32 4Z" />
      {/* kalash */}
      <circle cx="32" cy="6" r="2.5" fill="currentColor" stroke="none" />
      {/* lintel */}
      <rect x="10" y="22" width="44" height="4" />
      {/* pillars */}
      <line x1="18" y1="26" x2="18" y2="54" />
      <line x1="30" y1="26" x2="30" y2="54" />
      <line x1="34" y1="26" x2="34" y2="54" />
      <line x1="46" y1="26" x2="46" y2="54" />
      {/* base */}
      <rect x="10" y="54" width="44" height="4" />
      {/* door arch */}
      <path d="M30 54 L30 40 Q32 36 34 40 L34 54" />
    </svg>
  );
}
