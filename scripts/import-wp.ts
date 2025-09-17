import { config } from "dotenv";
config({ path: ".env.local" });
import fs from "fs/promises";

console.log("DEBUG =>", process.env.WP_BASE_URL); 


const base = process.env.WP_BASE_URL!;
const outDir = "./content/wp";

async function fetchAll() {
  let page = 1, all: any[] = [];
  while (true) {
    const r = await fetch(`${base}/wp-json/wp/v2/posts?per_page=100&page=${page}&_embed`);
    if (!r.ok) break;
    const batch = await r.json();
    all = all.concat(batch);
    if (batch.length < 100) break;
    page++;
  }
  return all;
}

(async () => {
  await fs.mkdir(outDir, { recursive: true });
  const posts = await fetchAll();
  for (const p of posts) {
    const file = `${outDir}/${p.slug}.json`;
    await fs.writeFile(file, JSON.stringify(p, null, 2), "utf8");
  }
  console.log(`Imported ${posts.length} posts.`);
})();
