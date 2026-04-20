import type { Metadata } from "next";
import Link from "next/link";
import {
  WarliTree,
  WarliWater,
  WarliHouse,
  WarliTemple,
  WarliWoman,
  WarliHandshake,
  WarliSchool,
  WarliYouth,
  MadhubaniHero,
  KolamDivider,
  KolamCorner,
} from "@/components/illustrations";

export const metadata: Metadata = {
  title: "रचना और शिल्प · Design & Craft",
  description:
    "यह वेबसाइट कैसे बनी — लोक-कला परंपराएँ, प्राकृतिक रंग, अक्षर विन्यास और तकनीकी आधार।",
};

const swatches = [
  { name: "Cream", role: "पृष्ठभूमि", hex: "#FAF3E3", className: "bg-cream border-ink/20" },
  { name: "Ink", role: "पाठ · रेखाकृति", hex: "#1A1A1A", className: "bg-ink text-cream" },
  { name: "Vana", role: "वन हरित — मुख्य", hex: "#3E6B4A", className: "bg-vana text-cream" },
  { name: "Indigo", role: "गहरा नील — फ़ुटर", hex: "#2E4057", className: "bg-indigo text-cream" },
  { name: "Haldi", role: "हल्दी — CTA", hex: "#E8B923", className: "bg-haldi text-ink" },
  { name: "Terracotta", role: "टेराकोटा — संकेत", hex: "#B8442F", className: "bg-terracotta text-cream" },
  { name: "Muted", role: "द्वितीयक पाठ", hex: "#8C7B63", className: "bg-muted text-cream" },
];

const typefaces = [
  {
    name: "Yatra One",
    role: "शीर्षक के लिए",
    sample: "धरती माता — हमारा घर।",
    className: "font-display font-devanagari text-3xl md:text-4xl",
    designer: "Catharsis Fonts · Google Fonts",
  },
  {
    name: "Tiro Devanagari Hindi",
    role: "संस्कृत मंत्र व हिन्दी पाठ",
    sample: "|| माता भूमि: पुत्रों अहम् पृथिव्या: ||",
    className: "font-devanagari text-2xl md:text-3xl",
    designer: "Indian Type Foundry · Google Fonts",
  },
  {
    name: "IBM Plex Sans",
    role: "सामान्य पाठ — अनुच्छेद व UI",
    sample: "कोड, रंग और शिल्प का एक हथकरघा।",
    className: "font-devanagari text-lg md:text-xl",
    designer: "Bold Monday for IBM · Google Fonts",
  },
];

const ecoPrinciples = [
  {
    title: "स्थिर HTML",
    body: "हर पृष्ठ पहले से तैयार है। कोई database पृष्ठभूमि में नहीं चलता, कोई सर्वर हर अनुरोध पर गणना नहीं करता — बिजली की खपत न्यूनतम।",
  },
  {
    title: "शून्य निगरानी",
    body: "कोई Google Analytics नहीं, कोई tracking pixel नहीं, कोई तीसरे-पक्ष की स्क्रिप्ट नहीं। हम नहीं गिनते कि कौन आया, कब आया, कहाँ से आया।",
  },
  {
    title: "कोई निगरानी-cookie नहीं",
    body: "कोई विज्ञापन नेटवर्क नहीं, कोई बिक्री-प्रोफ़ाइल नहीं। आपकी यात्रा आपकी अपनी है।",
  },
  {
    title: "कम कार्बन पदचिह्न",
    body: "एक पृष्ठ-दृश्य का ऊर्जा-व्यय लगभग उतना ही है जितना एक छोटा email खोलने का। तेज़ लोड = कम data = कम बिजली।",
  },
];

