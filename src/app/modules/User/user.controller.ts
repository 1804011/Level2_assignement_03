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
const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const result = await userServices.getAllUsers()
    const response: SuccessResponse<IUser[]> = {
      success: true,
      statusCode: 200,
      message: 'users found successfully',
      data: result,
    }
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}
const getUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await userServices.getUser(id)
    const response: SuccessResponse<IUser | null> = {
      success: true,
      statusCode: 200,
      message: 'user found successfully',
      data: result,
    }
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}
const updateUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await userServices.updateUser(id, req.body)
    const response: SuccessResponse<IUser | null> = {
      success: true,
      statusCode: 200,
      message: 'users updated successfully',
      data: result,
    }
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

export const userControllers = { createUser, getAllUsers, getUser, updateUser }
