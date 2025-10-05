'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import BlogCard from './../../components/blog/blog-card';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  subtitle: string;
  image: string;
  category: string;
}

const BlogList = () => {

  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");

  const fetchBlogs = useCallback(async () => {
    try {
      const response = await axios.get('/api/blog', {
        params: { q: searchQuery }
      });
      setBlogs(response.data.blog || []);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs])

  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
        <button onClick={() => setMenu("All")} className={menu === "All" ? 'bg-primary text-white py-1 px-4 rounded-sm' : ""}>All</button>
        <button onClick={() => setMenu("Technology")} className={menu === "Technology" ? 'bg-primary text-white py-1 px-4 rounded-sm' : ""}>Technology</button>
        <button onClick={() => setMenu("Startup")} className={menu === "Startup" ? 'bg-primary text-white py-1 px-4 rounded-sm' : ""}>Startup</button>
        <button onClick={() => setMenu("Business")} className={menu === "Business" ? 'bg-primary text-white py-1 px-4 rounded-sm' : ""}>Business</button>
        <button onClick={() => setMenu("Lifestyle")} className={menu === "Lifestyle" ? 'bg-primary text-white py-1 px-4 rounded-sm' : ""}>Lifestyle</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {blogs
          .filter((item) => menu === "All" ? true : item.category === menu)
          .map((item) => {
            return <BlogCard key={item._id} {...item} />
        })}
      </div>
    </div>
  )
}
export default BlogList;