"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cowValidator = void 0;
const express_validator_1 = require("express-validator");
const validationErrorHandler_1 = __importDefault(require("../../../middlewares/validationErrorHandler"));
const validateCow = [
    (0, express_validator_1.body)('name')
        .isString()
        .notEmpty()
        .withMessage('Name is required and must be a string'),
    (0, express_validator_1.body)('age')
        .isNumeric()
        .isInt({ min: 1 })
        .withMessage('Age is required and must be a positive integer'),
    (0, express_validator_1.body)('price')
        .isNumeric()
        .isFloat({ min: 0 })
        .withMessage('Price is required and must be a non-negative number'),
    (0, express_validator_1.body)('location')
        .isString()
        .isIn([
        'Dhaka',
        'Chattogram',
        'Barishal',
        'Rajshahi',
        'Sylhet',
        'Comilla',
        'Rangpur',
        'Mymensingh',
    ])
        .withMessage('Location is required and must be one of Dhaka, Chattogram, Barishal, Rajshahi, Sylhet, Comilla, Rangpur, Mymensingh'),
    (0, express_validator_1.body)('breed')
        .isString()
        .isIn([
        'Brahman',
        'Nellore',
        'Sahiwal',
        'Gir',
        'Indigenous',
        'Tharparkar',
        'Kankrej',
    ])
        .withMessage('Breed is required and must be one of Brahman, Nellore, Sahiwal, Gir, Indigenous, Tharparkar, Kankrej'),
    (0, express_validator_1.body)('weight')
        .isNumeric()
        .isFloat({ min: 1 })
        .withMessage('Weight is required and must be a positive number'),
    (0, express_validator_1.body)('label')
        .isString()
        .isIn(['for sale', 'sold out'])
        .withMessage('Label must be one of "for sale" or "sold out"'),
    (0, express_validator_1.body)('category')
        .isString()
        .isIn(['Dairy', 'Beef', 'Dual Purpose'])
        .withMessage('This category is not supported'),
    (0, express_validator_1.body)('seller')
        .isMongoId()
        .withMessage('Seller is required and must be a valid ObjectId'),
    validationErrorHandler_1.default,
];
exports.cowValidator = { validateCow };
