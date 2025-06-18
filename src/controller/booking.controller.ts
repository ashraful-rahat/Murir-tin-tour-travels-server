import { Request, Response, NextFunction } from "express";
import { bookingServices } from "../services/booking.service";

const createBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bookingData = req.body;
    const result = await bookingServices.createBooking(bookingData);

    res.status(201).json({
      status: "success",
      message: "Booking created successfully",
      data: result,
    });
  } catch (error) {
    next(error); // Better error delegation
  }
};

const allBookings = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await bookingServices.allBookings();
    res.status(200).json({
      status: "success",
      message: "All bookings fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const result = await bookingServices.getSingleBooking(id);
    res.status(200).json({
      status: "success",
      message: "Booking fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const bookingData = req.body;
    const result = await bookingServices.updateBooking(id, bookingData);
    res.status(200).json({
      status: "success",
      message: "Booking updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const result = await bookingServices.deleteBooking(id);
    res.status(200).json({
      status: "success",
      message: "Booking deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const bookingController = {
  createBooking,
  allBookings,
  getSingleBooking,
  updateBooking,
  deleteBooking,
};
