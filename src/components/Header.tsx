"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink, Menu, X } from "lucide-react";
import clsx from "clsx";
import { primaryNav, JOIN_URL } from "@/lib/nav";
import GTranslate from "./GTranslate";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3" aria-label="Paryavaran Sanrakshan — Home">
          <Image
            src="/brand/logo.png"
            alt="Paryavaran Sanrakshan Gatividhi"
            width={160}
            height={56}
            priority
            className="h-10 w-auto sm:h-12"
          />
          <span className="hidden font-devanagari text-sm leading-tight text-vana md:block">
            माता भूमि:<br />पुत्रों अहम् पृथिव्या:
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-ink/5 hover:text-vana"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="text-sm">
            <GTranslate />
          </div>
          <ThemeToggle />
          <a
            href={JOIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-haldi px-4 py-2 text-sm font-semibold text-ink shadow-sm transition-all hover:bg-haldi-dark hover:shadow-md"
          >
            Join <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-ink hover:bg-ink/5 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={clsx(
          "lg:hidden",
          open ? "block border-t border-ink/10" : "hidden"
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3" aria-label="Primary mobile">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-medium text-ink/90 hover:bg-ink/5"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center justify-between gap-3 border-t border-ink/10 pt-3">
            <GTranslate />
            <ThemeToggle />
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-haldi px-4 py-2 text-sm font-semibold text-ink"
            >
              Join <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
