import Image from "next/image";

interface SingleBlogPageProps {
  title: string;
  content: string;
  date: string;
  author?: string;
  authorImage?: string;
  featuredImage?: { source_url?: string; alt_text?: string };
}

export default function SingleBlogPage({ 
  title, 
  content, 
  date, 
  author = "Acumen Intelligence",
  authorImage = "/logo/ailogo.jpg",
  featuredImage,
}: SingleBlogPageProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const plainTitle = title.replace(/<[^>]+>/g, "");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-primary text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-24">
          <div className="text-center">
            <h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            
            {/* Author Section */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <img
                  src={authorImage}
                  alt={author}
                  className="w-16 h-16 rounded-full border-3 border-white/30 shadow-lg"
                />
              </div>
              <div className="text-center">
                <p className="text-lg font-medium text-white/90">{author}</p>
                <p className="text-sm text-white/70">{formattedDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-16">
        <div className="mx-auto px-10 md:px-32 sm:px-3 pb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">

            {/* Featured Image */}
            <div className="mb-8 rounded-xl overflow-hidden aspect-video">
              {featuredImage?.source_url ? (
                <Image
                  src={featuredImage.source_url}
                  alt={featuredImage.alt_text || plainTitle}
                  width={1100}
                  height={575}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-slate-200 to-slate-300 text-slate-500">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm">Featured Image</p>
                  </div>
                </div>
              )}
            </div>

            {/* Article Content */}
            <article 
              className="px-8 prose prose-lg max-w-none prose-headings:text-[#144272] prose-headings:font-bold prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-[#2c74b3] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#144272] prose-blockquote:border-l-[#2c74b3] prose-blockquote:bg-slate-50 prose-blockquote:rounded-r-lg prose-img:rounded-lg prose-img:shadow-md"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Share Section */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 font-medium">Share this article:</span>
                <div className="flex space-x-3">
                  <button className="p-2 bg-[#144272] text-white rounded-full hover:bg-[#2c74b3] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </button>
                  <button className="p-2 bg-[#2c74b3] text-white rounded-full hover:bg-[#144272] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}