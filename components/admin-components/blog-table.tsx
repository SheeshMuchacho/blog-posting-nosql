"use client";
import React from "react";
import Image from "next/image";
import { FaTrash, FaEdit } from "react-icons/fa";
import Link from "next/link";

interface BlogTableProps {
  _id: string;
  slug: string;
  authorImg: string;
  author: string;
  title: string;
  date: number;
  deleteBlog: (id: string) => void;
}

const BlogTable = ({ _id, slug, authorImg, author, title, date, deleteBlog }: BlogTableProps) => {
  const blogDate = new Date(date);

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="hidden items-center gap-3 px-6 py-4 font-medium text-gray-900 md:flex whitespace-nowrap"
      >
        <Image src={authorImg ? authorImg : "/admin/profile_icon.png"} width={40} height={40} alt="author image" />
        <p>{author ? author : "No Author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "No Title"}</td>
      <td className="px-6 py-4">{blogDate.toDateString()}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          <Link href={`/admin/edit-blog/${slug}`}>
            <FaEdit className="cursor-pointer text-blue-600 hover:text-blue-800" />
          </Link>
          <FaTrash onClick={() => deleteBlog(_id)} className="cursor-pointer text-red-600 hover:text-red-800" />
        </div>
      </td>
    </tr>
  );
};

export default BlogTable;