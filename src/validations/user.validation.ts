// src/validations/user.validation.ts
import { z } from "zod";

// Define the schema for user validation
const userValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }).min(1, { message: "Name cannot be empty" }),

    age: z.number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    }).positive({ message: "Age must be a positive number" })
    .int({ message: "Age must be an integer" })
    .min(18, { message: "User must be at least 18 years old" }),

    email: z.string({
      required_error: "Email is required",
    }).email({ message: "Invalid email address" }),

    photo: z.string().optional(),

    role: z.enum(["user", "admin"], {
      errorMap: () => ({ message: "Role must be either 'user' or 'admin'" }),
    }).default("user"),

    userStatus: z.enum(["active", "inactive"], {
      errorMap: () => ({ message: "Status must be either 'active' or 'inactive'" }),
    }).default("active"),
  }),
});

// Schema for updating a user (make all fields optional)
const updateUserValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1).optional(),
    age: z.number().positive().int().min(18).optional(),
    email: z.string().email().optional(),
    photo: z.string().optional(),
    role: z.enum(["user", "admin"]).optional(),
    userStatus: z.enum(["active", "inactive"]).optional(),
  }),
});

// Schema for fetching a single user (just needs the ID)
const getUserValidationSchema = z.object({
  params: z.object({
    id: z.string().min(1, { message: "User ID is required" }),
  }),
});

export const UserValidation = {
  userValidationSchema,
  updateUserValidationSchema,
  getUserValidationSchema,
};