"use client";

import { Search } from "lucide-react";

export default function BlogSearch() {
  return (
    <div className="py-2">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <form
          method="GET"
          action="/blog"
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 bg-white border border-secondary shadow-[-7px_7px_0px_#144272]"
        >
          <input
            name="q"
            type="text"
            placeholder="Search blogs..."
            className="pl-4 outline-none flex-1"
            defaultValue=""
          />
          <button
            type="submit"
            className="border-l border-secondary py-4 px-4 text-gray-500 hover:text-black transition-colors flex items-center justify-center"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
