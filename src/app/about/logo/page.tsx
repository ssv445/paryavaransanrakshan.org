import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Logo",
  description: "The symbolism behind the Paryavaran Sanrakshan Gatividhi logo.",
};

export default function LogoPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
        <Link href="/about" className="hover:underline">About</Link> / Our Logo
      </p>
      <h1 className="text-4xl md:text-5xl">Our Logo</h1>

      <div className="mt-10 flex justify-center">
        <Image
          src="/brand/logo.png"
          alt="Paryavaran Sanrakshan Gatividhi logo"
          width={320}
          height={120}
          className="h-auto w-full max-w-xs"
          priority
        />
      </div>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink/85">
        <p>
          The logo of Paryavaran Sanrakshan Gatividhi reflects our core identity —
          an all-India movement rooted in reverence for nature. Every element carries
          a deliberate meaning:
        </p>

        <ul className="list-disc space-y-3 pl-6">
          <li>
            <strong>The tree</strong> — symbolises our commitment to plantation and
            green cover across urban and rural India.
          </li>
          <li>
            <strong>The earth tones</strong> — ground us in the natural world we seek
            to protect: soil, water, and air.
          </li>
          <li>
            <strong>The circular form</strong> — represents the cycle of giving back
            to nature and the interconnected ecosystems we work to sustain.
          </li>
        </ul>

        <p>
          The logo is a daily reminder of our mantra:
        </p>

        <p className="text-center font-devanagari text-2xl text-vana">
          || माता भूमि: पुत्रों अहम् पृथिव्या: ||
        </p>
        <p className="text-center text-sm text-muted">
          &ldquo;Mother Earth — I am her son.&rdquo;
        </p>
      </div>

      <p className="mt-10 text-sm">
        <Link href="/about" className="text-vana underline underline-offset-4 hover:text-vana-dark">
          ← Back to About
        </Link>
      </p>
    </article>
  );
}
