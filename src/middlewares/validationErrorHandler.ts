import { RequestHandler } from 'express'
import { validationResult } from 'express-validator'
import ErrorResponse, { ErrorMessage } from '../Error/errorResponse.interface'

const validationHandler: RequestHandler = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const errorMessages: ErrorMessage[] = errors.array().map(error => {
      return {
        path: '',
        message: error.msg,
      }
    })

    const response: ErrorResponse = {
      status: false,
      message: 'invalid input',
      errorMessages,
    }

    return res.status(400).json(response)
  }

  next()
}

export default validationHandler
