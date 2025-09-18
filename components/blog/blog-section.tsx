import Link from "next/link";
import { getPostsPage } from "@/lib/wp";
import { BlogCard } from "@/components/ui/BlogCard";

type BlogIndexProps = { page: number };

function pageWindow(curr: number, last: number, span = 2) {
  const pages = new Set<number>([1, last, curr]);
  for (let i = 1; i <= span; i++) {
    if (curr - i > 1) pages.add(curr - i);
    if (curr + i < last) pages.add(curr + i);
  }
  return [...pages].sort((a, b) => a - b);
}

export default async function BlogIndex({ page }: BlogIndexProps) {
  const perPage = 20;
  const { data: posts, totalPages } = await getPostsPage(page, perPage);

  const isFirst = page <= 1;
  const isLast = page >= totalPages;
  const pages = pageWindow(page, totalPages);

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="bg-primary text-white pb-16 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Stay updated with the latest insights, trends, and stories from our team
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post: any) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              slug={post.slug}
              date={post.date}
              excerpt={post.excerpt || ""}
              featuredImage={post._embedded?.["wp:featuredmedia"]?.[0]}
            />
          ))}
        </div>

        <nav className="flex justify-center items-center gap-1 mt-10" aria-label="Pagination">
          <Link
            href={`?page=${Math.max(1, page - 1)}`}
            prefetch={false}
            aria-disabled={isFirst}
            className={`px-3 py-1 bg-primary text-white rounded border ${isFirst ? "pointer-events-none bg-gray-200" : "hover:bg-secondary"}`}
          >
            Prev
          </Link>

          <div className="flex items-center gap-1">
            {pages.map((p, idx) => {
              const prev = pages[idx - 1];
              const showDots = idx > 0 && p - (prev ?? p) > 1;
              return (
                <span key={p} className="flex">
                  {showDots && <span className="px-2">…</span>}
                  <Link
                    href={`?page=${p}`}
                    prefetch={false}
                    aria-current={p === page ? "page" : undefined}
                    className={`px-3 py-1 rounded border ${
                      p === page ? "bg-secondary text-white border-primary" : "hover:bg-gray-200"
                    }`}
                  >
                    {p}
                  </Link>
                </span>
              );
            })}
          </div>

          <Link
            href={`?page=${Math.min(totalPages, page + 1)}`}
            prefetch={false}
            aria-disabled={isLast}
            className={`px-3 py-1 bg-primary text-white rounded border ${isLast ? "pointer-events-none bg-gray-200" : "hover:bg-secondary"}`}
          >
            Next
          </Link>
        </nav>
      </div>
    </div>
  );
}

export const revalidate = 300;
