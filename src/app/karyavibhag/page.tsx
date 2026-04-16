import type { Metadata } from "next";
import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import { karyavibhag } from "@/lib/content";
import {
  WarliTemple,
  WarliWoman,
  WarliSchool,
  WarliCommunity,
  WarliMegaphone,
  WarliDialogue,
  WarliYouth,
} from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Karyavibhag",
  description: "The seven divisions through which Paryavaran Sanrakshan organises its work.",
};

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "religious-institutes": WarliTemple,
  "nari-shakti": WarliWoman,
  "samajik-sansthan": WarliCommunity,
  "educational-institutes": WarliSchool,
  "jan-sampark": WarliMegaphone,
  "jan-samwad": WarliDialogue,
  "yuvashakti": WarliYouth,
};

export default function KaryavibhagHub() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Karyavibhag</p>
      <h1 className="text-4xl md:text-5xl">How we&apos;re organised</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/75">
        Seven Karyavibhag — specialised divisions through which the movement works with different communities.
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {karyavibhag.map((k) => {
          const Icon = iconMap[k.slug];
          return (
            <Link
              key={k.slug}
              href={`/karyavibhag/${k.slug}`}
              className="group rounded-2xl border border-ink/10 bg-indigo/5 p-6 transition-all hover:-translate-y-0.5 hover:border-indigo/30 hover:bg-indigo/10"
            >
              {Icon && (
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo/10 text-indigo group-hover:bg-indigo/20">
                  <Icon className="h-9 w-9" />
                </div>
              )}
              <h2 className="text-xl text-indigo">{k.title}</h2>
              <p className="mt-1 text-sm text-ink/70">{k.summary}</p>
              <p className="mt-4 text-sm font-semibold text-indigo">Learn more →</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
