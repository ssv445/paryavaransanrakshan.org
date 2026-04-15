import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PagePlaceholder from "@/components/PagePlaceholder";
import { karyavibhag } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return karyavibhag.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const entry = karyavibhag.find((k) => k.slug === slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.summary };
}

export default async function KaryavibhagDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = karyavibhag.find((k) => k.slug === slug);
  if (!entry) notFound();
  return <PagePlaceholder title={entry.title} description={entry.summary} />;
}
