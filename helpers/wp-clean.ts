import sanitizeHtml from "sanitize-html";

export type CleanPost = {
  id: number;
  slug: string;
  title: string;       // plain text
  html: string;        // sanitized HTML
  excerpt?: string;
  date: string;
  url: string;
  featuredImage?: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  categories: { id: number; name: string; url: string }[];
  tags: { id: number; name: string; url: string }[];
};

export function wpToClean(p: any): CleanPost {
  const titleHtml = p?.title?.rendered ?? "";
  const titleText = stripHtml(titleHtml);

  // pick a decent image size if present (fallback to full)
  const media = p?._embedded?.["wp:featuredmedia"]?.[0];
  const sizes = media?.media_details?.sizes ?? {};
  const sizePick =
    sizes?.["portfolio-full"] || sizes?.large || sizes?.medium || sizes?.full;

  const featuredImage = media
    ? {
        url: sizePick?.source_url || media?.source_url,
        alt: media?.alt_text || titleText,
        width: sizePick?.width || media?.media_details?.width,
        height: sizePick?.height || media?.media_details?.height,
      }
    : undefined;

  // categories & tags are in _embedded['wp:term']
  const terms = p?._embedded?.["wp:term"] || [];
  const categories = (terms[0] || []).map((t: any) => ({
    id: t.id,
    name: t.name,
    url: t.link,
  }));
  const tags = (terms[1] || []).map((t: any) => ({
    id: t.id,
    name: t.name,
    url: t.link,
  }));

  // sanitize content HTML (tweak allowed tags/attrs as you like)
  const cleanHtml = sanitizeHtml(p?.content?.rendered ?? "", {
    allowedTags: [
      "p","h1","h2","h3","h4","h5","h6",
      "strong","em","ul","ol","li","blockquote",
      "a","img","code","pre","figure","figcaption","br","hr","span"
    ],
    allowedAttributes: {
      a: ["href","title","target","rel"],
      img: ["src","alt","width","height","srcset","sizes"],
      "*": ["class"], // drop "class" if you don't want theme classes
    },
    // Example: strip Avada/Fusion wrappers if desired
    // exclusiveFilter: (frame) => frame.tag === "div" && /fusion-/.test(frame.attribs.class || "")
  });

  return {
    id: p.id,
    slug: p.slug,
    date: p.date,
    url: p.link,
    title: titleText,
    html: cleanHtml,
    excerpt: stripHtml(p?.excerpt?.rendered ?? ""),
    featuredImage,
    categories,
    tags,
  };
}

function stripHtml(html: string): string {
  return (html || "").replace(/<[^>]*>/g, "").trim();
}
