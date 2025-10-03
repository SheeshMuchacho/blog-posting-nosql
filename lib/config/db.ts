import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://sheedhmashood:Haribro123@cluster0.n86f3gy.mongodb.net/')
    console.log("DB Connected");
}