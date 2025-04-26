import express from "express";
import { tourController } from "../controller/tour.controller";

const router = express.Router();

router.post("/create-tour", tourController.createTour);

router.get("/", tourController.allTours);

router.get("/:id", tourController.getSingleTour);

router.patch("/:id", tourController.updateTour);

router.delete("/:id", tourController.deleteTour);

export const tourRoutes = router;
