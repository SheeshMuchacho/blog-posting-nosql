"use client";

import { t, type LStr } from "@/lib/i18n";
import { useLanguage } from "@/app/i18n/LanguageProvider";

type Section = {
  heading?: LStr;
  paragraphs?: LStr[];
  list?: LStr[];
};

export interface PolicyDoc {
  title: LStr;
  sections: Section[];
}

export default function PolicyPage({ doc }: { doc: PolicyDoc }) {
  const { lang } = useLanguage();

  return (
    <main className="px-28 pt-20 pb-14">
      <h1 className="text-3xl font-bold text-gray-900 pt-6 pb-8 border-b border-gray-200">
        {t(doc.title, lang)}
      </h1>

      <div className="space-y-8 mt-8">
        {doc.sections.map((s, idx) => (
          <section key={idx} className="space-y-4">
            {s.heading && (
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
                {t(s.heading, lang)}
              </h2>
            )}

            {s.paragraphs?.map((p, i) => (
              <p key={i} className="text-gray-700 leading-7 text-base mb-4">
                {t(p, lang)}
              </p>
            ))}

            {s.list && (
              <ul className="space-y-2 ml-6 mb-4">
                {s.list.map((li, i) => (
                  <li key={i} className="text-gray-700 leading-7 text-base list-disc">
                    {t(li, lang)}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}