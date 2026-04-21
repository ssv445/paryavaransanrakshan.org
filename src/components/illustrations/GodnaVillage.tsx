import type { SVGProps } from "react";

/**
 * Godna-inspired village scene — a folk-art horizon reading left-to-right:
 * sun, breeze, birds, pond with lotus, cow, tree of life, happy farmer
 * with arms raised, hut with smoke, crop rows, village figures, more birds,
 * curling wind lines. Line art painted in the five PSG brand colours so the
 * mural echoes the logo (haldi/vana/cream/terracotta) on an indigo sky.
 *
 * Each zone is its own `<g>` with a Tailwind colour class; `currentColor`
 * resolves per-group so strokes and filled accents inherit the zone hue.
 * The scene tells the Panch-Parivartan story: self-sustaining homes, water
 * care, green living, community.
 */
export default function GodnaVillage(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1400 280"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {/* ═══════════════ GROUND LINE (haldi horizon) ═══════════════ */}
      <g className="text-haldi">
        <line x1="0" y1="230" x2="1400" y2="230" strokeWidth={1.2} />
        {/* tiny tuft marks along ground */}
        {Array.from({ length: 28 }).map((_, i) => (
          <path key={`tuft-${i}`} d={`M${30 + i * 50} 230 l-3 -5 M${30 + i * 50} 230 l3 -5`} strokeWidth={0.8} opacity={0.7} />
        ))}
      </g>

      {/* ═══════════════ SKY — BREEZE CURLS (cream wind) ═══════════════ */}
      <g className="text-cream/60">
        <path d="M60 50 q8 -10 16 0 q8 10 16 0" strokeWidth={1} fill="none" />
        <path d="M320 35 q10 -10 20 0 q10 10 20 0 q10 -10 20 0" strokeWidth={1} fill="none" />
        <path d="M720 40 q8 -10 16 0 q8 10 16 0 q8 -10 16 0" strokeWidth={1} fill="none" />
        <path d="M1080 55 q10 -10 20 0 q10 10 20 0" strokeWidth={1} fill="none" />
        <path d="M1260 30 q8 -10 16 0 q8 10 16 0 q8 -10 16 0" strokeWidth={1} fill="none" />
      </g>

      {/* ═══════════════ SUN (haldi, upper-left) ═══════════════ */}
      <g className="text-haldi" transform="translate(130 80)">
        <circle r="18" fill="currentColor" opacity={0.9} />
        <circle r="28" fill="none" strokeWidth={1} />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => {
          const rad = (a * Math.PI) / 180;
          return (
            <line
              key={a}
              x1={Math.cos(rad) * 32}
              y1={Math.sin(rad) * 32}
              x2={Math.cos(rad) * 44}
              y2={Math.sin(rad) * 44}
              strokeWidth={1.2}
            />
          );
        })}
      </g>

      {/* ═══════════════ BIRDS — cream silhouettes ═══════════════ */}
      <g className="text-cream/80" strokeWidth={1.3}>
        <path d="M240 70 q5 -5 10 0 q5 -5 10 0" fill="none" />
        <path d="M270 85 q5 -5 10 0 q5 -5 10 0" fill="none" />
        <path d="M210 95 q5 -5 10 0 q5 -5 10 0" fill="none" />
        <path d="M890 80 q5 -5 10 0 q5 -5 10 0" fill="none" />
        <path d="M920 70 q5 -5 10 0 q5 -5 10 0" fill="none" />
        <path d="M950 85 q5 -5 10 0 q5 -5 10 0" fill="none" />
      </g>

      {/* ═══════════════ POND with lotus (cream water on indigo) ═══════════════ */}
      <g className="text-cream/85" transform="translate(310 210)">
        {/* pond outline */}
        <ellipse cx="0" cy="15" rx="60" ry="14" fill="none" strokeWidth={1.2} />
        {/* ripples */}
        <ellipse cx="0" cy="15" rx="42" ry="8" fill="none" strokeWidth={0.7} opacity={0.6} />
        <ellipse cx="0" cy="15" rx="24" ry="5" fill="none" strokeWidth={0.7} opacity={0.5} />
        {/* fish */}
        <path d="M-25 14 q4 -3 8 0 q-4 3 -8 0 Z M-17 14 l3 -2 l0 4 Z" fill="currentColor" opacity={0.7} />
        {/* lotus on the pond — petals */}
        <g transform="translate(10 5)">
          <path d="M0 0 C -6 -10, -2 -14, 0 -14 C 2 -14, 6 -10, 0 0 Z" fill="none" />
          <path d="M-6 -4 C -14 -10, -14 -4, -10 0 Z" fill="none" />
          <path d="M6 -4 C 14 -10, 14 -4, 10 0 Z" fill="none" />
          <circle cx="0" cy="-4" r="2" fill="currentColor" />
        </g>
      </g>

      {/* ═══════════════ COW (terracotta, grazing) ═══════════════ */}
      <g className="text-terracotta" transform="translate(470 180)" strokeWidth={1.4}>
        {/* body — simple elongated rectangle with rounded edges */}
        <path d="M -30 10 h 60 v 22 h -60 z" fill="none" />
        {/* legs */}
        <line x1="-22" y1="32" x2="-22" y2="50" />
        <line x1="-10" y1="32" x2="-10" y2="50" />
        <line x1="10" y1="32" x2="10" y2="50" />
        <line x1="22" y1="32" x2="22" y2="50" />
        {/* head — looking down, grazing */}
        <path d="M 30 18 q 14 -2 14 10 q 0 8 -10 10" fill="none" />
        {/* horns */}
        <path d="M 36 16 l 4 -6 M 42 18 l 6 -4" />
        {/* eye */}
        <circle cx="40" cy="22" r="0.9" fill="currentColor" />
        {/* tail */}
        <path d="M -30 14 q -6 4 -4 14" fill="none" />
        {/* udder */}
        <circle cx="0" cy="34" r="3" fill="none" />
      </g>

      {/* ═══════════════ TREE OF LIFE (vana, centre anchor) ═══════════════ */}
      <g className="text-vana" transform="translate(650 230)" strokeWidth={1.5}>
        {/* trunk */}
        <line x1="0" y1="0" x2="0" y2="-110" strokeWidth={2} />
        {/* roots */}
        <path d="M0 0 l-10 8 M0 0 l10 8 M0 0 l-18 6 M0 0 l18 6" strokeWidth={1} />
        {/* four pairs of branches, bigger version of vriksha dingbat */}
        <line x1="0" y1="-25" x2="-22" y2="-40" />
        <line x1="0" y1="-25" x2="22" y2="-40" />
        <line x1="0" y1="-50" x2="-30" y2="-65" />
        <line x1="0" y1="-50" x2="30" y2="-65" />
        <line x1="0" y1="-75" x2="-28" y2="-90" />
        <line x1="0" y1="-75" x2="28" y2="-90" />
        <line x1="0" y1="-95" x2="-18" y2="-108" />
        <line x1="0" y1="-95" x2="18" y2="-108" />
        {/* leaf-lobe seeds at branch tips */}
        {[
          [-22, -40], [22, -40],
          [-30, -65], [30, -65],
          [-28, -90], [28, -90],
          [-18, -108], [18, -108],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.6" fill="currentColor" />
        ))}
        {/* crown triangle */}
        <path d="M-8 -108 L0 -122 L8 -108 Z" fill="none" />
        <circle cx="0" cy="-122" r="2" fill="currentColor" />
      </g>

      {/* ═══════════════ HAPPY FARMER (haldi, arms raised) ═══════════════ */}
      <g className="text-haldi" transform="translate(780 230)" strokeWidth={1.4}>
        {/* head */}
        <circle cx="0" cy="-80" r="9" fill="none" />
        {/* body/torso */}
        <line x1="0" y1="-71" x2="0" y2="-30" />
        {/* arms raised in celebration */}
        <line x1="0" y1="-60" x2="-18" y2="-80" />
        <line x1="0" y1="-60" x2="18" y2="-80" />
        {/* hands — small circles */}
        <circle cx="-18" cy="-80" r="1.8" fill="currentColor" />
        <circle cx="18" cy="-80" r="1.8" fill="currentColor" />
        {/* legs */}
        <line x1="0" y1="-30" x2="-10" y2="0" />
        <line x1="0" y1="-30" x2="10" y2="0" />
        {/* tiny smile marks on head */}
        <path d="M-3 -80 q3 3 6 0" strokeWidth={0.8} fill="none" />
      </g>

      {/* ═══════════════ CROP ROWS (vana, between farmer and hut) ═══════════════ */}
      <g className="text-vana" strokeWidth={1}>
        {Array.from({ length: 10 }).map((_, i) => {
          const x = 820 + i * 14;
          return (
            <g key={`crop-${i}`}>
              <path d={`M${x} 240 l-3 -8 M${x} 240 l3 -8 M${x} 240 v-10`} />
            </g>
          );
        })}
      </g>

      {/* ═══════════════ HUT (terracotta, self-sustaining home) ═══════════════ */}
      <g className="text-terracotta" transform="translate(1020 230)" strokeWidth={1.4}>
        {/* walls */}
        <rect x="-36" y="-46" width="72" height="46" fill="none" />
        {/* pitched roof */}
        <path d="M-46 -46 L 0 -86 L 46 -46 Z" fill="none" />
        {/* door */}
        <rect x="-10" y="-28" width="20" height="28" fill="none" />
        {/* window */}
        <rect x="16" y="-34" width="12" height="12" fill="none" />
      </g>
      {/* smoke curling — cream wisp rising from the terracotta hut */}
      <g className="text-cream/65">
        <path d="M 1030 144 q 6 -10 0 -16 q -6 -6 0 -14 q 6 -8 0 -14" strokeWidth={1} fill="none" />
      </g>

      {/* ═══════════════ SMALLER TREE (vana, right of hut) ═══════════════ */}
      <g className="text-vana" transform="translate(1130 230)" strokeWidth={1.2}>
        <line x1="0" y1="0" x2="0" y2="-60" />
        <line x1="0" y1="-20" x2="-14" y2="-30" />
        <line x1="0" y1="-20" x2="14" y2="-30" />
        <line x1="0" y1="-40" x2="-12" y2="-50" />
        <line x1="0" y1="-40" x2="12" y2="-50" />
        <circle cx="-14" cy="-30" r="1.6" fill="currentColor" />
        <circle cx="14" cy="-30" r="1.6" fill="currentColor" />
        <circle cx="-12" cy="-50" r="1.6" fill="currentColor" />
        <circle cx="12" cy="-50" r="1.6" fill="currentColor" />
        <circle cx="0" cy="-60" r="1.8" fill="currentColor" />
      </g>

      {/* ═══════════════ TWO WALKING VILLAGE FIGURES (haldi, right) ═══════════════ */}
      <g className="text-haldi" transform="translate(1210 230)" strokeWidth={1.2}>
        {/* figure 1 */}
        <circle cx="0" cy="-50" r="6" fill="none" />
        <line x1="0" y1="-44" x2="0" y2="-18" />
        <line x1="0" y1="-34" x2="-8" y2="-24" />
        <line x1="0" y1="-34" x2="8" y2="-24" />
        <line x1="0" y1="-18" x2="-6" y2="0" />
        <line x1="0" y1="-18" x2="6" y2="0" />

        {/* figure 2, holding the first's hand */}
        <circle cx="22" cy="-50" r="6" fill="none" />
        <line x1="22" y1="-44" x2="22" y2="-18" />
        <line x1="22" y1="-34" x2="14" y2="-24" />
        <line x1="22" y1="-34" x2="30" y2="-24" />
        <line x1="22" y1="-18" x2="16" y2="0" />
        <line x1="22" y1="-18" x2="28" y2="0" />
        {/* linked hands */}
        <path d="M8 -24 q3 -2 6 0" fill="none" />
      </g>

      {/* ═══════════════ LOW PLANT TUFTS (vana, foreground right) ═══════════════ */}
      <g className="text-vana" strokeWidth={1} opacity={0.9}>
        {[1290, 1310, 1340, 1370].map((x, i) => (
          <path key={`plant-${i}`} d={`M${x} 240 l-3 -10 l3 4 l3 -10 M${x} 240 v-10`} fill="none" />
        ))}
      </g>
    </svg>
  );
}
