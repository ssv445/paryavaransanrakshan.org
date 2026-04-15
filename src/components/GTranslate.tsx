"use client";

import Script from "next/script";

/**
 * GTranslate widget — lets visitors translate the site client-side.
 * We use the free "float" widget (no API key) configured for en + hi + mr + gu + ta.
 * Widget markup target: <div id="gtranslate_wrapper"></div>
 */
export default function GTranslate() {
  return (
    <>
      <div id="gtranslate_wrapper" className="flex items-center" />
      <Script id="gtranslate-settings" strategy="afterInteractive">
        {`
          window.gtranslateSettings = {
            default_language: "en",
            native_language_names: true,
            languages: ["en","hi","mr","gu","ta","bn","kn","te","pa"],
            wrapper_selector: "#gtranslate_wrapper",
            flag_style: "3d",
            switcher_horizontal_position: "inline",
            alt_flags: { en: "usa" },
          };
        `}
      </Script>
      <Script
        src="https://cdn.gtranslate.net/widgets/latest/dropdown.js"
        strategy="afterInteractive"
        defer
      />
    </>
  );
}
