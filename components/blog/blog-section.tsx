import { getPostsPage } from "@/lib/wp";
import { BlogCard } from "@/components/ui/BlogCard";
import Pagination from "@/components/ui/Pagination";

type BlogIndexProps = { page: number };

export default async function BlogIndex({ page }: BlogIndexProps) {
  const perPage = 12;
  const { data: posts, totalPages } = await getPostsPage(page, perPage);

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

        {/* Use the new Pagination component */}
        <div className="mt-10">
          <Pagination 
            currentPage={page}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
}

export const revalidate = 300;