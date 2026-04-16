import type { SVGProps } from "react";

/**
 * Warli-style megaphone/outreach icon — figure with megaphone.
 * Represents the Jan Sampark (public outreach) karyavibhag.
 */
export default function WarliMegaphone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      {/* figure */}
      <circle cx="18" cy="14" r="5" />
      <line x1="18" y1="19" x2="18" y2="44" />
      <line x1="18" y1="44" x2="14" y2="56" />
      <line x1="18" y1="44" x2="22" y2="56" />
      {/* arm holding megaphone */}
      <line x1="18" y1="26" x2="30" y2="22" />
      {/* megaphone cone */}
      <path d="M30 16 L50 8 L50 36 L30 28 Z" fill="currentColor" fillOpacity="0.1" />
      {/* sound waves */}
      <path d="M52 16 Q58 22, 52 28" />
      <path d="M54 12 Q62 22, 54 32" />
    </svg>
  );
}
