import { z } from "zod";


export const createBookingSchema = z.object({
  user: z.string().length(24, "Invalid user ID"),
  tour: z.string().length(24, "Invalid tour ID"),
  bookedSlots: z.number().min(1, "Must be at least 1 slot"),
  price: z.number().min(0, "Price must be positive"),
  bookingStatus: z.enum(["pending", "paid", "cancelled"]).optional(),
});

// ✅ For updating a booking (all fields optional)
export const updateBookingSchema = createBookingSchema.partial();
