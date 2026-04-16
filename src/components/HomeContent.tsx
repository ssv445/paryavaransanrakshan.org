"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { JOIN_URL } from "@/lib/nav";
import { FadeIn, StaggerChildren, staggerItem } from "@/components/motion";
import {
  AnimatedMadhubaniHero,
  WarliTree,
  WarliNoPlastic,
  WarliWater,
  WarliHouse,
  WarliTemple,
  WarliWoman,
  WarliHandshake,
  WarliSchool,
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
  { slug: "ngo-coordination", title: "NGO Coordination", summary: "Uniting NGOs for a shared environmental mission.", Icon: WarliHandshake },
  { slug: "educational-institutes", title: "Educational Institutes", summary: "Environment in every classroom and campus.", Icon: WarliSchool },
];

export default function HomeContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-24">
          <FadeIn direction="left" duration={0.7}>
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
          </FadeIn>

          <FadeIn direction="right" delay={0.2} duration={0.8}>
            <AnimatedMadhubaniHero className="mx-auto w-full max-w-md lg:max-w-none" />
          </FadeIn>
        </div>
      </section>

      {/* Programs */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <FadeIn>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl">What we do</h2>
              <p className="mt-2 text-ink/70">Four pillars that anchor our work on the ground.</p>
            </div>
            <Link href="/programs" className="text-sm font-semibold text-vana hover:text-vana-dark">
              All programs →
            </Link>
          </div>
        </FadeIn>
        <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <motion.div key={p.slug} variants={staggerItem}>
              <Link
                href={`/programs/${p.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white/60 p-6 transition-all hover:-translate-y-1 hover:border-vana/40 hover:shadow-lg"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-vana/10 text-vana transition-colors group-hover:bg-vana/20">
                  <p.Icon className="h-10 w-10 transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-xl text-ink">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink/70">{p.blurb}</p>
                <p className="mt-4 text-sm font-semibold text-vana group-hover:text-vana-dark">
                  Learn more →
                </p>
              </Link>
            </motion.div>
          ))}
        </StaggerChildren>
      </section>

      {/* Karyavibhag */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <FadeIn>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl">How we&apos;re organised</h2>
              <p className="mt-2 text-ink/70">Seven Karyavibhag — the divisions through which we act.</p>
            </div>
            <Link href="/karyavibhag" className="text-sm font-semibold text-vana hover:text-vana-dark">
              All divisions →
            </Link>
          </div>
        </FadeIn>
        <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {karyavibhag.map((k) => (
            <motion.div key={k.slug} variants={staggerItem}>
              <Link
                href={`/karyavibhag/${k.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-indigo/5 p-6 transition-all hover:-translate-y-0.5 hover:border-indigo/30 hover:bg-indigo/10"
              >
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo/10 text-indigo transition-colors group-hover:bg-indigo/20">
                  <k.Icon className="h-9 w-9 transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-lg text-indigo">{k.title}</h3>
                <p className="mt-1 flex-1 text-sm text-ink/70">{k.summary}</p>
              </Link>
            </motion.div>
          ))}
        </StaggerChildren>
      </section>

      {/* CTA band */}
      <FadeIn className="mx-auto mt-8 max-w-7xl px-4 lg:px-8">
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
      </FadeIn>
    </>
  );
}
