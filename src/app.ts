import cors from "cors";
import dotenv from "dotenv";
import express, { Application } from "express";
import { bookingRoutes } from "./routes/booking.route";
import { userRoutes } from "./routes/user.route";
import { tourRoutes } from "./routes/tour.route";
import { reviewRoutes } from "./routes/review.route";
dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/bookings", bookingRoutes);
app.use("/api/v1/tours", tourRoutes);
app.use("/api/v1/reviews", reviewRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to Murir Tin Tour and Travels!",
  });
});

export default app;
