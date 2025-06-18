"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const booking_route_1 = require("./routes/booking.route");
const user_route_1 = require("./routes/user.route");
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/v1/users", user_route_1.userRoutes);
app.use("/api/v2/bookings", booking_route_1.bookingRoutes);
app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Welcome to Murir Tin Tour and Travels!",
    });
});
exports.default = app;
