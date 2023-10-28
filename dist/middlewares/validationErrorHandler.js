"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validationHandler = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => {
            return {
                path: '',
                message: error.msg,
            };
        });
        const response = {
            status: false,
            message: 'invalid input',
            errorMessages,
        };
        return res.status(400).json(response);
    }
    next();
};
exports.default = validationHandler;
