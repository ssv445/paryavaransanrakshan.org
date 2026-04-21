"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { JOIN_URL } from "@/lib/nav";
import { FadeIn, StaggerChildren, staggerItem } from "@/components/motion";
import {
  AnimatedMadhubaniHero,
  AnimatedWarli,
  KolamDivider,
  WarliTree,
  WarliNoPlastic,
  WarliWater,
  WarliHouse,
  WarliTemple,
  WarliWoman,
  WarliSchool,
  WarliCommunity,
} from "@/components/illustrations";

const programs = [
  { slug: "plantation", title: "Plantation", blurb: "Community-led tree planting across urban and rural India.", Icon: WarliTree },
  { slug: "polythene-free", title: "Polythene Free", blurb: "Ending single-use plastic through awareness, eco-bricks, and alternatives.", Icon: WarliNoPlastic },
  { slug: "save-water", title: "Save Water", blurb: "Rainwater harvesting, bio-remediation, and river revival.", Icon: WarliWater },
  { slug: "harit-ghar", title: "Harit Ghar", blurb: "Turning homes into small, green, self-sustaining ecosystems.", Icon: WarliHouse },
];

const karyavibhag = [
  { slug: "religious-institutes", title: "Religious Institutes", summary: "Partnering with temples, ashrams and faith communities.", Icon: WarliTemple },
  { slug: "nari-shakti", title: "Nari Shakti", summary: "Women-led environmental leadership and action.", Icon: WarliWoman },
  { slug: "samajik-sansthan", title: "Samajik Sansthan", summary: "Engaging social organisations and NGOs for collective environmental action.", Icon: WarliCommunity },
  { slug: "educational-institutes", title: "Educational Institutes", summary: "Environment in every classroom and campus.", Icon: WarliSchool },
];

/** Section divider — Kolam pattern, swappable colorway */
function KolamMeter({ color = "text-haldi" }: { color?: string }) {
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8" aria-hidden>
      <KolamDivider className={`mx-auto h-6 w-full opacity-70 ${color}`} />
    </div>
  );
}

export default function HomeContent() {
  return (
    <>
      {/* ───────────────── Hero — broken, Madhubani bleeds off-canvas ───────────────── */}
      <section className="relative overflow-hidden">
        {/*
          Hero uses grid-area sharing on lg+: both the illustration and the headline live
          in the same single grid cell, so section height = max(text, illustration).
          Headline sits on z-10 and overlaps the tree canopy. On mobile the grid collapses
          and the illustration stacks above the text as a normal block.
        */}
        <div className="relative mx-auto max-w-7xl px-4 py-14 lg:grid lg:grid-cols-1 lg:grid-rows-1 lg:px-8 lg:py-24">
          {/* Illustration: bleeds off right edge on lg+ */}
          <FadeIn
            direction="right"
            delay={0.15}
            duration={0.9}
            className="mb-8 lg:col-start-1 lg:row-start-1 lg:mb-0 lg:-mr-16 lg:w-[58%] lg:justify-self-end xl:-mr-24"
          >
            <AnimatedMadhubaniHero className="mx-auto w-full max-w-sm lg:max-w-none" />
          </FadeIn>

          {/* Headline — overlaps the canopy on lg+ via z-index, shares the grid cell */}
          <FadeIn
            direction="left"
            duration={0.7}
            className="relative z-10 lg:col-start-1 lg:row-start-1 lg:max-w-[62%] lg:self-center"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
              An all-India movement
            </p>
            <h1 className="text-4xl text-ink md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
              Caring for the earth,
              <span className="block text-vana">as one cares for a mother.</span>
            </h1>

            {/* Mantra — larger, terracotta, slightly off-axis */}
            <p
              className="mt-6 inline-block origin-left font-devanagari text-2xl italic text-terracotta md:text-3xl"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              || माता भूमि: पुत्रों अहम् पृथिव्या: ||
            </p>

            <p className="mt-6 max-w-xl text-lg text-ink/75">
              Paryavaran Sanrakshan Gatividhi is a volunteer-led movement across India —
              plantation, water conservation, polythene-free drives, green homes.
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
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 font-semibold text-ink hover:bg-ink/5"
              >
                Learn more <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Kolam meter: hero → programs (haldi, the turmeric pulse) */}
      <KolamMeter color="text-haldi" />

      {/* ───────────────── Programs — Warli decaged, icons breathe on cream ───────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
        <FadeIn>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl">What we do</h2>
              <p className="mt-2 text-ink/70">Four pillars that anchor our work on the ground.</p>
            </div>
            <Link href="/programs" className="text-sm font-semibold text-vana hover:text-vana-dark">
              All programs →
            </Link>
          </div>
        </FadeIn>
        <StaggerChildren className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <motion.div key={p.slug} variants={staggerItem}>
              <Link
                href={`/programs/${p.slug}`}
                className="group flex h-full flex-col border-b border-ink/10 pb-6 transition-colors hover:border-vana/60"
              >
                <div className="mb-5 h-20 w-20 text-vana transition-transform duration-500 group-hover:-translate-y-1">
                  <AnimatedWarli Icon={p.Icon} />
                </div>
                <h3 className="text-xl text-ink">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink/70">{p.blurb}</p>
                <p className="mt-5 text-sm font-semibold text-vana group-hover:text-vana-dark">
                  Read more →
                </p>
              </Link>
            </motion.div>
          ))}
        </StaggerChildren>
      </section>

      {/* Kolam meter: programs → karyavibhag (terracotta, earth) */}
      <KolamMeter color="text-terracotta" />

      {/* ───────────────── Karyavibhag — same decaged treatment, indigo accent ───────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
        <FadeIn>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl">How we&apos;re organised</h2>
              <p className="mt-2 text-ink/70">Seven Karyavibhag — the divisions through which we act.</p>
            </div>
            <Link href="/karyavibhag" className="text-sm font-semibold text-indigo hover:text-indigo/80">
              All divisions →
            </Link>
          </div>
        </FadeIn>
        <StaggerChildren className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {karyavibhag.map((k) => (
            <motion.div key={k.slug} variants={staggerItem}>
              <Link
                href={`/karyavibhag/${k.slug}`}
                className="group flex h-full flex-col border-b border-ink/10 pb-6 transition-colors hover:border-indigo/60"
              >
                <div className="mb-5 h-20 w-20 text-indigo transition-transform duration-500 group-hover:-translate-y-1">
                  <AnimatedWarli Icon={k.Icon} />
                </div>
                <h3 className="text-lg text-indigo">{k.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink/70">{k.summary}</p>
              </Link>
            </motion.div>
          ))}
        </StaggerChildren>
      </section>

      {/* Kolam meter: karyavibhag → CTA (vana, forest) */}
      <KolamMeter color="text-vana" />

      {/* ───────────────── CTA band ───────────────── */}
      <FadeIn className="mx-auto mt-12 max-w-7xl px-4 pb-20 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-vana p-10 text-cream md:p-14">
          {/* Kolam watermark on CTA background */}
          <KolamDivider
            className="pointer-events-none absolute -right-8 -top-4 h-20 w-72 text-haldi/20"
            aria-hidden
          />
          <h2 className="relative max-w-2xl text-3xl md:text-4xl">
            Every sapling, every drop, every act — counts.
          </h2>
          <p className="relative mt-4 max-w-2xl text-cream/80">
            Volunteer locally. Contribute skills. Track your pledge on EcoMitram.
          </p>
          <div className="relative mt-6 flex flex-wrap gap-3">
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
      </FadeIn>
    </>
  );
}
