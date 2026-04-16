import type { NextConfig } from "next";

/**
 * 301 redirects from the legacy WordPress URL structure to the new IA.
 * Keep this list in sync with /docs/migration.md (to be added later).
 */
const legacyRedirects: { source: string; destination: string; permanent: true }[] = [
  // About
  { source: "/about-us", destination: "/about", permanent: true },
  { source: "/about-us/", destination: "/about", permanent: true },
  { source: "/mission", destination: "/about/mission", permanent: true },
  { source: "/mission/", destination: "/about/mission", permanent: true },
  { source: "/our-story", destination: "/about/story", permanent: true },
  { source: "/our-story/", destination: "/about/story", permanent: true },
  { source: "/our-logo", destination: "/about/logo", permanent: true },
  { source: "/our-logo/", destination: "/about/logo", permanent: true },
  { source: "/our-presence", destination: "/about/presence", permanent: true },
  { source: "/our-presence/", destination: "/about/presence", permanent: true },

  // Programs (WP date-slug URLs)
  { source: "/2024/02/28/plantation", destination: "/programs/plantation", permanent: true },
  { source: "/2024/02/28/plantation/", destination: "/programs/plantation", permanent: true },
  { source: "/2024/02/28/harit-ghar", destination: "/programs/harit-ghar", permanent: true },
  { source: "/2024/02/28/harit-ghar/", destination: "/programs/harit-ghar", permanent: true },
  { source: "/2024/02/28/save-water", destination: "/programs/save-water", permanent: true },
  { source: "/2024/02/28/save-water/", destination: "/programs/save-water", permanent: true },
  { source: "/2024/02/28/waste-management-aayam", destination: "/programs/polythene-free", permanent: true },
  { source: "/2024/02/28/waste-management-aayam/", destination: "/programs/polythene-free", permanent: true },

  // Karyavibhag
  { source: "/2024/02/23/religious-institutes-karyavibhag", destination: "/karyavibhag/religious-institutes", permanent: true },
  { source: "/2024/02/23/religious-institutes-karyavibhag/", destination: "/karyavibhag/religious-institutes", permanent: true },
  { source: "/2024/02/23/nari-shakti-karya-vibhag", destination: "/karyavibhag/nari-shakti", permanent: true },
  { source: "/2024/02/23/nari-shakti-karya-vibhag/", destination: "/karyavibhag/nari-shakti", permanent: true },
  { source: "/2024/02/23/ngo-karya-vibhag", destination: "/karyavibhag/samajik-sansthan", permanent: true },
  { source: "/2024/02/23/ngo-karya-vibhag/", destination: "/karyavibhag/samajik-sansthan", permanent: true },
  { source: "/karyavibhag/ngo-coordination", destination: "/karyavibhag/samajik-sansthan", permanent: true },
  { source: "/karyavibhag/ngo-coordination/", destination: "/karyavibhag/samajik-sansthan", permanent: true },
  { source: "/2024/02/23/educational-institutes-karyavibhag", destination: "/karyavibhag/educational-institutes", permanent: true },
  { source: "/2024/02/23/educational-institutes-karyavibhag/", destination: "/karyavibhag/educational-institutes", permanent: true },

  // Events
  { source: "/events-eco", destination: "/events", permanent: true },
  { source: "/events-eco/", destination: "/events", permanent: true },
  { source: "/world-earth-day-poster", destination: "/events/world-earth-day-poster", permanent: true },
  { source: "/world-earth-day-poster/", destination: "/events/world-earth-day-poster", permanent: true },
  { source: "/prakruti-vandana", destination: "/events/prakruti-vandana", permanent: true },
  { source: "/prakruti-vandana/", destination: "/events/prakruti-vandana", permanent: true },
  { source: "/prakurti-vandana", destination: "/events/prakruti-vandana", permanent: true }, // typo alias
  { source: "/prakurti-vandana/", destination: "/events/prakruti-vandana", permanent: true },
  { source: "/media-samvad-conclave", destination: "/events/media-samvad-conclave", permanent: true },
  { source: "/media-samvad-conclave/", destination: "/events/media-samvad-conclave", permanent: true },
  { source: "/vice-chancellors-conclave", destination: "/events/vice-chancellors-conclave", permanent: true },
  { source: "/vice-chancellors-conclave/", destination: "/events/vice-chancellors-conclave", permanent: true },
  { source: "/paryavaran-prahari-event", destination: "/events/paryavaran-prahari", permanent: true },
  { source: "/paryavaran-prahari-event/", destination: "/events/paryavaran-prahari", permanent: true },
  { source: "/paryavaran-pratiyogita", destination: "/events/paryavaran-pratiyogita", permanent: true },
  { source: "/paryavaran-pratiyogita/", destination: "/events/paryavaran-pratiyogita", permanent: true },
  { source: "/jal-samwad", destination: "/events/jal-samwad", permanent: true },
  { source: "/jal-samwad/", destination: "/events/jal-samwad", permanent: true },
  { source: "/online-conclave", destination: "/events/online-conclave", permanent: true },
  { source: "/online-conclave/", destination: "/events/online-conclave", permanent: true },
  { source: "/eco-bricks", destination: "/events/eco-bricks", permanent: true },
  { source: "/eco-bricks/", destination: "/events/eco-bricks", permanent: true },
  { source: "/plastic-mukt-bharat", destination: "/events/plastic-mukt-bharat", permanent: true },
  { source: "/plastic-mukt-bharat/", destination: "/events/plastic-mukt-bharat", permanent: true },
  { source: "/haridwar-kumbh", destination: "/events/haridwar-kumbh", permanent: true },
  { source: "/haridwar-kumbh/", destination: "/events/haridwar-kumbh", permanent: true },

  // Stories / news / feeds / gallery → unified /stories
  { source: "/feeds", destination: "/stories", permanent: true },
  { source: "/feeds/", destination: "/stories", permanent: true },
  { source: "/success-stories", destination: "/stories", permanent: true },
  { source: "/success-stories/", destination: "/stories", permanent: true },
  { source: "/latest-news", destination: "/stories", permanent: true },
  { source: "/latest-news/", destination: "/stories", permanent: true },
  { source: "/gallery", destination: "/stories", permanent: true },
  { source: "/gallery/", destination: "/stories", permanent: true },
  { source: "/2024/02/22/news2", destination: "/stories", permanent: true },
  { source: "/2024/02/22/news2/", destination: "/stories", permanent: true },
  { source: "/2024/02/22/latest", destination: "/stories", permanent: true },
  { source: "/2024/02/22/latest/", destination: "/stories", permanent: true },

  // Join → EcoMitram (external)
  { source: "/join", destination: "https://ecomitram.app/", permanent: true },
  { source: "/join/", destination: "https://ecomitram.app/", permanent: true },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "paryavaransanrakshan.org" },
    ],
  },
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;
