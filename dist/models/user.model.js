"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    photo: { type: String },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    userStatus: { type: String, enum: ["active", "inactive"], default: "active" },
});
const UserModel = (0, mongoose_1.model)("User", userSchema);
exports.default = UserModel;
