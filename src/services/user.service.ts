import { IUser } from "../Interfaces/user.interface";
import UserModel from "../models/user.model";

const createUserFromServices = async (userData: IUser): Promise<IUser> => {
  const result = await UserModel.create(userData);

  return result;
};

export const userServices = {
  createUserFromServices,
};
