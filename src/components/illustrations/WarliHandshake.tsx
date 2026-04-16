import type { SVGProps } from "react";

/**
 * Warli-style handshake icon — two stick-figure arms clasping.
 * Represents the NGO Coordination karyavibhag.
 */
export default function WarliHandshake(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      {/* left arm */}
      <path d="M4 28 L20 28 L28 20" />
      {/* right arm */}
      <path d="M60 28 L44 28 L36 20" />
      {/* clasped hands (diamond) */}
      <polygon points="32,14 24,24 32,34 40,24" fill="currentColor" fillOpacity="0.15" />
      {/* fingers — short strokes */}
      <line x1="28" y1="20" x2="32" y2="16" />
      <line x1="36" y1="20" x2="32" y2="16" />
      <line x1="26" y1="24" x2="32" y2="20" />
      <line x1="38" y1="24" x2="32" y2="20" />
      {/* two Warli stick figures */}
      {/* left person */}
      <circle cx="10" cy="14" r="5" />
      <line x1="10" y1="19" x2="10" y2="44" />
      <line x1="10" y1="44" x2="6" y2="56" />
      <line x1="10" y1="44" x2="14" y2="56" />
      {/* right person */}
      <circle cx="54" cy="14" r="5" />
      <line x1="54" y1="19" x2="54" y2="44" />
      <line x1="54" y1="44" x2="50" y2="56" />
      <line x1="54" y1="44" x2="58" y2="56" />
    </svg>
  );
}
