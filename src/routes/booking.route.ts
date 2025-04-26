import express from "express";
import { bookingController } from "../controller/booking.controller";

const router = express.Router();

router.post("/create-booking", bookingController.createBooking);

router.get("/", bookingController.allBookings);

router.get("/:id", bookingController.getSingleBooking);

router.patch("/:id", bookingController.updateBooking);

router.delete("/:id", bookingController.deleteBooking);

export const bookingRoutes = router;
