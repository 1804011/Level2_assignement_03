import express, { Application } from 'express'
import globalErrorHandler from './middlewares/globalErrorHandler'
import userRouter from './app/modules/User/user.route'
import cors from 'cors'
import cowRouter from './app/modules/Cow/cow.route'
const app: Application = express()
app.use(cors())
app.use(express.json())
app.use('/api/v1/auth', userRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/cows', cowRouter)
app.get('/', (req, res) => {
  res.send('Welcome to backend')
})
app.use(globalErrorHandler)
export default app
