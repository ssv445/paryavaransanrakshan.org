import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { events } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Campaigns and events organised by Paryavaran Sanrakshan across the years.",
};

export default function EventsIndex() {
  const years = [...new Set(events.map((e) => e.year))].sort((a, b) => b - a);

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Events</p>
      <h1 className="text-4xl md:text-5xl">Events &amp; Campaigns</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/75">
        Moments from the movement — conclaves, drives, and dialogues across India.
      </p>

      {years.map((year) => (
        <div key={year} className="mt-12">
          <h2 className="mb-4 text-2xl text-indigo">{year}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {events
              .filter((e) => e.year === year)
              .map((e) => (
                <Link
                  key={e.slug}
                  href={`/events/${e.slug}`}
                  className="group overflow-hidden rounded-2xl border border-ink/10 bg-white/60 transition-all hover:-translate-y-0.5 hover:border-vana/40 hover:shadow-md"
                >
                  {e.heroImage && (
                    <div className="aspect-[16/9] overflow-hidden bg-cream">
                      <Image
                        src={e.heroImage}
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
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
