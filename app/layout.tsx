import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "./i18n/LanguageProvider";
import { getRequestLocale } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: "Acumen Intelligence",
  description: "B2B Marketing Solutions",
};

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
        </LanguageProvider>
      </body>
    </html>
  );
}
