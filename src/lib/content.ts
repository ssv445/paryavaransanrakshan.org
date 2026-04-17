/**
 * In-code content registry.
 * Will move to MDX files once the content pipeline is complete.
 *
 * Source of truth for org structure: PSG Introduction & Sighawalokan deck.
 * 3 campaigns (पेड़, पानी, पॉलीथिन) + Harit Ghar operational model.
 * 7 Karyavibhag divisions. Events from 2019-2025.
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
// 3 campaigns + Harit Ghar (operational model, not a campaign per se,
// but kept as a program pillar since it's a distinct focus area)

export const programs: Entry[] = [
  {
    slug: "plantation",
    title: "Plantation",
    titleHi: "वृक्षारोपण",
    summary: "Community-led tree planting across urban and rural India.",
    tagline: "Save a tree, it don't charge a fee.",
    intro:
      "India has only 28 trees per person — among the lowest in the world. The PSG team pledged to help nature by planting more trees. From urban mini-forests to rural agroforestry, the Plantation campaign mobilises communities to green their surroundings.",
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
    title: "Polythene Free",
    titleHi: "पॉलीथिन मुक्त",
    summary: "Ending single-use plastic through awareness and alternatives.",
    tagline: "Plastics give a helpful hand, but they are polluting our land.",
    intro:
      "Plastic molecules have been found in vegetables, plants and drinking water. Plastic that enters our blood doesn't come out — ever. One polythene bag takes more than 1,000 years to decompose. India's plastic usage is low, but improper disposal is extremely high. PSG's Polythene Free campaign tackles this through awareness, eco-bricks, and community action.",
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
      "Only 3% of earth's water is freshwater. 54% of India faces high to extremely high water stress. 70% of freshwater usage is from agriculture, 30% from municipal and industrial use. 5,000 litres of rainfall yield just 1 litre of drinking water. PSG is committed to bringing together experts, communities and policy-makers to conserve, manage and enhance our water bodies.",
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
      "Harit Ghar is PSG's operational model for grassroots action. The unit of work is the Green Home (हरित घर). 10 Harit Ghars form a unit. Harit Milan (हरित मिलन) is the regular meeting of green homes. Harit Prahari (हरित प्रहरी) is the core volunteer who leads each unit. The initiative aims to make households environmentally sustainable through conservation techniques.",
    objectives: [
      "Transform residences into green, sustainable homes.",
      "Build a network of Harit Praharis (Green Sentinels) across India.",
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
// 7 divisions as per the org deck

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
    slug: "samajik-sansthan",
    title: "Samajik Sansthan Karya Vibhag",
    titleHi: "सामाजिक संस्थान कार्यविभाग",
    summary: "Engaging social organisations, NGOs, and innovators for collective environmental action.",
    tagline: "Be someone's reason to smile.",
    intro:
      "There is nothing more beautiful than someone who goes out of their way to make life beautiful for others. Not all of us can do great things but we can do small things with great love. The Samajik Sansthan Karya Vibhag (formerly NGO Coordination) works with social organisations, NGOs, innovators, and civic bodies to embed environmental consciousness into the fabric of Indian social life.",
    objectives: [
      "Encourage environmental activities through social organisations, NGOs and innovators.",
      "Connect each innovator and VOs to form a chain and create an open network for all.",
      "Partner with community groups to promote environmental awareness.",
    ],
    focusAreas: [
      "Social organisations (सामाजिक संगठन)",
      "Voluntary organisations (स्वयंसेवी संस्था)",
      "Innovators (अन्वेषक)",
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
  {
    slug: "jan-sampark",
    title: "Jan Sampark Karya Vibhag",
    titleHi: "जन संपर्क कार्यविभाग",
    summary: "Public outreach and grassroots communication.",
    tagline: "Reaching every doorstep with the message of conservation.",
    intro:
      "The Jan Sampark (Public Contact) Karyavibhag is responsible for spreading PSG's environmental message to the widest possible audience. Through door-to-door campaigns, public events, media engagement, and digital outreach, this division ensures that every citizen hears the call to protect the environment.",
    objectives: [
      "Conduct public awareness campaigns across urban and rural areas.",
      "Engage with media for environmental coverage and awareness.",
      "Build grassroots volunteer networks for local outreach.",
    ],
    focusAreas: [
      "Door-to-door campaigns",
      "Media engagement",
      "Public events and rallies",
      "Digital and social media outreach",
    ],
  },
  {
    slug: "jan-samwad",
    title: "Jan Samwad Karya Vibhag",
    titleHi: "जन संवाद कार्यविभाग",
    summary: "Public dialogue and knowledge exchange on environmental issues.",
    tagline: "Conversations that change the world.",
    intro:
      "The Jan Samwad (Public Dialogue) Karyavibhag facilitates conversations between experts, policy-makers, and citizens on environmental issues. Through conclaves, seminars, webinars, and community dialogues, this division creates platforms for knowledge exchange and collective problem-solving.",
    objectives: [
      "Organise conclaves and seminars on environmental themes.",
      "Create platforms for dialogue between experts and citizens.",
      "Document and disseminate environmental knowledge and best practices.",
    ],
    focusAreas: [
      "Conclaves and conferences",
      "Webinars and online dialogues",
      "Expert panels and seminars",
      "Knowledge documentation",
    ],
  },
  {
    slug: "yuvashakti",
    title: "Yuvashakti Karya Vibhag",
    titleHi: "युवाशक्ति कार्यविभाग",
    summary: "Mobilising youth as the driving force of environmental change.",
    tagline: "Youth power for a green future.",
    intro:
      "The Yuvashakti (Youth Power) Karyavibhag channels the energy and idealism of India's young people into concrete environmental action. Through competitions, parliaments, cycle yatras, and campus programmes, this division builds the next generation of environmental leaders.",
    objectives: [
      "Engage youth through competitions, events, and volunteer programmes.",
      "Build environmental leadership skills among young people.",
      "Create youth-led environmental initiatives across India.",
    ],
    focusAreas: [
      "Student competitions (Paryavaran Pratiyogita)",
      "Youth Parliament",
      "Campus volunteer programmes",
      "Cycle Yatra and awareness drives",
    ],
  },
];

/* ── Events ────────────────────────────────────────────────────────── */

