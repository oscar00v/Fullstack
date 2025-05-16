import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on("open", () => {
  console.log("Database connection 🟢☜(ﾟヮﾟ☜)");
});

mongoose.connection.on("disconnected", () => {
  console.warn("Database disconnected 🟡");
});
