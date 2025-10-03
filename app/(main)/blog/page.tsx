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
  const per = Number(perPage ?? "12");

  return (
    <>
      <BlogHero />
      <BlogSearch />
      <BlogList page={pageNum} perPage={per} searchTerm={q ?? null} />
    </>
  );
}
