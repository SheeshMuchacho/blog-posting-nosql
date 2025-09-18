import BlogIndex from "@/components/blog/blog-section";

export default async function Blog({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const { page } = (await searchParams) ?? {};
  return <BlogIndex page={Number(page ?? "1")} />;
}