/**
 * In-code content registry.
 * Will move to MDX files once the content pipeline is complete.
 */

export type Entry = {
  slug: string;
  title: string;
  titleHi?: string;
  summary: string;
  tagline?: string;
  intro?: string;
  objectives?: string[];
  focusAreas?: string[];
};

/* ── Programs ──────────────────────────────────────────────────────── */

export const programs: Entry[] = [
  {
    slug: "plantation",
    title: "Plantation",
    titleHi: "वृक्षारोपण",
    summary: "Community-led tree planting across urban and rural India.",
    tagline: "Save a tree, it don't charge a fee.",
    intro:
      "The trees are getting rare; it is our duty to give them proper care. The trees should be left as they are, healthy and wild. What is the need to tame them down and cut their roots? The PSG team pledged to help nature by planting more trees.",
    objectives: [
      "To bring together people, experts, institutions and interested people who want to work in the field of forestry.",
      "Consolidate and encourage tree plantation efforts.",
      "Connecting people about tree planting by training.",
      "Awakening across the country for tree plantation.",
    ],
    focusAreas: [
      "Agroforestry / Rural — Timber, Food",
      "Vatika",
      "Mini-Forest (Urban)",
      "Plantation drives",
    ],
  },
  {
    slug: "polythene-free",
    title: "Waste Management Aayam",
    titleHi: "कचरा प्रबंधन आयाम",
    summary: "Ending single-use plastic through awareness and alternatives.",
    tagline: "Plastics give a helpful hand, but they are polluting our land.",
    intro:
      "One step for a better environment today is one step toward a better future tomorrow. With the aim of protecting the environment in the best possible manner PSG had taken certain steps.",
    objectives: [
      "Bring together people, experts, institutions and interested people working in waste management.",
      "Segregate waste into sellable, non-sellable and organic categories.",
      "Reduce single-use plastic entering landfills.",
      "Promote awareness for green homes and green campuses.",
    ],
    focusAreas: [
      "Know Your Waste",
      "Rasoi Ki Bagiya",
      "Composting",
      "Eco Bricks",
    ],
  },
  {
    slug: "save-water",
    title: "Save Water",
    titleHi: "जल आयाम",
    summary: "Rainwater harvesting, bio-remediation, and river revival.",
    tagline: "Wait, stop and think — what if we didn't have water to drink.",
    intro:
      "Water is the most precious resource on earth. PSG is committed to bringing together experts, communities and policy-makers to conserve, manage and enhance our water bodies.",
    objectives: [
      "To bring together people, experts, institutions and interested people who want to work in the field of water.",
      "To make people more conscious regarding conservation, management and enhancement of water.",
      "To encourage innovation on water and related topics; linking people working on available technologies, policy and regulations.",
    ],
    focusAreas: [
      "Buildings",
      "Groundwater",
      "Rainwater",
      "Rivers, lakes and ponds",
    ],
  },
  {
    slug: "harit-ghar",
    title: "Harit Ghar",
    titleHi: "हरित घर",
    summary: "Turning homes into small, green, self-sustaining ecosystems.",
    tagline: "It's not how big the house is, it's how happy the home is.",
    intro:
      "The Harit Ghar initiative aims to make households environmentally sustainable through conservation techniques. It focuses on transforming residences into green homes while promoting environmental protection and providing technical assistance to participants.",
    objectives: [
      "Transform residences into green, sustainable homes.",
      "Promote environmental protection through household-level action.",
      "Provide technical assistance to households adopting green practices.",
    ],
    focusAreas: [
      "Water conservation",
      "Forest preservation",
      "Animal protection",
      "Energy conservation",
      "Land conservation",
    ],
  },
];

/* ── Karyavibhag ───────────────────────────────────────────────────── */

