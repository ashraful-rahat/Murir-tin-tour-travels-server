import cors from "cors";
import dotenv from "dotenv";
import express, { Application } from "express";

dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to Murir Tin Tour and Travels!",
  });
});

export default app;
