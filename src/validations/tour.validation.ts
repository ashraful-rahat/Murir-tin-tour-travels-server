// src/validations/tour.validation.ts
import { z } from "zod";

// Helper for date validation
const dateSchema = z.preprocess((arg) => {
  if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
}, z.date());

// Base tour validation schema
const tourValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }).min(1, "Name cannot be empty")
    .max(100, "Name cannot be longer than 100 characters"),

    durationHours: z.number({
      required_error: "Duration is required",
      invalid_type_error: "Duration must be a number",
    })
    .positive("Duration must be positive")
    .max(720, "Duration cannot exceed 720 hours (30 days)"),

    ratingAverage: z.number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating cannot exceed 5")
    .default(4.5)
    .optional(),

    ratingQuantity: z.number()
    .int("Rating quantity must be an integer")
    .min(0, "Rating quantity cannot be negative")
    .default(0)
    .optional(),

    price: z.number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    })
    .positive("Price must be positive"),

    image: z.string()
    .url("Image must be a valid URL")
    .optional(),

    images: z.array(z.string().url("Each image must be a valid URL"))
    .max(10, "Cannot have more than 10 images")
    .optional(),

    createAt: dateSchema
    .optional(),

    startDates: z.array(dateSchema)
    .max(12, "Cannot have more than 12 start dates")
    .optional(),

    startLocation: z.string()
    .min(5, "Start location must be at least 5 characters")
    .optional(),

    locations: z.array(z.string().min(5, "Each location must be at least 5 characters"))
    .max(20, "Cannot have more than 20 locations")
    .optional(),

    slug: z.string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid slug format")
    .optional(),
  }),
});

// Schema for updating a tour (all fields optional)
const updateTourValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(100).optional(),
    durationHours: z.number().positive().max(720).optional(),
    ratingAverage: z.number().min(1).max(5).optional(),
    ratingQuantity: z.number().int().min(0).optional(),
    price: z.number().positive().optional(),
    image: z.string().url().optional(),
    images: z.array(z.string().url()).max(10).optional(),
    createAt: dateSchema.optional(),
    startDates: z.array(dateSchema).max(12).optional(),
    startLocation: z.string().min(5).optional(),
    locations: z.array(z.string().min(5)).max(20).optional(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).optional(),
  }),
});

// Schema for tour ID validation
const tourIdValidationSchema = z.object({
  params: z.object({
    id: z.string().min(1, "Tour ID is required"),
  }),
});

export const TourValidation = {
  tourValidationSchema,
  updateTourValidationSchema,
  tourIdValidationSchema,
};