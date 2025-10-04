import { ConnectDB } from "@/lib/config/db"
import { NextRequest, NextResponse } from "next/server"
import {writeFile} from 'fs/promises';
import BlogModel from "@/lib/models/BlogModel";

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

// API Endpoint For Getting Blogs
export async function GET(request: NextRequest){
    const blog = await BlogModel.find({});
    return NextResponse.json({blog})
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

    const getString = (value: FormDataEntryValue | null): string => {
        return value ? String(value) : '';
    };

    const blogData = {
        title: getString(formData.get('title')),
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