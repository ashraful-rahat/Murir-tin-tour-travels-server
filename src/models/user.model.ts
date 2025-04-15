import { Schema, model } from "mongoose";
import { IUser } from "../Interfaces/user.interface";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  photo: { type: String },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  userStatus: { type: String, enum: ["active", "inactive"], default: "active" },
});

const UserModel = model<IUser>("User", userSchema);
export default UserModel;
