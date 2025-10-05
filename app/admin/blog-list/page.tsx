"use client";
import BlogTable from "@/components/admin-components/blog-table";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

interface Blog {
  _id: string;
  slug: string;
  title: string;
  author: string;
  authorImg: string;
  image: string;
  description: string;
  category: string;
  date: number;
}

const Page = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blog");
      setBlogs(response.data.blog);
    } catch (error) {
      toast.error("Error fetching blogs");
      console.error("Error fetching blogs:", error);
    }
  };

  const deleteBlog = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        const response = await axios.delete(`/api/blog?id=${id}`);
        if (response.data.success) {
          toast.success(response.data.message);
          await fetchBlogs();
        } else {
          toast.error("Error deleting blog");
        }
      } catch (error) {
        toast.error("Server error while deleting blog");
      }
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1">

      <div className="relative mt-4 h-[80vh] max-w-[850px] overflow-x-auto border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-left text-sm uppercase text-gray-700 bg-gray-50">
            <tr>
              <th scope="col" className="hidden px-6 py-3 md:table-cell">
                Author Name
              </th>
              <th scope="col" className="px-6 py-3">Blog Title</th>
              <th scope="col" className="px-6 py-3">Date</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item) => (
              <BlogTable key={item._id} {...item} deleteBlog={deleteBlog} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;