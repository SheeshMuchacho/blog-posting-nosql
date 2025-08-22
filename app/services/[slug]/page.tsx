import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/service-template";
import { getAllServiceSlugs, loadService } from "@/lib/service-data";

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const svc = await loadService(params.slug);
  if (!svc) return { title: "Service" };
  return {
    title: `${svc.title} • Services`,
    description: svc.description,
    openGraph: {
      title: svc.title,
      description: svc.description,
      images: svc.ogImage
        ? [{ url: typeof svc.ogImage === "string" ? svc.ogImage : (svc.ogImage as any).src }]
        : [],
    },
  };
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const svc = await loadService(params.slug);
  if (!svc) notFound();
  return <ServiceTemplate service={svc} />;
}
