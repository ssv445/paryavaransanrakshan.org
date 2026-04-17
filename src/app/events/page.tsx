import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { events } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Campaigns and events organised by Paryavaran Sanrakshan across the years.",
};

export default function EventsIndex() {
  // events arrive already sorted newest-first (year + month + day, desc).
  // Precompute `showYear` per event so the JSX below is pure — the React
  // compiler's immutability rule forbids mutating a closed-over variable
  // during render.
  const items = events.map((e, i) => ({
    event: e,
    showYear: i === 0 || events[i - 1].year !== e.year,
  }));

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Events</p>
      <h1 className="text-4xl md:text-5xl">Events &amp; Campaigns</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/75">
        Moments from the movement — conclaves, drives, and dialogues across India.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {items.map(({ event: e, showYear }) => (
          <Fragment key={e.slug}>
            {showYear && (
              <div className="col-span-full mt-6 flex items-center gap-4 first:mt-0">
                <h2 className="text-2xl text-indigo">{e.year}</h2>
                <div className="h-px flex-1 bg-ink/10" aria-hidden />
              </div>
            )}
            <Link
              href={`/events/${e.slug}`}
              className="group overflow-hidden rounded-2xl border border-ink/10 bg-white/60 transition-all hover:-translate-y-0.5 hover:border-vana/40 hover:shadow-md"
            >
              {e.images?.[0] && (
                <div className="aspect-[16/9] overflow-hidden bg-cream">
                  <Image
                    src={e.images[0]}
                    alt={e.title}
                    width={750}
                    height={422}
                    className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <div className="p-5">
                <p className="mb-1 text-xs font-medium text-muted">{e.date}</p>
                <h3 className="text-lg text-ink">{e.title}</h3>
                <p className="mt-1 text-sm text-ink/70">{e.summary}</p>
                <p className="mt-3 text-sm font-semibold text-vana group-hover:text-vana-dark">Read →</p>
              </div>
            </Link>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
