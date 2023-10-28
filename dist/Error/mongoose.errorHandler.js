"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseErrorHandler = void 0;
const validationErrorHandler = (error) => {
    const errorMessages = [];
    for (const key in error.errors) {
        if (error.errors.hasOwnProperty(key)) {
            errorMessages.push({
                path: error.errors[key].path,
                message: error.errors[key].message,
            });
        }
    }
    return errorMessages;
};
const castErrorHandler = (error) => {
    return {
        path: error.path,
        message: `Cast error on path "${error.path}": ${error.reason}`,
    };
};
exports.mongooseErrorHandler = { validationErrorHandler, castErrorHandler };
