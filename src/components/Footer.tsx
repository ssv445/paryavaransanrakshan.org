import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { primaryNav, orgContact, JOIN_URL } from "@/lib/nav";
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

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0ZM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
    </svg>
  );
}

function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-indigo text-cream">
      <KolamDivider className="absolute -top-6 left-0 right-0 mx-auto h-12 w-full text-haldi" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-3 lg:px-8">
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
            <a href={orgContact.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
              className="rounded-full border border-cream/20 p-2 hover:bg-cream/10">
              <TwitterIcon className="h-4 w-4" />
            </a>
            <a href={orgContact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="rounded-full border border-cream/20 p-2 hover:bg-cream/10">
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a href={orgContact.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
              className="rounded-full border border-cream/20 p-2 hover:bg-cream/10">
              <YouTubeIcon className="h-4 w-4" />
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

        {/* Connect — social + EcoMitram */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-haldi">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={orgContact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cream/80 hover:text-haldi"
              >
                Facebook <ExternalLink className="h-3 w-3" aria-hidden />
              </a>
            </li>
            <li>
              <a
                href={orgContact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cream/80 hover:text-haldi"
              >
                X (Twitter) <ExternalLink className="h-3 w-3" aria-hidden />
              </a>
            </li>
            <li>
              <a
                href={orgContact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cream/80 hover:text-haldi"
              >
                Instagram <ExternalLink className="h-3 w-3" aria-hidden />
              </a>
            </li>
            <li>
              <a
                href={orgContact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cream/80 hover:text-haldi"
              >
                YouTube <ExternalLink className="h-3 w-3" aria-hidden />
              </a>
            </li>
            <li>
              <a
                href={JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cream/80 hover:text-haldi"
              >
                EcoMitram App <ExternalLink className="h-3 w-3" aria-hidden />
              </a>
            </li>
            <li>
              <Link href="/contact" className="text-cream/80 hover:text-haldi">
                Contact form
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-cream/60 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Paryavaran Sanrakshan Gatividhi. All rights reserved.</p>
          <p>
            Made with care for Mother Earth.{" "}
            <Link href="/about/design" className="underline underline-offset-4 hover:text-haldi">
              रचना और शिल्प
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
