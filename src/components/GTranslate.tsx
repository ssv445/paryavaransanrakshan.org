"use client";

import Script from "next/script";

/**
 * Google Translate widget — client-side translation.
 *
 * multilanguagePage: true tells Google to honour lang="hi" / lang="en"
 * attributes on individual sections, so a Hindi-native section translates
 * correctly when the visitor picks English, and vice-versa.
 *
 * autoDisplay: false — widget does nothing until the visitor picks a
 * language from the dropdown.
 *
 * Previously used gtranslate.net's free dropdown which assumed a fixed
 * source language per site — which broke on our Hindi-native pages.
 */
export default function GTranslate() {
  return (
    <>
      <div id="google_translate_element" className="inline-block" />
      <Script id="gt-settings" strategy="afterInteractive">
        {`
          window.googleTranslateElementInit = function () {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: "en",
                includedLanguages: "en,hi,mr,gu,ta,bn,kn,te,pa,or,ml,as",
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
                multilanguagePage: true,
              },
              "google_translate_element"
            );
          };
        `}
      </Script>
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