export default function DesignPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-24" lang="hi">
      {/* Breadcrumb */}
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
        <Link href="/about" className="hover:underline">About</Link> / रचना और शिल्प
      </p>
      <h1 className="font-devanagari text-4xl md:text-5xl">रचना और शिल्प</h1>
      <p className="mt-4 max-w-2xl font-devanagari text-lg text-ink/75">
        यह वेबसाइट कैसी दिखती है, कैसा अनुभव देती है, और कैसे बनी — और क्यों
        हर निर्णय अंततः अभियान की भारत-दृष्टि तक पहुँचता है।
      </p>

      {/* Opening */}
      <section className="mt-12 rounded-3xl border border-haldi/40 bg-haldi/5 p-7 md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
          हमारी दृश्य-भाषा
        </p>
        <h2 className="mt-2 font-devanagari text-2xl md:text-3xl">
          वह वेबसाइट जो अपनी जड़ों को नहीं भूलती
        </h2>
        <p className="mt-4 font-devanagari text-base leading-relaxed text-ink/85 md:text-lg">
          पर्यावरण संरक्षण गतिविधि का आधार भारत की मिट्टी में है — और उसकी
          वेबसाइट भी वहीं से उठती है। तीन लोक-कला परंपराएँ, हथकरघे से
          प्रेरित रंग-पटल, और ऐसे अक्षर जो देवनागरी और लैटिन दोनों को समान
          गर्व से धारण करें — इन्हीं से यह साइट सचेत रूप से रची गई है।
          बिश्नोई के वनों की स्मृति, मिथिला के आँगनों की चित्रकारी, तमिल
          घरों की भोर की देहलीज़ — इनकी छाप हर कोने में है। ताकि साइट की
          भावना, कार्य की भावना से मेल खाए।
        </p>
      </section>

      {/* Folk art heading */}
      <h2 className="mt-20 font-devanagari text-3xl">तीन लोक-कला परंपराएँ</h2>
      <p className="mt-3 font-devanagari text-lg text-ink/75">
        इस साइट की हर चित्रकारी हाथ से बनाई गई SVG है — कोई स्टॉक नहीं, कोई
        AI छवि नहीं। तीन परंपराएँ, हर एक अपने साथ कुछ विशेष लेकर आती है।
      </p>

      {/* Warli */}
      <section className="mt-10 rounded-3xl border border-ink/10 bg-white/60 p-7 md:p-9 dark:bg-white/5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
          वार्ली · महाराष्ट्र
        </p>
        <h3 className="mt-2 font-devanagari text-2xl">
          दैनिक जीवन की एकरंगी रेखाएँ
        </h3>
        <p className="mt-3 font-devanagari text-base leading-relaxed text-ink/85">
          सह्याद्रि की पहाड़ियों के वार्ली लोग सहस्राब्दियों से मिट्टी की
          दीवारों पर चावल के लेप से चित्रकारी करते आए हैं। दो त्रिकोण शिखर पर
          मिलते हैं — और एक मनुष्य बन जाता है। एक वृत्त — और वह नृत्य हो
          जाता है। हम इसी व्याकरण का उपयोग हर कार्यक्रम, कार्यविभाग और
          गतिविधि के चिह्न में करते हैं। क्योंकि &lsquo;अपनी प्रकृति की
          रक्षा करता हुआ समुदाय&rsquo; — यह एक नीति बनने से बहुत पहले एक
          वार्ली विचार है।
        </p>
        <div className="mt-8 grid grid-cols-4 gap-4 text-ink sm:grid-cols-8">
          {[
            { C: WarliTree, label: "वृक्ष" },
            { C: WarliWater, label: "जल" },
            { C: WarliHouse, label: "घर" },
            { C: WarliTemple, label: "मंदिर" },
            { C: WarliWoman, label: "नारी शक्ति" },
            { C: WarliHandshake, label: "समन्वय" },
            { C: WarliSchool, label: "विद्यालय" },
            { C: WarliYouth, label: "युवा" },
          ].map(({ C, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <C className="h-16 w-16" />
              <span className="font-devanagari text-[11px] tracking-wide text-muted">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Madhubani */}
      <section className="mt-8 rounded-3xl border border-ink/10 bg-white/60 p-7 md:p-9 dark:bg-white/5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
          मधुबनी · मिथिला, बिहार
        </p>
        <h3 className="mt-2 font-devanagari text-2xl">कल्पवृक्ष — जीवन-वृक्ष</h3>
        <p className="mt-3 font-devanagari text-base leading-relaxed text-ink/85">
          मिथिला की स्त्रियाँ विवाह की दीवारों पर पीढ़ियों से कल्पवृक्ष
          चित्रित करती आई हैं — वह पेड़ जो माँगी हुई हर वस्तु देता है।
          हमारे मुखपृष्ठ का हीरो एक मधुबनी कल्पवृक्ष है; स्क्रॉल करते ही
          उसकी शाखाएँ एक-एक करके रेखांकित होती जाती हैं। यह प्रभाव
          हस्तनिर्मित कागज़ पर स्याही के फैलने जैसा महसूस हो — ऐसा चाहा गया
          है। किसी UI ट्रांज़िशन जैसा नहीं।
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-ink/10 bg-cream/50 p-4 dark:bg-white/5">
          <div className="mx-auto max-w-md text-ink">
            <MadhubaniHero className="h-auto w-full" />
          </div>
        </div>
      </section>

      {/* Kolam */}
      <section className="mt-8 rounded-3xl border border-ink/10 bg-white/60 p-7 md:p-9 dark:bg-white/5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
          कोलम · तमिलनाडु
        </p>
        <h3 className="mt-2 font-devanagari text-2xl">देहलीज़ की रंगोली</h3>
        <p className="mt-3 font-devanagari text-base leading-relaxed text-ink/85">
          कोलम — तमिल घरों के सामने भोर के समय चावल के आटे से खींचा जाने
          वाला पैटर्न। ताकि चींटियाँ, चिड़ियाँ और आने वाला दिन — सबको आरंभ
          करने के लिए कुछ मिले। यह अनुष्ठान है, यह ज्यामिति है, यह स्वागत
          है — तीनों एक साथ। हम कोलम को खंड-विभाजक और कार्डों के कोनों की
          सज्जा के रूप में उपयोग करते हैं। एक मौन स्वीकृति — कि यह साइट भी
          एक देहलीज़ ही है।
        </p>
        <div className="mt-8 space-y-6">
          <div className="overflow-hidden rounded-2xl bg-indigo p-6 text-haldi">
            <KolamDivider className="mx-auto h-14 w-full" />
            <p className="mt-3 text-center font-devanagari text-xs tracking-wide text-cream/60">
              फ़ुटर का विभाजक
            </p>
          </div>
          <div className="flex items-center justify-center gap-8 rounded-2xl border border-ink/10 bg-cream/50 p-8 text-vana dark:bg-white/5">
            {[0, 1, 2].map((i) => (
              <KolamCorner key={i} className="h-16 w-16" />
            ))}
          </div>
        </div>
      </section>

      {/* Palette */}
      <h2 className="mt-20 font-devanagari text-3xl">रंग-पटल</h2>
      <p className="mt-3 font-devanagari text-lg text-ink/75">
        सात रंग — प्राकृतिक रंजकों और हथकरघा परंपरा से लिए गए। हर रंग अपनी
        जगह कमाकर बैठा है, हर एक का एक अर्थ है।
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {swatches.map((s) => (
          <div
            key={s.name}
            className={`flex items-center justify-between rounded-2xl p-5 ${s.className}`}
          >
            <div>
              <p className="text-base font-semibold">{s.name}</p>
              <p className="font-devanagari text-xs opacity-80">{s.role}</p>
            </div>
            <code className="rounded-md bg-black/20 px-2 py-1 font-mono text-xs">
              {s.hex}
            </code>
          </div>
        ))}
      </div>
      <p className="mt-6 font-devanagari text-sm text-muted">
        <strong>शाम-दीप</strong> (evening-lamp) dark mode में रंग-पटल केवल
        उलटा नहीं होता — वह ऐसे पुनः-सुर में बंधता है मानो कमरा एक पीतल के
        दीपक से जगमगा रहा हो। हल्दी गर्म रहती है, वन एक मद्धम जंगल बन जाता
        है, क्रीम धीरे से स्याही में विलीन हो जाती है।
      </p>

      {/* Typography */}
      <h2 className="mt-20 font-devanagari text-3xl">अक्षर विन्यास</h2>
      <p className="mt-3 font-devanagari text-lg text-ink/75">
        तीन टाइपफ़ेस — ऐसे चुने गए कि देवनागरी और लैटिन साथ-साथ बैठें, और
        किसी एक को द्वितीय-विचार न लगे।
      </p>
      <div className="mt-8 space-y-6">
        {typefaces.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl border border-ink/10 bg-white/60 p-6 md:p-8 dark:bg-white/5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-devanagari text-xs font-semibold tracking-wide text-terracotta">
                {t.role}
              </p>
              <p className="text-xs text-muted">{t.designer}</p>
            </div>
            <p className={`mt-4 ${t.className}`}>{t.sample}</p>
            <p className="mt-3 text-sm text-muted">{t.name}</p>
          </div>
        ))}
      </div>

      {/* Motion */}
      <h2 className="mt-20 font-devanagari text-3xl">गति</h2>
      <div className="mt-6 space-y-4 font-devanagari text-lg leading-relaxed text-ink/85">
        <p>
          एनिमेशन जानबूझकर धीमे और जैविक हैं — मोडल के सरकने से अधिक, स्याही
          के फैलने के निकट। मधुबनी वृक्ष की शाखाएँ स्क्रॉल पर रेखांकित होती
          हैं; कार्ड हल्के से ऊपर उठते हैं; theme toggle सूर्य और चंद्र के
          बीच धीरे से फीका होता है।
        </p>
        <p>
          हर गति{" "}
          <code className="rounded bg-ink/10 px-2 py-0.5 font-mono text-sm">
            prefers-reduced-motion
          </code>{" "}
          का सम्मान करती है। यदि आपने अपने यंत्र से शांति माँगी है — तो साइट
          सुनती है।
        </p>
      </div>

      {/* Energy + privacy — the heart of the page */}
      <section className="mt-20 rounded-3xl border border-vana/30 bg-vana/5 p-7 md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
          हल्की साइट, हल्का पदचिह्न
        </p>
        <h2 className="mt-2 font-devanagari text-3xl md:text-4xl">
          पर्यावरण की वेबसाइट, पर्यावरण के अनुकूल
        </h2>
        <p className="mt-4 font-devanagari text-base leading-relaxed text-ink/85 md:text-lg">
          जो अभियान प्रकृति की रक्षा के लिए खड़ा है, उसकी वेबसाइट को भी
          हल्के पाँव चलना चाहिए। इसलिए यह साइट जानबूझकर छोटी, स्थिर और शांत
          है — बिना database, बिना निगरानी, बिना विज्ञापन।
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {ecoPrinciples.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-vana/20 bg-white/60 p-5 dark:bg-white/5"
            >
              <p className="font-devanagari text-base font-semibold text-vana-dark">
                {p.title}
              </p>
              <p className="mt-2 font-devanagari text-sm leading-relaxed text-ink/80">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 font-devanagari text-sm italic text-ink/75">
          यह साइट आपकी गोपनीयता और हमारे ग्रह — दोनों का आदर करती है।
        </p>
      </section>

      {/* Accessibility */}
      <h2 className="mt-20 font-devanagari text-3xl">सुगम्यता</h2>
      <p className="mt-6 font-devanagari text-lg leading-relaxed text-ink/85">
        Semantic HTML, दिखाई देने वाले focus rings, दोनों प्रकाश-मोडों में
        जाँचा गया contrast, हर interactive तत्व पर keyboard navigation —
        और GTranslate विजेट के माध्यम से एक क्लिक में हिन्दी, गुजराती,
        मराठी, तमिल, तेलुगु, कन्नड़, बांग्ला, पंजाबी, उड़िया, मलयालम,
        असमी — या GTranslate द्वारा समर्थित 100+ भाषाओं में अनुवाद।
      </p>

      {/* Credits */}
      <h2 className="mt-20 font-devanagari text-3xl">आभार</h2>
      <div className="mt-6 space-y-4 font-devanagari text-lg leading-relaxed text-ink/85">
        <p>
          वार्ली, मिथिला और तमिल समुदायों के प्रति कृतज्ञता — जिनकी जीवित
          परंपराएँ यह साइट आदरपूर्वक उधार लेती है। इस आशा के साथ कि डिजिटल
          स्थान इन कला-रूपों को चपटा करने के बजाय आगे ले जाने में सहायक बन
          सकते हैं।
        </p>
        <p>
          संस्कृत आवाहन{" "}
          <span lang="sa" className="font-devanagari">
            माता भूमि: पुत्रों अहम् पृथिव्या:
          </span>{" "}
          — <em>&ldquo;धरती मेरी माँ है, मैं पृथ्वी का पुत्र हूँ&rdquo;</em>{" "}
          — अथर्ववेद के पृथ्वी-सूक्त से है।
        </p>
        <p>
          चित्रण, कोड और डिज़ाइन — पर्यावरण संरक्षण गतिविधि की डिजिटल टीम
          द्वारा।
        </p>
      </div>

      {/* Back */}
      <p className="mt-16 text-sm">
        <Link
          href="/about"
          className="font-devanagari text-vana underline underline-offset-4 hover:text-vana-dark"
        >
          ← About पर वापस जाएँ
        </Link>
      </p>
    </article>
  );
}
