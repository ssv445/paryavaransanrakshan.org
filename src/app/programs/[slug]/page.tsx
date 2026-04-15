import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PagePlaceholder from "@/components/PagePlaceholder";
import { programs } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return {};
  return { title: program.title, description: program.summary };
}

export default async function ProgramPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();
  return <PagePlaceholder title={program.title} description={program.summary} />;
}
