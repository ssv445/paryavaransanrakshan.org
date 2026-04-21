import type { SVGProps } from "react";

type Variant = "vriksha" | "birds" | "surya" | "rule";

type Props = SVGProps<SVGSVGElement> & {
  variant?: Variant;
};

/**
 * Godna-inspired dingbats — ritual-tattoo derived glyphs used as
 * typographic ornaments (heading end-marks, section closers, pull-quote
 * caps, end-of-article marks).
 *
 * Styled to feel hand-set: monochrome, symmetric, small-scale,
 * `currentColor`-driven. Keep uses sparse — they are punctuation, not
 * illustration.
 */
export default function GodnaGlyph({ variant = "vriksha", ...rest }: Props) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (variant === "birds") {
    // Two facing sparrows on a line — heading end-mark for gatherings / movement themes.
    return (
      <svg {...common} {...rest}>
        <line x1="2" y1="19" x2="22" y2="19" />
        {/* Left bird */}
        <path d="M7 18 L4 14 L8 14 Z" />
        <circle cx="5" cy="12.5" r="1.3" fill="currentColor" />
        <path d="M4 14 L2 12" />
        {/* Right bird */}
        <path d="M17 18 L20 14 L16 14 Z" />
        <circle cx="19" cy="12.5" r="1.3" fill="currentColor" />
        <path d="M20 14 L22 12" />
        {/* Centre grain between them */}
        <circle cx="12" cy="16.5" r="0.9" fill="currentColor" />
      </svg>
    );
  }

  if (variant === "surya") {
    // Sun/rosette — radial 8-point star, end-mark for life / change themes.
    return (
      <svg {...common} {...rest}>
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
        <circle cx="12" cy="12" r="4.6" fill="none" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
          const rad = (a * Math.PI) / 180;
          const x1 = 12 + Math.cos(rad) * 5.6;
          const y1 = 12 + Math.sin(rad) * 5.6;
          const x2 = 12 + Math.cos(rad) * 9;
          const y2 = 12 + Math.sin(rad) * 9;
          return (
            <line
              key={a}
              x1={x1.toFixed(2)}
              y1={y1.toFixed(2)}
              x2={x2.toFixed(2)}
              y2={y2.toFixed(2)}
            />
          );
        })}
        {/* Small dots between rays — the "petal" feel */}
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((a) => {
          const rad = (a * Math.PI) / 180;
          const cx = 12 + Math.cos(rad) * 7.5;
          const cy = 12 + Math.sin(rad) * 7.5;
          return (
            <circle key={a} cx={cx.toFixed(2)} cy={cy.toFixed(2)} r="0.55" fill="currentColor" />
          );
        })}
      </svg>
    );
  }

  if (variant === "rule") {
    // Full-width section closer — three glyphs strung on a hairline.
    // Use with `width: 100%`, larger viewBox so motifs stay small.
    return (
      <svg
        viewBox="0 0 240 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        {...rest}
      >
        <line x1="0" y1="12" x2="100" y2="12" strokeWidth={0.5} opacity={0.45} />
        <line x1="140" y1="12" x2="240" y2="12" strokeWidth={0.5} opacity={0.45} />
        {/* Left diamond */}
        <path d="M108 6 L114 12 L108 18 L102 12 Z" fill="none" />
        {/* Centre dot */}
        <circle cx="120" cy="12" r="1.6" fill="currentColor" />
        {/* Right diamond */}
        <path d="M132 6 L138 12 L132 18 L126 12 Z" fill="none" />
      </svg>
    );
  }

  // vriksha — the default: symmetric ritual tree.
  return (
    <svg {...common} {...rest}>
      {/* Base / earth line */}
      <line x1="4" y1="22" x2="20" y2="22" />
      {/* Stem */}
      <line x1="12" y1="22" x2="12" y2="4" />
      {/* Three pairs of branches */}
      <line x1="12" y1="18" x2="7" y2="15" />
      <line x1="12" y1="18" x2="17" y2="15" />
      <line x1="12" y1="14" x2="6" y2="10" />
      <line x1="12" y1="14" x2="18" y2="10" />
      <line x1="12" y1="10" x2="8" y2="6" />
      <line x1="12" y1="10" x2="16" y2="6" />
      {/* Leaf-lobe seeds at each branch tip */}
      <circle cx="7" cy="15" r="1" fill="currentColor" />
      <circle cx="17" cy="15" r="1" fill="currentColor" />
      <circle cx="6" cy="10" r="1" fill="currentColor" />
      <circle cx="18" cy="10" r="1" fill="currentColor" />
      <circle cx="8" cy="6" r="0.9" fill="currentColor" />
      <circle cx="16" cy="6" r="0.9" fill="currentColor" />
      {/* Crown — three points at the top */}
      <path d="M9 4 L12 1.5 L15 4" fill="none" />
      <circle cx="12" cy="1.5" r="0.8" fill="currentColor" />
    </svg>
  );
}
