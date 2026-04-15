import type { Metadata } from "next";
import { Phone, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { orgContact } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Paryavaran Sanrakshan Gatividhi — phone, email, or message.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Contact</p>
      <h1 className="text-4xl md:text-5xl">Get in touch</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/75">
        Questions, partnerships, volunteering — we&apos;d love to hear from you.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <aside className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted">Reach us directly</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`tel:${orgContact.phoneTel}`} className="inline-flex items-center gap-2 text-ink hover:text-vana">
                  <Phone className="h-4 w-4" aria-hidden /> {orgContact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${orgContact.email}`} className="inline-flex items-center gap-2 text-ink hover:text-vana">
                  <Mail className="h-4 w-4" aria-hidden /> {orgContact.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-vana/5 p-5 text-sm text-ink/80">
            <p className="font-semibold text-vana">Want to volunteer?</p>
            <p className="mt-1">
              Sign up on the EcoMitram app to join campaigns and track your pledges.
            </p>
            <a
              href="https://ecomitram.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-vana hover:text-vana-dark"
            >
              Open EcoMitram →
            </a>
          </div>
        </aside>

        <div className="rounded-3xl border border-ink/10 bg-white/70 p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
