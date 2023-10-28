import express from 'express'
import { cowControllers } from './cow.controller'
import { cowValidator } from './cow.validator'
const cowRouter = express.Router()
cowRouter.post('/', cowValidator.validateCow, cowControllers.createCow)
cowRouter.delete('/:id', cowControllers.deleteCow)
cowRouter.get('/:id', cowControllers.getCow)
cowRouter.put('/:id', cowControllers.updateCow)
cowRouter.get('/', cowControllers.getCows)
export default cowRouter
