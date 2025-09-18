import Link from "next/link";

interface BlogCardProps {
  id: number;
  title: { rendered: string };
  slug: string;
  excerpt: { rendered: string };
  featuredImage?: {
    source_url: string;
    alt_text?: string;
  };
  date: string;
}

export function BlogCard({ id, title, slug, excerpt, featuredImage, date }: BlogCardProps) {

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-lg shadow-sm border border-primary overflow-hidden hover:shadow-md transition-shadow duration-200">
      {(
        featuredImage?.source_url ||
        "/default.jpg"
      ) && (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={featuredImage?.source_url || "/default.jpg"}
            alt={featuredImage?.alt_text || "Blog post image"}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block bg-[#144272] text-white text-xs font-medium px-3 py-1 rounded">
            {formattedDate}
          </span>
        </div>
        
        <h3 className="text-gray-900 font-semibold text-sm mb-3 line-clamp-2 leading-tight">
          <span dangerouslySetInnerHTML={{ __html: title.rendered }} />
        </h3>
        
        <div 
          className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: excerpt.rendered }} 
        />
        
        <Link 
          href={`/blog/${slug}`}
          className="text-[#2c74b3] text-sm font-medium hover:text-[#144272] transition-colors duration-200 inline-flex items-center group"
        >
          Read more
          <svg 
            className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}