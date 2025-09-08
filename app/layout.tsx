import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "./i18n/LanguageProvider";
import { getRequestLocale, tServer } from "@/lib/i18n-server";
import { type LStr } from "@/lib/i18n";
import Chatbot from "@/components/chatbot/Chatbot";
import "./chatbot.css";

const ROOT_TITLE: LStr = {
  en: "Acumen Intelligence",
  ja: "Acumen Intelligence（アキュメン・インテリジェンス）",
  ko: "Acumen Intelligence",
};

const ROOT_DESC: LStr = {
  en: "B2B Marketing Solutions",
  ja: "B2Bマーケティングソリューション",
  ko: "B2B 마케팅 솔루션",
};

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getRequestLocale();
  return {
    title: tServer(ROOT_TITLE, lang),
    description: tServer(ROOT_DESC, lang),
  };
}

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const lang = await getRequestLocale(); 
  return (
    <html lang={lang}>
        <body suppressHydrationWarning> 
          <LanguageProvider>

            <Navbar />

            <main>
                {children}
            </main>

            <Footer />

            <Chatbot endpoint="" />

          </LanguageProvider>

        </body>
    </html>
  );
}
