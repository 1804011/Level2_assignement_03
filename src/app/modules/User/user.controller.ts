import { userServices } from './user.services'
import SuccessResponse from '../../../Shared/successResponse.interface'
import IUser from './user.interface'
import { RequestHandler } from 'express'

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const result = await userServices.createUser(req.body)
    const response: SuccessResponse<IUser> = {
      success: true,
      statusCode: 200,
      message: 'user created successfully',
      data: result,
    }
    res.status(200).send(response)
  } catch (error) {
    next(error)
  }
}

export const userControllers = { createUser }
