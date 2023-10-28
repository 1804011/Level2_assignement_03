"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const user_validator_1 = require("./user.validator");
const userRouter = express_1.default.Router();
userRouter.post('/user', user_validator_1.userValidators.validateUser, user_controller_1.userControllers.createUser);
userRouter.get('/', user_controller_1.userControllers.getAllUsers);
userRouter.get('/:id', user_controller_1.userControllers.getUser);
userRouter.put('/:id', user_controller_1.userControllers.updateUser);
exports.default = userRouter;
