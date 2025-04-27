import { IBooking } from "../Interfaces/booking.interface";
import BookingModel from "../models/booking.model";

// Create a booking
const createBooking = async (bookingData: IBooking): Promise<IBooking> => {
  const result = await BookingModel.create(bookingData);
  return result;
};

// Fetch all bookings with auto-populated tour details
const allBookings = async (): Promise<IBooking[]> => {
  const result = await BookingModel.find(); // No need for populate, tourDetails is auto-populated via virtuals
  return result;
};

// Fetch a single booking with auto-populated tour details
const getSingleBooking = async (id: string): Promise<IBooking | null> => {
  const result = await BookingModel.findById(id); // Again, no need for populate
  return result;
};

// Update a booking
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

// Delete a booking
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
