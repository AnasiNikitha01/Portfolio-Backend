import mongoose from "mongoose";

export async function Connection(){
    try {
        const connect = await mongoose.connect(process.env.Mongo_URL);
        console.log('Connected to DataBase');
    } catch (error) {
        console.log(`error in Connection ${error}`);
    }
}