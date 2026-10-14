import { Mail } from "lucide-react";
import { orgContact } from "@/lib/nav";

export default function ContactMailto() {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl">Write to us</h2>
      <p className="text-ink/75">
        The easiest way to reach us is email. Tell us your name, what you would like to do,
        and how we can reach you.
      </p>
      <a
        href={`mailto:${orgContact.email}`}
        className="inline-flex items-center gap-2 rounded-full bg-vana px-5 py-3 font-semibold text-cream transition-colors hover:bg-vana-dark"
      >
        <Mail className="h-4 w-4" aria-hidden /> Email us at {orgContact.email}
      </a>
    </div>
  );
}
