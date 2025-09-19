import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl?: string;
  queryParam?: string;
}

function pageWindow(curr: number, last: number, span = 2) {
  const pages = new Set<number>([1, last, curr]);
  for (let i = 1; i <= span; i++) {
    if (curr - i > 1) pages.add(curr - i);
    if (curr + i < last) pages.add(curr + i);
  }
  return [...pages].sort((a, b) => a - b);
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  baseUrl = "",
  queryParam = "page" 
}: PaginationProps) {
  const isFirst = currentPage <= 1;
  const isLast = currentPage >= totalPages;
  const pages = pageWindow(currentPage, totalPages);

  const createPageUrl = (page: number) => {
    if (baseUrl) {
      return `${baseUrl}?${queryParam}=${page}`;
    }
    return `?${queryParam}=${page}`;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav 
      className="pagination flex justify-center items-center gap-1 p-3" 
      aria-label="Pagination"
    >
      {/* Previous Button */}
      <Link
        href={createPageUrl(Math.max(1, currentPage - 1))}
        prefetch={false}
        aria-disabled={isFirst}
        className={`pagination-arrow w-9 h-9 flex items-center justify-center text-sm rounded border transition-colors ${
          isFirst 
            ? "pointer-events-none bg-gray-200 text-gray-400 border-gray-300" 
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
        }`}
      >
        ←
      </Link>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pages.map((p, idx) => {
          const prev = pages[idx - 1];
          const showDots = idx > 0 && p - (prev ?? p) > 1;
          
          return (
            <span key={p} className="flex items-center gap-1">
              {showDots && (
                <span className="pagination-ellipsis px-2 text-gray-500 text-sm">
                  …
                </span>
              )}
              <Link
                href={createPageUrl(p)}
                prefetch={false}
                aria-current={p === currentPage ? "page" : undefined}
                className={`pagination-item w-9 h-9 flex items-center justify-center text-sm rounded border transition-colors ${
                  p === currentPage 
                    ? "bg-secondary text-white border-primary hover:bg-primary hover:border-secondary" 
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                }`}
              >
                {p}
              </Link>
            </span>
          );
        })}
      </div>

      {/* Next Button */}
      <Link
        href={createPageUrl(Math.min(totalPages, currentPage + 1))}
        prefetch={false}
        aria-disabled={isLast}
        className={`pagination-arrow w-9 h-9 flex items-center justify-center text-sm rounded border transition-colors ${
          isLast 
            ? "pointer-events-none bg-gray-200 text-gray-400 border-gray-300" 
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
        }`}
      >
        →
      </Link>
    </nav>
  );
}