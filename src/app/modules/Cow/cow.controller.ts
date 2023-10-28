import { RequestHandler } from 'express'
import { cowServices } from './cow.service'
import SuccessResponse from '../../../Shared/successResponse.interface'
import ICow from './cow.interface'

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
export const cowControllers = { createCow, updateCow, deleteCow, getCow }
