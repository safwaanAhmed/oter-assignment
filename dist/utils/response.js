"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.success = void 0;
const success = (status, message, data) => {
    if (typeof data == 'object')
        data = JSON.parse(JSON.stringify(data));
    return {
        status,
        message,
        data
    };
};
exports.success = success;
const errorResponse = (status, message, error) => {
    return {
        status,
        message,
        error
    };
};
exports.errorResponse = errorResponse;
