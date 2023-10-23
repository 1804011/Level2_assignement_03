import mongoose, { Model } from 'mongoose'
import IUser from './user.interface'

const UserSchema = new mongoose.Schema<IUser>({
  phoneNumber: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['seller', 'buyer'],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  address: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  income: {
    type: Number,
    required: true,
  },
})

// Create a Mongoose model for the User schema
const User: Model<IUser> = mongoose.model('User', UserSchema)

export default User
