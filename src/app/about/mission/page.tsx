import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "Paryavaran Sanrakshan is not an NGO — it is a public environmental campaign built on solutions, not opposition.",
};

export default function MissionPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
        <Link href="/about" className="hover:underline">About</Link> / Mission
      </p>
      <h1 className="text-4xl md:text-5xl">Our Mission</h1>

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink/85">
        <p>
          Paryavaran Sanrakshan is not an NGO or institution — it is an attempt to
          build a <strong>public environmental campaign</strong> through awareness and
          community participation, rooted in <em>solutions, not opposition</em>.
        </p>

        <p>
          We began in <strong>March 2019</strong> with a simple conviction: the environment
          can only be protected when millions of ordinary citizens act in their own
          localities, every day.
        </p>

        <p>
          The movement is built around <strong>three core commitments</strong>:
        </p>

        <ol className="list-decimal space-y-3 pl-6">
          <li>
            <strong>Water conservation and management</strong> — rainwater harvesting,
            river bio-remediation, groundwater recharge and community water audits.
          </li>
          <li>
            <strong>Tree planting</strong> — urban mini-forests, rural agroforestry,
            campus and roadside plantation drives across the country.
          </li>
          <li>
            <strong>Reducing plastic and non-biodegradable materials</strong> — ending
            single-use plastic through eco-bricks, composting, waste segregation and
            awareness at scale.
          </li>
        </ol>

        <p>
          Paryavaran Sanrakshan is an all-India group dedicated to improving the
          environment. A few thousand people are part of its organisational structure.
          The aim of the group is to make changes to the environment through activities
          and through awareness creation.
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
