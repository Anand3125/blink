import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/connectDB.js";
import userRouter from "./route/user.route.js";
import categoryRouter from "./route/category.route.js";
import uploadRouter from "./route/upload.router.js";
import subCategoryRouter from "./route/subCategory.route.js";
import productRouter from "./route/product.route.js";
import cartRouter from "./route/cart.route.js";
import addressRouter from "./route/address.route.js";
import orderRouter from "./route/order.route.js";

const app = express();

// 🌍 Enable CORS
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL,
    })
);

// 🛠️ Middleware setup
app.use(express.json()); // 📦 Parse JSON requests
app.use(cookieParser()); // 🍪 Parse cookies
app.use(morgan("dev")); // 📜 Log HTTP requests
app.use(
    helmet({
        crossOriginResourcePolicy: false,
    })
); // 🛡️ Secure Express apps

const PORT = process.env.PORT || 8080; // ⚡ Port configuration

// 🌐 API Home Route
app.get("/", (request, response) => {
    response.json({
        message: `🚀 Server is running on port ${PORT} 🎯`,
    });
});

// 🛒 API Routes
app.use("/api/user", userRouter); // 👤 User routes
app.use("/api/category", categoryRouter); // 📂 Category routes
app.use("/api/file", uploadRouter); // 📁 File upload routes
app.use("/api/subcategory", subCategoryRouter); // 📌 Sub-category routes
app.use("/api/product", productRouter); // 🛍️ Product routes
app.use("/api/cart", cartRouter); // 🛒 Cart routes
app.use("/api/address", addressRouter); // 📍 Address routes
app.use("/api/order", orderRouter); // 📦 Order routes

// 🔗 Connect to Database & Start Server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`✅ Server is running on port ${PORT} 🚀`);
    });
});
