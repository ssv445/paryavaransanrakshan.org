import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "@/components/ContentPage";
import { karyavibhag } from "@/lib/content";

type Params = { slug: string };

const heroImages: Record<string, string> = {
  "religious-institutes": "/images/karyavibhag/religious-institutes.jpg",
  "nari-shakti": "/images/karyavibhag/nari-shakti.jpg",
  "educational-institutes": "/images/karyavibhag/educational-institutes.png",
};

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
  return (
    <ContentPage
      entry={entry}
      backHref="/karyavibhag"
      backLabel="Karyavibhag"
      breadcrumb={entry.title}
      heroImage={heroImages[slug]}
    />
  );
}
