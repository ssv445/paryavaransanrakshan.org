import Image from "next/image";
import Link from "next/link";
import type { Entry } from "@/lib/content";

type Props = {
  entry: Entry;
  backHref: string;
  backLabel: string;
  breadcrumb: string;
  heroImage?: string;
};

/**
 * Full-page renderer for Programs and Karyavibhag entries.
 * Renders tagline, intro, objectives, and focus areas from the content registry.
 */
export default function ContentPage({ entry, backHref, backLabel, breadcrumb, heroImage }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
        <Link href={backHref} className="hover:underline">{backLabel}</Link> / {breadcrumb}
      </p>

      <h1 className="text-4xl md:text-5xl">{entry.title}</h1>
      {entry.titleHi && (
        <p className="mt-2 font-devanagari text-xl text-vana">{entry.titleHi}</p>
      )}

      {heroImage && (
        <div className="mt-8 overflow-hidden rounded-2xl">
          <Image
            src={heroImage}
            alt={entry.title}
            width={800}
            height={500}
            className="h-auto w-full object-cover"
          />
        </div>
      )}

      {entry.tagline && (
        <blockquote className="mt-8 border-l-4 border-haldi pl-6 text-lg italic text-ink/70">
          &ldquo;{entry.tagline}&rdquo;
        </blockquote>
      )}

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink/85">
        {entry.intro && <p>{entry.intro}</p>}

        {entry.objectives && entry.objectives.length > 0 && (
          <>
            <h2 className="text-2xl text-ink">Objectives</h2>
            <ul className="list-disc space-y-2 pl-6">
              {entry.objectives.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </>
        )}

        {entry.focusAreas && entry.focusAreas.length > 0 && (
          <>
            <h2 className="text-2xl text-ink">Focus Areas</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {entry.focusAreas.map((f, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-ink/10 bg-white/60 px-4 py-3 text-base text-ink/80"
                >
                  {f}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <p className="mt-10 text-sm">
        <Link href={backHref} className="text-vana underline underline-offset-4 hover:text-vana-dark">
          ← {backLabel}
        </Link>
      </p>
    </article>
  );
}
