import { ConnectDB } from "@/lib/config/db"
import { NextRequest, NextResponse } from "next/server";
import {writeFile, unlink} from 'fs/promises';
import fs from 'fs';
import BlogModel from "@/lib/models/BlogModel";

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

// Helper function to generate a slug
const slugify = (text: string): string => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')       // Replace spaces with -
        .replace(/[^\w\-]+/g, '')   // Remove all non-word chars except hyphens
        .replace(/\-\-+/g, '-');    // Replace multiple hyphens with a single one
};

const getString = (value: FormDataEntryValue | null): string => {
    return value ? String(value) : '';
};

// API Endpoint For Getting Blogs
export async function GET(request: NextRequest){
    const id = request.nextUrl.searchParams.get("id"); // for delete
    const slug = request.nextUrl.searchParams.get("slug"); // for edit
    if (id) {
        const blog = await BlogModel.findById(id);
        return NextResponse.json({blog});
    }
    if (slug) {
        const blog = await BlogModel.findOne({ slug });
        return NextResponse.json({blog});
    }
    const blogs = await BlogModel.find({});
    return NextResponse.json({blog: blogs})
}

// API Endpoint For Uploading Blogs
export async function POST(request: NextRequest){
    const formData = await request.formData();

    const timestamp = Date.now();

    const image = formData.get('image') as File;

    if (!image) {
        return NextResponse.json({ success: false, message: "No image uploaded" }, { status: 400 });
    }

    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/blogs/${timestamp}_${image.name}`
    await writeFile(path,buffer);
    const imgUrl = `/blogs/${timestamp}_${image.name}`

    const title = getString(formData.get('title'));

    const blogData = {
        title: title,
        slug: slugify(title),
        subtitle: getString(formData.get('subtitle')),
        description: getString(formData.get('description')),
        category: getString(formData.get('category')),
        image:imgUrl,
        author: getString(formData.get('author')),
        authorImg: getString(formData.get('authorImg'))
    }

    await BlogModel.create(blogData);

    return NextResponse.json({success:true, message:"Blog Added Successfully"})
}

// API Endpoint For Updating a Blog
export async function PUT(request: NextRequest) {
    const slugParam = request.nextUrl.searchParams.get('slug');
    if (!slugParam) {
        return NextResponse.json({ success: false, message: "No slug provided" }, { status: 400 });
    }

    const formData = await request.formData();
    const image = formData.get('image') as File | null;

    const title = getString(formData.get('title'));

    const blogData: any = {
        title: title,
        slug: slugify(title),
        subtitle: getString(formData.get('subtitle')),
        description: getString(formData.get('description')),
        category: getString(formData.get('category')),
        author: getString(formData.get('author')),
        authorImg: getString(formData.get('authorImg'))
    };

    if (image) {
        const oldBlog = await BlogModel.findOne({ slug: slugParam });
        if (oldBlog && oldBlog.image && fs.existsSync(`.${oldBlog.image}`)) {
            await unlink(`.${oldBlog.image}`);
        }
        const timestamp = Date.now();
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const path = `./public/blogs/${timestamp}_${image.name}`;
        await writeFile(path, buffer);
        blogData.image = `/blogs/${timestamp}_${image.name}`;
    }

    await BlogModel.findOneAndUpdate({ slug: slugParam }, blogData);
    return NextResponse.json({ success: true, message: "Blog Updated Successfully" });
}

// API Endpoint For Deleting a Blog
export async function DELETE(request: NextRequest){
    const id = request.nextUrl.searchParams.get('id');
    if (!id) {
        return NextResponse.json({ success: false, message: "No ID provided" }, { status: 400 });
    }

    try {
        const blog = await BlogModel.findById(id);
        if (!blog) {
            return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 });
        }

        const imagePath = `.${blog.image}`;
        if (fs.existsSync(imagePath)) {
            await unlink(imagePath);
        }
        await BlogModel.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: "Blog Deleted Successfully" });
    } catch (error) {
        console.error("Error deleting blog:", error);
        return NextResponse.json({ success: false, message: "Error deleting blog" }, { status: 500 });
    }
}