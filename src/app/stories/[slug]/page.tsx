import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PagePlaceholder from "@/components/PagePlaceholder";
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

export default async function StoryDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = stories.find((s) => s.slug === slug);
  if (!entry) notFound();
  return <PagePlaceholder title={entry.title} description={entry.summary} />;
}
