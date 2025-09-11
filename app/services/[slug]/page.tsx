import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/service-template";
import { getAllServiceSlugs, loadService } from "@/lib/service-data";
import { getRequestLocale, tServer } from "@/lib/i18n-server";

/**
 * Pre-generate static params for dynamic routes.
 */
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

/**
 * Generate metadata dynamically for each service page.
 */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;   // 👈 await params
  const svc = await loadService(slug);
  if (!svc) return { title: "Service" };

  const lang = await getRequestLocale();
  const title = tServer(svc.title, lang);
  const description = tServer(svc.description, lang);

  return {
    title: `${title} • Services`,
    description,
    openGraph: {
      title,
      description,
      images: svc.ogImage
        ? [
            {
              url:
                typeof svc.ogImage === "string"
                  ? svc.ogImage
                  : (svc.ogImage as any).src,
            },
          ]
        : [],
    },
  };
}

/**
 * Main service page component.
 */
export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;   // 👈 await params
  const svc = await loadService(slug);
  if (!svc) notFound();
  return <ServiceTemplate service={svc} />;
}
