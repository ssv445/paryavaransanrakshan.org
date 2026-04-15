import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ExternalLink } from "lucide-react";
import { primaryNav, resources, orgContact, JOIN_URL } from "@/lib/nav";
import KolamDivider from "./illustrations/KolamDivider";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95Z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2H21.5l-7.5 8.571L22.5 22h-6.75l-4.73-6.177L5.5 22H2.243l8.02-9.167L1.5 2h6.91l4.27 5.644L18.244 2Zm-1.183 18h1.85L7.06 4H5.1l11.96 16Z" />
    </svg>
  );
}

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-indigo text-cream">
      <KolamDivider className="absolute -top-6 left-0 right-0 mx-auto h-12 w-full text-haldi" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div className="space-y-4">
          <Image
            src="/brand/logo-footer.png"
            alt="Paryavaran Sanrakshan"
            width={180}
            height={64}
            className="h-14 w-auto brightness-0 invert"
          />
          <p className="font-devanagari text-sm leading-relaxed text-cream/80">
            || माता भूमि: पुत्रों अहम् पृथिव्या: ||
          </p>
          <p className="text-sm text-cream/70">
            An all-India movement dedicated to improving the environment through action and awareness.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href={orgContact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="rounded-full border border-cream/20 p-2 hover:bg-cream/10">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href={orgContact.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter / X"
              className="rounded-full border border-cream/20 p-2 hover:bg-cream/10">
              <TwitterIcon className="h-4 w-4" />
            </a>
            <a href={orgContact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="rounded-full border border-cream/20 p-2 hover:bg-cream/10">
              <WhatsappIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-haldi">Explore</h3>
          <ul className="space-y-2 text-sm">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream/80 hover:text-haldi">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={JOIN_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cream/80 hover:text-haldi">
                Join <ExternalLink className="h-3 w-3" aria-hidden />
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-haldi">Resources</h3>
          <ul className="space-y-2 text-sm">
            {resources.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cream/80 hover:text-haldi"
                >
                  {item.label} <ExternalLink className="h-3 w-3" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-haldi">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`tel:${orgContact.phoneTel}`} className="inline-flex items-center gap-2 text-cream/80 hover:text-haldi">
                <Phone className="h-4 w-4" aria-hidden /> {orgContact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${orgContact.email}`} className="inline-flex items-center gap-2 text-cream/80 hover:text-haldi">
                <Mail className="h-4 w-4" aria-hidden /> {orgContact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-cream/60 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Paryavaran Sanrakshan Gatividhi. All rights reserved.</p>
          <p>Made with care for Mother Earth.</p>
        </div>
      </div>
    </footer>
  );
}
