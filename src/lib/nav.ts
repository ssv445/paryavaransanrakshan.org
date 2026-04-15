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

export const JOIN_URL = "https://ecomitram.app/";

export const resources: NavItem[] = [
  { label: "E-Magazine", href: "https://paryavaranperspective.com/", external: true },
  { label: "Media Center", href: "https://paryavaranbharat.org/", external: true },
  { label: "Sankalp Portal", href: "https://sankalp.paryavaransanrakshan.org/", external: true },
  { label: "EcoMitram App", href: "https://ecomitram.app/", external: true },
];

export const orgContact = {
  phone: "+91 8369-837-609",
  phoneTel: "+918369837609",
  email: "[email protected]",
  whatsapp:
    "https://api.whatsapp.com/send?phone=+918369837609&text=I'm%20interested%20in%20Paryavaran%20Sanrakshan",
  facebook: "https://www.facebook.com/psg.paryavaran.sanrakshan/",
  twitter: "https://twitter.com/rsspsg",
};
