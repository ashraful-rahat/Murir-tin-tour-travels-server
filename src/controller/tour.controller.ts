import { Request, Response } from "express";
import { tourServices } from "../services/tour.service";

const createTour = async (req: Request, res: Response) => {
  try {
    const tourData = req.body;
    const result = await tourServices.createTour(tourData);

    res.status(201).json({
      status: "success",
      message: "Tour created Successfully",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: error.message || "Something went wrong",
    });
  }
};

const allTours = async (req: Request, res: Response) => {
  try {
    const result = await tourServices.allTours();

    res.status(200).json({
      status: "success",
      message: "Tours fetched Successfully",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: error.message || "Something went wrong",
    });
  }
};

const getSingleTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await tourServices.getSingleTour(id);

    res.status(200).json({
      status: "success",
      message: "Single Tour fetched Successfully",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: error.message || "Something went wrong",
    });
  }
};

const updateTour = async (req: Request, res: Response) => {
  try {
    const tourData = req.body;
    const id = req.params.id;
    await tourServices.updateTour(id, tourData);

    res.status(200).json({
      status: "success",
      message: "Tour updated Successfully",
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: error.message || "Something went wrong",
    });
  }
};

const deleteTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await tourServices.deleteTour(id);

    res.status(200).json({
      status: "success",
      message: "Tour deleted Successfully",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: error.message || "Something went wrong",
    });
  }
};

export const tourController = {
  createTour,
  allTours,
  getSingleTour,
  updateTour,
  deleteTour,
};
