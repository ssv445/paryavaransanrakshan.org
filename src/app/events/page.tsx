import type { Metadata } from "next";
import Link from "next/link";
import { events } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Campaigns and events organised by Paryavaran Sanrakshan across the years.",
};

export default function EventsIndex() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Events</p>
      <h1 className="text-4xl md:text-5xl">Events &amp; Campaigns</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/75">
        Moments from the movement — conclaves, drives, and dialogues across India.
      </p>
      <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
        {events.map((e) => (
          <li key={e.slug}>
            <Link
              href={`/events/${e.slug}`}
              className="flex flex-col gap-1 py-5 transition-colors hover:bg-white/60 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h2 className="text-lg text-ink">{e.title}</h2>
                <p className="text-sm text-ink/70">{e.summary}</p>
              </div>
              <span className="shrink-0 text-sm font-semibold text-vana">Read →</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
