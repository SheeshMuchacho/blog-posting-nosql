"use client";
import React from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";

interface BlogTableProps {
  _id: string;
  authorImg: string;
  author: string;
  title: string;
  date: number;
  deleteBlog: (id: string) => void;
}

const BlogTable = ({ _id, authorImg, author, title, date, deleteBlog }: BlogTableProps) => {
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
      <td onClick={() => deleteBlog(_id)} className="px-6 py-4 cursor-pointer text-red-600 hover:text-red-800">
        <FaTrash />
      </td>
    </tr>
  );
};

export default BlogTable;