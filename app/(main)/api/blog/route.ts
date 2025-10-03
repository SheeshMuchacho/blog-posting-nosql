import { ConnectDB } from "@/lib/config/db"
import { NextResponse } from "next/server"
import {writeFile} from 'fs/promises';
import BlogModel from "@/lib/models/BlogModel";

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

export async function GET(request){
    console.log("Blog Get Hit")
    return NextResponse.json({msg:"API Works"})
}

export async function POST(request){
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/blogs/${timestamp}_${image.name}`
    await writeFile(path,buffer);
    const imgUrl = `/${timestamp}_${image.name}`

    const blogData = {
        title:formData.get('title'),
        subtitle:formData.get('subtitle'),
        description:formData.get('description'),
        slug:formData.get('slug'),
        image:imgUrl,
        author:formData.get('author'),
        authorImg:formData.get('authorImg')
    }

    await BlogModel.create(blogData);
    console.log("Blog Created");

    return NextResponse.json({success:true, msg:"Blog Created"})
}