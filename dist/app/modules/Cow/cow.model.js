"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// Create a Mongoose schema based on the Cow interface
const cowSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
        min: 1,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    location: {
        type: String,
        enum: {
            values: [
                'Dhaka',
                'Chattogram',
                'Barishal',
                'Rajshahi',
                'Sylhet',
                'Comilla',
                'Rangpur',
                'Mymensingh',
            ],
            message: '{VALUE} is not allowed',
        },
        required: true,
    },
    breed: {
        type: String,
        enum: {
            values: [
                'Brahman',
                'Nellore',
                'Sahiwal',
                'Gir',
                'Indigenous',
                'Tharparkar',
                'Kankrej',
            ],
            message: '{VALUE} is not allowed',
        },
        required: true,
    },
    weight: {
        type: Number,
        required: true,
        min: 1,
    },
    label: {
        type: String,
        enum: {
            values: ['for sale', 'sold out'],
            message: '{VALUE} is not supported',
        },
        default: 'for sale',
    },
    category: {
        type: String,
        enum: {
            values: ['Dairy', 'Beef', 'Dual Purpose'],
            message: '{VALUE} is not supported',
        },
        required: true,
    },
    seller: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
});
// Create the Mongoose model for the Cow schema
const Cow = mongoose_1.default.model('Cow', cowSchema);
exports.default = Cow;
