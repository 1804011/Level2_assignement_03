import { ErrorRequestHandler } from 'express'
import { Error } from 'mongoose'
import { mongooseErrorHandler } from '../Error/mongoose.errorHandler'
import ApiError from '../Error/ApiError'
import ErrorResponse from '../Error/errorResponse.interface'

const globalErrorHandler: ErrorRequestHandler = async (
  error,
  req,
  res,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next,
) => {
  if (error instanceof Error.ValidationError) {
    const response: ErrorResponse = {
      status: false,
      message: 'Validation failed',
      errorMessages: mongooseErrorHandler.validationErrorHandler(error),
    }
    res.status(400).json(response)
  } else if (error instanceof Error.CastError) {
    const response = {
      status: false,
      message: 'Mongoose Cast Error',
      errorMessages: mongooseErrorHandler.castErrorHandler(error),
    }
    res.status(400).json(response)
  } else if (error instanceof ApiError) {
    const response: ErrorResponse = {
      status: false,
      message: error.message,
      errorMessages: [
        {
          path: '',
          message: error.message,
        },
      ],
      stack: error.stack,
    }
    res.status(400).json(response)
  } else {
    const response: ErrorResponse = {
      status: false,
      message: 'Something went wrong',
      errorMessages: [
        {
          path: '',
          message: error.message,
        },
      ],
    }
    res.status(500).json(response)
  }
}
export default globalErrorHandler
