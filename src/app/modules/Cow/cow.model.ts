import mongoose, { Schema } from 'mongoose'
import ICow from './cow.interface'

// Create a Mongoose schema based on the Cow interface
const cowSchema = new Schema<ICow>(
  {
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
      type: Schema.Types.ObjectId, // Assuming a string identifier for the seller
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  },
)

// Create the Mongoose model for the Cow schema
const Cow = mongoose.model<ICow>('Cow', cowSchema)

export default Cow
