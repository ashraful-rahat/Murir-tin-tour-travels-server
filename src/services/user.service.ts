import { IUser } from "../Interfaces/user.interface";
import UserModel from "../models/user.model";

const createUser = async (userData: IUser): Promise<IUser> => {
  const result = await UserModel.create(userData);

  return result;
};

const allUser = async (): Promise<IUser[]> => {
  const result = await UserModel.find();
  return result;
};

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await UserModel.findById(id);
  return result;
};

const updateUser = async (
  id: string,
  userData: IUser
): Promise<IUser | null> => {
  const result = await UserModel.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await UserModel.findByIdAndDelete(id);
  return result;
};

export const userServices = {
  createUser,
  allUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
