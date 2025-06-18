// src/controller/review.controller.ts
import { Request, Response, NextFunction } from "express";
import { reviewServices } from "../services/review.service";
import { StatusCodes } from "http-status-codes";

const createReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await reviewServices.createReview(req.body);

    res.status(StatusCodes.CREATED).json({
      status: "success",
      message: "Review created successfully",
      data: result,
    });
  } catch (error: any) {
    if (error.name === "ValidationError") {
      res.status(StatusCodes.BAD_REQUEST).json({
        status: "fail",
        message: "Invalid review data",
      });
      return;
    }
    next(error);
  }
};

const allReviews = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await reviewServices.allReviews();

    res.status(StatusCodes.OK).json({
      status: "success",
      results: result.length,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await reviewServices.getSingleReview(id);

    if (!result) {
      res.status(StatusCodes.NOT_FOUND).json({
        status: "fail",
        message: "Review not found",
      });
      return;
    }

    res.status(StatusCodes.OK).json({
      status: "success",
      data: result,
    });
  } catch (error: any) {
    if (error.name === 'CastError') {
      res.status(StatusCodes.BAD_REQUEST).json({
        status: "fail",
        message: "Invalid review ID format",
      });
      return;
    }
    next(error);
  }
};

const updateReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await reviewServices.updateReview(id, req.body);

    if (!result) {
      res.status(StatusCodes.NOT_FOUND).json({
        status: "fail",
        message: "Review not found",
      });
      return;
    }

    res.status(StatusCodes.OK).json({
      status: "success",
      message: "Review updated successfully",
      data: result,
    });
  } catch (error: any) {
    if (error.name === 'CastError') {
      res.status(StatusCodes.BAD_REQUEST).json({
        status: "fail",
        message: "Invalid review ID format",
      });
      return;
    }
    next(error);
  }
};

const deleteReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await reviewServices.deleteReview(id);

    if (!result) {
      res.status(StatusCodes.NOT_FOUND).json({
        status: "fail",
        message: "Review not found",
      });
      return;
    }

    res.status(StatusCodes.OK).json({
      status: "success",
      message: "Review deleted successfully",
      data: null,
    });
  } catch (error: any) {
    if (error.name === 'CastError') {
      res.status(StatusCodes.BAD_REQUEST).json({
        status: "fail",
        message: "Invalid review ID format",
      });
      return;
    }
    next(error);
  }
};

export const reviewController = {
  createReview,
  allReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
