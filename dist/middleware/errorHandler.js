"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpErrorHandler = void 0;
const routing_controllers_1 = require("routing-controllers");
const http_status_codes_1 = require("http-status-codes");
const messages_1 = require("../config/messages");
const response_1 = require("./../utils/response");
let HttpErrorHandler = exports.HttpErrorHandler = class HttpErrorHandler {
    error(error, request, response, next) {
        console.log("In here =======>", error);
        const status = (error === null || error === void 0 ? void 0 : error.httpCode) || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
        return response.status(status).json((0, response_1.errorResponse)(status, (error === null || error === void 0 ? void 0 : error.message) || messages_1.commonMessages.somethingWrong, error));
    }
};
exports.HttpErrorHandler = HttpErrorHandler = __decorate([
    (0, routing_controllers_1.Middleware)({ type: 'after' })
], HttpErrorHandler);
