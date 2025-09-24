import { getPostsPage } from "@/lib/wp";
import Pagination from "@/components/ui/Pagination";
import BlogPostsGrid from "@/components/blog/blog-grid";

type BlogListProps = {
  page: number;
  perPage: number;
  searchTerm?: string | null;
};

export default async function BlogList({ page, perPage, searchTerm }: BlogListProps) {
  const { data: posts, totalPages } = await getPostsPage(page, perPage, searchTerm ?? undefined);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
          <p className="text-gray-600">
            {searchTerm
              ? `No blog posts match your search for "${searchTerm}"`
              : "No blog posts available at the moment"}
          </p>
        </div>
      ) : (
        <>
          <BlogPostsGrid posts={posts} />

          {totalPages > 1 && (
            <div className="mt-10">
              <Pagination currentPage={page} totalPages={totalPages} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
