// src/routes/tour.routes.ts
import express from "express";
import validateRequest from "../middlewares/validateRequest";
import { TourValidation } from "../validations/tour.validation";
import { tourController } from "../controller/tour.controller";

const router = express.Router();

router.post(
  "/create-tour",
  validateRequest(TourValidation.tourValidationSchema),
  tourController.createTour
);

router.get("/", tourController.allTours);

router.get(
  "/:id",
  validateRequest(TourValidation.tourIdValidationSchema), // Changed to tourIdValidationSchema
  tourController.getSingleTour
);

router.patch(
  "/:id",
  validateRequest(TourValidation.tourIdValidationSchema), // First validate ID
  validateRequest(TourValidation.updateTourValidationSchema), // Then validate body
  tourController.updateTour
);

router.delete(
  "/:id",
  validateRequest(TourValidation.tourIdValidationSchema), // Changed to tourIdValidationSchema
  tourController.deleteTour
);

export const tourRoutes = router;