import Link from "next/link";

type Props = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

/**
 * Temporary placeholder used while we migrate content route-by-route.
 * Replace with real page content once the matching MDX/design ships.
 */
export default function PagePlaceholder({ title, description, children }: Props) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
        Paryavaran Sanrakshan
      </p>
      <h1 className="text-4xl font-normal text-ink md:text-5xl">{title}</h1>
      {description && (
        <p className="mt-4 text-lg text-ink/75">{description}</p>
      )}
      <div className="mt-8 rounded-2xl border border-dashed border-ink/20 bg-cream/60 p-6 text-sm text-muted">
        This page is part of the ongoing migration from the legacy WordPress site.
        Content will be populated here shortly.
      </div>
      {children}
      <p className="mt-10 text-sm">
        <Link href="/" className="text-vana underline underline-offset-4 hover:text-vana-dark">
          ← Back to home
        </Link>
      </p>
    </section>
  );
}
