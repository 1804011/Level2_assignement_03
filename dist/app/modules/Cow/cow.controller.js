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
exports.cowControllers = void 0;
const cow_service_1 = require("./cow.service");
const ApiError_1 = __importDefault(require("../../../Error/ApiError"));
const createCow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cow_service_1.cowServices.createCow(req.body);
        const response = {
            success: true,
            statusCode: 200,
            data: result,
            message: 'Cow created successfully',
        };
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
});
const updateCow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield cow_service_1.cowServices.updateCow(id, req.body);
        if (!result) {
            throw new ApiError_1.default(400, 'cow with this id does not exist');
        }
        const response = {
            success: true,
            statusCode: 200,
            data: result,
            message: 'Cow updated successfully',
        };
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
});
const deleteCow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield cow_service_1.cowServices.deleteCow(id);
        if (!result) {
            throw new ApiError_1.default(400, 'cow with this id does not exist');
        }
        const response = {
            success: true,
            statusCode: 200,
            data: result,
            message: 'Cow deleted successfully',
        };
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
});
const getCow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield cow_service_1.cowServices.getCow(id);
        if (!result) {
            throw new ApiError_1.default(400, 'cow with this id does not exist');
        }
        const response = {
            success: true,
            statusCode: 200,
            data: result,
            message: 'Cow found successfully',
        };
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
});
const getCows = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cow_service_1.cowServices.getCows(req.query);
        const { page = 1, limit = 10 } = req.query;
        const metaInfo = {
            page: Number(page),
            limit: Number(limit),
        };
        console.log(metaInfo);
        const response = {
            success: true,
            statusCode: 200,
            data: result,
            meta: metaInfo,
            message: 'cows retreived successfully',
        };
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
});
exports.cowControllers = {
    createCow,
    updateCow,
    deleteCow,
    getCow,
    getCows,
};
