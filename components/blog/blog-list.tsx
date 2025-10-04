'use client'

import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';
import BlogCard from './../../components/blog/blog-card';

interface Blog {
  _id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
}

const BlogList = () => {

  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = useCallback(async () => {
    try {
      const response = await axios.get('/api/blog');
      setBlogs(response.data.blog || []);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  }, []);

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
            return <BlogCard key={item._id} id={item._id} image={item.image} title={item.title} subtitle={item.subtitle} category={item.category} />
        })}
      </div>
    </div>
  )
}
export default BlogList;