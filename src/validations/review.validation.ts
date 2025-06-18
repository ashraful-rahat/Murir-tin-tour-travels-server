import { z } from "zod";

export const createReviewSchema = z.object({
  review: z.string().min(1),
  rating: z.number().min(1).max(5),
  tour: z.string().length(24, "Invalid tour ID"),
  user: z.string().length(24, "Invalid user ID"),
});
