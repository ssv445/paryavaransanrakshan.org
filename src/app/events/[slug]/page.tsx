import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Download, FileText } from "lucide-react";
import { events } from "@/lib/content";
import WhatsAppImageShare from "@/components/WhatsAppImageShare";

type Params = { slug: string };

function renderIntro(intro: string) {
  return intro.split(/\n{2,}/).map((block) => {
    const image = block.match(/^!\[(.*)]\((.*)\)$/);
    if (image) {
      const [, alt, src] = image;
      return (
        <figure
          key={block}
          className="relative overflow-hidden rounded-2xl border border-ink/10 bg-cream"
        >
          <Image
            src={src}
            alt={alt}
            width={1500}
            height={844}
            className="h-auto w-full"
          />
          <div className="absolute bottom-3 right-3">
            <WhatsAppImageShare imageSrc={src} title={alt} />
          </div>
        </figure>
      );
    }

    if (block.startsWith("## ")) {
      return (
        <h2 key={block} className="pt-4 text-2xl text-ink">
          {block.replace(/^## /, "")}
        </h2>
      );
    }

    const lines = block.split("\n");
    if (lines.every((line) => line.startsWith("- "))) {
      return (
        <ul key={block} className="list-disc space-y-2 pl-6">
          {lines.map((line) => (
            <li key={line}>{line.replace(/^- /, "")}</li>
          ))}
        </ul>
      );
    }

    return <p key={block}>{block}</p>;
  });
}

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
              className={`relative overflow-hidden rounded-2xl border border-ink/10 bg-cream ${
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
              <div className="absolute bottom-3 right-3">
                <WhatsAppImageShare imageSrc={src} title={entry.title} />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink/85">
        {entry.intro && renderIntro(entry.intro)}

        <p className="text-ink/70">{entry.summary}</p>
      </div>

      {entry.downloads && entry.downloads.length > 0 && (
        <section className="mt-10 rounded-2xl border border-ink/10 bg-white/60 p-5 dark:bg-white/5">
          <h2 className="flex items-center gap-2 text-2xl text-ink">
            <FileText className="h-5 w-5 text-terracotta" aria-hidden />
            Activity PDFs
          </h2>
          <div className="mt-4 grid gap-3">
            {entry.downloads.map((download) => (
              <a
                key={download.href}
                href={download.href}
                download
                className="group flex items-start justify-between gap-4 rounded-xl border border-ink/10 bg-background/70 px-4 py-3 transition-colors hover:border-vana/40"
              >
                <span>
                  <span className="block font-semibold text-ink">{download.label}</span>
                  {download.description && (
                    <span className="mt-1 block text-sm text-ink/70">{download.description}</span>
                  )}
                </span>
                <Download className="mt-1 h-5 w-5 shrink-0 text-vana group-hover:text-vana-dark" aria-hidden />
              </a>
            ))}
          </div>
        </section>
      )}

      <p className="mt-10 text-sm">
        <Link href="/events" className="text-vana underline underline-offset-4 hover:text-vana-dark">
          ← All events
        </Link>
      </p>
    </article>
  );
}
