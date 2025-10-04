'use client'

import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  subtitle: string;
}

const BlogCard = ({id, slug, title, image, category, subtitle}: BlogCardProps) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-secondary hover:shadow-[-7px_7px_0px_#2c74b3] cursor-pointer">
        <Image
          src={image}
          width={400}
          height={400}
          alt={title}
          className="border-b border-primary h-[200px] w-[400px] object-cover" 
        />
        <p className="ml-5 mt-5 py-1 px-2 inline-block bg-black text-white text-sm">{category}</p>
        <div className="p-5">
          <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">{title}</h5>
          <p className="mb-3 text-sm tracking-tight text-gray-700">{subtitle}</p>
          <div className="inline-flex items-center py-2 font-semibold text-center">
            Read More <Image src='/admin/arrow_icon.png' width={12} height={12} className="ml-2" alt='' />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard;