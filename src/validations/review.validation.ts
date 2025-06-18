import { z } from "zod";

// A simple regex for MongoDB ObjectId validation (24 hex characters)
const objectIdRegex = /^[0-9a-fA-F]{24}$/;

const createReviewValidationSchema = z.object({
  body: z.object({
    review: z.string({
      required_error: "Review text is required",
      invalid_type_error: "Review must be a string",
    }).min(1, "Review cannot be empty"),

    rating: z.number({
      required_error: "Rating is required",
      invalid_type_error: "Rating must be a number",
    })
      .int("Rating must be an integer")
      .min(1, "Rating must be at least 1")
      .max(5, "Rating cannot exceed 5"),

    createAt: z.preprocess((arg) => {
      if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
    }, z.date()).optional(),

    tour: z.string({
      required_error: "Tour ID is required",
      invalid_type_error: "Tour ID must be a string",
    }).regex(objectIdRegex, "Invalid Tour ID format"),

    user: z.string({
      required_error: "User ID is required",
      invalid_type_error: "User ID must be a string",
    }).regex(objectIdRegex, "Invalid User ID format"),
  }),
});

const updateReviewValidationSchema = z.object({
  body: z.object({
    review: z.string().min(1).optional(),
    rating: z.number().min(1).max(5).optional(),
    tour: z.string().regex(objectIdRegex).optional(),
    user: z.string().regex(objectIdRegex).optional(),
    createAt: z.preprocess((arg) => {
      if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
    }, z.date()).optional(),
  }),
});

const reviewIdValidationSchema = z.object({
  params: z.object({
    id: z.string().regex(objectIdRegex, "Invalid Review ID format"),
  }),
});

export const ReviewValidation = {
  createReviewValidationSchema,
  updateReviewValidationSchema,
  reviewIdValidationSchema,
};
