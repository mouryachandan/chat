// Importing modules
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";

// Importing routes and socket setup
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./SocketIO/server.js";

// Load environment variables
dotenv.config();

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// MongoDB connection
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;

try {
  await mongoose.connect(URI);
  console.log("✅ Connected to MongoDB");
} catch (error) {
  console.error("❌ MongoDB Connection Failed:", error);
}

// API Routes setup
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

// Serve Frontend build in production
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "Frontend", "dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
  });
}

// Start server
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
