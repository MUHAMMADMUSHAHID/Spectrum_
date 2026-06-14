import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { errorMiddleware } from "./middleware/error.js";
import formRouter from "./routes/route.js";
import { dbConnection } from "./database/dbConnection.js";

dotenv.config({ path: "./config/config.env" });

const app = express();

// Connect Database
dbConnection();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST"],
  })
);

// Root Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

// API Routes
app.use("/api/v1", formRouter);

// Error Middleware
app.use(errorMiddleware);

export default app;