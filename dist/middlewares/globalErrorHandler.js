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
const mongoose_1 = require("mongoose");
const mongoose_errorHandler_1 = require("../Error/mongoose.errorHandler");
const ApiError_1 = __importDefault(require("../Error/ApiError"));
const globalErrorHandler = (error, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) => __awaiter(void 0, void 0, void 0, function* () {
    if (error instanceof mongoose_1.Error.ValidationError) {
        const response = {
            status: false,
            message: 'Validation failed',
            errorMessages: mongoose_errorHandler_1.mongooseErrorHandler.validationErrorHandler(error),
        };
        res.status(400).json(response);
    }
    else if (error instanceof mongoose_1.Error.CastError) {
        const response = {
            status: false,
            message: 'Mongoose Cast Error',
            errorMessages: mongoose_errorHandler_1.mongooseErrorHandler.castErrorHandler(error),
        };
        res.status(400).json(response);
    }
    else if (error instanceof ApiError_1.default) {
        const response = {
            status: false,
            message: error.message,
            errorMessages: [
                {
                    path: '',
                    message: error.message,
                },
            ],
            stack: error.stack,
        };
        res.status(400).json(response);
    }
    else {
        const response = {
            status: false,
            message: 'Something went wrong',
            errorMessages: [
                {
                    path: '',
                    message: error.message,
                },
            ],
        };
        res.status(500).json(response);
    }
});
exports.default = globalErrorHandler;
