import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Panch Parivartan",
  description: "The five-point transformation model of Paryavaran Sanrakshan Gatividhi.",
};

const pillars = [
  {
    number: "01",
    title: "Water Conservation",
    titleHi: "जल संरक्षण",
    description: "Rainwater harvesting, groundwater recharge, river bio-remediation, and community water audits.",
  },
  {
    number: "02",
    title: "Tree Plantation",
    titleHi: "वृक्षारोपण",
    description: "Urban mini-forests, rural agroforestry, vatika-building, and mass plantation drives.",
  },
  {
    number: "03",
    title: "Waste Management",
    titleHi: "कचरा प्रबंधन",
    description: "Waste segregation, composting, eco-bricks, and ending single-use plastic.",
  },
  {
    number: "04",
    title: "Energy Conservation",
    titleHi: "ऊर्जा संरक्षण",
    description: "Promoting renewable energy adoption, reducing household energy waste, and solar awareness.",
  },
  {
    number: "05",
    title: "Land & Animal Protection",
    titleHi: "भूमि एवं प्राणी संरक्षण",
    description: "Soil health, biodiversity preservation, organic farming, and gaushala support.",
  },
];

export default function PanchParivartanPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
        <Link href="/about" className="hover:underline">About</Link> / Panch Parivartan
      </p>
      <h1 className="text-4xl md:text-5xl">Panch Parivartan</h1>
      <p className="mt-2 font-devanagari text-xl text-vana">पंच परिवर्तन</p>

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink/85">
        <p>
          The <strong>Panch Parivartan</strong> (five transformations) is the guiding framework
          of Paryavaran Sanrakshan Gatividhi. It identifies five areas where every individual
          and household can make a measurable environmental impact.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        {pillars.map((p) => (
          <div
            key={p.number}
            className="flex gap-5 rounded-2xl border border-ink/10 bg-white/60 p-5"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-vana/10 font-display text-lg text-vana">
              {p.number}
            </span>
            <div>
              <h2 className="text-lg font-semibold text-ink">{p.title}</h2>
              <p className="font-devanagari text-sm text-vana">{p.titleHi}</p>
              <p className="mt-2 text-sm text-ink/70">{p.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm">
        <Link href="/about" className="text-vana underline underline-offset-4 hover:text-vana-dark">
          ← Back to About
        </Link>
      </p>
    </article>
  );
}
