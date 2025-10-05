"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface BlogData {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  author: string;
  authorImg: string;
}

export default function EditBlog({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [image, setImage] = useState<File | null>(null);
  const [oldImage, setOldImage] = useState<string>("");
  const [data, setData] = useState<BlogData>({
    title: "",
    subtitle: "",
    description: "",
    category: "Startup",
    author: "Acumen Admin",
    authorImg: "/logo/ailogo.png",
  });

  const fetchBlogData = async () => {
    try {
      const response = await axios.get(`/api/blog?slug=${params.slug}`);
      if (response.data.blog) {
        const blog = response.data.blog;
        setData({
          title: blog.title,
          subtitle: blog.subtitle,
          description: blog.description,
          category: blog.category,
          author: blog.author,
          authorImg: blog.authorImg,
        });
        setOldImage(blog.image);
      } else {
        toast.error("Blog not found");
        router.push("/admin/blog-list");
      }
    } catch (error) {
      toast.error("Error fetching blog data");
      router.push("/admin/blog-list");
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [params.slug]);

  const onChangeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("subtitle", data.subtitle);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.put(`/api/blog?slug=${params.slug}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        toast.success(response.data.message ?? "Blog updated successfully");
        router.push("/admin/blog-list");
      } else {
        toast.error(response.data.message ?? "Error occurred");
      }
    } catch (err) {
      toast.error("Server error. Try again later.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="" noValidate>
      <p className="text-xl">Upload Thumbnail</p>
      <label htmlFor="image">
        <Image className="mt-4" src={image ? URL.createObjectURL(image) : oldImage || "/admin/upload_area.png"} width={140} height={70} alt="thumbnail" />
      </label>
      <input onChange={(e) => setImage(e.target.files?.[0] || null)} type="file" id="image" hidden />

      <p className="text-xl mt-4">Blog Title</p>
      <input name="title" onChange={onChangeHandler} value={data.title} className="w-full sm:w-[500px] mt-4 px-4 py-3 border" type="text" placeholder="Type here" required />

      <p className="text-xl mt-4">Blog Subtitle</p>
      <input name="subtitle" onChange={onChangeHandler} value={data.subtitle} className="w-full sm:w-[500px] mt-4 px-4 py-3 border" type="text" placeholder="Type here" required />

      <p className="text-xl mt-4">Blog Description</p>
      <textarea name="description" onChange={onChangeHandler} value={data.description} className="w-full sm:w-[500px] mt-4 px-4 py-3 border" placeholder="Write content here" rows={6} required />

      <p className="text-xl mt-4">Blog Category</p>
      <select name="category" onChange={onChangeHandler} value={data.category} className="w-40 mt-4 px-4 py-3 border text-gray-500" required>
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Business">Business</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>

      <br />
      <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
        Save Changes
      </button>
    </form>
  );
}