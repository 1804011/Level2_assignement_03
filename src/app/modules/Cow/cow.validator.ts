import { body } from 'express-validator'
import validationHandler from '../../../middlewares/validationErrorHandler'

const validateCow = [
  body('name')
    .isString()
    .notEmpty()
    .withMessage('Name is required and must be a string'),
  body('age')
    .isNumeric()
    .isInt({ min: 1 })
    .withMessage('Age is required and must be a positive integer'),
  body('price')
    .isNumeric()
    .isFloat({ min: 0 })
    .withMessage('Price is required and must be a non-negative number'),
  body('location')
    .isString()
    .isIn([
      'Dhaka',
      'Chattogram',
      'Barishal',
      'Rajshahi',
      'Sylhet',
      'Comilla',
      'Rangpur',
      'Mymensingh',
    ])
    .withMessage(
      'Location is required and must be one of Dhaka, Chattogram, Barishal, Rajshahi, Sylhet, Comilla, Rangpur, Mymensingh',
    ),
  body('breed')
    .isString()
    .isIn([
      'Brahman',
      'Nellore',
      'Sahiwal',
      'Gir',
      'Indigenous',
      'Tharparkar',
      'Kankrej',
    ])
    .withMessage(
      'Breed is required and must be one of Brahman, Nellore, Sahiwal, Gir, Indigenous, Tharparkar, Kankrej',
    ),
  body('weight')
    .isNumeric()
    .isFloat({ min: 1 })
    .withMessage('Weight is required and must be a positive number'),
  body('label')
    .isString()
    .isIn(['for sale', 'sold out'])
    .withMessage('Label must be one of "for sale" or "sold out"'),
  body('category')
    .isString()
    .isIn(['Dairy', 'Beef', 'Dual Purpose'])
    .withMessage('This category is not supported'),
  body('seller')
    .isMongoId()
    .withMessage('Seller is required and must be a valid ObjectId'),
  validationHandler,
]
export const cowValidator = { validateCow }
