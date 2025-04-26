import { IBooking } from "../Interfaces/booking.interface";
import BookingModel from "../models/booking.model";

const createBooking = async (bookingData: IBooking): Promise<IBooking> => {
  const result = await BookingModel.create(bookingData);
  return result;
};

const allBookings = async (): Promise<IBooking[]> => {
  const result = await BookingModel.find().populate("user tour");
  return result;
};

const getSingleBooking = async (id: string): Promise<IBooking | null> => {
  const result = await BookingModel.findById(id).populate("user tour");
  return result;
};

const updateBooking = async (
  id: string,
  bookingData: Partial<IBooking>
): Promise<IBooking | null> => {
  const result = await BookingModel.findByIdAndUpdate(id, bookingData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteBooking = async (id: string): Promise<IBooking | null> => {
  const result = await BookingModel.findByIdAndDelete(id);
  return result;
};

export const bookingServices = {
  createBooking,
  allBookings,
  getSingleBooking,
  updateBooking,
  deleteBooking,
};
