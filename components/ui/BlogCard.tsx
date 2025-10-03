import Link from "next/link";

interface BlogCardProps {
  title: string;
  subtitle: string;
  slug: string;
  featuredImage?: {
    source_url: string;
    alt_text?: string;
  };
  date: string;
  categories?: { name: string }[];
}

export function BlogCard({ title, slug, subtitle, featuredImage, date, categories }: BlogCardProps) {

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const category = categories?.[0]?.name || "Uncategorized";

  return (
    <div className="bg-white rounded-lg shadow-sm border border-primary/20 overflow-hidden hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col h-full group">
      {featuredImage?.source_url && (
        <div className="aspect-[16/10] overflow-hidden">
          <Link href={`/blog/${slug}`}>
            <img
              src={featuredImage.source_url}
              alt={featuredImage.alt_text || title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </Link>
        </div>
      )}
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
          <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        
        <h3 className="text-gray-900 font-semibold text-base mb-3 line-clamp-2 leading-tight flex-grow">
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </h3>
        
        <div 
          className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: subtitle }} 
        />
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
          <Link 
            href={`/blog/${slug}`}
            className="text-secondary text-sm font-medium hover:text-primary transition-colors duration-200 inline-flex items-center"
          >
            Read more
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
          <span className="text-gray-400 text-xs font-medium">{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}