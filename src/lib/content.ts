/**
 * Temporary in-code content registry used by the hub / dynamic-slug pages
 * until the MDX-backed content loader ships in Phase 3.
 */

export type Entry = {
  slug: string;
  title: string;
  summary: string;
};

export const programs: Entry[] = [
  { slug: "plantation", title: "Plantation", summary: "Community-led tree planting across urban and rural India." },
  { slug: "polythene-free", title: "Polythene Free", summary: "Ending single-use plastic through awareness and alternatives." },
  { slug: "save-water", title: "Save Water", summary: "Rainwater harvesting, bio-remediation, and river revival." },
  { slug: "harit-ghar", title: "Harit Ghar", summary: "Turning homes into small, green, self-sustaining ecosystems." },
];

export const karyavibhag: Entry[] = [
  { slug: "religious-institutes", title: "Religious Institutes", summary: "Partnering with temples, ashrams and faith communities." },
  { slug: "nari-shakti", title: "Nari Shakti", summary: "Women-led environmental leadership and action." },
  { slug: "ngo-coordination", title: "NGO Coordination", summary: "Uniting NGOs across India for a shared environmental mission." },
  { slug: "educational-institutes", title: "Educational Institutes", summary: "Bringing environment into every classroom and campus." },
];

export const events: Entry[] = [
  { slug: "world-earth-day-poster", title: "World Earth Day Poster (2020)", summary: "Nationwide poster campaign marking Earth Day." },
  { slug: "prakruti-vandana", title: "Prakruti Vandana (2020)", summary: "A pan-India ceremony honouring nature." },
  { slug: "media-samvad-conclave", title: "Media Samvad Conclave (2020)", summary: "Conversations with media on environmental coverage." },
  { slug: "vice-chancellors-conclave", title: "Vice Chancellors' Conclave (2020)", summary: "University leaders aligning on campus sustainability." },
  { slug: "paryavaran-prahari", title: "Paryavaran Prahari (2020)", summary: "Recognising environmental sentinels across the country." },
  { slug: "paryavaran-pratiyogita", title: "Paryavaran Pratiyogita (2021)", summary: "Youth competitions on environmental themes." },
  { slug: "jal-samwad", title: "Jal Samwad (2021)", summary: "A national dialogue on water conservation." },
  { slug: "online-conclave", title: "Online Conclave (2021)", summary: "Virtual conclave during pandemic times." },
  { slug: "eco-bricks", title: "Eco Bricks (2021)", summary: "Converting single-use plastic into reusable construction bricks." },
  { slug: "plastic-mukt-bharat", title: "Plastic Mukt Bharat (2021)", summary: "Pushing for a plastic-free India." },
  { slug: "haridwar-kumbh", title: "Haridwar Kumbh (2021)", summary: "Environmental outreach at Kumbh Mela." },
];

export const stories: Entry[] = [
  { slug: "godavari-bioremediation", title: "Bio-remediation of Godavari River", summary: "Restoring river ecology through bio-enzyme application in Nanded." },
  { slug: "prayagraj-tree-worship", title: "Prayagraj Tree Worship", summary: "Volunteers worshipped amla trees and pledged environmental protection." },
  { slug: "gurugram-zero-waste-kirtan", title: "Gurugram Zero-Waste Nagar Kirtan", summary: "A plastic-free religious procession with plogging activity." },
  { slug: "sirsa-sapling-distribution", title: "Sirsa Sapling Distribution", summary: "A doctor distributed 86 flower varieties in Sirsa, Haryana." },
];
