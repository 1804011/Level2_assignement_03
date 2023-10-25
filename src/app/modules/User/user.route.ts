import express from 'express'
import { userControllers } from './user.controller'
import { userValidators } from './user.validator'
const userRouter = express.Router()
userRouter.post(
  '/user',
  userValidators.validateUser,
  userControllers.createUser,
)
export default userRouter
