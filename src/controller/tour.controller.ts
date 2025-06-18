// src/controller/tour.controller.ts
import { Request, Response, NextFunction } from "express";
import { tourServices } from "../services/tour.service";
import { StatusCodes } from "http-status-codes";
import { ITour } from "../Interfaces/tour.interface";

const createTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await tourServices.createTour(req.body);
    res.status(StatusCodes.CREATED).json({
      status: "success",
      message: "Tour created successfully",
      data: result,
    });
  } catch (error: any) {
    if (error.code === 11000) {
      res.status(StatusCodes.CONFLICT).json({
        status: "fail",
        message: "Tour with this name already exists",
      });
      return;
    }
    next(error);
  }
};

const allTours = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await tourServices.allTours();
    res.status(StatusCodes.OK).json({
      status: "success",
      results: result.length,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await tourServices.getSingleTour(id);

    if (!result) {
      res.status(StatusCodes.NOT_FOUND).json({
        status: "fail",
        message: "Tour not found",
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
        message: "Invalid tour ID format",
      });
      return;
    }
    next(error);
  }
};

const updateTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await tourServices.updateTour(id, req.body);

    if (!result) {
      res.status(StatusCodes.NOT_FOUND).json({
        status: "fail",
        message: "Tour not found",
      });
      return;
    }

    res.status(StatusCodes.OK).json({
      status: "success",
      message: "Tour updated successfully",
      data: result,
    });
  } catch (error: any) {
    if (error.code === 11000) {
      res.status(StatusCodes.CONFLICT).json({
        status: "fail",
        message: "Tour with this name already exists",
      });
      return;
    }
    next(error);
  }
};

const deleteTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await tourServices.deleteTour(id);

    if (!result) {
      res.status(StatusCodes.NOT_FOUND).json({
        status: "fail",
        message: "Tour not found",
      });
      return;
    }

    res.status(StatusCodes.OK).json({
      status: "success",
      message: "Tour deleted successfully",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

export const tourController = {
  createTour,
  allTours,
  getSingleTour,
  updateTour,
  deleteTour,
};