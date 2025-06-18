import { z } from "zod";

// Common password requirements
const passwordValidation = z.string()
  .min(6, "Password must be at least 6 characters")
  .max(50, "Password too long");

// Register validation schema
export const registerSchema = z.object({
  body: z.object({
    name: z.string().min(2, "Name too short"),
    email: z.string().email("Invalid email format"),
    password: passwordValidation,
    age: z.number().min(13, "Must be at least 13 years old"),
    photo: z.string().url("Invalid photo URL").optional()
  })
});

// Login validation schema
export const loginSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(1, "Password required")
  })
});