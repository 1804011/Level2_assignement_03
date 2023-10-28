import { RequestHandler } from 'express'
import { cowServices } from './cow.service'
import SuccessResponse from '../../../Shared/successResponse.interface'
import ICow from './cow.interface'
import ApiError from '../../../Error/ApiError'

const createCow: RequestHandler = async (req, res, next) => {
  try {
    const result = await cowServices.createCow(req.body)
    const response: SuccessResponse<ICow> = {
      success: true,
      statusCode: 200,
      data: result,
      message: 'Cow created successfully',
    }
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}
const updateCow: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params

    const result = await cowServices.updateCow(id, req.body)
    if (!result) {
      throw new ApiError(400, 'cow with this id does not exist')
    }
    const response: SuccessResponse<ICow | null> = {
      success: true,
      statusCode: 200,
      data: result,
      message: 'Cow updated successfully',
    }
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}
const deleteCow: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params

    const result = await cowServices.deleteCow(id)
    if (!result) {
      throw new ApiError(400, 'cow with this id does not exist')
    }
    const response: SuccessResponse<ICow | null> = {
      success: true,
      statusCode: 200,
      data: result,
      message: 'Cow deleted successfully',
    }
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}
const getCow: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params

    const result = await cowServices.getCow(id)
    if (!result) {
      throw new ApiError(400, 'cow with this id does not exist')
    }
    const response: SuccessResponse<ICow | null> = {
      success: true,
      statusCode: 200,
      data: result,
      message: 'Cow found successfully',
    }
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}
const getCows: RequestHandler = async (req, res, next) => {
  try {
    const result = await cowServices.getCows()
    const response: SuccessResponse<ICow[]> = {
      success: true,
      statusCode: 200,
      data: result,
      message: 'cows retreived successfully',
    }
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}
export const cowControllers = {
  createCow,
  updateCow,
  deleteCow,
  getCow,
  getCows,
}
