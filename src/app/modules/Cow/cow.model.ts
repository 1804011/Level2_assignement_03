import mongoose, { Schema } from 'mongoose'
import ICow from './cow.interface'

// Create a Mongoose schema based on the Cow interface
const cowSchema = new Schema<ICow>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
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
      message: '${VALUE} is not allowed',
    },
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    enum: {
      values: ['for sale', 'sold out'],
      message: '${VALUE} is not supported',
    },
    default: 'for sale',
  },
  category: {
    type: String,
    enum: {
      values: ['Dairy', 'Beef', 'Dual Purpose'],
      message: '${VALUE} is not supported',
    },
    required: true,
  },
  seller: {
    type: Schema.Types.ObjectId, // Assuming a string identifier for the seller
    required: true,
    ref: 'User',
  },
})

// Create the Mongoose model for the Cow schema
const Cow = mongoose.model<ICow>('Cow', cowSchema)

export default Cow
