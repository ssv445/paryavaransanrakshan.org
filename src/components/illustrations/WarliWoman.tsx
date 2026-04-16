import type { SVGProps } from "react";

/**
 * Warli-style woman figure — triangle dress, circular head, arms raised.
 * Represents the Nari Shakti karyavibhag.
 */
export default function WarliWoman(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      {/* head */}
      <circle cx="32" cy="12" r="6" />
      {/* hair/bun */}
      <circle cx="32" cy="7" r="3" fill="currentColor" stroke="none" />
      {/* body (inverted triangle — Warli female figure) */}
      <polygon points="32,20 16,56 48,56" />
      {/* arms raised in celebration */}
      <path d="M24 28 L10 16" />
      <path d="M40 28 L54 16" />
      {/* small circles at hands */}
      <circle cx="9" cy="15" r="2" fill="currentColor" stroke="none" />
      <circle cx="55" cy="15" r="2" fill="currentColor" stroke="none" />
      {/* feet */}
      <line x1="24" y1="56" x2="22" y2="62" />
      <line x1="40" y1="56" x2="42" y2="62" />
    </svg>
  );
}
