import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PagePlaceholder from "@/components/PagePlaceholder";
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
  return <PagePlaceholder title={entry.title} description={entry.summary} />;
}
