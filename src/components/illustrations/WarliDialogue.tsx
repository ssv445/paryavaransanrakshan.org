import type { SVGProps } from "react";

/**
 * Warli-style dialogue icon — two figures with speech marks.
 * Represents the Jan Samwad (public dialogue) karyavibhag.
 */
export default function WarliDialogue(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      {/* left figure */}
      <circle cx="16" cy="28" r="5" />
      <line x1="16" y1="33" x2="16" y2="50" />
      <line x1="16" y1="50" x2="12" y2="60" />
      <line x1="16" y1="50" x2="20" y2="60" />
      <line x1="16" y1="38" x2="24" y2="34" />
      {/* right figure */}
      <circle cx="48" cy="28" r="5" />
      <line x1="48" y1="33" x2="48" y2="50" />
      <line x1="48" y1="50" x2="44" y2="60" />
      <line x1="48" y1="50" x2="52" y2="60" />
      <line x1="48" y1="38" x2="40" y2="34" />
      {/* speech bubbles */}
      <rect x="22" y="6" width="12" height="10" rx="3" fill="currentColor" fillOpacity="0.1" />
      <rect x="38" y="10" width="12" height="10" rx="3" fill="currentColor" fillOpacity="0.1" />
      {/* speech lines */}
      <line x1="25" y1="10" x2="31" y2="10" />
      <line x1="25" y1="13" x2="29" y2="13" />
      <line x1="41" y1="14" x2="47" y2="14" />
      <line x1="41" y1="17" x2="45" y2="17" />
    </svg>
  );
}
