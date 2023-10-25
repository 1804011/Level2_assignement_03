import validationHandler from '../../../middlewares/validationErrorHandler'

import { body } from 'express-validator'

const bangladeshiPhoneNumberPattern = /^(?:\+880|0)(1[3-9]\d{8})$/

const validateUser = [
  body('phoneNumber')
    .isString()
    .custom((value: string) => {
      if (!value.match(bangladeshiPhoneNumberPattern)) {
        throw new Error('Invalid Bangladeshi phone number format')
      }
      return true
    }),
  body('role').isString().isIn(['seller', 'buyer']),
  body('name.firstName').isString().notEmpty(),
  body('name.lastName').isString().notEmpty(),
  body('address').isString().notEmpty(),
  body('budget').isNumeric(),
  body('income').isNumeric(),

  body('password')
    .isString()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  validationHandler,
]

export const userValidators = { validateUser }
