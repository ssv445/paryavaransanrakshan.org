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
      className={`${plexSans.variable} ${yatra.variable} ${tiroDevanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
