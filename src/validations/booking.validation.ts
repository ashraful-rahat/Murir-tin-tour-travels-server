import { z } from "zod";

const objectIdRegex = /^[0-9a-fA-F]{24}$/;

export const bookingValidationSchema = z.object({
  body: z.object({
    user: z.string({
      required_error: "User ID is required",
    }).regex(objectIdRegex, "Invalid User ID format"),

    tour: z.string({
      required_error: "Tour ID is required",
    }).regex(objectIdRegex, "Invalid Tour ID format"),

    bookedSlots: z.number({
      required_error: "Booked slots are required",
    }).int().min(1, "Booked slots must be at least 1"),

    price: z.number({
      required_error: "Price is required",
    }).min(0, "Price must be a non-negative number"),

    bookingStatus: z.enum(["pending", "paid", "cancelled"]).optional(),
  }),
});

export const bookingIdValidationSchema = z.object({
  params: z.object({
    id: z.string().regex(objectIdRegex, "Invalid Booking ID format"),
  }),
});
