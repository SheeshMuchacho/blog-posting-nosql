import BlogIndex from "@/components/blog/blog-section";

export default function Blog({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const page = Number(searchParams?.page ?? "1");
  return <BlogIndex page={page} />;
}