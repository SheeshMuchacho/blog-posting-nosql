"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BlogCard } from "@/components/ui/BlogCard";

export default function BlogPostsGrid({ posts }: { posts: any[] }) {
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
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            slug={post.slug}
            date={post.date}
            excerpt={post.excerpt || ""}
            featuredImage={post.image}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
