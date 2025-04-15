import { Request, Response } from "express";
import UserModel from "../models/user.model";

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await UserModel.create(userData);
    res.status(201).json({
      status: "success",
      message: "User created Successfully",
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

export const userController = {
  createUser,
};
