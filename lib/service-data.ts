import { allServiceSlugs, serviceLoaders, ServiceSlug } from "@/content/services";
import { StaticImageData } from "next/image";

export type Section =
  | {
      type: "hero";
      heading: string;
      body: string;
      image?: StaticImageData | string;
    }
  | {
      type: "cards";
      heading?: string;
      items: { title: string; body: string }[];
    }
  | {
      type: "text";
      heading: string;
      body: string;
      image?: StaticImageData | string;
      align?: "left" | "right";
      cta?: { label: string; href?: string }; 
    };

export type Service = {
  slug: string;
  title: string;
  description: string;
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