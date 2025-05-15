import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URI)

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfully to database💚");
});

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected 💛");
    });