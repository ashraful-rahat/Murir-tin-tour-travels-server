import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { authService } from "../services/auth.service";

const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, age, photo } = req.body;
    const user = await authService.registerUser(name, email, password, age, photo);

    res.status(StatusCodes.CREATED).json({
      status: "success",
      message: "User registered successfully",
      data: user,
    });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: "fail",
      message: error.message || "Something went wrong during registration",
    });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await authService.loginUser(email, password);

    res.status(StatusCodes.OK).json({
      status: "success",
      message: "User logged in successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      status: "fail",
      message: error.message || "Invalid email or password",
    });
  }
};


export const authController = {
  register,
  login,
};
