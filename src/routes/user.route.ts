import express from "express";
import validateRequest from "../middlewares/validateRequest";
import { UserValidation } from "../validations/user.validation";
import { userController } from "../controller/user.controller";


const router = express.Router();

// Create a new user
router.post(
  "/create-user",
  validateRequest(UserValidation.userValidationSchema),
  userController.createUser
);

// Get all users
router.get(
  "/",
  userController.allUser
);

// Get single user by ID
router.get(
  "/:id",
  validateRequest(UserValidation.getUserValidationSchema),
  userController.getSingleUser
);

// Update user by ID
router.patch(
  "/:id",
  validateRequest(UserValidation.updateUserValidationSchema),
  userController.updateUser
);

// Delete user by ID
router.delete(
  "/:id",
  validateRequest(UserValidation.getUserValidationSchema),
  userController.deleteUser
);

export const userRoutes = router;