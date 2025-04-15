import express from "express";

import { userController } from "../controller/user.controller";

const router = express.Router();

router.post("/create-user", userController.createUser);

router.get("/", userController.allUser);

router.get("/:id", userController.getSingleUser);

router.patch("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

export const userRoutes = router;
