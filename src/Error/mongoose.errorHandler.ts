/* eslint-disable no-prototype-builtins */
import { CastError, Error } from 'mongoose'
import { ErrorMessage } from './errorResponse.interface'

const validationErrorHandler = (
  error: Error.ValidationError,
): ErrorMessage[] => {
  const errorMessages: ErrorMessage[] = []

  for (const key in error.errors) {
    if (error.errors.hasOwnProperty(key)) {
      errorMessages.push({
        path: error.errors[key].path,
        message: error.errors[key].message,
      })
    }
  }

  return errorMessages
}
const castErrorHandler = (error: CastError): ErrorMessage => {
  return {
    path: error.path,
    message: `Cast error on path "${error.path}": ${error.reason}`,
  }
}
export const mongooseErrorHandler = { validationErrorHandler, castErrorHandler }
