import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import Image from "next/image";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

async function getBlogBySlug(slug: string) {
  try {
    await ConnectDB();
    const blog = await BlogModel.findOne({ slug: slug });
    return blog;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
}

const SingleBlogPage = async ({ params }: BlogPageProps) => {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">

        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{blog.title}</h1>
          <Image src={blog.authorImg} className="mx-auto mt-6 border border-white rounded-full" width={60} height={60} alt="author" />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{blog.author}</p>
        </div>
      </div>

      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image src={blog.image} className="border-4 border-white" width={1280} height={720} alt={blog.title} />
        <div className="prose lg:prose-xl max-w-none mt-8" dangerouslySetInnerHTML={{ __html: blog.description }}></div>

        <div className="my-24">
          <p className="text-black font-semibold my-4">Share this article on social media</p>
          <div className="flex gap-2">
            <Image src="/admin/facebook_icon.png" width={50} height={50} alt="facebook" />
            <Image src="/admin/twitter_icon.png" width={50} height={50} alt="twitter" />
            <Image src="/admin/googleplus_icon.png" width={50} height={50} alt="google plus" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogPage;