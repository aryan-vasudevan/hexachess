import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
    try {
        if (!MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined");
        }

        if (mongoose.connection.readyState >= 1) {
            return;
        }

        await mongoose.connect(MONGODB_URI);

        console.log("MongoDB Connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};