export type EventEntry = Entry & {
  date: string;
  year: number;
  images?: string[];
};

export const events: EventEntry[] = [
  // 2019
  { slug: "formal-declaration-gwalior", title: "Formal Declaration — Gwalior", titleHi: "गतिविधि की विधिवत घोषणा", date: "10 March 2019", year: 2019, images: ["/images/events/formal-declaration-gwalior/01.png"], summary: "Paryavaran Sanrakshan Gatividhi formally declared in Gwalior.", intro: "On 10 March 2019, Paryavaran Sanrakshan Gatividhi was formally declared in Gwalior, marking the official beginning of the all-India environmental movement. This followed years of groundwork since 2008 (Paryavaran Bharti Bihar) and ideation since October 2015 when Ma. Suhasrao Hiremath ji laid the environmental thought." },
  { slug: "chintan-baithak-delhi-2019", title: "Chintan Baithak — Delhi", titleHi: "चिंतन बैठक — दिल्ली", date: "29 June 2019", year: 2019, summary: "Strategic planning meeting in Delhi.", intro: "A Chintan Baithak (brainstorming session) was held in Delhi to plan the movement's strategy and roadmap after its formal declaration in Gwalior." },
  { slug: "pushkar-vichar-manthan", title: "Pushkar Vichar Manthan", titleHi: "पुष्करजी में विचार मंथन बैठक", date: "1 September 2019", year: 2019, summary: "Three-day brainstorming retreat in Pushkar.", intro: "A three-day vichar manthan (brainstorming) retreat was held at Pushkar from 1-3 September 2019, bringing together key organisers to shape the movement's programmes and organisational structure." },

  // 2020
  { slug: "world-earth-day-poster", title: "World Earth Day eCompetition", titleHi: "विश्व पृथ्वी दिवस प्रतियोगिता", date: "22 April 2020", year: 2020, images: ["/images/events/world-earth-day-poster/01.png", "/images/events/world-earth-day-poster/02.png", "/images/events/world-earth-day-poster/03.png", "/images/events/world-earth-day-poster/04.png"], summary: "Nationwide eCompetition with 15,367 entries from 506 districts.", intro: "On World Earth Day 2020, PSG launched a nationwide digital competition (#all4earth) with categories including Eco-Bricks, Drawing for Kids, Poster Making for Youth, and Tulasi Gamala Decoration for Women. The response was massive: 15,367 entries from 506 districts across 44 RSS Prants, with 61% female participation. Top districts: Mainpuri UP (861), Aligarh UP (525), Mansa Punjab (525)." },
  { slug: "prakruti-vandana", title: "Prakruti Vandana", titleHi: "प्रकृति वंदन", date: "30 August 2020", year: 2020, images: ["/images/events/prakruti-vandana/01.png"], summary: "Pan-India nature worship with 11 lakh registrations and 3 crore Twitter reach.", intro: "Prakruti Vandana (Nature Worship) was a synchronised ceremony held across India in joint efforts with HSSF (Hindu Spiritual and Service Foundation). A special message by Dr. Mohan Bhagat, Sarsanghchalak, RSS, was delivered. The event achieved 11,00,000 registrations (HSSF + PSG combined) and a Twitter reach of 3,00,00,000." },
  { slug: "media-samvad-conclave", title: "Media Samvad Conclave", date: "9 December 2020", year: 2020, summary: "Conversations with media on environmental coverage.", intro: "A conclave bringing together journalists, editors and environmental activists to discuss how Indian media can better cover environmental issues and inspire public action." },
  { slug: "vice-chancellors-conclave", title: "Vice Chancellors' Conclave", date: "2020", year: 2020, summary: "University leaders aligning on campus sustainability.", intro: "Vice Chancellors from universities across India convened to align on campus-level sustainability — from green audits and plantation drives to integrating environmental education into curricula." },
  { slug: "paryavaran-prahari", title: "Paryavaran Prahari", titleHi: "पर्यावरण प्रहरी", date: "2020", year: 2020, images: ["/images/events/paryavaran-prahari/01.png"], summary: "3.5 lakh registrations in 12 months for environmental sentinel programme.", intro: "The Paryavaran Prahari (Environmental Sentinel) programme trained and recognised individuals making outstanding contributions to environmental protection. Built on four pillars: Training (online programs), Sankalp Portal (registration), Gamification (courses, tasks, points), and Social Media (awareness). Achieved 3,50,000 registrations in just 12 months." },

  // 2021
  { slug: "paryavaran-pratiyogita", title: "Paryavaran Pratiyogita", titleHi: "पर्यावरण प्रतियोगिता", date: "2021", year: 2021, summary: "National student competition — 6,000+ schools, 1,80,000 students.", intro: "The first National Student Paryavaran Pratiyogita engaged 6,000+ schools and 1,80,000 students in environmental competitions. This was the beginning of what would become one of PSG's flagship programmes, growing to 1,25,537 institutes and 15,47,901 students across 118 countries by 2025." },
  { slug: "jal-samwad", title: "Jal Samwad", date: "17 July 2021", year: 2021, summary: "A national dialogue on water conservation.", intro: "Jal Samwad (Water Dialogue) was a national-level conversation bringing together water experts, policy-makers and grassroots workers to discuss strategies for water conservation and management across India." },
  { slug: "online-conclave", title: "Online Conclave", date: "2021", year: 2021, summary: "Virtual conclave during pandemic times.", intro: "A virtual conclave held during the pandemic, connecting environmental volunteers from across the country to share learnings, coordinate programmes, and plan post-pandemic green recovery initiatives." },
  { slug: "eco-bricks", title: "Eco Bricks Campaign", titleHi: "इकोब्रिक्स", date: "2021", year: 2021, images: ["/images/events/eco-bricks/01.png"], summary: "1,000+ workshops teaching communities to convert plastic waste into building bricks.", intro: "The Eco Bricks campaign taught communities to stuff non-recyclable plastic waste into PET bottles, creating dense building blocks for construction. PSG ran expert videos on Facebook, Twitter trending campaigns, \"Do you know?\" awareness programs, and professional slides for NGOs and educational institutions. Over 1,000 online workshops were conducted. The campaign's message: polythene waste occupying 100 sq ft of land can be stuffed into one 1-litre eco brick." },
  { slug: "plastic-mukt-bharat", title: "Plastic Mukt Bharat", date: "2021", year: 2021, summary: "Pushing for a plastic-free India.", intro: "Plastic Mukt Bharat (Plastic-Free India) was a mass awareness campaign calling for the elimination of single-use plastics, with local drives collecting and responsibly disposing of plastic waste across cities and towns." },
  { slug: "haridwar-kumbh", title: "Haridwar Kumbh", titleHi: "कुंभमेला — हरिद्वार 2021", date: "2021", year: 2021, images: ["/images/events/haridwar-kumbh/01.png"], summary: "Paryavaran Yukt Kumbh — Polythene Mukt Kumbh at the world's largest gathering.", intro: "At the 2021 Haridwar Kumbh Mela, PSG ran a three-layered environmental campaign: (1) Kumbh mein Kumbh — polythene-free zones, public awareness, Paryavaran Prahari volunteers; (2) Ghar Ghar mein Kumbh — cloth bags and eco bricks in every home; (3) Samaj mein Kumbh — webinars at district level, awareness among local saints and Kumbh pilgrims." },

  // 2022
  { slug: "youth-parliament-2022", title: "National Environment Youth Parliament", titleHi: "राष्ट्रीय पर्यावरण युवा संसद", date: "2022", year: 2022, images: ["/images/events/youth-parliament-2022/01.png"], summary: "180+ universities, 50,000 students, 150 represented in Parliament.", intro: "The National Environment Youth Parliament 2022 engaged 180+ universities and 50,000 students at the zero level. 3,362 students advanced to Level One, and 150 represented in the actual Parliament. Organised with PRIDE (Parliamentary Research and Training Institute for Democracies) and Manav Rachna International Institute. The event featured the Paryavaran Chetna: Environment & Sustainability theme." },
  { slug: "coastal-cleanup-2022", title: "World Largest Coastal Cleanup", titleHi: "स्वच्छ सागर, सुरक्षित सागर अभियान", date: "17 September 2022", year: 2022, images: ["/images/events/coastal-cleanup-2022/01.png", "/images/events/coastal-cleanup-2022/02.png", "/images/events/coastal-cleanup-2022/03.png", "/images/events/coastal-cleanup-2022/04.png", "/images/events/coastal-cleanup-2022/05.png", "/images/events/coastal-cleanup-2022/06.png"], summary: "836 beaches, 1,37,396 volunteers, 738 tons of waste collected.", intro: "The Swachh Sagar Surakshit Sagar (Clean Sea Safe Sea) campaign on International Coastal Cleanup Day was one of the world's largest coastal cleanup drives. PSG coordinated across 836 beach locations with 10,570 organisations and 1,37,396 volunteers, collecting 7,38,354 KG (738 tons) of waste. States covered: Kerala, Tamil Nadu, Andhra Pradesh, West Bengal, Saurashtra, Gujarat, Maharashtra & Goa, Karnataka, Andaman & Nicobar, and Orissa." },
  { slug: "cycle-yatra", title: "Cycle Yatra", titleHi: "सायकल यात्रा", date: "2022", year: 2022, summary: "Environmental awareness cycling drive with 2,41,773 participants.", intro: "The Cycle Yatra was a nationwide cycling drive promoting environmental awareness and sustainable transportation. With 2,41,773 participants across India, it became one of PSG's most participated events, combining fitness with environmental consciousness." },

  // 2024
  { slug: "eno-harit-samvad-chandigarh", title: "ENO Harit Samvad — Chandigarh", titleHi: "ENO हरित संवाद", date: "20 September 2024", year: 2024, images: ["/images/events/eno-harit-samvad-chandigarh/01.png"], summary: "2nd National ENO Conference at Punjab University — 250 attendees, 80 universities.", intro: "The 2nd National ENO Conference on Indian Knowledge System for Environmental Sustainability, Climate Action, and Eco-Human Health was held at Punjab University, Chandigarh on 20-21 September 2024. Co-organised with NITTTR (National Institute of Technical Teachers Training and Research). 250 attendees from 80 universities discussed traditional knowledge systems, environmental education, pollution control, and climate adaptation." },
  { slug: "kulpati-harit-samvad-surat", title: "Kulpati Harit Samvad — Surat", titleHi: "कुलपति हरित संवाद — सूरत", date: "17 October 2024", year: 2024, images: ["/images/events/kulpati-harit-samvad-surat/01.png"], summary: "56 Vice Chancellors and IIT/NIT Directors convened in Surat.", intro: "On 17 October 2024, PSG organised the Kulpati Harit Samvad in Surat, Gujarat, bringing together 56 Vice Chancellors and Directors from universities, IITs, and NITs across India. The event was held jointly with Bhagwan Mahavir University during Jain Chaturmas 2024, in the presence of Acharya Mahashraman ji Maharaj and Sarsanghchalak Shri Mohan Bhagwat ji. Representatives from all education sectors participated." },
  { slug: "harit-architect-bhopal", title: "HARIT Architect Conference — Bhopal", titleHi: "हरित भवन निर्माण व वास्तु कला विद्वत् — भोपाल", date: "7 November 2024", year: 2024, summary: "National congress on sustainable architecture and indigenous building traditions.", intro: "The HARIT (Holistic Action for Rejuvenating Indigenous Traditions) Architect Conference was held on 7-8 November 2024 at Bhavan Yojana and Vastukala Vidyalaya, Bhopal. A two-day national congress on sustainable architecture, promoting environment-friendly construction based on Indian traditions. Senior RSS Pracharak Shri Manmohan ji Vaidya spoke about balancing materialism and spirituality for environmental responsibility." },
  { slug: "green-prison-chhattisgarh", title: "Green Prison — Chhattisgarh", titleHi: "हरित कारागार — छत्तीसगढ़", date: "30 October 2024", year: 2024, images: ["/images/events/green-prison-chhattisgarh/01.png"], summary: "Central Jail Bilaspur transforms into green prison — saves 1.15 lakh litres of water daily.", intro: "Central Jail Bilaspur, Chhattisgarh launched the 'Harit Jail' (Green Prison) campaign on 30 October 2024. Initiatives include 4,000 eco bricks, biogas from waste, vermi composting, tree planting, and bio-enzyme production by prisoners. Solar energy and rainwater harvesting were implemented. Daily water usage dropped from 4,25,000 litres to 3,10,000 litres — saving 1,15,000 litres per day. 32 water recharge structures were built." },

  // 2025
  { slug: "ngo-harit-samvad-2025", title: "NGO Harit Samvad — Delhi", titleHi: "स्वयंसेवी संस्था — हरित संवाद कार्यक्रम", date: "17 January 2025", year: 2025, images: ["/images/events/ngo-harit-samvad-2025/01.jpg"], summary: "44 reputed NGOs convened for environmental dialogue.", intro: "PSG invited 44 of India's most reputed NGOs to present their work at the NGO Harit Samvad in Delhi on 17 January 2025. Held at Khatu Shyam Dham, Delhi, the event was concluded by Sahsarkaryavah Shri Krishnagopal ji with an inspiring address on the role of civil society in environmental protection." },
  { slug: "mahakumbh-ek-thali-ek-thaila", title: "Mahakumbh — Ek Thali Ek Thaila", titleHi: "प्रयागराज महाकुंभ 2025 — एक थाली एक थैला अभियान", date: "January 2025", year: 2025, images: ["/images/events/mahakumbh-ek-thali-ek-thaila/01.jpg", "/images/events/mahakumbh-ek-thali-ek-thaila/02.jpg", "/images/events/mahakumbh-ek-thali-ek-thaila/03.jpg", "/images/events/mahakumbh-ek-thali-ek-thaila/04.jpg"], summary: "14 lakh steel plates, 13 lakh cloth bags collected at Prayagraj Mahakumbh.", intro: "At the Prayagraj Mahakumbh 2025, PSG ran the 'Ek Thali Ek Thaila' (One Plate One Bag) campaign — collecting and distributing reusable alternatives to disposable items. Results: 14,17,064 steel plates, 13,46,128 cloth bags, 2,63,678 steel glasses collected across 7,258 collection points with 2,241 participating organisations. Impact: 80-85% reduction in disposable items, ~29,000 tons waste reduction, Rs 3.5 crore daily savings (Rs 140 crore over 40 days), and 70% reduction in food waste." },
  { slug: "bimstec-sewocon-2025", title: "BIMSTEC SEWOCON 2025", titleHi: "BIMSTEC SEWOCON 2025 में सहभागिता", date: "2025", year: 2025, images: ["/images/events/bimstec-sewocon-2025/01.png"], summary: "PSG represented India at international BIMSTEC youth climate conference.", intro: "At the BIMSTEC SEWOCON 2025 international conference at Vishwa Yuvak Kendra, Delhi, a 9-member PSG team represented India among 7 countries discussing youth roles in climate change. PSG presented its environmental campaigns and future plans including: 20,000 trained students (SIP), 10,00,000 students via NSPC Pratiyogita, 50,000 partner institutions, 11,00,000 trees planted, and international presence in 25 countries." },
  { slug: "world-wetland-day-conference", title: "World Wetland Day Conference", titleHi: "वर्ल्ड वेट लैंड डे संगोष्ठी", date: "2 February 2025", year: 2025, images: ["/images/events/world-wetland-day-conference/01.png"], summary: "Conference on wetland conservation with MOEF & CC.", intro: "The World Wetland Day Conference was held with the theme 'Wetlands Action for People and Nature'. Dr M Ramesh, Scientist E, MOEF & CC, Government of India was the keynote speaker. Jal Upkram Pramukh and Sah Pramukh of all Prants and Central Team Members of CPSG participated." },
];

