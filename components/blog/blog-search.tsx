"use client";

import SearchBox from "@/components/ui/SearchBox";
import { useSearchParams } from "next/navigation";

export default function BlogSearch() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  return (
    <div className="py-2">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SearchBox
          placeholder="Search blogs..."
          defaultValue={searchQuery}
          className="max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10"
        />
      </div>
    </div>
  );
}
