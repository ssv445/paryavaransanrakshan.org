import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { resources } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Resources",
  description: "E-Magazine, Media Center, Sankalp Portal, and EcoMitram app.",
};

const descriptions: Record<string, string> = {
  "E-Magazine": "Our quarterly magazine on environment, ecology, and action.",
  "Media Center": "Press coverage, releases, and media resources.",
  "Sankalp Portal": "Pledge, track, and report your environmental action.",
  "EcoMitram App": "Join the movement on your phone — events, feeds, and more.",
};

export default function ResourcesHub() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Resources</p>
      <h1 className="text-4xl md:text-5xl">Beyond the website</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/75">
        Our community lives in many places. Explore the magazine, media center, pledge portal, and the EcoMitram app.
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {resources.map((r) => (
          <a
            key={r.href}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-ink/10 bg-white/60 p-6 transition-all hover:-translate-y-0.5 hover:border-vana/40 hover:shadow-md"
          >
            <h2 className="flex items-center gap-2 text-xl text-ink">
              {r.label} <ExternalLink className="h-4 w-4 text-muted" aria-hidden />
            </h2>
            <p className="mt-1 text-sm text-ink/70">{descriptions[r.label]}</p>
            <p className="mt-4 text-sm font-semibold text-vana group-hover:text-vana-dark">Visit →</p>
          </a>
        ))}
      </div>
    </section>
  );
}
