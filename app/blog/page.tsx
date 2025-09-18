import BlogIndex from "@/components/blog/blog-section";

export default async function Blog({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const { page } = (await searchParams) ?? {};
  const pageNum = Number(page ?? "1");
  return <BlogIndex page={pageNum} />;
}
