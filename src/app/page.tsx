import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { JOIN_URL } from "@/lib/nav";

const programs = [
  { slug: "plantation", title: "Plantation", blurb: "Community-led tree planting across urban and rural India." },
  { slug: "polythene-free", title: "Polythene Free", blurb: "Ending single-use plastic through awareness and alternatives." },
  { slug: "save-water", title: "Save Water", blurb: "Rainwater harvesting, bio-remediation, and river revival." },
  { slug: "harit-ghar", title: "Harit Ghar", blurb: "Turning homes into small, green, self-sustaining ecosystems." },
];

const karyavibhag = [
  { slug: "religious-institutes", title: "Religious Institutes" },
  { slug: "nari-shakti", title: "Nari Shakti" },
  { slug: "ngo-coordination", title: "NGO Coordination" },
  { slug: "educational-institutes", title: "Educational Institutes" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
              An all-India movement
            </p>
            <h1 className="text-4xl text-ink md:text-6xl">
              Caring for the earth, as one cares for a mother.
            </h1>
            <p className="mt-4 font-devanagari text-xl text-vana md:text-2xl">
              || माता भूमि: पुत्रों अहम् पृथिव्या: ||
            </p>
            <p className="mt-6 max-w-xl text-lg text-ink/75">
              Paryavaran Sanrakshan Gatividhi is a volunteer-led movement across India,
              dedicated to improving the environment through plantation, water conservation,
              polythene-free drives and green homes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-haldi px-5 py-3 font-semibold text-ink shadow-sm transition-all hover:bg-haldi-dark hover:shadow-md"
              >
                Join the movement <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-5 py-3 font-semibold text-ink hover:bg-white"
              >
                Learn more <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>

          {/* Placeholder hero illustration area — Madhubani panel ships in Phase 2 */}
          <div className="aspect-square rounded-3xl border border-ink/10 bg-gradient-to-br from-vana/10 via-haldi/10 to-terracotta/10" aria-hidden />
        </div>
      </section>

      {/* Programs */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl">What we do</h2>
            <p className="mt-2 text-ink/70">Four pillars that anchor our work on the ground.</p>
          </div>
          <Link href="/programs" className="text-sm font-semibold text-vana hover:text-vana-dark">
            All programs →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <Link
              key={p.slug}
              href={`/programs/${p.slug}`}
              className="group rounded-2xl border border-ink/10 bg-white/60 p-6 transition-all hover:-translate-y-1 hover:border-vana/40 hover:shadow-lg"
            >
              <div className="mb-4 aspect-square w-16 rounded-xl bg-vana/10" aria-hidden />
              <h3 className="text-xl text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{p.blurb}</p>
              <p className="mt-4 text-sm font-semibold text-vana group-hover:text-vana-dark">
                Learn more →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Karyavibhag */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl">How we&apos;re organised</h2>
            <p className="mt-2 text-ink/70">Four Karyavibhag — the divisions through which we act.</p>
          </div>
          <Link href="/karyavibhag" className="text-sm font-semibold text-vana hover:text-vana-dark">
            All divisions →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {karyavibhag.map((k) => (
            <Link
              key={k.slug}
              href={`/karyavibhag/${k.slug}`}
              className="rounded-2xl border border-ink/10 bg-indigo/5 p-6 hover:border-indigo/30 hover:bg-indigo/10"
            >
              <h3 className="text-lg text-indigo">{k.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto mt-8 max-w-7xl px-4 lg:px-8">
        <div className="rounded-3xl bg-vana p-10 text-cream md:p-14">
          <h2 className="max-w-2xl text-3xl md:text-4xl">
            Every sapling, every drop, every act — counts.
          </h2>
          <p className="mt-4 max-w-2xl text-cream/80">
            Volunteer locally. Contribute skills. Track your pledge on EcoMitram.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-haldi px-5 py-3 font-semibold text-ink hover:bg-haldi-dark"
            >
              Get started on EcoMitram <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-5 py-3 font-semibold text-cream hover:bg-cream/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
