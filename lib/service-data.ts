import { allServiceSlugs, serviceLoaders, ServiceSlug } from "@/content/services";
import { StaticImageData } from "next/image";
import type { LStr } from "@/lib/i18n";

export type Section =
  | {
      type: "hero";
      heading: LStr;
      body: LStr;
      image?: StaticImageData | string;
    }
  | {
      type: "cards";
      heading?: LStr;
      items: { title: LStr; body: LStr; subtitle?: LStr }[];
    }
  | {
      type: "text";
      heading: LStr;
      body: LStr;
      image?: StaticImageData | string;
      align?: "left" | "right";
      cta?: { label: LStr; href?: string };
    };

export type Service = {
  slug: string;
  title: LStr;
  description: LStr;
  ogImage?: StaticImageData | string;
  sections: Section[];
};

// async: load a single service module
export async function loadService(slug: string): Promise<Service | null> {
  if (!(slug in serviceLoaders)) return null;
  const mod = await serviceLoaders[slug as ServiceSlug]();
  return (mod.default ?? null) as Service | null;
}

export function getAllServiceSlugs(): string[] {
  return allServiceSlugs;
}
