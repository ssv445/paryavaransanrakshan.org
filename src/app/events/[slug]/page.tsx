import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import { events } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const entry = events.find((e) => e.slug === slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.summary };
}

export default async function EventDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = events.find((e) => e.slug === slug);
  if (!entry) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
        <Link href="/events" className="hover:underline">Events</Link> / {entry.year}
      </p>

      <h1 className="notranslate text-4xl md:text-5xl">{entry.title}</h1>
      {entry.titleHi && (
        <p className="mt-2 font-devanagari text-xl text-vana">{entry.titleHi}</p>
      )}

      <div className="mt-4 flex items-center gap-2 text-sm text-muted">
        <Calendar className="h-4 w-4" aria-hidden />
        {entry.date}
      </div>

      {entry.images && entry.images.length > 0 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {entry.images.map((src, i) => (
            <div
              key={src}
              className={`overflow-hidden rounded-2xl border border-ink/10 bg-cream ${
                entry.images!.length === 1 || i === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <Image
                src={src}
                alt={`${entry.title} — image ${i + 1}`}
                width={1500}
                height={844}
                className="h-auto w-full"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink/85">
        {entry.intro && <p>{entry.intro}</p>}

        <p className="text-ink/70">{entry.summary}</p>
      </div>

      <p className="mt-10 text-sm">
        <Link href="/events" className="text-vana underline underline-offset-4 hover:text-vana-dark">
          ← All events
        </Link>
      </p>
    </article>
  );
}
