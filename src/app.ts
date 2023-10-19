import express, { Application } from 'express'
const app: Application = express()
const h = 7
app.get('/', (req, res) => {
  res.send('Welcome to backend')
})
export default app
