import mongoose, { Model } from 'mongoose'
import IUser from './user.interface'
import { authUtilities } from '../Auth/auth.utils'

const userSchema = new mongoose.Schema<IUser>(
  {
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: {
        values: ['seller', 'buyer'],
        message: '{VALUE} is not supported',
      },
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
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    validateBeforeSave: true,
  },
)
userSchema.pre('save', async function (next) {
  this.password = await authUtilities.hashPassword(this.password)
  next()
})
// Create a Mongoose model for the User schema
const User: Model<IUser> = mongoose.model('User', userSchema)

export default User
