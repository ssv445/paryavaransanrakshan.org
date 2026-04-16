import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { stories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Stories",
  description: "Impact stories, dispatches from the ground, and photo essays.",
};

const typeBadge: Record<string, { label: string; className: string }> = {
  impact: { label: "Impact", className: "bg-vana/10 text-vana" },
  dispatch: { label: "Dispatch", className: "bg-haldi/20 text-haldi-dark" },
  "photo-essay": { label: "Photos", className: "bg-terracotta/10 text-terracotta" },
};

export default function StoriesIndex() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Stories</p>
      <h1 className="text-4xl md:text-5xl">Stories from the movement</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/75">
        Impact pieces, dispatches from the field, and photo essays — documenting the work of thousands of volunteers.
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {stories.map((s) => {
          const badge = typeBadge[s.type];
          return (
            <Link
              key={s.slug}
              href={`/stories/${s.slug}`}
              className="group rounded-2xl border border-ink/10 bg-white/60 p-6 transition-all hover:-translate-y-0.5 hover:border-vana/40 hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge.className}`}>
                  {badge.label}
                </span>
                {s.location && (
                  <span className="inline-flex items-center gap-1 text-xs text-muted">
                    <MapPin className="h-3 w-3" aria-hidden /> {s.location}
                  </span>
                )}
              </div>
              <h2 className="text-xl text-ink">{s.title}</h2>
              <p className="mt-2 text-sm text-ink/70">{s.summary}</p>
              <p className="mt-4 text-sm font-semibold text-vana group-hover:text-vana-dark">Read story →</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
