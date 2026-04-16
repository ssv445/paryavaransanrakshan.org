import type { Metadata } from "next";
import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import { programs } from "@/lib/content";
import { WarliTree, WarliNoPlastic, WarliWater, WarliHouse } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Programs",
  description: "Our four pillars: Plantation, Polythene Free, Save Water, and Harit Ghar.",
};

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  plantation: WarliTree,
  "polythene-free": WarliNoPlastic,
  "save-water": WarliWater,
  "harit-ghar": WarliHouse,
};

export default function ProgramsHub() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Programs</p>
      <h1 className="text-4xl md:text-5xl">What we do</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/75">
        Four focused pillars that anchor our work on the ground — each delivered through thousands of local volunteers.
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {programs.map((p) => {
          const Icon = iconMap[p.slug];
          return (
            <Link
              key={p.slug}
              href={`/programs/${p.slug}`}
              className="group rounded-2xl border border-ink/10 bg-white/60 p-6 transition-all hover:-translate-y-0.5 hover:border-vana/40 hover:shadow-md"
            >
              {Icon && (
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-vana/10 text-vana group-hover:bg-vana/20">
                  <Icon className="h-10 w-10" />
                </div>
              )}
              <h2 className="text-xl text-ink">{p.title}</h2>
              <p className="mt-1 text-sm text-ink/70">{p.summary}</p>
              <p className="mt-4 text-sm font-semibold text-vana group-hover:text-vana-dark">Learn more →</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
