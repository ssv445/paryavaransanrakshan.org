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

      {/* Slide 14 of PSG deck — Prerana. The Bishnoi sacrifice at Khejarli (1730)
          is the movement's historical touchstone and belongs before the 2019
          founding narrative. */}
      <section className="mt-10 rounded-3xl border border-haldi/40 bg-haldi/5 p-7 md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
          प्रेरणा · Prerana
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl">Khejarli, 1730</h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/85 md:text-lg">
          <p lang="hi" className="font-devanagari">
            सन <strong>1730</strong> में राजस्थान के मारवाड़ में खेजड़ली नामक
            स्थान पर जोधपुर के महाराजा द्वारा हरे पेड़ों को काटने से बचाने के
            लिए, <strong>अमृता देवी</strong> ने अपनी तीन बेटियों आसू, रत्नी और
            भागू के साथ अपने प्राण त्याग दिए। उसके साथ{" "}
            <strong>363 से अधिक विश्नोई समाज के लोगों</strong> ने, खेजड़ी के
            पेड़ों को बचाने के लिए बलिदान दे दिया।
          </p>
          <p className="text-sm text-ink/70 md:text-base">
            In <strong>1730</strong>, at a place called Khejarli in Marwar,
            Rajasthan, the Maharaja of Jodhpur ordered the felling of green trees
            for his palace. <strong>Amrita Devi Bishnoi</strong> — along with her
            three daughters Asu, Ratni and Bhagu — embraced the khejri trees and
            laid down their lives to stop the cutting. More than{" "}
            <strong>363 members of the Bishnoi community</strong> followed them,
            sacrificing their lives to protect the trees — the earliest recorded
            instance of a community laying down its life for the environment, and
            the spiritual origin point Paryavaran Sanrakshan returns to again and
            again.
          </p>
        </div>
      </section>

      <h2 className="mt-16 text-3xl">The Founding · March 2019</h2>

      <div className="mt-6 space-y-6 text-lg leading-relaxed text-ink/85">
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

      {/* Slide 15 of PSG deck — Pre-declaration journey.  The formal 2019
          announcement built on a decade of regional groundwork; listing the
          milestones gives the movement its real weight. */}
      <h2 className="mt-16 text-3xl">Before the Declaration · 2008–2019</h2>
      <p className="mt-3 text-lg text-ink/75">
        Eleven years of regional work laid the foundation for Gwalior.
      </p>

      <ol className="mt-6 space-y-5 border-l-2 border-vana/30 pl-6">
        <li>
          <p className="text-sm font-semibold text-terracotta">2008</p>
          <p className="text-base text-ink/85">
            <strong>Paryavaran Bharti Bihar</strong> — the movement&apos;s earliest
            recognisable work begins in Bihar.
          </p>
        </li>
        <li>
          <p className="text-sm font-semibold text-terracotta">2015 · October</p>
          <p className="text-base text-ink/85">
            <strong>Ma. Suhasrao Hiremath ji</strong> articulates the environmental
            thought that would shape PSG.
          </p>
        </li>
        <li>
          <p className="text-sm font-semibold text-terracotta">2015 – 2017</p>
          <p className="text-base text-ink/85">
            <strong>Samarth Bharat</strong> programme runs in Bengaluru; the Koti
            Vruksh Abhiyan takes root across Karnataka.
          </p>
        </li>
        <li>
          <p className="text-sm font-semibold text-terracotta">2016</p>
          <p className="text-base text-ink/85">
            <strong>Apna Sansthan</strong> begins organised work in Rajasthan.
          </p>
        </li>
        <li>
          <p className="text-sm font-semibold text-terracotta">2017</p>
          <p className="text-base text-ink/85">
            <strong>Delhi</strong> — a 10-lakh-tree pledge, 8 lakh actually planted.
          </p>
        </li>
        <li>
          <p className="text-sm font-semibold text-terracotta">2018</p>
          <p className="text-base text-ink/85">
            <strong>Hariyawal Punjab</strong> and the first{" "}
            <strong>Paryavaran Kumbh</strong> — the scale of what was possible
            becomes clear.
          </p>
        </li>
        <li>
          <p className="text-sm font-semibold text-terracotta">2015 – 2019</p>
          <p className="text-base text-ink/85">
            Four years of <em>vichar-vimarsh</em> — deliberation across regions
            about what a national environmental movement should look like.
          </p>
        </li>
      </ol>

      <p className="mt-10 text-sm">
        <Link href="/about" className="text-vana underline underline-offset-4 hover:text-vana-dark">
          ← Back to About
        </Link>
      </p>
    </article>
  );
}
