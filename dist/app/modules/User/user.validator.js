"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidators = void 0;
const validationErrorHandler_1 = __importDefault(require("../../../middlewares/validationErrorHandler"));
const express_validator_1 = require("express-validator");
const bangladeshiPhoneNumberPattern = /^(?:\+880|0)(1[3-9]\d{8})$/;
const validateUser = [
    (0, express_validator_1.body)('phoneNumber')
        .isString()
        .custom((value) => {
        if (!value.match(bangladeshiPhoneNumberPattern)) {
            throw new Error('Invalid Bangladeshi phone number format');
        }
        return true;
    }),
    (0, express_validator_1.body)('role').isString().isIn(['seller', 'buyer']),
    (0, express_validator_1.body)('name.firstName').isString().notEmpty(),
    (0, express_validator_1.body)('name.lastName').isString().notEmpty(),
    (0, express_validator_1.body)('address').isString().notEmpty(),
    (0, express_validator_1.body)('budget').isNumeric(),
    (0, express_validator_1.body)('income').isNumeric(),
    (0, express_validator_1.body)('password')
        .isString()
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    validationErrorHandler_1.default,
];
exports.userValidators = { validateUser };
