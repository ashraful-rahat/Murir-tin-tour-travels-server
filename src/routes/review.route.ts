// src/routes/review.routes.ts
import express from "express";
import { reviewController } from "../controller/review.controller";
import validateRequest from "../middlewares/validateRequest";
import { ReviewValidation } from "../validations/review.validation";

const router = express.Router();

router.post(
  "/create-review",
  validateRequest(ReviewValidation.createReviewValidationSchema),
  reviewController.createReview
);

router.get("/", reviewController.allReviews);

router.get(
  "/:id",
  validateRequest(ReviewValidation.reviewIdValidationSchema),
  reviewController.getSingleReview
);

router.patch(
  "/:id",
  validateRequest(ReviewValidation.reviewIdValidationSchema),
  validateRequest(ReviewValidation.updateReviewValidationSchema),
  reviewController.updateReview
);

router.delete(
  "/:id",
  validateRequest(ReviewValidation.reviewIdValidationSchema),
  reviewController.deleteReview
);

export const reviewRoutes = router;
