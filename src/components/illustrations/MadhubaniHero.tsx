import type { SVGProps } from "react";

/**
 * Madhubani-inspired "Tree of Life" hero panel.
 * Features: central tree with patterned canopy, sun, river waves,
 * birds, lotus flowers, and concentric border — all in the dense
 * line-art style of Mithila painting.
 */
export default function MadhubaniHero(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {/* === BORDER === */}
      <rect x="4" y="4" width="392" height="392" rx="16" stroke="var(--ink)" strokeWidth="2" />
      <rect x="10" y="10" width="380" height="380" rx="12" stroke="var(--vana)" strokeWidth="1" />
      <rect x="16" y="16" width="368" height="368" rx="8" stroke="var(--terracotta)" strokeWidth="0.8" />

      {/* === SUN (top-right) === */}
      <g stroke="var(--haldi)" strokeWidth="1.5">
        <circle cx="320" cy="70" r="24" fill="var(--haldi)" fillOpacity="0.12" />
        <circle cx="320" cy="70" r="18" />
        <circle cx="320" cy="70" r="10" fill="var(--haldi)" fillOpacity="0.25" />
        {/* rays */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <line
              key={angle}
              x1={320 + 26 * Math.cos(rad)}
              y1={70 + 26 * Math.sin(rad)}
              x2={320 + 36 * Math.cos(rad)}
              y2={70 + 36 * Math.sin(rad)}
            />
          );
        })}
      </g>

      {/* === MOON (top-left) === */}
      <g stroke="var(--indigo)" strokeWidth="1.2">
        <path d="M80 60 A20 20 0 1 1 80 100 A14 14 0 1 0 80 60Z" fill="var(--indigo)" fillOpacity="0.08" />
        <circle cx="72" cy="72" r="1.5" fill="var(--indigo)" />
        <circle cx="66" cy="84" r="1" fill="var(--indigo)" />
        <circle cx="90" cy="66" r="1" fill="var(--indigo)" />
      </g>

      {/* === TREE OF LIFE (centre) === */}
      <g stroke="var(--vana)" strokeWidth="1.8">
        {/* trunk */}
        <path d="M200 370 L200 180" strokeWidth="3" />
        {/* trunk pattern (horizontal bark lines) */}
        {[200, 220, 240, 260, 280, 300, 320, 340, 360].map((y) => (
          <line key={y} x1="196" y1={y} x2="204" y2={y} strokeWidth="0.8" />
        ))}
        {/* roots */}
        <path d="M200 370 Q180 380 160 375" strokeWidth="2" />
        <path d="M200 370 Q220 380 240 375" strokeWidth="2" />
        <path d="M200 370 Q190 385 175 388" strokeWidth="1.5" />
        <path d="M200 370 Q210 385 225 388" strokeWidth="1.5" />

        {/* main branches */}
        <path d="M200 280 Q160 260 130 240" strokeWidth="2" />
        <path d="M200 280 Q240 260 270 240" strokeWidth="2" />
        <path d="M200 240 Q150 210 120 190" strokeWidth="1.8" />
        <path d="M200 240 Q250 210 280 190" strokeWidth="1.8" />
        <path d="M200 210 Q170 180 140 155" strokeWidth="1.5" />
        <path d="M200 210 Q230 180 260 155" strokeWidth="1.5" />
        <path d="M200 180 Q185 155 165 135" strokeWidth="1.2" />
        <path d="M200 180 Q215 155 235 135" strokeWidth="1.2" />
      </g>

      {/* canopy — Madhubani patterned circle */}
      <circle cx="200" cy="165" r="90" stroke="var(--vana)" strokeWidth="1.5" fill="var(--vana)" fillOpacity="0.04" />
      <circle cx="200" cy="165" r="78" stroke="var(--vana)" strokeWidth="0.8" strokeDasharray="4 3" />
      <circle cx="200" cy="165" r="65" stroke="var(--vana)" strokeWidth="0.6" />

      {/* leaf clusters (concentric dot groups — Madhubani fish-eye motif) */}
      {[
        [150, 140], [170, 110], [200, 95], [230, 110], [250, 140],
        [140, 170], [160, 195], [200, 210], [240, 195], [260, 170],
        [175, 150], [225, 150], [200, 130], [185, 180], [215, 180],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="8" stroke="var(--vana)" strokeWidth="0.8" fill="var(--vana)" fillOpacity="0.08" />
          <circle cx={cx} cy={cy} r="4" stroke="var(--vana)" strokeWidth="0.6" fill="var(--vana)" fillOpacity="0.15" />
          <circle cx={cx} cy={cy} r="1.5" fill="var(--vana)" />
        </g>
      ))}

      {/* === BIRDS (Madhubani peacock-style) === */}
      <g stroke="var(--terracotta)" strokeWidth="1.2">
        {/* bird left */}
        <path d="M70 140 Q80 125 95 130" />
        <path d="M95 130 Q100 135 95 140 Q85 145 70 140Z" fill="var(--terracotta)" fillOpacity="0.1" />
        <circle cx="90" cy="133" r="1.2" fill="var(--terracotta)" />
        <line x1="95" y1="130" x2="102" y2="127" />
        {/* tail feathers */}
        <path d="M70 140 Q60 150 55 145" />
        <path d="M70 140 Q58 148 52 150" />
        <path d="M70 140 Q60 155 50 155" />

        {/* bird right */}
        <path d="M330 140 Q320 125 305 130" />
        <path d="M305 130 Q300 135 305 140 Q315 145 330 140Z" fill="var(--terracotta)" fillOpacity="0.1" />
        <circle cx="310" cy="133" r="1.2" fill="var(--terracotta)" />
        <line x1="305" y1="130" x2="298" y2="127" />
        {/* tail feathers */}
        <path d="M330 140 Q340 150 345 145" />
        <path d="M330 140 Q342 148 348 150" />
        <path d="M330 140 Q340 155 350 155" />
      </g>

      {/* === RIVER (bottom) === */}
      <g stroke="var(--indigo)" strokeWidth="1.2" fill="none">
        <path d="M30 340 Q80 328 130 340 Q180 352 230 340 Q280 328 330 340 Q360 348 380 340" />
        <path d="M30 350 Q80 338 130 350 Q180 362 230 350 Q280 338 330 350 Q360 358 380 350" />
        <path d="M30 360 Q80 348 130 360 Q180 372 230 360 Q280 348 330 360 Q360 368 380 360" />
      </g>

      {/* === LOTUS FLOWERS (bottom) === */}
      {[[100, 345], [300, 345]].map(([lx, ly], i) => (
        <g key={i} stroke="var(--terracotta)" strokeWidth="1" fill="var(--terracotta)" fillOpacity="0.1">
          <ellipse cx={lx} cy={ly} rx="12" ry="6" />
          <path d={`M${lx} ${ly - 6} Q${lx - 8} ${ly - 16} ${lx} ${ly - 22} Q${lx + 8} ${ly - 16} ${lx} ${ly - 6}Z`} />
          <path d={`M${lx - 6} ${ly - 4} Q${lx - 16} ${ly - 12} ${lx - 10} ${ly - 20} Q${lx - 2} ${ly - 12} ${lx - 6} ${ly - 4}Z`} />
          <path d={`M${lx + 6} ${ly - 4} Q${lx + 16} ${ly - 12} ${lx + 10} ${ly - 20} Q${lx + 2} ${ly - 12} ${lx + 6} ${ly - 4}Z`} />
          <circle cx={lx} cy={ly - 12} r="2" fill="var(--haldi)" stroke="var(--haldi)" />
        </g>
      ))}

      {/* === FISH (in river — Madhubani motif) === */}
      <g stroke="var(--indigo)" strokeWidth="1" fill="var(--indigo)" fillOpacity="0.08">
        <path d="M185 352 Q195 344 205 352 Q195 360 185 352Z" />
        <circle cx="200" cy="351" r="1" fill="var(--indigo)" />
        <line x1="183" y1="352" x2="178" y2="348" />
        <line x1="183" y1="352" x2="178" y2="356" />
      </g>

      {/* === CORNER MOTIFS (Madhubani concentric diamonds) === */}
      {[
        [30, 30], [370, 30], [30, 370], [370, 370],
      ].map(([cx, cy], i) => (
        <g key={i} stroke="var(--terracotta)" strokeWidth="0.8">
          <rect x={cx - 10} y={cy - 10} width="20" height="20" transform={`rotate(45 ${cx} ${cy})`} />
          <rect x={cx - 6} y={cy - 6} width="12" height="12" transform={`rotate(45 ${cx} ${cy})`} />
          <circle cx={cx} cy={cy} r="2" fill="var(--terracotta)" />
        </g>
      ))}
    </svg>
  );
}
