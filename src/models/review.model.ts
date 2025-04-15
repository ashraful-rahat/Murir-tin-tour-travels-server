import { Schema, model } from "mongoose";
import { IReview } from "../Interfaces/review.interface";

const reviewSchema = new Schema<IReview>({
  review: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  createAt: { type: Date, default: Date.now },
  tour: { type: Schema.Types.ObjectId, ref: "Tour", required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const ReviewModel = model<IReview>("Review", reviewSchema);
export default ReviewModel;
