"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BlogCard } from "@/components/ui/BlogCard";

function extractFirstImage(html: string) {
  const imgRegex = /<img[^>]+src="([^">]+)"/;
  const match = html.match(imgRegex);
  return match ? { source_url: match[1], alt_text: "" } : undefined;
}

export default function BlogPostsGrid({ posts }: { posts: BlogPost[] }) {
  const key = posts.map((p) => p.id).join("_");

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -18 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {posts.map((post) => {
          const featuredImage = extractFirstImage(post.html);
          return (
            <BlogCard
              key={post.id}
              title={post.title.rendered}
              slug={post.slug}
              date={post.date}
              subtitle={post.subtitle}
              featuredImage={featuredImage}
              categories={post.categories}
            />
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
