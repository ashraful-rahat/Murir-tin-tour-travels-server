import express from "express";
import { bookingController } from "../controller/booking.controller";
import validateRequest from "../middlewares/validateRequest";
import {
  bookingValidationSchema,
  bookingIdValidationSchema,
} from "../validations/booking.validation";

const router = express.Router();

router.post(
  "/create-booking",
  validateRequest(bookingValidationSchema),
  bookingController.createBooking
);

router.get("/", bookingController.allBookings);

router.get(
  "/:id",
  validateRequest(bookingIdValidationSchema),
  bookingController.getSingleBooking
);

router.patch(
  "/:id",
  validateRequest(bookingIdValidationSchema),
  validateRequest(bookingValidationSchema),
  bookingController.updateBooking
);

router.delete(
  "/:id",
  validateRequest(bookingIdValidationSchema),
  bookingController.deleteBooking
);

export const bookingRoutes = router;
