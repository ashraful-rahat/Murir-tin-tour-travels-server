import { Schema, model } from "mongoose";
import { IUser } from "../Interfaces/user.interface";
import bcrypt from "bcryptjs";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 6 },
  photo: { type: String },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  userStatus: { type: String, enum: ["active", "inactive"], default: "active" },
});

// Pre-save: Hash password if modified
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password method (for login)
userSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const UserModel = model<IUser>("User", userSchema);
export default UserModel;
