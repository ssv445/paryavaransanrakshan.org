import type { Metadata } from "next";
import { IBM_Plex_Sans, Tiro_Devanagari_Hindi, Yatra_One } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const yatra = Yatra_One({
  variable: "--font-yatra",
  subsets: ["latin", "devanagari"],
  weight: ["400"],
  display: "swap",
});

const tiroDevanagari = Tiro_Devanagari_Hindi({
  variable: "--font-tiro-devanagari",
  subsets: ["latin", "devanagari"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paryavaransanrakshan.org"),
  title: {
    default: "Paryavaran Sanrakshan Gatividhi",
    template: "%s — Paryavaran Sanrakshan",
  },
  description:
    "An all-India movement dedicated to improving the environment through plantation, water conservation, polythene-free drives and green homes.",
  openGraph: {
    type: "website",
    siteName: "Paryavaran Sanrakshan Gatividhi",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plexSans.variable} ${yatra.variable} ${tiroDevanagari.variable} h-full antialiased`}
    >
      <head>
        {/* Prevent dark-mode FOUC: apply class before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-vana focus:px-4 focus:py-2 focus:text-cream focus:outline-none"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
