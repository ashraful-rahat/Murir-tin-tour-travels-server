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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingController = void 0;
const booking_service_1 = require("../services/booking.service");
const createBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookingData = req.body;
        const result = yield booking_service_1.bookingServices.createBooking(bookingData);
        res.status(201).json({
            status: "success",
            message: "Booking created Successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: error.message || "Something went wrong",
        });
    }
});
const allBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield booking_service_1.bookingServices.allBookings(); // No need to manually populate
        res.status(200).json({
            status: "success",
            message: "Bookings fetched Successfully",
            data: result, // 'tourDetails' will be populated automatically here
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: error.message || "Something went wrong",
        });
    }
});
const getSingleBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield booking_service_1.bookingServices.getSingleBooking(id);
        res.status(200).json({
            status: "success",
            message: "Single Booking fetched Successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: error.message || "Something went wrong",
        });
    }
});
const updateBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookingData = req.body;
        const id = req.params.id;
        yield booking_service_1.bookingServices.updateBooking(id, bookingData);
        res.status(200).json({
            status: "success",
            message: "Booking updated Successfully",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: error.message || "Something went wrong",
        });
    }
});
const deleteBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield booking_service_1.bookingServices.deleteBooking(id);
        res.status(200).json({
            status: "success",
            message: "Booking deleted Successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: error.message || "Something went wrong",
        });
    }
});
exports.bookingController = {
    createBooking,
    allBookings,
    getSingleBooking,
    updateBooking,
    deleteBooking,
};
