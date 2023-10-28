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
exports.cowServices = void 0;
const cow_model_1 = __importDefault(require("./cow.model"));
const createCow = (cow) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cow_model_1.default.create(cow);
    return result;
});
const getCow = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cow_model_1.default.findById(id);
    return result;
});
const updateCow = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cow_model_1.default.findOneAndUpdate({ _id: id }, {
        $set: updateData,
    }, { new: true });
    return result;
});
const deleteCow = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cow_model_1.default.findOneAndDelete({ _id: id });
    return result;
});
const getCows = (queryOption) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit = 10, searchTerm, location, sortBy, sortOrder = 'asc', page = 1, minPrice, maxPrice, } = queryOption;
    const filterOption = JSON.parse(JSON.stringify({
        location: location,
        price: (minPrice || maxPrice) && {
            $gte: minPrice,
            $lte: maxPrice,
        },
        $or: searchTerm
            ? [
                { location: { $regex: searchTerm, $options: 'i' } },
                { breed: { $regex: searchTerm, $options: 'i' } },
                { category: { $regex: searchTerm, $options: 'i' } },
            ]
            : undefined,
    }));
    const sortString = sortBy
        ? `${sortOrder === 'desc' ? '-' : ''}${sortBy}`
        : `${sortOrder === 'desc' ? 'createdAt' : '-createdAt'}`;
    // console.log({ sortBy, filterOption, sortString })
    const result = yield cow_model_1.default.find(filterOption)
        .sort(sortString)
        .limit(page * limit)
        .skip((page - 1) * limit);
    return result;
});
exports.cowServices = { createCow, getCow, updateCow, deleteCow, getCows };
