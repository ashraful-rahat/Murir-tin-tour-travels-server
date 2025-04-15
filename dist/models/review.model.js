"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    review: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    createAt: { type: Date, default: Date.now },
    tour: { type: mongoose_1.Schema.Types.ObjectId, ref: "Tour", required: true },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
});
const ReviewModel = (0, mongoose_1.model)("Review", reviewSchema);
exports.default = ReviewModel;
