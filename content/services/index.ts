export const serviceLoaders = {
  "content-syndication": () => import("./content-syndication"),
  "display-advertising": () => import("./display-advertising"),
  // add new services here
} as const;

export type ServiceSlug = keyof typeof serviceLoaders;
export const allServiceSlugs = Object.keys(serviceLoaders) as ServiceSlug[];
