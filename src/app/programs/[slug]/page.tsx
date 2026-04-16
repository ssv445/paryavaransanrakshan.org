import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "@/components/ContentPage";
import { programs } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const entry = programs.find((p) => p.slug === slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.summary };
}

export default async function ProgramPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = programs.find((p) => p.slug === slug);
  if (!entry) notFound();
  return (
    <ContentPage
      entry={entry}
      backHref="/programs"
      backLabel="Programs"
      breadcrumb={entry.title}
    />
  );
}
