export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Karyavibhag", href: "/karyavibhag" },
  { label: "Events", href: "/events" },
  { label: "Stories", href: "/stories" },
  { label: "Contact", href: "/contact" },
];

export const JOIN_URL = "https://ecomitram.org/";

// Retired external resources: paryavaranperspective.com (E-Magazine),
// paryavaranbharat.org (Media Center), sankalp.paryavaransanrakshan.org
// (Sankalp Portal). Removed 2026-04 — sites no longer maintained.
export const resources: NavItem[] = [
  { label: "EcoMitram App", href: "https://ecomitram.org/", external: true },
];

export const orgContact = {
  phone: "+91 8369-837-609",
  phoneTel: "+918369837609",
  email: "[email protected]",
  whatsapp:
    "https://api.whatsapp.com/send?phone=+918369837609&text=I'm%20interested%20in%20Paryavaran%20Sanrakshan",
  facebook: "https://www.facebook.com/psg.paryavaran.sanrakshan/",
  twitter: "https://x.com/psgbharat",
  instagram: "https://www.instagram.com/ecomitram",
  youtube: "https://www.youtube.com/@paryavaransanrakshan6731",
};
