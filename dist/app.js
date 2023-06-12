"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const routing_controllers_1 = require("routing-controllers");
const db_1 = __importDefault(require("./utils/db"));
const userController_1 = __importDefault(require("./controllers/userController"));
const env_1 = __importDefault(require("./config/env"));
const errorHandler_1 = require("./middleware/errorHandler");
const app = (0, express_1.default)();
(0, routing_controllers_1.useExpressServer)(app, {
    routePrefix: '/api/v1',
    defaultErrorHandler: false,
    middlewares: [
        errorHandler_1.HttpErrorHandler
    ],
    controllers: [userController_1.default],
});
const port = env_1.default.PORT || 3000;
(0, db_1.default)()
    .then(() => {
    return app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
    .catch(console.error);
exports.default = app;
