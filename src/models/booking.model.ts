import { Schema, model } from "mongoose";
import { IBooking } from "../Interfaces/booking.interface";

const bookingSchema = new Schema<IBooking>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  tour: { type: Schema.Types.ObjectId, ref: "Tour", required: true },
  bookedSlots: { type: Number, required: true },
  price: { type: Number, required: true },
  bookingStatus: {
    type: String,
    enum: ["pending", "paid", "cancelled"],
    default: "pending",
  },
});

const BookingModel = model<IBooking>("Booking", bookingSchema);
export default BookingModel;
