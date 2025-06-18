import express from "express";
import { loginSchema, registerSchema } from "../validations/auth.validation";
import { authController } from "../controller/auth.controller";
import validateRequest from "../middlewares/validateRequest";


const router = express.Router();

// Apply validateRequest middleware with the appropriate schemas
router.post("/register", validateRequest(registerSchema), authController.register);
router.post("/login", validateRequest(loginSchema), authController.login);

export const authRoutes = router;