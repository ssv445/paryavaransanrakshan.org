import type { SVGProps } from "react";

/**
 * Warli-style community icon — group of figures in a circle.
 * Represents the Samajik Sansthan karyavibhag.
 */
export default function WarliCommunity(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      {/* central circle — community bond */}
      <circle cx="32" cy="32" r="12" fill="currentColor" fillOpacity="0.08" />
      {/* top figure */}
      <circle cx="32" cy="8" r="4" />
      <line x1="32" y1="12" x2="32" y2="22" />
      <line x1="28" y1="16" x2="36" y2="16" />
      {/* bottom-left figure */}
      <circle cx="12" cy="48" r="4" />
      <line x1="12" y1="52" x2="12" y2="60" />
      <line x1="8" y1="54" x2="16" y2="54" />
      {/* bottom-right figure */}
      <circle cx="52" cy="48" r="4" />
      <line x1="52" y1="52" x2="52" y2="60" />
      <line x1="48" y1="54" x2="56" y2="54" />
      {/* connecting lines to center */}
      <line x1="32" y1="22" x2="32" y2="20" strokeDasharray="2 2" />
      <line x1="12" y1="44" x2="20" y2="38" strokeDasharray="2 2" />
      <line x1="52" y1="44" x2="44" y2="38" strokeDasharray="2 2" />
    </svg>
  );
}
