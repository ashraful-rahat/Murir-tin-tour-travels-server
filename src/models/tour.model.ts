import { Schema, model } from "mongoose";
import { ITour } from "../Interfaces/tour.interface";

const tourSchema = new Schema<ITour>({
  name: { type: String, required: true },
  durationHours: { type: Number, required: true },
  ratingAverage: { type: Number, default: 4.5 },
  ratingQuantity: { type: Number, default: 0 },
  price: { type: Number, required: true },
  image: { type: String },
  images: [{ type: String }],
  createAt: { type: Date, default: Date.now },
  startDates: [{ type: Date }],
  startLocation: { type: String },
  location: [{ type: String }],
  slug: { type: String, unique: true },
});

const TourModel = model<ITour>("Tour", tourSchema);
export default TourModel;
