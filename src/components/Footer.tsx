import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { primaryNav, orgContact, JOIN_URL } from "@/lib/nav";
import GodnaVillage from "./illustrations/GodnaVillage";

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
    <footer className="relative mt-24 bg-indigo-deep text-cream-fixed">
      {/* Godna village mural — full-bleed folk scene reading left-to-right:
          sun, breeze, birds, pond, cow, tree of life, happy farmer, hut,
          crops, walking village figures. Extends to the page edges so the
          village "runs" across the whole horizon. preserveAspectRatio="none"
          lets it stretch the scene horizontally on ultra-wide viewports. */}
      <div className="pt-10 lg:pt-14">
        <GodnaVillage
          className="block h-44 w-full text-haldi md:h-56 lg:h-64"
          preserveAspectRatio="xMidYMid meet"
        />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-16 pt-6 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:px-8">
        {/* Brand — logo only */}
        {/* Aspect-ratio wrapper anchors the logo to its intrinsic 165×71 ratio.
            Image fills the box with object-contain so it never stretches even if
            the source file or Image props drift in the future. */}
        <span className="block aspect-[165/71] h-14">
          <Image
            src="/brand/logo-footer.png"
            alt="Paryavaran Sanrakshan"
            width={165}
            height={71}
            className="h-full w-full object-contain brightness-0 invert"
          />
        </span>

        {/* Right stack: horizontal nav + socials below */}
        <div className="flex flex-col gap-4 border-t border-cream-fixed/10 pt-6 lg:items-end lg:border-0 lg:pt-2">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm lg:justify-end">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-cream-fixed/80 hover:text-haldi">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={JOIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cream-fixed/80 hover:text-haldi"
                >
                  Join <ExternalLink className="h-3 w-3" aria-hidden />
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <a href={orgContact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="rounded-full border border-cream-fixed/20 p-2 hover:bg-cream-fixed/10">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href={orgContact.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
              className="rounded-full border border-cream-fixed/20 p-2 hover:bg-cream-fixed/10">
              <TwitterIcon className="h-4 w-4" />
            </a>
            <a href={orgContact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="rounded-full border border-cream-fixed/20 p-2 hover:bg-cream-fixed/10">
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a href={orgContact.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
              className="rounded-full border border-cream-fixed/20 p-2 hover:bg-cream-fixed/10">
              <YouTubeIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-cream-fixed/10 bg-indigo-deep">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-cream-fixed/60 sm:flex-row lg:px-8">
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
