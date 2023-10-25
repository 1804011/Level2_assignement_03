import { Request, Response, NextFunction } from 'express'
import { RequestHandler } from 'express-serve-static-core'

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}
export default catchAsync
