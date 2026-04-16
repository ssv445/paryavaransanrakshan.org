import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { stories } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const entry = stories.find((s) => s.slug === slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.summary };
}

const typeBadge: Record<string, { label: string; className: string }> = {
  impact: { label: "Impact Story", className: "bg-vana/10 text-vana" },
  dispatch: { label: "Dispatch", className: "bg-haldi/20 text-haldi-dark" },
  "photo-essay": { label: "Photo Essay", className: "bg-terracotta/10 text-terracotta" },
};

export default async function StoryDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = stories.find((s) => s.slug === slug);
  if (!entry) notFound();
  const badge = typeBadge[entry.type];

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
        <Link href="/stories" className="hover:underline">Stories</Link>
      </p>

      <h1 className="text-4xl md:text-5xl">{entry.title}</h1>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badge.className}`}>
          {badge.label}
        </span>
        {entry.location && (
          <span className="inline-flex items-center gap-1 text-muted">
            <MapPin className="h-4 w-4" aria-hidden /> {entry.location}
          </span>
        )}
      </div>

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink/85">
        {entry.intro && <p>{entry.intro}</p>}
      </div>

      {entry.topics && entry.topics.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {entry.topics.map((t) => (
            <span key={t} className="rounded-full border border-ink/10 bg-cream px-3 py-1 text-xs font-medium text-muted">
              {t}
            </span>
          ))}
        </div>
      )}

      <p className="mt-10 text-sm">
        <Link href="/stories" className="text-vana underline underline-offset-4 hover:text-vana-dark">
          ← All stories
        </Link>
      </p>
    </article>
  );
}
