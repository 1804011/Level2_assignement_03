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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllers = void 0;
const user_services_1 = require("./user.services");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_services_1.userServices.createUser(req.body);
        const response = {
            success: true,
            statusCode: 200,
            message: 'user created successfully',
            data: result,
        };
        res.status(200).send(response);
    }
    catch (error) {
        next(error);
    }
});
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_services_1.userServices.getAllUsers();
        const response = {
            success: true,
            statusCode: 200,
            message: 'users found successfully',
            data: result,
        };
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
});
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield user_services_1.userServices.getUser(id);
        const response = {
            success: true,
            statusCode: 200,
            message: 'user found successfully',
            data: result,
        };
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
});
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield user_services_1.userServices.updateUser(id, req.body);
        const response = {
            success: true,
            statusCode: 200,
            message: 'users updated successfully',
            data: result,
        };
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
});
exports.userControllers = { createUser, getAllUsers, getUser, updateUser };
