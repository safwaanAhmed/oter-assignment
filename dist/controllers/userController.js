"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
const routing_controllers_1 = require("routing-controllers");
const userService_1 = __importDefault(require("../services/userService"));
const response_1 = require("./../utils/response");
const http_status_codes_1 = require("http-status-codes");
const messages_1 = require("../config/messages");
const common_1 = require("./../utils/common");
let UserController = class UserController {
    constructor() {
        this.userService = new userService_1.default();
    }
    createUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            body.fullName = (0, common_1.getFullName)(body === null || body === void 0 ? void 0 : body.firstName, body === null || body === void 0 ? void 0 : body.lastName);
            const data = yield this.userService.createUser(body);
            return (0, response_1.success)(http_status_codes_1.StatusCodes.OK, messages_1.userMessages.created, data);
        });
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.userService.getUser(id);
            const message = data ? messages_1.userMessages.retrieved : messages_1.userMessages.notFound;
            return (0, response_1.success)(http_status_codes_1.StatusCodes.OK, message, data);
        });
    }
    updateUser(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            body.fullName = (0, common_1.getFullName)(body === null || body === void 0 ? void 0 : body.firstName, body === null || body === void 0 ? void 0 : body.lastName);
            const data = yield this.userService.updateUser(id, body);
            const message = data ? messages_1.userMessages.updated : messages_1.userMessages.notFound;
            return (0, response_1.success)(http_status_codes_1.StatusCodes.OK, message, data);
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userService.deleteUser(id);
            return (0, response_1.success)(http_status_codes_1.StatusCodes.OK, messages_1.userMessages.deleted);
        });
    }
};
__decorate([
    (0, routing_controllers_1.Post)(),
    __param(0, (0, routing_controllers_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, routing_controllers_1.Get)('/:id'),
    __param(0, (0, routing_controllers_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, routing_controllers_1.Put)('/:id'),
    __param(0, (0, routing_controllers_1.Param)('id')),
    __param(1, (0, routing_controllers_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, routing_controllers_1.Delete)('/:id'),
    __param(0, (0, routing_controllers_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
UserController = __decorate([
    (0, routing_controllers_1.JsonController)('/users'),
    __metadata("design:paramtypes", [])
], UserController);
exports.default = UserController;
