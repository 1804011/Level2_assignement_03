import express, { Application } from 'express'
import globalErrorHandler from './middlewares/globalErrorHandler'
const app: Application = express()
app.get('/', (req, res) => {
  res.send('Welcome to backend')
})
app.use(globalErrorHandler)
export default app
