import fs from "fs/promises";
import path from "path";
import Pagination from "@/components/ui/Pagination";
import BlogPostsGrid from "@/components/blog/blog-grid";

type BlogListProps = {
  page: number;
  perPage: number;
  searchTerm?: string | null;
};

async function getLocalPosts(
  page: number,
  perPage: number,
  searchTerm?: string
): Promise<{ data: BlogPost[]; totalPages: number }> {
  const postsDirectory = path.join(process.cwd(), "content/wp");
  const filenames = await fs.readdir(postsDirectory);
  const jsonFiles = filenames.filter((file) => file.endsWith(".json"));

  let allPosts: BlogPost[] = await Promise.all(
    jsonFiles.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(filePath, "utf8");
      return JSON.parse(fileContents);
    })
  );

  // Sort posts by date in descending order
  allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (searchTerm) {
    const lowercasedTerm = searchTerm.toLowerCase();
    allPosts = allPosts.filter(
      (post) =>
        post.title.rendered.toLowerCase().includes(lowercasedTerm) ||
        post.html.toLowerCase().includes(lowercasedTerm)
    );
  }

  const totalPages = Math.ceil(allPosts.length / perPage);
  const paginatedPosts = allPosts.slice((page - 1) * perPage, page * perPage);

  return { data: paginatedPosts, totalPages };
}

export default async function BlogList({ page, perPage, searchTerm }: BlogListProps) {
  const { data: posts, totalPages } = await getLocalPosts(page, perPage, searchTerm || undefined);

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
