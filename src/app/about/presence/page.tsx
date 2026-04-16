import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Presence",
  description: "Regions and communities where Paryavaran Sanrakshan is active across India.",
};

const regions = [
  { name: "North India", states: "Delhi, Haryana, Punjab, Uttar Pradesh, Uttarakhand, Rajasthan, Himachal Pradesh, Jammu & Kashmir" },
  { name: "West India", states: "Maharashtra, Gujarat, Goa, Madhya Pradesh, Chhattisgarh" },
  { name: "East India", states: "Bihar, Jharkhand, West Bengal, Odisha, Assam, North-East states" },
  { name: "South India", states: "Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, Kerala" },
];

export default function PresencePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
        <Link href="/about" className="hover:underline">About</Link> / Our Presence
      </p>
      <h1 className="text-4xl md:text-5xl">Our Presence</h1>

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink/85">
        <p>
          Paryavaran Sanrakshan Gatividhi is active across the length and breadth of India.
          A few thousand people are part of its organisational structure, working through
          local chapters in every major region.
        </p>

        <p>
          Our volunteers operate through state and district-level coordination committees,
          running plantation drives, water conservation initiatives, waste management
          campaigns, and awareness programmes in their communities.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {regions.map((r) => (
          <div
            key={r.name}
            className="rounded-2xl border border-ink/10 bg-white/60 p-5"
          >
            <h2 className="text-lg font-semibold text-vana">{r.name}</h2>
            <p className="mt-2 text-sm text-ink/70">{r.states}</p>
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
