"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    fullName: String
});
exports.userSchema = userSchema;
const UserModel = (0, mongoose_1.model)('User', userSchema);
exports.UserModel = UserModel;