/* ── Stories ────────────────────────────────────────────────────────── */

export type StoryEntry = Entry & {
  type: "impact" | "dispatch" | "photo-essay";
  location?: string;
  topics?: string[];
  images?: string[];
};

export const stories: StoryEntry[] = [
  {
    slug: "godavari-bioremediation",
    title: "Bio-remediation of Godavari River",
    summary: "Restoring river ecology through bio-enzyme application in Nanded.",
    type: "impact",
    location: "Nanded, Maharashtra",
    topics: ["save-water"],
    intro: "In a landmark initiative, Paryavaran Sanrakshan volunteers collaborated with local authorities to apply bio-enzymes to a stretch of the Godavari River in Nanded, Maharashtra. The treatment targeted organic pollutants and significantly improved water quality within weeks, demonstrating that community-led bio-remediation can revive even severely polluted river stretches.",
  },
  {
    slug: "prayagraj-tree-worship",
    title: "Prayagraj Tree Worship",
    summary: "Volunteers worshipped amla trees and pledged environmental protection.",
    type: "dispatch",
    location: "Prayagraj, Uttar Pradesh",
    topics: ["plantation"],
    intro: "In the Prayagraj division, volunteers from Paryavaran Sanrakshan gathered to worship amla (Indian gooseberry) trees — reaffirming the traditional bond between communities and the natural world. Participants pledged to protect trees in their neighbourhoods and plant new saplings in the coming season.",
  },
  {
    slug: "gurugram-zero-waste-kirtan",
    title: "Gurugram Zero-Waste Nagar Kirtan",
    summary: "A plastic-free religious procession with plogging activity.",
    type: "dispatch",
    location: "Gurugram, Haryana",
    topics: ["polythene-free"],
    intro: "Setting a new benchmark for eco-friendly religious events, the Gurugram chapter organised a zero-waste Nagar Kirtan Yatra. Volunteers distributed cloth bags to devotees, replaced plastic plates with biodegradable alternatives, and ran a plogging drive along the procession route — collecting and segregating waste as they walked.",
  },
  {
    slug: "sirsa-sapling-distribution",
    title: "Sirsa Sapling Distribution",
    summary: "A doctor distributed 86 flower varieties in Sirsa, Haryana.",
    type: "dispatch",
    location: "Sirsa, Haryana",
    topics: ["plantation"],
    intro: "Dr. Rajesh, a local physician and Paryavaran Sanrakshan volunteer in Sirsa district, distributed free flower saplings of 86 different varieties to residents. The drive turned homes and public spaces into blooming gardens, proving that environmental action and beauty go hand in hand.",
  },
  {
    slug: "gujarat-ecobricks-world-record",
    title: "Gujarat EcoBricks — World Record Nomination",
    titleHi: "गुजराथ इकोब्रिक्स",
    summary: "200 schools, 52,000 students, 3 lakh eco bricks — nominated for World Wide Book of Records.",
    type: "impact",
    location: "Kapadvanj, Gujarat",
    topics: ["polythene-free"],
    intro: "After attending PSG's training, Dr. Mineshbhai Prajapati (Principal, Gadiyara Primary School, Kapadvanj) took a pledge and launched an eco-bricks campaign that spread to 200 schools, engaging 52,000 students who made 3 lakh eco bricks — earning a nomination for the World Wide Book of Records. The success led to scaling up: 1,000 schools and a target of 10 lakh eco bricks. Gujarat's Chief Minister sent a personal appreciation letter.",
  },
  {
    slug: "polythene-mukt-mohgaon",
    title: "Polythene Mukt Village — Mohgaon",
    titleHi: "पॉलिथीन मुक्त गाँव करेंगे",
    summary: "All 950 residents of Mohgaon pledged to go polythene-free.",
    type: "impact",
    location: "Mohgaon, Dhule, Maharashtra",
    topics: ["polythene-free"],
    images: ["/images/stories/polythene-mukt-mohgaon/01.png"],
    intro: "The Mohgaon Gram Vikas Samiti, guided by the Jila Gram Vikas committee, led all 950 residents of Mohgaon village (Tehsil Sakri, District Dhule) to pledge their village polythene-free. No polythene enters the village. If anyone accidentally brings a plastic bottle, it is collected at the village crossroads and converted into eco bricks or recycled. Covered by the Deshdoot newspaper.",
  },
  {
    slug: "smriti-vriksha-kerala",
    title: "Smriti Vriksha Karyakram — Kerala",
    titleHi: "स्मृति वृक्ष कार्यक्रम",
    summary: "Daily tree planting for 130+ days in memory of a fallen CRPF commando.",
    type: "impact",
    location: "Thiruvananthapuram, Kerala",
    topics: ["plantation"],
    intro: "CRPF Commando Shri Vishnu, a Sangh volunteer from Nedumangad (Thiruvananthapuram), was killed in a Maoist attack. In his memory, volunteers planted one tree daily at every location in the district — continuing for over 130 days. MLAs, army officers, social leaders, and students from schools, colleges, temples, government offices, and other institutions all joined regularly.",
  },
  {
    slug: "sabarimala-green-polythene-free",
    title: "Sabarimala Green & Polythene Free",
    titleHi: "सबरीमाला को हरा-भरा और पॉलीथीन मुक्त",
    summary: "Making the Sabarimala pilgrimage green and polythene-free.",
    type: "impact",
    location: "Kerala",
    topics: ["polythene-free", "plantation"],
    intro: "PSG Kerala's initiative to make the sacred Sabarimala pilgrimage green and polythene-free — protecting Lord Ayyappa's holy garden and surrounding forests. The initiative ensured that one of India's busiest pilgrimage routes left minimal environmental footprint.",
  },
  {
    slug: "north-assam-polythene-free",
    title: "North Assam Polythene-Free Village",
    titleHi: "उत्तर असम",
    summary: "Gram Nigamghola running polythene-free and tree planting for 2-3 years.",
    type: "dispatch",
    location: "Bongaigaon, Assam",
    topics: ["polythene-free", "plantation"],
    intro: "Gram Nigamghola in Majhgaon, Bongaigaon district has been running polythene-free and tree planting campaigns for 2-3 years. All villagers participate in road cleaning, with bamboo dustbins placed along roads and at village borders. The villagers also celebrated World Environment Day on 5 June at Bongaigaon Science College.",
  },
];
