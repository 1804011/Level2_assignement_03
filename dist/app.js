"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const user_route_1 = __importDefault(require("./app/modules/User/user.route"));
const cors_1 = __importDefault(require("cors"));
const cow_route_1 = __importDefault(require("./app/modules/Cow/cow.route"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/v1/auth', user_route_1.default);
app.use('/api/v1/users', user_route_1.default);
app.use('/api/v1/cows', cow_route_1.default);
app.get('/', (req, res) => {
    res.send('Welcome to backend');
});
app.use(globalErrorHandler_1.default);
exports.default = app;
