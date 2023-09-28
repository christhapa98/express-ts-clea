
import mongoose from "mongoose";

const connectMongoose = (url: string): Promise<typeof mongoose> => {
    mongoose.set("strictQuery", true);
    const option: mongoose.ConnectOptions = {
    };
    return mongoose.connect(url, option)
}

export default connectMongoose;