export const karyavibhag: Entry[] = [
  {
    slug: "religious-institutes",
    title: "Religious Institutes Karyavibhag",
    titleHi: "धार्मिक संस्थान कार्यविभाग",
    summary: "Partnering with temples, ashrams and faith communities.",
    tagline: "Nature — God's best gift.",
    intro:
      "It is simply not enough to know about god. We as a social being should nurture the gift of nature given by god. To protect this gift of god certain steps were taken by the Religious Institutes Karya Vibhag.",
    objectives: [
      "To make religious places aware about environmental conservation.",
      "Bring public awareness through Sant, Mahatma, Dharmagurus.",
    ],
    focusAreas: [
      "Religious parks (धार्मिक वाटिका)",
      "Religious places (धर्म स्थल)",
      "Saints and religious preachers (संत, धर्म गुरु)",
      "Ashram and Gaushala (आश्रम, गौशाला)",
      "Archak, Jyotish, Bhajan-gayak, Kathavachak, Karamkandi",
    ],
  },
  {
    slug: "nari-shakti",
    title: "Nari Shakti Karya Vibhag",
    titleHi: "नारीशक्ति कार्यविभाग",
    summary: "Women-led environmental leadership and action.",
    tagline: "If you educate a man, you educate an individual. If you educate a woman, you educate the whole family.",
    intro:
      "Women awareness and education is very important because women are the first teacher of each and every individual. By keeping this golden statement in mind, PSG came forward with a lot of objectives for the welfare of women and for the betterment of the society.",
    objectives: [
      "Creating an environmentally-conscious society (पर्यावरण पूरक समाज का निर्माण करना).",
      "Generate awareness about the environment among women (महिलाओं को पर्यावरण के प्रति जागरूक करना).",
      "Implementing environmentally complementary options for Harit Ghar (हरित घर के लिये पर्यावरण पूरक विकल्पों का अनुकरण करना).",
      "Accelerating environmental protection programs with women organisations (महिला संगठनो के साथ पर्यावरण संरक्षण के कार्यक्रमों को गति देना).",
    ],
    focusAreas: [
      "Women Organisations related to Sangh (संघ से सम्बंधित महिला संगठन)",
      "Women's Educational Institutes (महिला शिक्षण संस्थान)",
      "Women's Organisations (formal) (महिला संगठन)",
      "Like-minded Women's Groups (informal) (समविचारी महिला समूह)",
    ],
  },
  {
    slug: "ngo-coordination",
    title: "NGO Karya Vibhag",
    titleHi: "स्वयंसेवी संस्था कार्यविभाग",
    summary: "Uniting NGOs, innovators and researchers for a shared environmental mission.",
    tagline: "Be someone's reason to smile.",
    intro:
      "There is nothing more beautiful than someone who goes out of their way to make life beautiful for others. Not all of us can do great things but we can do small things with great love. The Innovators and Voluntary Organisation Karya Vibhag was formed to collaborate with such changemakers.",
    objectives: [
      "Encourage environmental activities through innovators, voluntary organisations and NGOs.",
      "Connect each innovator and VOs to form a chain and create an open network for all.",
    ],
    focusAreas: [
      "Innovators (अन्वेषक)",
      "Voluntary organisations (स्वयंसेवी संस्था)",
      "Researchers (शोधकर्ता)",
    ],
  },
  {
    slug: "educational-institutes",
    title: "Educational Institutes Karyavibhag",
    titleHi: "शैक्षणिक संस्थान कार्यविभाग",
    summary: "Bringing environment into every classroom and campus.",
    tagline: "Nurturing tomorrow's environmental stewards.",
    intro:
      "The Educational Institutes Karyavibhag works to embed environmental awareness and action into schools, colleges and universities across India — making every campus a green campus.",
    objectives: [
      "Partner with educational institutions to integrate environmental action into campus life.",
      "Conduct tree plantation, waste management and water conservation drives on campuses.",
      "Engage students as Paryavaran Praharis (environmental sentinels).",
    ],
    focusAreas: [
      "Schools (primary and secondary)",
      "Colleges and universities",
      "Campus green audits",
      "Student volunteer programmes",
    ],
  },
];

/* ── Events ────────────────────────────────────────────────────────── */

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

/* ── Stories ────────────────────────────────────────────────────────── */

export const stories: Entry[] = [
  { slug: "godavari-bioremediation", title: "Bio-remediation of Godavari River", summary: "Restoring river ecology through bio-enzyme application in Nanded." },
  { slug: "prayagraj-tree-worship", title: "Prayagraj Tree Worship", summary: "Volunteers worshipped amla trees and pledged environmental protection." },
  { slug: "gurugram-zero-waste-kirtan", title: "Gurugram Zero-Waste Nagar Kirtan", summary: "A plastic-free religious procession with plogging activity." },
  { slug: "sirsa-sapling-distribution", title: "Sirsa Sapling Distribution", summary: "A doctor distributed 86 flower varieties in Sirsa, Haryana." },
];
