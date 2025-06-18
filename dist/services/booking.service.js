"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingServices = void 0;
const booking_model_1 = __importDefault(require("../models/booking.model"));
// Create a booking
const createBooking = (bookingData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.default.create(bookingData);
    return result;
});
// Fetch all bookings with auto-populated tour details
const allBookings = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.default.find(); // No need for populate, tourDetails is auto-populated via virtuals
    return result;
});
// Fetch a single booking with auto-populated tour details
const getSingleBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.default.findById(id); // Again, no need for populate
    return result;
});
// Update a booking
const updateBooking = (id, bookingData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.default.findByIdAndUpdate(id, bookingData, {
        new: true,
        runValidators: true,
    });
    return result;
});
// Delete a booking
const deleteBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.default.findByIdAndDelete(id);
    return result;
});
exports.bookingServices = {
    createBooking,
    allBookings,
    getSingleBooking,
    updateBooking,
    deleteBooking,
};
