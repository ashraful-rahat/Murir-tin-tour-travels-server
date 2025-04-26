import { Request, Response } from "express";
import { bookingServices } from "../services/booking.service";

const createBooking = async (req: Request, res: Response) => {
  try {
    const bookingData = req.body;
    const result = await bookingServices.createBooking(bookingData);

    res.status(201).json({
      status: "success",
      message: "Booking created Successfully",
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

const allBookings = async (req: Request, res: Response) => {
  try {
    const result = await bookingServices.allBookings();

    res.status(200).json({
      status: "success",
      message: "Bookings fetched Successfully",
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

const getSingleBooking = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await bookingServices.getSingleBooking(id);

    res.status(200).json({
      status: "success",
      message: "Single Booking fetched Successfully",
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

const updateBooking = async (req: Request, res: Response) => {
  try {
    const bookingData = req.body;
    const id = req.params.id;
    await bookingServices.updateBooking(id, bookingData);

    res.status(200).json({
      status: "success",
      message: "Booking updated Successfully",
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: error.message || "Something went wrong",
    });
  }
};

const deleteBooking = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await bookingServices.deleteBooking(id);

    res.status(200).json({
      status: "success",
      message: "Booking deleted Successfully",
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

export const bookingController = {
  createBooking,
  allBookings,
  getSingleBooking,
  updateBooking,
  deleteBooking,
};
