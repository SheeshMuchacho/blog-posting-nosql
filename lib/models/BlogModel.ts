import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    subtitle:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    image:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    authorImg:{
        type:String,
        required:true
    },
})

const BlogModel = mongoose.models.blog || mongoose.model('blog',Schema);

export default BlogModel;