export const serviceLoaders = {
  "content-syndication": () => import("./content-syndication"),
  "display-advertising": () => import("./display-advertising"),
  "lead-generation": () => import("./lead-generation"), 
  "webinar": () => import("./webinar"),
  "intent-data": () => import("./intent-data"),
  "demand-generation": () => import("./demand-generation"),
  "abm": () => import("./abm"),
} as const;

export type ServiceSlug = keyof typeof serviceLoaders;
export const allServiceSlugs = Object.keys(serviceLoaders) as ServiceSlug[];
