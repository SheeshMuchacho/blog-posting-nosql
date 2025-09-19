import fs from "node:fs/promises";
import path from "node:path";
import { wpToClean, type CleanPost } from "@/helpers/wp-clean";

const WP_API = "https://acumenintelligence.com/wp-json/wp/v2";

async function fetchPosts(page = 1, perPage = 20) {
  const url = new URL(`${WP_API}/posts`);
  url.searchParams.set("_embed", "1"); // embed featured image, terms, etc.
  url.searchParams.set("per_page", String(perPage));
  url.searchParams.set("page", String(page));
  url.searchParams.set(
    "_fields",
    "id,slug,date,link,title.rendered,content.rendered,excerpt.rendered,_embedded.wp:featuredmedia,_embedded.wp:term"
  );

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch posts (HTTP ${res.status})`);
  }

  const posts = await res.json();
  const totalPages = Number(res.headers.get("x-wp-totalpages") || "1");
  return { posts, totalPages };
}

async function run() {
  const outDir = path.join(process.cwd(), "content", "wp");
  await fs.mkdir(outDir, { recursive: true });

  let page = 1;
  while (true) {
    const { posts, totalPages } = await fetchPosts(page);
    console.log(`Fetched page ${page}/${totalPages}`);

    for (const raw of posts) {
      const clean: CleanPost = wpToClean(raw);
      const file = path.join(outDir, `${clean.slug}.json`);
      await fs.writeFile(file, JSON.stringify(clean, null, 2), "utf8");
      console.log(`  → wrote ${file}`);
    }

    if (page >= totalPages) break;
    page++;
  }

  console.log("✅ Import finished.");
}

run().catch((err) => {
  console.error("Import failed:", err);
  process.exit(1);
});
