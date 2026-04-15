import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center lg:px-8">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">404</p>
      <h1 className="text-4xl md:text-5xl">We couldn&apos;t find that page</h1>
      <p className="mt-4 text-lg text-ink/75">
        The page may have moved during our website refresh.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-vana px-5 py-3 font-semibold text-cream hover:bg-vana-dark"
        >
          Back home
        </Link>
        <Link
          href="/stories"
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 font-semibold text-ink hover:bg-white"
        >
          Browse stories
        </Link>
      </div>
    </section>
  );
}
