"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define the booking schema
const bookingSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    tour: { type: mongoose_1.Schema.Types.ObjectId, ref: "Tour", required: true }, // Reference to the Tour model
    bookedSlots: { type: Number, required: true },
    price: { type: Number, required: true },
    bookingStatus: {
        type: String,
        enum: ["pending", "paid", "cancelled"],
        default: "pending",
    },
});
// Add virtual field for automatic population
bookingSchema.virtual("tourDetails", {
    ref: "Tour", // The model we want to populate
    localField: "tour", // The field in the booking document
    foreignField: "_id", // The field in the Tour model
    justOne: true, // Whether to return a single object or an array (justOne = true for single document)
});
// Enable virtuals to be included in JSON response
bookingSchema.set("toObject", { virtuals: true });
bookingSchema.set("toJSON", { virtuals: true });
// Create and export the model
const BookingModel = (0, mongoose_1.model)("Booking", bookingSchema);
exports.default = BookingModel;
