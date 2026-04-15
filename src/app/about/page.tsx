import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are, our mission, story, logo, and presence across India.",
};

const sections = [
  { href: "/about/mission", title: "Our Mission", blurb: "The principles that guide our work." },
  { href: "/about/story", title: "Our Story", blurb: "How Paryavaran Sanrakshan Gatividhi began." },
  { href: "/about/logo", title: "Our Logo", blurb: "Symbols and meaning behind our identity." },
  { href: "/about/presence", title: "Our Presence", blurb: "Where we are active across India." },
  { href: "/about/panch-parivartan", title: "Panch Parivartan", blurb: "The five-point transformation model." },
];

export default function AboutHub() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">About</p>
      <h1 className="text-4xl md:text-5xl">Who we are</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/75">
        Paryavaran Sanrakshan Gatividhi is an all-India movement dedicated to improving the environment through action and awareness.
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="rounded-2xl border border-ink/10 bg-white/60 p-6 transition-all hover:-translate-y-0.5 hover:border-vana/40 hover:shadow-md"
          >
            <h2 className="text-xl text-ink">{s.title}</h2>
            <p className="mt-1 text-sm text-ink/70">{s.blurb}</p>
            <p className="mt-4 text-sm font-semibold text-vana">Read more →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
