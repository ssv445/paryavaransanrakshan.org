import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "Paryavaran Sanrakshan is not an NGO — it is a public environmental campaign built on solutions, not opposition.",
};

export default function MissionPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
        <Link href="/about" className="hover:underline">About</Link> / Mission
      </p>
      <h1 className="text-4xl md:text-5xl">Our Mission</h1>

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink/85">
        <p>
          Paryavaran Sanrakshan is not an NGO or institution — it is an attempt to
          build a <strong>public environmental campaign</strong> through awareness and
          community participation, rooted in <em>solutions, not opposition</em>.
        </p>

        <p>
          We began in <strong>March 2019</strong> with a simple conviction: the environment
          can only be protected when millions of ordinary citizens act in their own
          localities, every day.
        </p>

        <p>
          The movement is built around <strong>three core commitments</strong>:
        </p>

        <ol className="list-decimal space-y-3 pl-6">
          <li>
            <strong>Water conservation and management</strong> — rainwater harvesting,
            river bio-remediation, groundwater recharge and community water audits.
          </li>
          <li>
            <strong>Tree planting</strong> — urban mini-forests, rural agroforestry,
            campus and roadside plantation drives across the country.
          </li>
          <li>
            <strong>Reducing plastic and non-biodegradable materials</strong> — ending
            single-use plastic through eco-bricks, composting, waste segregation and
            awareness at scale.
          </li>
        </ol>

        <p>
          Paryavaran Sanrakshan is an all-India group dedicated to improving the
          environment. A few thousand people are part of its organisational structure.
          The aim of the group is to make changes to the environment through activities
          and through awareness creation.
        </p>
      </div>

      {/* Slide 6 of PSG deck: four guiding principles that shape how the
          movement works. Kept as a bilingual grid so the Hindi stays load-bearing,
          not decorative. */}
      <h2 className="mt-16 text-3xl">Our Approach</h2>
      <p className="mt-3 text-lg text-ink/75">
        Four principles guide every campaign and conversation.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[
          {
            hi: "सर्वेषां-अविरोधेन",
            en: "We accept everyone without resistance.",
          },
          {
            hi: "विरोध नहीं — विकल्प",
            en: "Find alternatives rather than oppose.",
          },
          {
            hi: "समस्या नहीं — समाधान",
            en: "Not problems — solutions.",
          },
          {
            hi: "आंदोलन नहीं — अभियान",
            en: "Not agitation — a movement.",
          },
        ].map((p) => (
          <div
            key={p.hi}
            className="rounded-2xl border border-ink/10 bg-white/60 p-5"
          >
            <p className="font-devanagari text-xl text-vana">{p.hi}</p>
            <p className="mt-2 text-base text-ink/80">{p.en}</p>
          </div>
        ))}
      </div>

      {/* Slide 7 of PSG deck: the Avoid–Minimize–Conserve model underpinning
          the three expected behavioural changes. */}
      <h2 className="mt-16 text-3xl">The Change We Seek</h2>
      <p className="mt-3 text-lg text-ink/75">
        अपेक्षित मानस परिवर्तन — Paryavaran Sanrakshan aims to shift three things
        in every household it reaches.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-ink/10 bg-cream p-5">
          <p className="font-devanagari text-lg text-vana">दृष्टिकोण</p>
          <p className="text-sm font-semibold text-ink">Attitude</p>
          <p className="mt-2 text-sm text-ink/75">How we see nature and our place in it.</p>
        </div>
        <div className="rounded-2xl border border-ink/10 bg-cream p-5">
          <p className="font-devanagari text-lg text-vana">जीवनशैली</p>
          <p className="text-sm font-semibold text-ink">Lifestyle</p>
          <p className="mt-2 text-sm text-ink/75">The daily habits that either protect or strain the earth.</p>
        </div>
        <div className="rounded-2xl border border-ink/10 bg-cream p-5">
          <p className="font-devanagari text-lg text-vana">संवेदना</p>
          <p className="text-sm font-semibold text-ink">Empathy</p>
          <p className="mt-2 text-sm text-ink/75">Feeling connected to every living thing around us.</p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-vana/30 bg-vana/5 p-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-vana">A · M · C</p>
        <p className="mt-2 text-lg text-ink/85">
          <strong>Avoid</strong> what you don&apos;t need. <strong>Minimize</strong>{" "}
          what you do. <strong>Conserve</strong> what you have.
        </p>
      </div>

      <p className="mt-10 text-sm">
        <Link href="/about" className="text-vana underline underline-offset-4 hover:text-vana-dark">
          ← Back to About
        </Link>
      </p>
    </article>
  );
}
