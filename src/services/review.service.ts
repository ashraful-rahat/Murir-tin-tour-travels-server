import { IReview } from "../Interfaces/review.interface";
import ReviewModel from "../models/review.model";

const createReview = async (reviewData: IReview): Promise<IReview> => {
  const result = await ReviewModel.create(reviewData);
  return result;
};

const allReviews = async (): Promise<IReview[]> => {
  const result = await ReviewModel.find().populate("tour user");
  return result;
};

const getSingleReview = async (id: string): Promise<IReview | null> => {
  const result = await ReviewModel.findById(id).populate("tour user");
  return result;
};

const updateReview = async (
  id: string,
  reviewData: Partial<IReview> // partial so you can update only some fields
): Promise<IReview | null> => {
  const result = await ReviewModel.findByIdAndUpdate(id, reviewData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteReview = async (id: string): Promise<IReview | null> => {
  const result = await ReviewModel.findByIdAndDelete(id);
  return result;
};

export const reviewServices = {
  createReview,
  allReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
