// page.tsx
import { getPostsPage } from "@/lib/wp";
import { BlogCard } from "@/components/ui/BlogCard";

export default async function BlogIndex() {
  const { data: posts } = await getPostsPage(1, 20); 
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#144272] to-[#2c74b3] text-white pb-16 pt-28">
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
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              slug={post.slug}
              date={post.date}
              excerpt={post.excerpt || ""}
              featuredImage={post._embedded?.["wp:featuredmedia"]?.[0] as { source_url: string; alt_text?: string; } | undefined}
            />
          ))}
        </div>
        
        {posts.length >= 20 && (
          <div className="mt-16 text-center">
            <button className="bg-white text-[#144272] font-semibold px-8 py-3 rounded-lg border-2 border-[#144272] hover:bg-[#144272] hover:text-white transition-all duration-200 shadow-sm hover:shadow-md">
              Load More Posts
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export const revalidate = 300; // refresh every 5 min (ISR)