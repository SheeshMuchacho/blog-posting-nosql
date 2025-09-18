export type WpPost = {
  id: number; slug: string; date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: { "wp:featuredmedia"?: Array<{ source_url?: string; alt_text?: string }> };
};

const base = process.env.WP_BASE_URL!;
const auth = process.env.WP_BASIC_AUTH ? { Authorization: `Basic ${process.env.WP_BASIC_AUTH}` } : undefined;

async function wp(path: string) {
  const res = await fetch(`${base}${path}`, { headers: auth, next: { revalidate: 300 }});
  if (!res.ok) throw new Error(`WP ${res.status}`);
  return res;
}

export async function getPostsPage(page=1, perPage=20) {
  const r = await wp(`/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&_embed`);
  const data: WpPost[] = await r.json();
  return {
    data,
    total: Number(r.headers.get("X-WP-Total")||1),
    totalPages: Number(r.headers.get("X-WP-TotalPages")||0),
  };
}


export async function getPostBySlug(slug: string) {
  const r = await wp(`/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`);
  return (await r.json())[0] ?? null;
}
