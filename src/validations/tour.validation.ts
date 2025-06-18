import { z } from "zod";

export const createTourSchema = z.object({
  name: z.string().min(1),
  durationHours: z.number().min(1),
  ratingAverage: z.number().min(0).max(5).optional(),
  ratingQuantity: z.number().min(0).optional(),
  price: z.number().min(0),
  image: z.string().url().optional(),
  images: z.array(z.string().url()).optional(),
  startDates: z.array(z.coerce.date()).optional(),
  startLocation: z.string().optional(),
  location: z.array(z.string()).optional(),
  slug: z.string().optional(),
});
