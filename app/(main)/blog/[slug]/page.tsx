import { getPostBySlug } from "@/lib/wp";
import SingleBlogPage from "@/components/blog/single-blog-page";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return <div>Not found</div>;
  return (
    <SingleBlogPage
      title={post.title}
      content={post.description}
      author={post.author}
      authorImage={post.authorImage}
      date={post.date}
      featuredImage={post.featuredImage}
    />
  );
}

export const revalidate = 300;