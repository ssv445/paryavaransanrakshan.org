import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How Paryavaran Sanrakshan Gatividhi began at the ABPS in Gwalior in March 2019.",
};

export default function StoryPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
        <Link href="/about" className="hover:underline">About</Link> / Our Story
      </p>
      <h1 className="text-4xl md:text-5xl">Our Story</h1>

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink/85">
        <p>
          The Akhil Bharatiya Pratinidhi Sabha of the Rashtriya Swayamsevak Sangh
          (RSS) convened in Gwalior from <strong>March 8 to 10, 2019</strong>,
          attracting 1,420 workers from RSS-affiliated organisations. RSS
          Sarkaryavah Shri Bhaiyaji Joshi encouraged Sangh workers to engage with
          positive social initiatives.
        </p>

        <blockquote className="border-l-4 border-haldi pl-6 italic text-ink/75">
          &ldquo;The RSS&rsquo; work has reached a certain level and now we feel
          that it is time to take a big leap in terms of expansion.&rdquo;
          <span className="mt-1 block text-sm not-italic text-muted">
            — Shri Bhaiyya Ji Joshi
          </span>
        </blockquote>

        <p>
          The ABPS 2019 adopted <strong>environment conservation</strong> as a major
          initiative. Three focus areas were identified:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Water conservation and management</li>
          <li>Tree planting</li>
          <li>Reducing plastic and non-biodegradable materials like Thermocol</li>
        </ul>

        <p>
          Shri <strong>Gopal Arya</strong>, veteran RSS organiser, was appointed to
          lead the newly established <em>Paryavaran Vibhag</em>, serving as national
          convenor. Under his guidance the movement grew from an idea into an
          all-India network of thousands of volunteers driving environmental action on
          the ground.
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
