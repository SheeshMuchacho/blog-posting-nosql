import { Suspense } from "react";
import Loading from "./loading";
import BlogHero from "@/components/blog/hero";
import BlogSearch from "@/components/blog/search";
import BlogList from "@/components/blog/list";

export default async function Blog({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string; q?: string; perPage?: string }>;
}) {
  const { page, q, perPage } = (await searchParams) ?? {};
  const pageNum = Number(page ?? "1");
  // keep default perPage = 12 here; if you’re doing responsive perPage, compute and pass it in
  const per = Number(perPage ?? "12");

  return (
    <>
      <BlogHero />
      <BlogSearch />
      <Suspense key={`${pageNum}-${q ?? ""}-${per}`} fallback={<Loading />}>
        {/* Server fetch + grid + pagination */}
        <BlogList page={pageNum} perPage={per} searchTerm={q ?? null} />
      </Suspense>
    </>
  );
}
