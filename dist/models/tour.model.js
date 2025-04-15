"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tourSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    durationHours: { type: Number, required: true },
    ratingAverage: { type: Number, default: 4.5 },
    ratingQuantity: { type: Number, default: 0 },
    price: { type: Number, required: true },
    image: { type: String },
    images: [{ type: String }],
    createAt: { type: Date, default: Date.now },
    startDates: [{ type: Date }],
    startLocation: { type: String },
    location: [{ type: String }],
    slug: { type: String, unique: true },
});
const TourModel = (0, mongoose_1.model)("Tour", tourSchema);
exports.default = TourModel;
