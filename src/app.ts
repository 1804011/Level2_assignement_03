import express, { Application } from 'express'
import globalErrorHandler from './middlewares/globalErrorHandler'
import userRouter from './app/modules/User/user.route'
import cors from 'cors'
const app: Application = express()
app.use(cors())
app.use(express.json())
app.use('/auth', userRouter)
app.get('/', (req, res) => {
  res.send('Welcome to backend')
})
app.use(globalErrorHandler)
export default app
