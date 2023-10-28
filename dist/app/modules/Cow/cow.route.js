"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cow_controller_1 = require("./cow.controller");
const cow_validator_1 = require("./cow.validator");
const cowRouter = express_1.default.Router();
cowRouter.post('/', cow_validator_1.cowValidator.validateCow, cow_controller_1.cowControllers.createCow);
cowRouter.delete('/:id', cow_controller_1.cowControllers.deleteCow);
cowRouter.get('/:id', cow_controller_1.cowControllers.getCow);
cowRouter.put('/:id', cow_controller_1.cowControllers.updateCow);
cowRouter.get('/', cow_controller_1.cowControllers.getCows);
exports.default = cowRouter;
