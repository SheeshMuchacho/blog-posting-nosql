import { config } from "dotenv";
config({ path: ".env.local" }); 
import fs from "fs/promises";
import path from "path";

const base = process.env.WP_BASE_URL;
if (!base) {
  console.error("WP_BASE_URL is missing. Add it to .env.local or .env");
  process.exit(1);
}

const outDir = path.join(process.cwd(), "content", "wp");

async function fetchAllPosts() {
  let page = 1;
  const all: any[] = [];
  while (true) {
    const url = `${base}/wp-json/wp/v2/posts?per_page=100&page=${page}&_embed`;
    const r = await fetch(url);
    if (!r.ok) break;
    const batch = await r.json();
    all.push(...batch);
    if (batch.length < 100) break;
    page++;
  }
  return all;
}

async function ensureDir(p: string) {
  await fs.mkdir(p, { recursive: true });
}

async function writeManifest(posts: any[]) {
  const manifest = posts.map((p) => ({
    id: p.id,
    slug: p.slug,
    date: p.date,
    modified: p.modified,
  }));
  await fs.writeFile(path.join(outDir, "_manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
}

async function sync() {
  await ensureDir(outDir);

  const posts = await fetchAllPosts();
  const liveSlugs = new Set(posts.map((p) => `${p.slug}.json`));

  // 1) Write/update current posts
  for (const p of posts) {
    const file = path.join(outDir, `${p.slug}.json`);
    await fs.writeFile(file, JSON.stringify(p, null, 2), "utf8");
  }

  // 2) Delete orphans (files for posts that no longer exist in WP)
  const entries = await fs.readdir(outDir);
  for (const name of entries) {
    if (!name.endsWith(".json")) continue;
    if (name === "_manifest.json") continue;
    if (!liveSlugs.has(name)) {
      await fs.rm(path.join(outDir, name));
      // optional: write a tombstone instead of deleting
      // await fs.writeFile(path.join(outDir, name), JSON.stringify({ deleted: true }), "utf8");
    }
  }

  // 3) Update manifest
  await writeManifest(posts);

  console.log(`Imported ${posts.length} posts. Cleaned ${entries.length - liveSlugs.size - 1 || 0} orphans.`);
}

sync().catch((e) => {
  console.error(e);
  process.exit(1);
});
